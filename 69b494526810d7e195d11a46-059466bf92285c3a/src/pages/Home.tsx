import { Phone, MapPin, Clock, Shield, Wrench, Sparkles, Star, Award, Users, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const featuredRepairs = [
    {
      before: '/before9.jpg',
      after: '/after9.jpg',
      title: 'Major Front Body Repair',
    },
    {
      before: '/before11.jpg',
      after: '/after11.jpg',
      title: 'Massive Rear Body Overhaul',
    },
    {
      before: '/before5.jpg',
      after: '/after5.jpg',
      title: 'Dodge Charger Total Front Body Repair',
    },
    {
      before: '/before10.jpg',
      after: '/after10.jpg',
      title: 'Dodge Challenger Rear-End Collision Repair',
    },
  ];

  const services = [
    {
      title: 'Collision Repair',
      description: 'Expert structural repair and restoration for accident damage',
      image: '/collisionrepair.png',
      icon: Shield,
    },
    {
      title: 'Auto Painting',
      description: 'Premium paint matching and finishing for a flawless look',
      image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Sparkles,
    },
    {
      title: 'Dent Removal',
      description: 'Precise dent repair to restore your vehicle\'s original condition',
      image: '/dentremoval.jpg',
      icon: Wrench,
    },
    {
      title: 'Detail & Restoration',
      description: 'Complete detailing services for a showroom-quality finish',
      image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Sparkles,
    },
  ];

  const galleryPreview = [
    '/after1.jpg',
    '/after5.jpg',
    '/after6.jpg',
    '/after10.jpg',
    '/after9.jpg',
    '/after11.jpg',
  ];

  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative h-[600px] lg:h-[700px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/13741311/pexels-photo-13741311.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Trusted Auto Body & Collision Repair<br />
            <span className="text-red-500">Corpus Christi, Texas</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Serving the Coastal Bend since 1989 with professional collision and paint repair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href="tel:361-887-6606"
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg text-lg font-bold flex items-center gap-3 transition-all transform hover:scale-105 shadow-2xl"
            >
              <Phone size={24} />
              Call Now
            </a>
            <button
              onClick={() => document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-100 text-black px-10 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-2xl"
            >
              Request Free Estimate
            </button>
            <button
              onClick={() => onNavigate('gallery')}
              className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-2xl"
            >
              View Our Work
            </button>
          </div>
          <p className="text-gray-300 text-sm font-medium">Serving Corpus Christi Since 1989</p>
        </div>
      </section>

      <section className="py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Award className="text-red-500 mb-2" size={32} />
              <p className="font-bold text-sm sm:text-base">Serving Corpus Christi Since 1989</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="text-red-500 mb-2" size={32} />
              <p className="font-bold text-sm sm:text-base">Quality Collision Repair</p>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="text-red-500 mb-2" size={32} />
              <p className="font-bold text-sm sm:text-base">Professional Auto Paint Work</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="text-red-500 mb-2" size={32} />
              <p className="font-bold text-sm sm:text-base">Trusted Local Body Shop</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete auto body repair solutions for all makes and models
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="aspect-[4/5] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <service.icon className="mb-3 text-red-500" size={36} />
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold transition-all inline-flex items-center gap-2"
            >
              View All Services
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              See the Quality of Our Work
            </h2>
            <p className="text-xl text-gray-600">
              Real repairs, real results
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredRepairs.map((repair, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-md text-xs font-bold z-10">
                      BEFORE
                    </div>
                    <img
                      src={repair.before}
                      alt="Before repair"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-md text-xs font-bold z-10">
                      AFTER
                    </div>
                    <img
                      src={repair.after}
                      alt="After repair"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900">{repair.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('gallery')}
              className="bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-lg font-bold transition-all inline-flex items-center gap-2"
            >
              View Full Gallery
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Experienced Auto Body & Paint Repair You Can Trust
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                For over 35 years, Tobon's Paint & Body Shop has been Corpus Christi's premier choice for collision repair and auto painting. Our master technicians combine decades of experience with modern equipment to deliver exceptional results on every vehicle.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We understand your vehicle is important to you. That's why we treat every repair with meticulous attention to detail and pride ourselves on delivering workmanship that exceeds expectations.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Shield className="text-red-600" size={24} />
                  </div>
                  <span className="text-gray-900 font-medium">35+ Years of Expert Service</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Award className="text-red-600" size={24} />
                  </div>
                  <span className="text-gray-900 font-medium">Certified Technicians</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Star className="text-red-600" size={24} />
                  </div>
                  <span className="text-gray-900 font-medium">Customer Satisfaction Guarantee</span>
                </div>
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold transition-all inline-flex items-center gap-2"
              >
                Learn More About Us
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Auto body repair shop"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-red-600 font-bold text-sm uppercase tracking-wider mb-2">Over 99+ Five Star Reviews</p>
            <div className="flex items-center justify-center gap-2 mb-12">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={32} />
                ))}
              </div>
              <span className="text-3xl font-bold text-gray-900">4.5</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Martinez',
                text: 'Excellent work on my car after a collision. They made it look brand new again. Highly recommend!',
                rating: 5,
              },
              {
                name: 'David Rodriguez',
                text: 'Professional service and great communication throughout the repair process. Very satisfied with the results.',
                rating: 5,
              },
              {
                name: 'Jennifer Lopez',
                text: 'Best body shop in Corpus Christi! They fixed my truck perfectly and the price was fair.',
                rating: 5,
              },
            ].map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{review.text}"</p>
                <p className="font-bold text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('reviews')}
              className="bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-lg font-bold transition-all inline-flex items-center gap-2"
            >
              Read More Reviews
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600">
              A glimpse of our latest repair work
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryPreview.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => onNavigate('gallery')}
              >
                <img
                  src={image}
                  alt={`Recent project ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('gallery')}
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold transition-all inline-flex items-center gap-2"
            >
              View Complete Gallery
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Need Collision Repair or Paint Work?
          </h2>
          <p className="text-xl sm:text-2xl mb-10 text-gray-200">
            Get your free estimate today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="tel:361-887-6606"
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-lg text-xl font-bold inline-flex items-center gap-3 transition-all transform hover:scale-105 shadow-2xl"
            >
              <Phone size={28} />
              361-887-6606
            </a>
            <button
              onClick={() => document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-100 text-black px-10 py-5 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-2xl"
            >
              Request Free Estimate
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-red-500 flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                <p className="text-gray-300">
                  1104 S Port Ave<br />
                  Corpus Christi, TX 78405
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-red-500 flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <a href="tel:361-887-6606" className="text-gray-300 hover:text-red-500 text-lg transition-colors">
                  361-887-6606
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-red-500 flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="font-bold text-lg mb-2">Hours</h3>
                <p className="text-gray-300">
                  Monday - Friday<br />
                  8:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
