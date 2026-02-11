import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const LocalSEO: React.FC = () => {
  const regions = ["Brás", "Bom Retiro", "Rua 25 de Março", "Centro de São Paulo"];

  return (
    <section id="local" className="py-20 bg-brand-primary text-white relative overflow-hidden scroll-mt-28">
        {/* Decorative pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 text-brand-accent font-bold uppercase tracking-wider text-sm mb-4">
                        <MapPin size={18} />
                        Atuação Local
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Atendimento estratégico em <span className="text-brand-accent">São Paulo</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        Entendemos a dinâmica acelerada do comércio de São Paulo. Atendemos empresários e marcas que dependem de exclusividade e agilidade, localizadas nos principais polos comerciais da cidade.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {regions.map((region) => (
                            <div key={region} className="flex items-center gap-2 bg-white/10 px-4 py-3 rounded-lg">
                                <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                                <span className="font-semibold">{region}</span>
                            </div>
                        ))}
                    </div>

                    <a 
                        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá, sou da região de SP e gostaria de proteger minha marca.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-brand-accent hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                        Agendar reunião <ArrowRight size={20} />
                    </a>
                </div>

                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <img 
                        src="https://picsum.photos/seed/saopaulodowntown/800/600" 
                        alt="Centro de São Paulo, Brás e Bom Retiro" 
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                        <p className="font-bold text-xl">Foco em negócios que dependem de exclusividade.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default LocalSEO;
