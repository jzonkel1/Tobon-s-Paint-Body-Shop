import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryProps {
  onNavigate: (page: string) => void;
}

interface BeforeAfterItem {
  id: number;
  before: string;
  after: string;
  description: string;
}

const Gallery = ({ onNavigate }: GalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const beforeAfterExamples: BeforeAfterItem[] = [
    {
      id: 1,
      before: '/before1.jpg',
      after: '/after1.jpg',
      description: 'Cadillac Escalade Side Impact Repair'
    },
    {
      id: 2,
      before: '/before9.jpg',
      after: '/after9.jpg',
      description: 'Major Front Body Repair'
    },
    {
      id: 3,
      before: '/before2.jpg',
      after: '/after2.jpg',
      description: 'TRX Front Bumper Repair'
    },
    {
      id: 4,
      before: '/before3.jpg',
      after: '/after3.jpg',
      description: 'Toyota Crown Dent Repair'
    },
    {
      id: 5,
      before: '/before4.jpg',
      after: '/after4.jpg',
      description: 'Huge Truck Dent Repair'
    },
    {
      id: 6,
      before: '/before5.jpg',
      after: '/after5.jpg',
      description: 'Dodge Charger Total Front Body Repair'
    },
    {
      id: 7,
      before: '/before6.jpg',
      after: '/after6.jpg',
      description: 'Major Key Mark Repair'
    },
    {
      id: 8,
      before: '/before7.jpg',
      after: '/after7.jpg',
      description: 'Total Front Bumper Replacement'
    },
    {
      id: 9,
      before: '/before8.jpg',
      after: '/after8.jpg',
      description: 'Door Panel Dent Repair'
    },
    {
      id: 10,
      before: '/before10.jpg',
      after: '/after10.jpg',
      description: 'Dodge Challenger Rear-End Collision Repair'
    },
    {
      id: 11,
      before: '/before11.jpg',
      after: '/after11.jpg',
      description: 'Massive Rear Body Overhaul'
    },
    {
      id: 12,
      before: '/nospoiler1.jpg',
      after: '/spoiler1.jpg',
      description: 'Nissan Z Factory Spoiler Installation with Paint Touch-Up'
    },
    {
      id: 13,
      before: '/nospoiler2.jpg',
      after: '/spoiler2.jpg',
      description: 'CT5 V Spoiler Painted Black'
    }
  ];

  const recentWorkImages: string[] = [
    '/paintjob2.jpg',
    '/paintjob2-2.jpg',
    '/paintjob1.jpg',
    '/gallery1.jpg',
    '/596837365_1337990891674368_7202820942233038023_n.jpg',
    '/after1.jpg',
    '/after5.jpg',
    '/after6.jpg',
    '/after9.jpg',
    '/after10.jpg',
    '/spoiler1.jpg',
    '/spoiler2.jpg'
  ];

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage('');
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative bg-cover bg-center py-32 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-xl">Quality Repairs You Can See</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Before & After Repairs
          </h2>
          <div className="space-y-12">
            {beforeAfterExamples.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="p-6 text-center border-b border-gray-200">
                  <h3 className={`font-bold text-gray-900 ${item.description.length > 80 ? 'text-lg' : 'text-2xl'}`}>{item.description}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative">
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold z-10 shadow-lg">
                      BEFORE
                    </div>
                    <img
                      src={item.before}
                      alt={`Before - ${item.description}`}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
                      onClick={() => openLightbox(item.before)}
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold z-10 shadow-lg">
                      AFTER
                    </div>
                    <img
                      src={item.after}
                      alt={`After - ${item.description}`}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
                      onClick={() => openLightbox(item.after)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Recent Paint & Body Work
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recentWorkImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-200"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image}
                  alt={`Recent work ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Collision Repair?</h2>
          <p className="text-xl mb-6">Get professional auto body repair service today</p>
          <a
            href="tel:3618876606"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Call Now: (361) 887-6606
          </a>
        </section>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X size={40} />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
