import { Phone, MapPin, Clock, Mail, Facebook } from 'lucide-react';

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
                        <span className="ml-4">8:00 AM - 6:00 PM</span>
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

              <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/TobonsPaintAndBodyShop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1877F2] hover:bg-[#0c5dcd] p-3 rounded-full transition-colors shadow-lg"
                    aria-label="Visit our Facebook page"
                  >
                    <Facebook size={24} className="text-white" />
                  </a>
                  <a
                    href="https://www.yelp.com/biz/tobons-paint-and-body-shop-corpus-christi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#D32323] hover:bg-[#a31919] p-3 rounded-full transition-colors shadow-lg"
                    aria-label="Visit our Yelp page"
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.686 1.459zm-5.025 3.152l4.942 1.606a1.072 1.072 0 0 1 .636 1.48 9.316 9.316 0 0 1-2.47 3.169 1.073 1.073 0 0 1-1.592-.26l-2.76-4.409c-.528-.847.288-1.894 1.236-1.584zm-4.796-2.818L5.168 2.381A1.073 1.073 0 0 1 5.8.708 9.395 9.395 0 0 1 8.932.034a9.344 9.344 0 0 1 3.665.555 1.073 1.073 0 0 1 .55 1.685L10.348 12.92a1.006 1.006 0 0 1-1.79.017zm-3.301-2.148l1.428-4.996c.276-.96 1.652-.69 2.08.408l2.204 5.598c.38.965-.563 1.93-1.452 1.47L5.644 11.09a1.073 1.073 0 0 1-.595-1.31zm-.055 6.968a9.372 9.372 0 0 1-2.014-3.44 1.073 1.073 0 0 1 .665-1.456l5.026-1.496c.96-.285 1.74.795 1.179 1.626L9.114 17.293a1.072 1.072 0 0 1-1.596.232z"/>
                    </svg>
                  </a>
                  <a
                    href="https://autorepairscore.com/tx/corpus-christi/tobons-paint-body-shop-corpus-christi-texas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-4 py-3 rounded-full transition-colors shadow-lg flex items-center gap-2"
                    aria-label="Visit our AutoRepairScore page"
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                    <span className="text-white font-bold text-sm">ARS</span>
                  </a>
                </div>
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
