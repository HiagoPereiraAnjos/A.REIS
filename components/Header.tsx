import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'Advogados', href: '#advogados' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Para Quem', href: '#para-quem' },
    { name: 'Regiões', href: '#local' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-light/95 shadow-md py-2 border-b border-gray-200 backdrop-blur-sm' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo Area */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')} 
          className="flex items-center gap-2 group cursor-pointer"
        >
            <div className={`p-2 rounded-lg transition-colors ${scrolled ? 'bg-brand-primary text-white' : 'bg-gray-50 text-brand-primary'}`}>
                <ShieldCheck size={28} />
            </div>
            <div className="flex flex-col">
                <span className={`font-heading font-bold text-lg leading-tight tracking-wide ${scrolled ? 'text-brand-primary' : 'text-white'}`}>
                    A.REIS
                </span>
                <span className={`text-xs font-semibold tracking-widest uppercase ${scrolled ? 'text-brand-accent' : 'text-gray-200'}`}>
                    Empresarial
                </span>
            </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-semibold hover:text-brand-accent transition-colors cursor-pointer ${scrolled ? 'text-brand-primary' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-accent hover:bg-purple-700 text-white px-5 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 cursor-pointer"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-accent"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} color={scrolled ? '#374151' : '#ffffff'} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-light shadow-xl border-t border-gray-200 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-brand-primary font-semibold py-2 border-b border-gray-50 hover:text-brand-accent cursor-pointer"
            >
              {link.name}
            </a>
          ))}
           <a 
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-accent hover:bg-purple-700 text-white text-center py-3 rounded-lg font-bold mt-2 cursor-pointer transition-colors"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
