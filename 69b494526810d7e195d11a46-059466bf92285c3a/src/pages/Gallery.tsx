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
  const [touchedCard, setTouchedCard] = useState<number | null>(null);

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
    '/480768127_1097636619043131_1316195473952487386_n.jpg',
    '/481961789_1097636589043134_3970170489758939937_n.jpg',
    '/484070351_1113896677417125_5891263521831453074_n.jpg',
    '/484412276_1113896990750427_8190591356594063184_n.jpg',
    '/491642895_1142244481249011_4261269889473004809_n.jpg',
    '/473833172_949651127131049_4025549382136060208_n.jpg',
    '/481015812_1095793479227445_3493771979301799352_n.jpg'
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
      <style>{`
        /* === Before/After hover reveal cards (ba-*) === */
        .ba-card {
          position: relative;
          width: 100%;
          cursor: pointer;
        }

        .ba-front,
        .ba-reveal {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── Odd cards: curtain wipe ── */
        .ba-card--wipe {
          overflow: hidden;
        }
        .ba-card--wipe .ba-reveal {
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.45s cubic-bezier(.4, 0, .2, 1);
        }
        .ba-card--wipe:hover .ba-reveal {
          transform: scaleX(1);
        }

        /* ── Even cards: axis rotate swap ── */
        .ba-card--flip {
          perspective: 600px;
          overflow: hidden;
        }
        .ba-card--flip .ba-front {
          transform: rotateX(0deg);
          transform-origin: bottom center;
          transition: transform 0.4s ease;
          backface-visibility: hidden;
        }
        .ba-card--flip .ba-reveal {
          transform: rotateX(-90deg);
          transform-origin: top center;
          transition: transform 0.4s ease, opacity 0.4s ease;
          backface-visibility: hidden;
          opacity: 0;
        }
        .ba-card--flip:hover .ba-front {
          transform: rotateX(90deg);
        }
        .ba-card--flip:hover .ba-reveal {
          transform: rotateX(0deg);
          opacity: 1;
        }

        /* ── Pill labels ── */
        .ba-label {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.3rem 0.85rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          z-index: 20;
          pointer-events: none;
          transition: opacity 0.2s ease;
          box-shadow: 0 1px 4px rgba(0,0,0,0.35);
        }
        .ba-label--before {
          background: #dc2626;
          color: #fff;
          opacity: 1;
        }
        .ba-label--after {
          background: #16a34a;
          color: #fff;
          opacity: 0;
        }
        .ba-card:hover .ba-label--before,
        .ba-card.is-revealed .ba-label--before {
          opacity: 0;
        }
        .ba-card:hover .ba-label--after,
        .ba-card.is-revealed .ba-label--after {
          opacity: 1;
        }

        /* ── Touch tap reveal (mirrors hover states) ── */
        .ba-card--wipe.is-revealed .ba-reveal {
          transform: scaleX(1);
        }
        .ba-card--flip.is-revealed .ba-front {
          transform: rotateX(90deg);
        }
        .ba-card--flip.is-revealed .ba-reveal {
          transform: rotateX(0deg);
          opacity: 1;
        }

        /* ── Mobile tap hint ── */
        .ba-tap-hint {
          position: absolute;
          bottom: 0.75rem;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.65);
          color: #fff;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          z-index: 25;
          pointer-events: none;
          text-transform: uppercase;
          white-space: nowrap;
          transition: opacity 0.2s ease;
        }
        .ba-card.is-revealed .ba-tap-hint {
          opacity: 0;
        }
        /* Hide hint on devices that support hover (desktops) */
        @media (hover: hover) and (pointer: fine) {
          .ba-tap-hint { display: none; }
        }
      `}</style>
      <style>{`
        /* === Zoom + fade overlay (ba-zoom-*) === */
        .ba-zoom-wrap {
          overflow: hidden;
          cursor: pointer;
          background: transparent;
        }
        /* Front (before) wrapper hugs the image's natural shape */
        .ba-zoom-wrap.ba-front {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .ba-zoom-wrap.ba-front img {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 70vh;
          display: block;
          transition: transform 0.4s ease;
        }
        /* Reveal (after) wrapper overlays the exact same footprint */
        .ba-zoom-wrap.ba-reveal {
          display: flex;
          justify-content: center;
        }
        .ba-zoom-wrap.ba-reveal img {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 70vh;
          display: block;
          transition: transform 0.4s ease;
        }
        .ba-zoom-wrap:hover img {
          transform: scale(1.04);
        }
        /* zoom-wrap img base rule kept for overlay target; img rules above handle sizing */
        .ba-zoom-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          pointer-events: none;
        }
        .ba-zoom-wrap:hover .ba-zoom-overlay {
          opacity: 1;
        }
      `}</style>
      <div
        className="relative bg-cover bg-center py-16 sm:py-24 lg:py-32 text-white"
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
          <div className="space-y-8 sm:space-y-12">
            {beforeAfterExamples.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="p-6 text-center border-b border-gray-200">
                  <h3 className={`font-bold text-gray-900 ${item.description.length > 80 ? 'text-lg' : 'text-2xl'}`}>{item.description}</h3>
                </div>
                <div
                  className={`ba-card ${item.id % 2 !== 0 ? 'ba-card--wipe' : 'ba-card--flip'}${touchedCard === item.id ? ' is-revealed' : ''}`}
                  onClick={() => setTouchedCard(prev => prev === item.id ? null : item.id)}
                >
                  <div className="ba-zoom-wrap ba-front" onClick={(e) => { e.stopPropagation(); openLightbox(item.before); }}>
                    <img
                      src={item.before}
                      alt={`Before - ${item.description}`}
                    />
                    <div className="ba-zoom-overlay">Click to enlarge</div>
                  </div>
                  <div className="ba-zoom-wrap ba-reveal" onClick={(e) => { e.stopPropagation(); openLightbox(item.after); }}>
                    <img
                      src={item.after}
                      alt={`After - ${item.description}`}
                    />
                    <div className="ba-zoom-overlay">Click to enlarge</div>
                  </div>
                  <div className="ba-label ba-label--before">BEFORE</div>
                  <div className="ba-label ba-label--after">AFTER</div>
                  <div className="ba-tap-hint">Tap to reveal after →</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Recent Paint & Body Work
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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

        <section className="bg-gradient-to-r from-black to-gray-900 rounded-2xl shadow-xl p-8 sm:p-12 text-center text-white border-t-4 border-red-600">
          <h2 className="text-3xl font-bold mb-4">Need Collision Repair?</h2>
          <p className="text-xl mb-8 text-gray-300">Get professional auto body repair service today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3618876606"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Call Now: (361) 887-6606
            </a>
            <button
              onClick={() => document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Request Free Estimate
            </button>
          </div>
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
