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
    document.title = TITLES[currentPage] || TITLES.home;
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
