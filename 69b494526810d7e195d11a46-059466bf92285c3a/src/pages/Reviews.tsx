import { Phone, Star } from 'lucide-react';

interface ReviewsProps {
  onNavigate: (page: string) => void;
}

export default function Reviews({ onNavigate }: ReviewsProps) {
  const reviews = [
    {
      rating: 5,
      name: 'Mark Lubianski',
      text: 'The paint job they did on my Dodge Mega Cab made it look like it just came off the showroom floor. They went above and beyond expectations.',
    },
    {
      rating: 5,
      name: 'Cliff DeBerry',
      text: 'Great work done and they stuck to the price and deadline given.',
    },
    {
      rating: 5,
      name: 'Aaron C',
      text: 'They even restored my headlights as a courtesy. Really appreciate the extra effort.',
    },
    {
      rating: 5,
      name: 'paco bravo',
      text: 'Family business with professional work. Totally recommended.',
    },
    {
      rating: 5,
      name: 'Richard Becerra',
      text: 'Richard was very quick and helpful when I stopped by for an estimate.',
    },
    {
      rating: 5,
      name: 'Terry Langford',
      text: 'Excellent paint job and great customer service.',
    },
    {
      rating: 5,
      name: 'Anna Mous',
      text: 'They repaired my vehicle quickly and the results looked fantastic.',
    },
    {
      rating: 5,
      name: 'Nikitha Reddy',
      text: 'Honest work and fair pricing. I would definitely return for future repairs.',
    },
    {
      rating: 5,
      name: 'R SANCHEZ',
      text: 'My car looked brand new after the repair. Great craftsmanship.',
    },
    {
      rating: 5,
      name: 'Javier Jasso',
      text: 'Very friendly staff and quality body work. Highly recommend.',
    },
    {
      rating: 5,
      name: 'Christina Mares',
      text: 'They matched the paint perfectly and the repair was finished when promised.',
    },
    {
      rating: 5,
      name: 'John Mayorga',
      text: 'Great local body shop. Friendly staff and the work on my vehicle came out excellent.',
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
      <section
        className="relative bg-cover bg-center text-white py-16 lg:py-24"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(/car5.jpg)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Customer <span className="text-red-600">Reviews</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              See what our satisfied customers have to say about their experience with <span className="tobons-brand">Tobon's Paint & Body Shop</span>
            </p>
            <div className="flex items-center justify-center gap-3 mb-4">
              <StarRating rating={5} />
              <span className="text-2xl font-bold">4.5</span>
            </div>
            <p className="text-gray-300">Based on 99+ Google reviews</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-red-600"
              >
                <div className="mb-4">
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-gray-700 italic mb-4">"{review.text}"</p>
                <p className="text-sm font-semibold text-gray-900">— {review.name}</p>
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
                <div className="text-4xl font-bold text-red-600 mb-2">4.5-Star</div>
                <p className="text-gray-300">Google Rating</p>
              </div>
            </div>
            <div className="space-y-4 text-lg text-gray-300 mb-8">
              <p>
                At <span className="tobons-brand">Tobon's Paint & Body Shop</span>, your satisfaction is our priority. We take pride in delivering exceptional results and building lasting relationships with our customers.
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
