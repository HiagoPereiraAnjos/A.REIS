import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { BRAND_ASSETS, CONTACT_INFO } from '../constants';

const LocalSEO: React.FC = () => {
  const regions = ['Bras', 'Bom Retiro', 'Rua 25 de Marco', 'Centro de Sao Paulo'];
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="local" className="py-20 bg-brand-primary text-white relative overflow-hidden scroll-mt-28">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-accent font-bold uppercase tracking-wider text-sm mb-4">
              <MapPin size={18} />
              Atuacao local
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Atendimento estrategico em <span className="text-brand-accent">Sao Paulo</span>
            </h2>
            <p className="text-gray-100 text-lg mb-8 leading-relaxed">
              Entendemos a dinamica acelerada do comercio paulistano e protegemos marcas que dependem de exclusividade,
              agilidade e posicionamento forte.
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
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Ola, sou da regiao de SP e gostaria de proteger minha marca.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-accent hover:bg-brand-accent-dark text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Agendar reuniao <ArrowRight size={20} />
            </a>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-gradient-to-br from-brand-dark/70 to-brand-primary/80">
            {!imageFailed ? (
              <img
                src={BRAND_ASSETS.localImage}
                alt="Arte institucional A.Reis para negocios de Sao Paulo"
                className="w-full h-auto block object-contain"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="w-full aspect-[3/2]"></div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEO;
