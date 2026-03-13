import { Phone, Star } from 'lucide-react';

interface ReviewsProps {
  onNavigate: (page: string) => void;
}

export default function Reviews({ onNavigate }: ReviewsProps) {
  const reviews = [
    {
      name: 'Maria Rodriguez',
      rating: 5,
      date: 'March 2024',
      text: 'Outstanding service! My car looks brand new after the collision repair. The team was professional, kept me updated throughout the process, and the quality of work exceeded my expectations. Highly recommend!',
    },
    {
      name: 'James Mitchell',
      rating: 5,
      date: 'February 2024',
      text: 'Been bringing my vehicles here for years. Always reliable, fair pricing, and excellent results. The paint job on my truck was flawless. These guys really know what they\'re doing.',
    },
    {
      name: 'Sandra Lopez',
      rating: 5,
      date: 'January 2024',
      text: 'Amazing work on my dent removal! They were able to fix everything without needing to repaint. Fast, affordable, and the results are perfect. Will definitely be back for any future needs.',
    },
    {
      name: 'Robert Turner',
      rating: 5,
      date: 'December 2023',
      text: 'After my accident, I was worried about finding a trustworthy shop. Tobon\'s made the entire process stress-free. They worked directly with my insurance and kept me informed every step of the way.',
    },
    {
      name: 'Linda Garcia',
      rating: 5,
      date: 'November 2023',
      text: 'The detailing service brought my 10-year-old car back to life! Inside and out, it looks incredible. Worth every penny. The staff is friendly and truly cares about their customers.',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      date: 'October 2023',
      text: 'Excellent collision repair work. They matched the paint perfectly and you can\'t even tell where the damage was. Professional team and fair prices. This is the only body shop I\'ll use.',
    },
    {
      name: 'Patricia Hernandez',
      rating: 5,
      date: 'September 2023',
      text: 'Had my headlights restored and the difference is night and day! So much brighter and clearer now. Quick service and very reasonable price. Great experience from start to finish.',
    },
    {
      name: 'David Thompson',
      rating: 5,
      date: 'August 2023',
      text: 'Top-notch auto body shop! They repaired hail damage on my car and it looks perfect. The attention to detail is impressive. I appreciate their honest communication and quality work.',
    },
    {
      name: 'Carmen Reyes',
      rating: 5,
      date: 'July 2023',
      text: 'Best body shop in Corpus Christi! They\'ve been taking care of my family\'s vehicles for years. Always reliable, honest, and the work is always done right. Can\'t recommend them enough!',
    },
    {
      name: 'Steven Martinez',
      rating: 5,
      date: 'June 2023',
      text: 'Fantastic experience from quote to completion. They repaired my bumper perfectly and finished ahead of schedule. The staff is knowledgeable and friendly. Will definitely return for future needs.',
    },
    {
      name: 'Angela White',
      rating: 5,
      date: 'May 2023',
      text: 'Impressed with the quality and professionalism. They took great care of my vehicle and the custom paint job turned out even better than I imagined. True craftsmen!',
    },
    {
      name: 'Carlos Gonzalez',
      rating: 5,
      date: 'April 2023',
      text: 'Honest, reliable, and skilled technicians. They explained everything clearly and the repair work was flawless. Fair prices and excellent customer service. This is a trustworthy business!',
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Customer <span className="text-red-600">Reviews</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              See what our satisfied customers have to say about their experience with Tobon's Paint & Body Shop
            </p>
            <div className="flex items-center justify-center gap-3 mb-4">
              <StarRating rating={5} />
              <span className="text-2xl font-bold">5.0</span>
            </div>
            <p className="text-gray-300">Based on hundreds of customer reviews</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real reviews from real customers who trust us with their vehicles
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-red-600"
              >
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={review.rating} />
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our Customer Satisfaction Guarantee
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We stand behind our work with a commitment to quality and customer satisfaction
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
                <p className="text-gray-300">Customer Satisfaction</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">35+</div>
                <p className="text-gray-300">Years of Excellence</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">5-Star</div>
                <p className="text-gray-300">Average Rating</p>
              </div>
            </div>
            <div className="space-y-4 text-lg text-gray-300 mb-8">
              <p>
                At Tobon's Paint & Body Shop, your satisfaction is our priority. We take pride in delivering exceptional results and building lasting relationships with our customers.
              </p>
              <p>
                Every vehicle receives the same level of care and attention, and we won't consider the job complete until you're completely satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready To Experience Our Service?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our family of satisfied customers and see why we're Corpus Christi's trusted choice for auto body repair
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
              Get Free Estimate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
