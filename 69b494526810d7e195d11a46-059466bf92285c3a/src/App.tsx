import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ContactFormSection from './components/ContactFormSection';
import EstimatePopup from './components/EstimatePopup';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

// Every page gets a real URL so pages like /privacy can be linked and indexed.
// Netlify's /* -> /index.html rewrite makes the deep links resolve.
const PATHS: Record<string, string> = {
  home: '/',
  services: '/services',
  about: '/about',
  gallery: '/gallery',
  reviews: '/reviews',
  contact: '/contact',
  privacy: '/privacy',
};

const TITLES: Record<string, string> = {
  home: "Tobon's Paint & Body Shop | Auto Body Repair Corpus Christi TX Since 1989",
  services: "Auto Body Services | Tobon's Paint & Body Shop Corpus Christi",
  about: "About Us | Tobon's Paint & Body Shop Corpus Christi",
  gallery: "Before & After Gallery | Tobon's Paint & Body Shop Corpus Christi",
  reviews: "Customer Reviews | Tobon's Paint & Body Shop Corpus Christi",
  contact: "Contact Us | Tobon's Paint & Body Shop Corpus Christi",
  privacy: "Privacy Policy | Tobon's Paint & Body Shop",
};

const DESCRIPTIONS: Record<string, string> = {
  home: "Expert auto body repair, collision repair, auto painting, dent removal, and vehicle detailing in Corpus Christi, TX. Serving the community since 1989. Call 361-887-6606 for free estimates.",
  services: "Collision repair, auto painting, dent removal, vehicle detailing, and headlight restoration in Corpus Christi, TX. Free estimates and insurance claim help. Call 361-887-6606.",
  about: "Tobon's Paint & Body Shop was founded in Corpus Christi in 1989 by Enrique Tobon. His son Richard carries the same promise forward: quality work and honest pricing.",
  gallery: "Before and after photos of collision repairs, paint work, and restorations completed at Tobon's Paint & Body Shop in Corpus Christi, Texas.",
  reviews: "What customers say about Tobon's Paint & Body Shop in Corpus Christi — rated 4.5 stars across 99+ Google reviews.",
  contact: "Visit Tobon's Paint & Body Shop at 1104 S Port Ave, Corpus Christi, TX 78405. Open Monday through Friday, 8:00 AM to 6:00 PM. Call 361-887-6606 for a free estimate.",
  privacy: "How Tobon's Paint & Body Shop collects, uses, and protects your information when you request an estimate.",
};

const SITE = 'https://tobonsautopaintandbody.com';

// The prerender step bakes whatever is in the DOM into each route's static
// HTML, so setting these per page is what gives every URL its own listing.
function setMeta(selector: string, attr: 'name' | 'property' | 'rel', key: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = document.createElement(attr === 'rel' ? 'link' : 'meta');
    el.setAttribute(attr === 'rel' ? 'rel' : attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute(attr === 'rel' ? 'href' : 'content', value);
}

function applyPageMeta(page: string) {
  const title = TITLES[page] || TITLES.home;
  const description = DESCRIPTIONS[page] || DESCRIPTIONS.home;
  const url = SITE + (PATHS[page] === '/' ? '/' : PATHS[page]);

  document.title = title;
  setMeta('meta[name="description"]', 'name', 'description', description);
  setMeta('link[rel="canonical"]', 'rel', 'canonical', url);
  setMeta('meta[property="og:title"]', 'property', 'og:title', title);
  setMeta('meta[property="og:description"]', 'property', 'og:description', description);
  setMeta('meta[property="og:url"]', 'property', 'og:url', url);
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
}

function pageFromPath(pathname: string): string {
  const clean = '/' + pathname.replace(/^\/+|\/+$/g, '');
  const match = Object.keys(PATHS).find((page) => PATHS[page] === clean);
  return match || 'home';
}

function App() {
  const [currentPage, setCurrentPage] = useState(() => pageFromPath(window.location.pathname));

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    if (PATHS[page] && window.location.pathname !== PATHS[page]) {
      window.history.pushState({ page }, '', PATHS[page]);
    }
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    applyPageMeta(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const onPopState = () => setCurrentPage(pageFromPath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'gallery':
        return <Gallery onNavigate={handleNavigate} />;
      case 'reviews':
        return <Reviews onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <Privacy onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  const isLegalPage = currentPage === 'privacy';

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">{renderPage()}</main>
      {!isLegalPage && <ContactFormSection />}
      <Footer onNavigate={handleNavigate} />
      {!isLegalPage && <EstimatePopup />}
    </div>
  );
}

export default App;
