import { Phone, MapPin, Clock } from 'lucide-react';

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
              {['home', 'services', 'about', 'reviews', 'contact'].map((page) => (
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
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Collision Repair</li>
              <li>Auto Painting</li>
              <li>Dent Removal</li>
              <li>Vehicle Detailing</li>
              <li>Headlight Restoration</li>
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
                    Mon - Fri: 8:00 AM - 5:30 PM<br />
                    Sat - Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Tobon's Paint & Body Shop. All rights reserved. | Serving Corpus Christi since 1989
          </p>
        </div>
      </div>
    </footer>
  );
}
