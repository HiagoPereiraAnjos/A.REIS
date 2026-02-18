import React from 'react';
import { PERSONAS } from '../constants';

const TargetAudience: React.FC = () => {
  return (
    <section id="para-quem" className="py-20 bg-brand-light scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-2">
              Para Quem É?
            </h2>
            <p className="text-gray-600">Soluções desenhadas para o perfil do empresário paulistano.</p>
          </div>
          <div className="hidden md:block w-1/3 h-px bg-gray-200"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PERSONAS.map((persona, idx) => (
            <div
              key={idx}
              className="bg-brand-light border border-gray-200 p-6 rounded-xl hover:border-brand-accent/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-primary text-brand-accent rounded-full">
                  <persona.icon size={24} />
                </div>
                <h3 className="font-heading font-bold text-brand-primary text-lg">{persona.title}</h3>
              </div>

              <ul className="space-y-2 mb-6">
                {persona.items.map((item, i) => (
                  <li key={i} className="text-gray-700 text-sm border-b border-gray-100 pb-2 last:border-0">
                    {item}
                  </li>
                ))}
              </ul>

              {persona.pain && (
                <div className="mt-auto bg-red-50 text-red-700 text-xs p-3 rounded-lg border border-red-100 font-medium">
                  {persona.pain}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
