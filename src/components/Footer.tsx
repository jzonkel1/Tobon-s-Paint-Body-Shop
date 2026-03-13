import { Phone, MapPin, Clock, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="/body_shop_car_repair.png"
              alt="Tobon's Paint & Body Shop"
              className="h-20 w-auto mb-4"
            />
            <h3 className="text-xl font-bold text-red-600 mb-2">Tobon's Paint & Body Shop</h3>
            <p className="text-gray-400 text-sm">
              Professional auto body repair services in Corpus Christi since 1989
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'services', 'gallery', 'about', 'reviews', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      onNavigate(page);
                      window.scrollTo(0, 0);
                    }}
                    className="text-gray-400 hover:text-red-600 transition-colors capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">
              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo(0, 0);
                }}
                className="text-white hover:text-red-600 transition-colors"
              >
                Our Services
              </button>
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    setTimeout(() => {
                      document.getElementById('collision-repair')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }}
                  className="hover:text-red-600 transition-colors"
                >
                  Collision Repair
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    setTimeout(() => {
                      document.getElementById('auto-painting')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }}
                  className="hover:text-red-600 transition-colors"
                >
                  Auto Painting
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    setTimeout(() => {
                      document.getElementById('dent-removal')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }}
                  className="hover:text-red-600 transition-colors"
                >
                  Dent Removal
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    setTimeout(() => {
                      document.getElementById('vehicle-detailing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }}
                  className="hover:text-red-600 transition-colors"
                >
                  Vehicle Detailing
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    setTimeout(() => {
                      document.getElementById('headlight-restoration')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }}
                  className="hover:text-red-600 transition-colors"
                >
                  Headlight Restoration
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="tel:361-887-6606"
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    361-887-6606
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">
                    1104 S Port Ave<br />
                    Corpus Christi, TX 78405
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Mon - Fri: 8:00 AM - 6:00 PM<br />
                    Sat - Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/TobonsPaintAndBodyShop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2] hover:bg-[#0c5dcd] p-3 rounded-full transition-colors shadow-lg"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={24} className="text-white" />
              </a>
              <a
                href="https://www.yelp.com/biz/tobons-paint-and-body-shop-corpus-christi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D32323] hover:bg-[#a31919] p-3 rounded-full transition-colors shadow-lg"
                aria-label="Visit our Yelp page"
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.686 1.459zm-5.025 3.152l4.942 1.606a1.072 1.072 0 0 1 .636 1.48 9.316 9.316 0 0 1-2.47 3.169 1.073 1.073 0 0 1-1.592-.26l-2.76-4.409c-.528-.847.288-1.894 1.236-1.584zm-4.796-2.818L5.168 2.381A1.073 1.073 0 0 1 5.8.708 9.395 9.395 0 0 1 8.932.034a9.344 9.344 0 0 1 3.665.555 1.073 1.073 0 0 1 .55 1.685L10.348 12.92a1.006 1.006 0 0 1-1.79.017zm-3.301-2.148l1.428-4.996c.276-.96 1.652-.69 2.08.408l2.204 5.598c.38.965-.563 1.93-1.452 1.47L5.644 11.09a1.073 1.073 0 0 1-.595-1.31zm-.055 6.968a9.372 9.372 0 0 1-2.014-3.44 1.073 1.073 0 0 1 .665-1.456l5.026-1.496c.96-.285 1.74.795 1.179 1.626L9.114 17.293a1.072 1.072 0 0 1-1.596.232z"/>
                </svg>
              </a>
              <a
                href="https://autorepairscore.com/tx/corpus-christi/tobons-paint-body-shop-corpus-christi-texas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-4 py-3 rounded-full transition-colors shadow-lg flex items-center gap-2"
                aria-label="Visit our AutoRepairScore page"
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="text-white font-bold text-sm">ARS</span>
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Tobon's Paint & Body Shop. All rights reserved. | Serving Corpus Christi since 1989
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
