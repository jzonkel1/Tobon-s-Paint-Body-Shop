import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Contact <span className="text-red-600">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch for a free estimate or to schedule your auto body repair service
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                  <Phone className="text-red-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">Phone</h3>
                    <a
                      href="tel:361-887-6606"
                      className="text-lg text-gray-700 hover:text-red-600 transition-colors"
                    >
                      361-887-6606
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Call us for immediate assistance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                  <MapPin className="text-red-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">Address</h3>
                    <p className="text-lg text-gray-700">
                      1104 S Port Ave<br />
                      Corpus Christi, TX 78405
                    </p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=1104+S+Port+Ave+Corpus+Christi+TX+78405"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-red-600 hover:text-red-700 font-medium mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                  <Clock className="text-red-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">Business Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p className="flex justify-between">
                        <span className="font-medium">Monday - Friday:</span>
                        <span className="ml-4">8:00 AM - 5:30 PM</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-medium">Saturday:</span>
                        <span className="ml-4">Closed</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-medium">Sunday:</span>
                        <span className="ml-4">Closed</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                  <Mail className="text-red-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">Free Estimates</h3>
                    <p className="text-gray-700">
                      Call us today for a free, no-obligation estimate on your auto body repair needs. We'll assess the damage and provide transparent pricing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-300 text-xl">✓</span>
                    <span>Free damage assessment and estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-300 text-xl">✓</span>
                    <span>Insurance claim assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-300 text-xl">✓</span>
                    <span>Experienced technicians</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-300 text-xl">✓</span>
                    <span>Quality workmanship guaranteed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-300 text-xl">✓</span>
                    <span>35+ years serving Corpus Christi</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Our Shop</h2>
              <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.5!2d-97.3967!3d27.7811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866f9f5a5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2s1104%20S%20Port%20Ave%2C%20Corpus%20Christi%2C%20TX%2078405!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Tobon's Paint & Body Shop Location"
                ></iframe>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Easy To Find</h3>
                <p className="text-gray-700 mb-4">
                  We're conveniently located on S Port Ave in Corpus Christi, easily accessible from anywhere in the area. Look for our distinctive sign and well-maintained facility.
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Landmarks:</span> Near the intersection of S Port Ave and Lipan St, close to downtown Corpus Christi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready To Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today and let us take care of your auto body repair needs
          </p>
          <a
            href="tel:361-887-6606"
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-lg text-xl font-bold inline-flex items-center gap-3 transition-all transform hover:scale-105"
          >
            <Phone size={28} />
            Call 361-887-6606
          </a>
        </div>
      </section>
    </div>
  );
}
