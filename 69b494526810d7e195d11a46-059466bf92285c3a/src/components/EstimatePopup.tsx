import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { ContactForm } from './ContactFormSection';

const SESSION_KEY = 'estimate_popup_shown';

export default function EstimatePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem(SESSION_KEY, '1');
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const close = () => setVisible(false);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative">
        <div className="bg-gradient-to-r from-black to-gray-900 rounded-t-2xl px-6 py-5 border-b-4 border-red-600">
          <button
            onClick={close}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <h2 className="text-2xl font-bold text-white">
            Looking for an <span className="text-red-500">estimate?</span>
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Send us your info and we'll reach out right away — it's free!
          </p>
        </div>
        <div className="p-6">
          <ContactForm compact onClose={close} />
        </div>
      </div>
    </div>
  );
}
