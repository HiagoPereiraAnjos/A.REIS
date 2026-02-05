import React from 'react';
import { SERVICES, CONTACT_INFO } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">
                Nossas Soluções de Proteção
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Estratégias completas para blindar seu negócio e garantir exclusividade no mercado.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
                <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-gray-100 flex flex-col">
                    <div className="p-8 flex-grow">
                        <div className="w-14 h-14 bg-brand-accent/10 rounded-lg flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                            <service.icon size={32} />
                        </div>
                        
                        <h3 className="text-xl font-heading font-bold text-brand-primary mb-4">
                            {service.title}
                        </h3>
                        
                        <ul className="space-y-3 mb-6">
                            {service.description.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="bg-brand-primary p-6 mt-auto">
                        <p className="text-white/90 text-sm font-medium italic mb-4">
                            {service.highlight}
                        </p>
                        <a 
                             href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá, gostaria de saber mais sobre ${service.title}`} 
                             target="_blank"
                             rel="noreferrer"
                             className="text-brand-accent hover:text-white font-bold text-sm flex items-center gap-2 transition-colors"
                        >
                            Saber mais <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;