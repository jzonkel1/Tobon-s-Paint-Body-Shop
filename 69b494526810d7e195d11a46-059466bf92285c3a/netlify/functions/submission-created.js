/**
 * Netlify event-triggered function.
 * Named "submission-created" so Netlify runs it automatically on every
 * verified (non-spam) form submission.
 * https://docs.netlify.com/forms/notifications/#trigger-functions
 *
 * Sends mail via the Resend HTTP API (plain fetch — no SDK, no SMTP), so it
 * works regardless of Google Workspace app-password restrictions.
 * https://resend.com/docs/api-reference/emails/send-email
 *
 * It does two things per lead:
 *   1. Auto-reply to the customer (only if they left an email — optional field).
 *   2. Optional lead alert to the shop (if OWNER_EMAIL is set).
 *
 * Env vars (Netlify → Project configuration → Environment variables):
 *   RESEND_API_KEY     required — from resend.com/api-keys (starts with "re_")
 *   MAIL_FROM_ADDRESS  required — an address on a Resend-VERIFIED domain,
 *                      e.g. tobons@send.zonkelmedia.com
 *   MAIL_FROM_NAME     display name customers see (default: Tobon's Paint & Body Shop)
 *   MAIL_REPLY_TO      where customer replies go  (default: MAIL_FROM_ADDRESS)
 *   OWNER_EMAIL        shop inbox for lead alerts (default: off)
 */

const SHOP_NAME = "Tobon's Paint & Body Shop";
const SHOP_PHONE = '361-887-6606';
const SHOP_PHONE_TEL = '3618876606';
const BRAND_RED = '#dc2626';
const RESEND_ENDPOINT = 'https://api.resend.com/emails';
// Email clients can't read relative paths, so the logo is served from the live site.
const SITE_URL = 'https://tobonsautopaintandbody.com';
const LOGO_URL = `${SITE_URL}/email-logo.png`;

export const handler = async (event) => {
  let payload;
  try {
    payload = JSON.parse(event.body || '{}').payload || {};
  } catch {
    return { statusCode: 200, body: 'Unparseable body; ignored.' };
  }

  // Only act on our estimate form (in case other forms get added later).
  const formName = payload.form_name || payload.formName;
  if (formName && formName !== 'estimate-request') {
    return { statusCode: 200, body: `Ignored form: ${formName}` };
  }

  const data = payload.data || {};
  const customerEmail = String(data.email || '').trim();
  const customerName = String(data.name || '').trim();
  const customerPhone = String(data.phone || '').trim();
  const message = String(data.message || '').trim();
  const firstName = customerName.split(/\s+/)[0] || 'there';
  const photoLinks = collectPhotoLinks(data);

  const { RESEND_API_KEY, MAIL_FROM_ADDRESS, MAIL_FROM_NAME, MAIL_REPLY_TO, OWNER_EMAIL } = process.env;

  if (!RESEND_API_KEY || !MAIL_FROM_ADDRESS) {
    console.error('[submission-created] Missing RESEND_API_KEY / MAIL_FROM_ADDRESS — cannot send mail.');
    return { statusCode: 200, body: 'Mail not configured; skipped.' };
  }

  const from = `"${MAIL_FROM_NAME || SHOP_NAME}" <${MAIL_FROM_ADDRESS}>`;
  const results = [];

  // 1) Auto-reply to the customer (only if they left an email).
  if (isEmail(customerEmail)) {
    results.push(await send(RESEND_API_KEY, {
      from,
      to: [customerEmail],
      reply_to: MAIL_REPLY_TO || MAIL_FROM_ADDRESS,
      subject: `We got your estimate request — ${SHOP_NAME}`,
      text: customerText(firstName, message, photoLinks.length),
      html: customerHtml(firstName, message, photoLinks.length),
    }, 'customer-reply'));
  } else {
    results.push('customer-reply:skipped(no-email)');
  }

  // 2) Optional lead alert to the shop. Reply-To is the customer so the shop
  // can respond to them directly from its inbox.
  if (OWNER_EMAIL) {
    results.push(await send(RESEND_API_KEY, {
      from,
      to: [OWNER_EMAIL],
      reply_to: isEmail(customerEmail) ? customerEmail : MAIL_FROM_ADDRESS,
      subject: `New estimate request: ${customerName || 'Unknown'} (${customerPhone || 'no phone'})`,
      text: ownerText({ customerName, customerPhone, customerEmail, message, photoLinks }),
      html: ownerHtml({ customerName, customerPhone, customerEmail, message, photoLinks }),
    }, 'owner-alert'));
  }

  console.log('[submission-created]', results.join(', '));
  return { statusCode: 200, body: results.join(', ') };
};

/* ------------------------------- sender ------------------------------- */

async function send(apiKey, body, label) {
  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const detail = await res.text();
      console.error(`[submission-created] ${label} failed (${res.status}): ${detail}`);
      return `${label}:failed(${res.status})`;
    }
    return `${label}:sent`;
  } catch (err) {
    console.error(`[submission-created] ${label} error:`, err);
    return `${label}:error`;
  }
}

/* ------------------------------- helpers ------------------------------- */

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

// File uploads arrive as URLs in the submission data. A "photos" field may be
// a single URL string or an array; be liberal about what we accept.
function collectPhotoLinks(data) {
  const raw = data.photos ?? data.photo ?? [];
  const arr = Array.isArray(raw) ? raw : [raw];
  return arr
    .map((v) => (typeof v === 'string' ? v : v && v.url))
    .filter((v) => typeof v === 'string' && v.startsWith('http'));
}

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

/* --------------------------- customer email --------------------------- */

function customerText(firstName, message, photoCount) {
  const lines = [
    `Hi ${firstName},`,
    '',
    `Thanks for reaching out to ${SHOP_NAME}. We've received your request for a free estimate, and someone from our team will get back to you shortly — usually within one business day.`,
  ];
  if (message) lines.push('', "Here's what you told us:", `"${message}"`);
  if (photoCount) lines.push('', `We also received your ${photoCount} photo${photoCount > 1 ? 's' : ''} — thank you, that helps us give you a more accurate estimate.`);
  lines.push(
    '',
    `Need us sooner? Call or text ${SHOP_PHONE}.`,
    '',
    `— The team at ${SHOP_NAME}`,
    `Corpus Christi, TX • Serving the Coastal Bend since 1989`,
  );
  return lines.join('\n');
}

function customerHtml(firstName, message, photoCount) {
  const messageBlock = message
    ? `<tr><td style="padding:0 32px 8px;">
         <p style="margin:0 0 6px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:.05em;">Here's what you told us</p>
         <div style="background:#f9fafb;border-left:3px solid ${BRAND_RED};border-radius:6px;padding:12px 16px;font-size:15px;color:#374151;">${esc(message)}</div>
       </td></tr>`
    : '';
  const photoBlock = photoCount
    ? `<tr><td style="padding:8px 32px 0;font-size:14px;color:#6b7280;">We also received your ${photoCount} photo${photoCount > 1 ? 's' : ''} — thank you, that helps us give a more accurate estimate.</td></tr>`
    : '';

  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.08);">
        <tr><td align="center" style="background:#0d0d0d;border-bottom:4px solid ${BRAND_RED};padding:26px 32px 20px;">
          <img src="${LOGO_URL}" width="150" alt="${SHOP_NAME}"
               style="display:block;margin:0 auto 10px;width:150px;max-width:60%;height:auto;border:0;outline:none;text-decoration:none;" />
          <span style="display:block;color:#9ca3af;font-size:12px;letter-spacing:.06em;text-transform:uppercase;">Auto Body Repair &bull; Corpus Christi, TX &bull; Since 1989</span>
        </td></tr>
        <tr><td style="padding:28px 32px 4px;">
          <h1 style="margin:0 0 10px;font-size:22px;color:#111827;">Thanks, ${esc(firstName)} — we got your request!</h1>
          <p style="margin:0 0 8px;font-size:15px;line-height:1.6;color:#374151;">
            We've received your request for a <strong>free estimate</strong>, and a member of our team will get back to you shortly — usually within one business day.
          </p>
        </td></tr>
        ${messageBlock}
        ${photoBlock}
        <tr><td style="padding:20px 32px 4px;">
          <a href="tel:${SHOP_PHONE_TEL}" style="display:inline-block;background:${BRAND_RED};color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;padding:12px 22px;border-radius:8px;">📞 Need us sooner? Call or text ${SHOP_PHONE}</a>
        </td></tr>
        <tr><td style="padding:22px 32px 28px;border-top:1px solid #f3f4f6;">
          <p style="margin:16px 0 0;font-size:13px;color:#9ca3af;line-height:1.5;">
            ${SHOP_NAME} • Corpus Christi, TX<br>
            You're receiving this because you requested an estimate on our website. If this wasn't you, you can safely ignore it.
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

/* ----------------------------- owner email ----------------------------- */

function ownerText({ customerName, customerPhone, customerEmail, message, photoLinks }) {
  return [
    'New estimate request from the website:',
    '',
    `Name:    ${customerName || '—'}`,
    `Phone:   ${customerPhone || '—'}`,
    `Email:   ${customerEmail || '—'}`,
    `Message: ${message || '—'}`,
    photoLinks.length ? `Photos:\n${photoLinks.join('\n')}` : 'Photos:  none',
    '',
    'Reply to this email to respond directly to the customer.',
  ].join('\n');
}

function ownerHtml({ customerName, customerPhone, customerEmail, message, photoLinks }) {
  const row = (label, value) =>
    `<tr>
       <td style="padding:6px 0;font-size:13px;color:#6b7280;width:80px;vertical-align:top;">${label}</td>
       <td style="padding:6px 0;font-size:15px;color:#111827;">${value}</td>
     </tr>`;
  const phoneCell = customerPhone
    ? `<a href="tel:${esc(customerPhone.replace(/[^0-9]/g, ''))}" style="color:${BRAND_RED};font-weight:600;">${esc(customerPhone)}</a>`
    : '—';
  const emailCell = customerEmail
    ? `<a href="mailto:${esc(customerEmail)}" style="color:${BRAND_RED};">${esc(customerEmail)}</a>`
    : '—';
  const photosCell = photoLinks.length
    ? photoLinks.map((u, i) => `<a href="${esc(u)}" style="color:${BRAND_RED};">Photo ${i + 1}</a>`).join(' &nbsp;•&nbsp; ')
    : 'none';

  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.08);">
        <tr><td style="background:#0d0d0d;border-bottom:4px solid ${BRAND_RED};padding:16px 28px;">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td style="padding-right:14px;">
              <img src="${LOGO_URL}" width="52" alt="${SHOP_NAME}"
                   style="display:block;width:52px;height:auto;border:0;outline:none;" />
            </td>
            <td style="vertical-align:middle;">
              <span style="color:#ffffff;font-size:17px;font-weight:800;">New Estimate Request</span>
              <span style="display:block;color:#9ca3af;font-size:12px;margin-top:2px;">From the website form</span>
            </td>
          </tr></table>
        </td></tr>
        <tr><td style="padding:20px 28px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${row('Name', esc(customerName || '—'))}
            ${row('Phone', phoneCell)}
            ${row('Email', emailCell)}
            ${row('Message', esc(message || '—'))}
            ${row('Photos', photosCell)}
          </table>
          <p style="margin:18px 0 0;font-size:13px;color:#9ca3af;">Reply to this email to respond directly to the customer.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}
