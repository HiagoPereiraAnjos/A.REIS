import React from 'react';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import { PAIN_POINTS, CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 scroll-mt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/saopaulo/1920/1080" 
          alt="São Paulo Business Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-white space-y-6">
          <div className="inline-block px-3 py-1 bg-brand-accent/20 border border-brand-accent/50 rounded-full text-brand-accent text-xs font-bold tracking-wider uppercase mb-2">
            Especialistas em Marcas Próprias
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Proteção, gestão e valorização de <span className="text-brand-accent">marcas empresariais</span> em São Paulo
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 font-light border-l-4 border-brand-accent pl-4">
            Atuação estratégica para empresários do <strong>Brás, Bom Retiro e Rua 25 de Março</strong>, protegendo marcas, criações e ativos intangíveis antes que o problema exista.
          </p>

          <p className="text-gray-400 italic">
            "Cuidamos da sua marca como um ativo empresarial — do registro à valorização."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent hover:bg-yellow-600 text-white text-center px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-2 group"
            >
              Quero proteger minha marca
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Content - Pain Points Block */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
                <ShieldAlert className="text-red-500" size={32} />
                <h3 className="text-xl md:text-2xl font-bold text-white font-heading">
                    Sinais de Alerta
                </h3>
            </div>
            
            <div className="space-y-4">
                {PAIN_POINTS.map((point) => (
                    <div key={point.id} className="flex items-start gap-3 bg-white/10 p-4 rounded-lg hover:bg-white/15 transition-colors">
                        <div className="min-w-[8px] h-[8px] rounded-full bg-red-500 mt-2"></div>
                        <p className="text-gray-200 text-sm md:text-base">{point.text}</p>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-brand-accent font-bold text-lg">
                    👉 A proteção começa antes do conflito.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;