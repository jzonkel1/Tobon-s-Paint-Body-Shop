import { Phone, MapPin, Clock, Shield, Wrench, Sparkles } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-red-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Expert Auto Body Repair in{' '}
              <span className="text-red-600">Corpus Christi</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional collision repair, auto painting, and detailing services since 1989
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:361-887-6606"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-xl"
              >
                <Phone size={24} />
                Call 361-887-6606
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-xl"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 rounded-lg bg-gray-50 border-l-4 border-red-600">
              <MapPin className="text-red-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                <p className="text-gray-700">
                  1104 S Port Ave<br />
                  Corpus Christi, TX 78405
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-lg bg-gray-50 border-l-4 border-red-600">
              <Phone className="text-red-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <a href="tel:361-887-6606" className="text-gray-700 hover:text-red-600 text-lg">
                  361-887-6606
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-lg bg-gray-50 border-l-4 border-red-600">
              <Clock className="text-red-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-lg mb-2">Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday<br />
                  8:00 AM - 5:30 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.5</span>
            </div>
            <p className="text-gray-600 mb-8">Based on 99+ Google reviews</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive auto body repair and detailing services for all makes and models
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Collision Repair',
                description: 'Expert collision repair to restore your vehicle to pre-accident condition',
              },
              {
                icon: Sparkles,
                title: 'Auto Painting',
                description: 'Professional auto painting with high-quality finishes and color matching',
              },
              {
                icon: Wrench,
                title: 'Dent Removal',
                description: 'Precision dent removal services to restore your vehicle\'s appearance',
              },
              {
                icon: Sparkles,
                title: 'Vehicle Detailing',
                description: 'Complete interior and exterior detailing to make your car look brand new',
              },
              {
                icon: Shield,
                title: 'Headlight Restoration',
                description: 'Restore clarity to foggy or yellowed headlights for improved visibility',
              },
              {
                icon: Wrench,
                title: 'Quality Workmanship',
                description: '35+ years of experience delivering exceptional results for our customers',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-red-600"
              >
                <service.icon className="text-red-600 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Trusted Auto Body Shop Since <span className="text-red-600">1989</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                For over 35 years, Tobon's Paint & Body Shop has been the trusted choice for auto body repair in Corpus Christi. Our experienced technicians use state-of-the-art equipment and quality materials to deliver exceptional results.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                We take pride in our workmanship and are committed to customer satisfaction on every job, big or small.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
              >
                Learn More About Us
              </button>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-2xl">✓</span>
                  <span>35+ years of experience in auto body repair</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-2xl">✓</span>
                  <span>Expert technicians with advanced training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-2xl">✓</span>
                  <span>Quality materials and state-of-the-art equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-2xl">✓</span>
                  <span>Competitive pricing and free estimates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-2xl">✓</span>
                  <span>Insurance claims assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-2xl">✓</span>
                  <span>Customer satisfaction guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Restore Your Vehicle?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your auto body repair needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:361-887-6606"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold inline-flex items-center justify-center gap-2 transition-colors"
            >
              <Phone size={24} />
              Call 361-887-6606
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
