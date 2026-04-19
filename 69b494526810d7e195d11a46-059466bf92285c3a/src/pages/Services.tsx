import { Phone, Car, Paintbrush, Wrench, Sparkles, Lightbulb, Shield, DollarSign, Users } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      id: 'collision-repair',
      icon: Car,
      title: 'Collision Repair',
      description: 'Comprehensive collision repair services to restore your vehicle to its pre-accident condition. Our skilled technicians handle everything from minor fender benders to major collision damage.',
      features: [
        'Frame straightening and alignment',
        'Structural repair and welding',
        'Panel replacement and repair',
        'Insurance claim assistance',
        'Free damage assessment',
      ],
    },
    {
      id: 'auto-painting',
      icon: Paintbrush,
      title: 'Auto Painting',
      description: 'Professional auto painting services using premium paint and advanced techniques. We match your vehicle\'s original color perfectly and ensure a flawless, long-lasting finish.',
      features: [
        'Complete paint jobs',
        'Custom color matching',
        'Clear coat application',
        'Paint touch-ups',
        'Multi-stage paint correction',
      ],
    },
    {
      id: 'dent-removal',
      icon: Wrench,
      title: 'Dent Removal',
      description: 'Expert dent removal services that restore your vehicle\'s smooth appearance without compromising the original paint. We handle dents of all sizes.',
      features: [
        'Paintless dent repair (PDR)',
        'Hail damage repair',
        'Door ding removal',
        'Crease and dent smoothing',
        'Body line restoration',
      ],
    },
    {
      id: 'vehicle-detailing',
      icon: Sparkles,
      title: 'Vehicle Detailing',
      description: 'Complete interior and exterior detailing services to make your vehicle look and feel like new. We pay attention to every detail for exceptional results.',
      features: [
        'Exterior wash and wax',
        'Interior deep cleaning',
        'Leather conditioning',
        'Engine bay cleaning',
        'Paint protection application',
      ],
    },
    {
      id: 'headlight-restoration',
      icon: Lightbulb,
      title: 'Headlight Restoration',
      description: 'Restore clarity and brightness to foggy, yellowed, or oxidized headlights. Improve visibility and enhance your vehicle\'s appearance.',
      features: [
        'UV damage removal',
        'Oxidation treatment',
        'Lens polishing',
        'Protective coating application',
        'Improved nighttime visibility',
      ],
    },
    {
      icon: Shield,
      title: 'Additional Services',
      description: 'We offer a wide range of additional services to meet all your auto body repair and maintenance needs.',
      features: [
        'Bumper repair and replacement',
        'Scratch and scuff repair',
        'Rust repair and prevention',
        'Windshield replacement',
        'Custom modifications',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section
        className="relative bg-cover bg-center text-white py-16 lg:py-24"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(/car.jpg)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Professional Auto Body <span className="text-red-600">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              From collision repair to detailing, we offer comprehensive services to keep your vehicle looking its best
            </p>
            <a
              href="tel:361-887-6606"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-bold transition-colors"
            >
              <Phone size={24} />
              Call for Free Estimate
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-red-600 to-red-800 p-5 md:p-8 flex flex-row md:flex-col items-center justify-start md:justify-center gap-4 md:gap-0 text-white">
                    <service.icon size={48} className="md:hidden flex-shrink-0" />
                    <service.icon size={80} className="hidden md:block mb-4" />
                    <h2 className="text-xl md:text-2xl font-bold md:text-center">{service.title}</h2>
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <p className="text-gray-700 text-lg mb-6">{service.description}</p>
                    <h3 className="font-bold text-lg mb-4 text-gray-900">What We Offer:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-red-600 font-bold text-xl flex-shrink-0">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                <Users size={14} />
                Family Owned & Operated
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                We Work Hard to Save You Money on Parts
              </h2>
              <p className="text-red-100 text-lg leading-relaxed">
                Owner Richard Tobon personally shops around for the best deals on parts before every repair. At a big chain, you pay whatever their system quotes. Here, Richard hunts down the best prices so your bill stays as low as it can — without ever cutting corners on quality.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <DollarSign size={40} className="mx-auto mb-3 text-white" />
                <h3 className="font-bold text-lg mb-2">Best Parts Prices</h3>
                <p className="text-red-100 text-sm">Richard sources parts from multiple suppliers to find the lowest cost</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <Shield size={40} className="mx-auto mb-3 text-white" />
                <h3 className="font-bold text-lg mb-2">No Quality Compromises</h3>
                <p className="text-red-100 text-sm">Savings on price, never on quality — every part meets our strict standards</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <Users size={40} className="mx-auto mb-3 text-white" />
                <h3 className="font-bold text-lg mb-2">Owner-Involved</h3>
                <p className="text-red-100 text-sm">A family shop where the owner's reputation is on the line every day</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <Phone size={40} className="mx-auto mb-3 text-white" />
                <h3 className="font-bold text-lg mb-2">Transparent Pricing</h3>
                <p className="text-red-100 text-sm">We explain every line of your estimate — no surprises, no hidden fees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
              Our Service Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Assessment',
                  description: 'Free inspection and detailed damage assessment',
                },
                {
                  step: '2',
                  title: 'Estimate',
                  description: 'Transparent pricing and timeline discussion',
                },
                {
                  step: '3',
                  title: 'Repair',
                  description: 'Expert service using quality materials',
                },
                {
                  step: '4',
                  title: 'Delivery',
                  description: 'Final inspection and vehicle return',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Need Auto Body Repair?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free estimate. We're here to help restore your vehicle to its best condition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:361-887-6606"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold inline-flex items-center justify-center gap-2 transition-colors"
            >
              <Phone size={24} />
              361-887-6606
            </a>
            <button
              onClick={() => document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
            >
              Request Free Estimate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
