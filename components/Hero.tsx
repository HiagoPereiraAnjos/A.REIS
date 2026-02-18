import React from 'react';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import { PAIN_POINTS, CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 scroll-mt-20 overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-16 w-[480px] h-[480px] rounded-full bg-brand-accent/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-16 w-[520px] h-[520px] rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/30 via-brand-dark to-brand-dark"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-white space-y-6">
          <div className="inline-block px-3 py-1 bg-brand-accent/20 border border-brand-accent/50 rounded-full text-brand-accent text-xs font-bold tracking-wider uppercase">
            Proteção preventiva de marca
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Blindagem e valorização de <span className="text-brand-accent">marcas empresariais</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100 font-light border-l-4 border-brand-accent pl-4 max-w-xl">
            Atuação estratégica para negócios do Brás, Bom Retiro e Rua 25 de Março.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent hover:bg-brand-accent-dark text-white text-center px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-black/20 flex items-center justify-center gap-2 group"
            >
              Quero proteger minha marca
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <ShieldAlert className="text-brand-accent" size={32} />
            <h3 className="text-xl md:text-2xl font-bold text-white font-heading">Sinais de alerta</h3>
          </div>

          <div className="space-y-4">
            {PAIN_POINTS.map((point) => (
              <div
                key={point.id}
                className="flex items-start gap-3 bg-white/10 p-4 rounded-lg hover:bg-white/15 transition-colors"
              >
                <div className="min-w-[8px] h-[8px] rounded-full bg-brand-accent mt-2"></div>
                <p className="text-gray-100 text-sm md:text-base">{point.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-white/20 text-center">
            <p className="text-brand-accent font-bold text-lg">A proteção começa antes do conflito.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
