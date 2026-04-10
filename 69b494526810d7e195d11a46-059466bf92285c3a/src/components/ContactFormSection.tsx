import { useState, useRef } from 'react';
import { Phone, Upload, X } from 'lucide-react';

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
  photos: File[];
}

interface ContactFormSectionProps {
  compact?: boolean;
  onClose?: () => void;
}

function ContactForm({ compact = false, onClose }: ContactFormSectionProps) {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', message: '', photos: [] });
  const [submitted, setSubmitted] = useState(false);
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    const combined = [...form.photos, ...files].slice(0, 5);
    setForm(prev => ({ ...prev, photos: combined }));
    const newPreviews = combined.map(f => URL.createObjectURL(f));
    setPreviews(newPreviews);
  };

  const removePhoto = (index: number) => {
    const updated = form.photos.filter((_, i) => i !== index);
    const updatedPreviews = previews.filter((_, i) => i !== index);
    setForm(prev => ({ ...prev, photos: updated }));
    setPreviews(updatedPreviews);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="text-green-500 text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">We've received your request and will be in touch shortly.</p>
        <a href="tel:361-887-6606" className="text-red-600 font-semibold hover:text-red-700">
          Or call us now: 361-887-6606
        </a>
        {onClose && (
          <button
            onClick={onClose}
            className="block mx-auto mt-4 text-gray-500 hover:text-gray-700 text-sm underline"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(361) 000-0000"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      {!compact && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Describe the damage or service needed
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your vehicle and what needs to be repaired..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
          />
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Upload Photos {!compact && <span className="text-gray-400 font-normal">(up to 5 images)</span>}
        </label>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 hover:border-red-400 rounded-lg py-3 px-4 text-gray-500 hover:text-red-600 transition-colors cursor-pointer"
        >
          <Upload size={18} />
          <span className="text-sm font-medium">
            {form.photos.length > 0
              ? `${form.photos.length} photo${form.photos.length > 1 ? 's' : ''} selected — click to add more`
              : 'Click to upload photos of the damage'}
          </span>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
        {previews.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {previews.map((src, i) => (
              <div key={i} className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <img src={src} alt={`preview ${i + 1}`} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => removePhoto(i)}
                  className="absolute top-0.5 right-0.5 bg-black/60 hover:bg-black rounded-full p-0.5 text-white"
                  aria-label="Remove photo"
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition-colors"
      >
        Request a Free Estimate
      </button>
      <p className="text-center text-sm text-gray-500">
        Or call us directly:{' '}
        <a
          href="tel:361-887-6606"
          className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center gap-1"
        >
          <Phone size={14} />
          361-887-6606
        </a>
      </p>
    </form>
  );
}

export default function ContactFormSection() {
  return (
    <section id="estimate-form" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Get a <span className="text-red-600">Free Estimate</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red-600">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export { ContactForm };
