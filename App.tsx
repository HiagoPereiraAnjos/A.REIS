import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TargetAudience from './components/TargetAudience';
import LocalSEO from './components/LocalSEO';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      <Header />
      <main>
        <Hero />
        <About />
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