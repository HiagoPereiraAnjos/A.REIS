import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Lawyers from './components/Lawyers';
import Services from './components/Services';
import TargetAudience from './components/TargetAudience';
import LocalSEO from './components/LocalSEO';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-800 bg-brand-light">
      <Header />
      <main>
        <Hero />
        <About />
        <Lawyers />
        <Services />
        <TargetAudience />
        <LocalSEO />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
