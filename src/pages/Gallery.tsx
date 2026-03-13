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
      before: 'https://images.pexels.com/photos/6873051/pexels-photo-6873051.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Front Bumper Collision Repair'
    },
    {
      id: 2,
      before: 'https://images.pexels.com/photos/5849567/pexels-photo-5849567.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Side Panel Dent Removal'
    },
    {
      id: 3,
      before: 'https://images.pexels.com/photos/6873051/pexels-photo-6873051.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Rear End Collision Repair'
    },
    {
      id: 4,
      before: 'https://images.pexels.com/photos/5849567/pexels-photo-5849567.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete Paint Restoration'
    }
  ];

  const recentWorkImages: string[] = [
    'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3972511/pexels-photo-3972511.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/13243/pexels-photo-13243.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3972511/pexels-photo-3972511.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/13243/pexels-photo-13243.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3972511/pexels-photo-3972511.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/13243/pexels-photo-13243.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800'
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beforeAfterExamples.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img
                      src={item.before}
                      alt={`Before ${item.description}`}
                      className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openLightbox(item.before)}
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={item.after}
                      alt={`After ${item.description}`}
                      className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openLightbox(item.after)}
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{item.description}</h3>
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
