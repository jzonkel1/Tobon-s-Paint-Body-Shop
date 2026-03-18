import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg border-b-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavigate('home')}
          >
            <img
              src="/body_shop_car_repair.png"
              alt="Tobon's Paint & Body Shop"
              className="h-16 w-auto"
            />
            <div className="ml-3 hidden sm:block">
              <h1 className="text-xl font-bold text-red-600">Tobon's Paint & Body Shop</h1>
              <p className="text-xs text-gray-300">Serving Corpus Christi Since 1989</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-sm font-medium transition-colors hover:text-red-600 ${
                  currentPage === item.id ? 'text-red-600' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:361-887-6606"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-red-600 text-white'
                    : 'text-white hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:361-887-6606"
              className="block w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-semibold text-center"
            >
              <Phone size={18} className="inline mr-2" />
              Call Now: 361-887-6606
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
