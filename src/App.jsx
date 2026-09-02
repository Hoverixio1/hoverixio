import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import CaseStudies from './pages/CaseStudies';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Academy from './pages/Academy';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ShrilaxmiSupport from './pages/ShrilaxmiSupport';
import ShrilaxmiPrivacy from './pages/ShrilaxmiPrivacy';
import ShrilaxmiTerms from './pages/ShrilaxmiTerms';
// import Careers from './pages/Careers';

function App() {
  const location = useLocation();
  const isShrilaxmiRoute = location.pathname.startsWith('/shrilaxmigoldpalace');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {!isShrilaxmiRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/shrilaxmigoldpalace" element={<Navigate to="/shrilaxmigoldpalace/shrilaxmi-support" replace />} />
        <Route path="/shrilaxmigoldpalace/" element={<Navigate to="/shrilaxmigoldpalace/shrilaxmi-support" replace />} />
        <Route path="/shrilaxmigoldpalace/shrilaxmi-support" element={<ShrilaxmiSupport />} />
        <Route path="/shrilaxmigoldpalace/shrilaxmi-privacy" element={<ShrilaxmiPrivacy />} />
        <Route path="/shrilaxmigoldpalace/shrilaxmi-terms" element={<ShrilaxmiTerms />} />
        <Route path="/shrilaxmigoldpalace/*" element={<Navigate to="/shrilaxmigoldpalace/shrilaxmi-support" replace />} />
        {/* <Route path="/careers" element={<Careers />} /> */}
      </Routes>
      {!isShrilaxmiRoute && <Footer />}
      {!isShrilaxmiRoute && <FloatingWhatsApp />}
      <ScrollToTop />
    </div>
  );
}

export default App;
