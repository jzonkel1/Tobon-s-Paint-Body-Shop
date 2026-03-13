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
                className="bg-[#1877F2] hover:bg-[#0c5dcd] w-12 h-12 rounded-full transition-colors shadow-lg flex items-center justify-center"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="https://www.yelp.com/biz/tobons-paint-and-body-shop-corpus-christi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 w-12 h-12 rounded-full transition-colors shadow-lg flex items-center justify-center"
                aria-label="Visit our Yelp page"
              >
                <img src="/19b872cc66b8bfc0fb8d947e8728f183.svg" alt="Yelp" className="w-7 h-7" />
              </a>
              <a
                href="https://autorepairscore.com/tx/corpus-christi/tobons-paint-body-shop-corpus-christi-texas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 w-12 h-12 rounded-full transition-colors shadow-lg flex items-center justify-center"
                aria-label="Visit our AutoRepairScore page"
              >
                <img src="/447210309_399267936448192_2073111667863481145_n.jpg" alt="AutoRepairScore" className="w-7 h-7" />
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
