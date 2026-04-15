import { Phone, Award, Users, Target, Heart, DollarSign } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
              <Users size={16} />
              Family Owned & Operated
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="text-red-600 tobons-brand">Tobon's Paint & Body Shop</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Serving the Corpus Christi community with pride since 1989
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 text-sm font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                Family Owned & Operated
              </div>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Since opening our doors in <span className="font-bold text-red-600">1989</span>, <span className="tobons-brand">Tobon's Paint & Body Shop</span> has been a family-owned cornerstone of the Corpus Christi community. Owner <span className="font-bold text-gray-900">Richard Tobon</span> founded the shop and has been hands-on ever since — bringing his personal commitment to quality and fairness to every single repair.
                </p>
                <p>
                  Richard is known throughout the Coastal Bend for going the extra mile to save his customers money. He personally sources parts, shopping around to find the best prices so that customers never overpay. It's the kind of care you only get from a family business where the owner's name is on the building.
                </p>
                <p>
                  For over 35 years, we've built our reputation on quality workmanship, honest service, and customer satisfaction. Our team combines traditional craftsmanship with modern technology to deliver outstanding results on every job.
                </p>
                <p>
                  Whether you need collision repair, custom painting, or vehicle detailing, we're here to help restore your vehicle to its best condition — at the fairest price possible.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-6">By The Numbers</h3>
              <div className="space-y-6">
                <div className="border-b border-red-400 pb-4">
                  <div className="text-4xl font-bold mb-2">35+</div>
                  <div className="text-gray-200">Years in Business</div>
                </div>
                <div className="border-b border-red-400 pb-4">
                  <div className="text-4xl font-bold mb-2">10,000+</div>
                  <div className="text-gray-200">Vehicles Repaired</div>
                </div>
                <div className="border-b border-red-400 pb-4">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-gray-200">Customer Focused</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">5-Star</div>
                  <div className="text-gray-200">Customer Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {[
              {
                icon: Award,
                title: 'Quality',
                description: 'We never compromise on quality. Every job is completed to the highest standards using premium materials.',
              },
              {
                icon: Users,
                title: 'Family Owned',
                description: 'Owner Richard Tobon is personally involved in the shop every day — you\'re dealing with family, not a franchise.',
              },
              {
                icon: DollarSign,
                title: 'Saves You Money',
                description: 'Richard shops around to find the best deals on parts so your repair costs stay as low as possible.',
              },
              {
                icon: Target,
                title: 'Integrity',
                description: 'Honest assessments, fair pricing, and transparent communication are the foundation of our business.',
              },
              {
                icon: Heart,
                title: 'Service',
                description: 'Customer satisfaction is our priority. We go above and beyond to ensure you\'re completely happy.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <value.icon className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Why Customers Choose Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Family owned & operated — Richard Tobon is here every day',
                'Over 35 years of proven experience',
                'Richard personally sources parts to get you the best price',
                'Highly skilled and certified technicians',
                'State-of-the-art equipment and techniques',
                'No markups on parts — we pass the savings to you',
                'Free estimates and competitive pricing',
                'Insurance claim assistance',
                'Warranty on all work performed',
                'Personalized customer service — not a franchise, not a chain',
                'Fast turnaround times',
                'Attention to detail on every job',
              ].map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-red-600 text-2xl flex-shrink-0">✓</span>
                  <span className="text-gray-200">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Experience The Tobon's Difference
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers who trust us with their auto body repair needs
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
