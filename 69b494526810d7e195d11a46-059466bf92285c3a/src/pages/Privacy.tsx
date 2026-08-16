import { Phone, ShieldCheck } from 'lucide-react';

interface PrivacyProps {
  onNavigate: (page: string) => void;
}

const LAST_UPDATED = 'August 16, 2026';
const SHOP_EMAIL = 'tobonsautoshop@yahoo.com';

export default function Privacy({ onNavigate }: PrivacyProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <section
        className="relative bg-cover bg-center text-white py-16 lg:py-20"
        style={{ backgroundColor: '#0f0f0f', backgroundImage: 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(/car3.jpg)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
              <ShieldCheck size={16} />
              Your Privacy
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Privacy <span className="text-red-600">Policy</span>
            </h1>
            <p className="text-lg text-gray-300">Last updated: {LAST_UPDATED}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border-t-4 border-red-600">
            <div className="policy space-y-8 text-gray-700">
              <p className="text-lg">
                <span className="tobons-brand font-bold text-gray-900">Tobon's Paint &amp; Body Shop</span> ("Tobon's,"
                "we," "us," "our") operates tobonsautopaintandbody.com. We're a family owned auto body shop in Corpus
                Christi, Texas, and we keep this simple: we only collect what we need to give you an estimate and repair
                your vehicle, and we don't sell it to anyone. This policy explains what we collect, how we use it, and
                the choices you have.
              </p>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <ul className="space-y-3 list-disc pl-5">
                  <li>
                    <strong className="text-gray-900">Information you give us.</strong> When you fill out our estimate
                    form, call, or text us, we collect what you provide — typically your name, phone number, email
                    address (optional), a description of the damage or service you need, and any photos of your vehicle
                    you choose to upload.
                  </li>
                  <li>
                    <strong className="text-gray-900">Information collected automatically.</strong> Our website does not
                    use advertising trackers, marketing pixels, or third-party analytics cookies. Our hosting provider
                    keeps standard technical logs (such as IP address, browser type, and pages requested) to serve and
                    secure the site.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <ul className="space-y-2 list-disc pl-5">
                  <li>To prepare and send you a free estimate</li>
                  <li>To respond to your questions by phone, text, or email</li>
                  <li>To schedule your repair and keep you updated on its progress</li>
                  <li>To assist with an insurance claim when you ask us to</li>
                  <li>To follow up after your service is complete</li>
                  <li>To keep normal business and repair records</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Photos You Upload</h2>
                <p>
                  Photos submitted through our estimate form are used to assess damage and quote your repair. We will
                  not publish a photo of your vehicle on our website, social media, or in any advertising without your
                  permission. Please avoid including your license plate or any personal documents in the frame.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Text Messaging (SMS)</h2>
                <p>
                  By giving us your phone number on our estimate form, or by texting us directly, you agree to receive
                  text messages from <span className="tobons-brand">Tobon's Paint &amp; Body Shop</span> about your
                  request or repair — estimates, scheduling, status updates, and follow-ups. Message frequency varies.
                  Message and data rates may apply. Reply <strong className="text-gray-900">STOP</strong> at any time to
                  opt out, or <strong className="text-gray-900">HELP</strong> for help. Consenting to texts is not a
                  condition of any purchase or service. We never sell or share phone numbers or opt-in data with third
                  parties for their own marketing.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Insurance Claims</h2>
                <p>
                  If you ask us to help with an insurance claim, we will share the repair details and estimate with your
                  insurance company, adjuster, or parts suppliers as needed to get your vehicle fixed and your claim
                  paid. We only do this at your direction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharing of Information</h2>
                <p>
                  <strong className="text-gray-900">We do not sell your personal information.</strong> We share it only
                  with the service providers that help us run the shop and this website — our website host and form
                  processor, our email delivery provider, and parts suppliers or insurers as described above — and only
                  as needed to serve you. We may also disclose information when required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention &amp; Security</h2>
                <p>
                  We keep estimate requests and repair records only as long as we need them for business, warranty, and
                  legal purposes, and we take reasonable measures to protect them. No method of transmission over the
                  internet is completely secure, so please don't send sensitive information such as Social Security
                  numbers or full financial account numbers through the website form.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Choices</h2>
                <p>
                  You can ask us to correct or delete your contact information at any time, or ask us to stop contacting
                  you. Just call{' '}
                  <a href="tel:361-887-6606" className="text-red-600 font-semibold hover:text-red-700">
                    361-887-6606
                  </a>{' '}
                  or email{' '}
                  <a href={`mailto:${SHOP_EMAIL}`} className="text-red-600 font-semibold hover:text-red-700">
                    {SHOP_EMAIL}
                  </a>
                  . We may need to keep certain repair and transaction records where the law requires it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <p>
                  Our website and services are not directed to children under 13, and we do not knowingly collect their
                  personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p>
                  We may update this policy from time to time. The current version will always be posted on this page
                  with the date it took effect.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <div className="bg-gray-50 border-l-4 border-red-600 rounded-lg p-6">
                  <p className="font-bold text-gray-900 tobons-brand text-lg mb-2">Tobon's Paint &amp; Body Shop</p>
                  <p className="mb-1">
                    1104 S Port Ave
                    <br />
                    Corpus Christi, TX 78405
                  </p>
                  <p className="mb-1">
                    Phone:{' '}
                    <a href="tel:361-887-6606" className="text-red-600 font-semibold hover:text-red-700">
                      361-887-6606
                    </a>
                  </p>
                  <p>
                    Email:{' '}
                    <a href={`mailto:${SHOP_EMAIL}`} className="text-red-600 font-semibold hover:text-red-700">
                      {SHOP_EMAIL}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:361-887-6606"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold inline-flex items-center justify-center gap-2 transition-colors"
              >
                <Phone size={20} />
                Call 361-887-6606
              </a>
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo(0, 0);
                }}
                className="border-2 border-gray-300 hover:border-red-600 hover:text-red-600 text-gray-700 px-8 py-3 rounded-lg font-bold transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
