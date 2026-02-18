import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const differentials = [
    'Atuação fora das limitações de publicidade da OAB',
    'Linguagem clara, empresarial e estratégica',
    'Foco em resultado, segurança e crescimento',
    'Backoffice jurídico estruturado (sem exposição)',
    'Especialistas em moda, varejo, estamparia e indústria',
  ];

  return (
    <section id="quem-somos" className="py-20 bg-brand-light scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">
              A.Reis Empresarial
            </h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full"></div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-200 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A <strong>A.Reis Empresarial</strong> é a unidade especializada em{' '}
              <span className="text-brand-primary font-semibold">
                proteção preventiva, gestão estratégica e valorização de marcas
              </span>
              , atuando de forma <strong>empresarial e comercial</strong>, sem caráter jurídico-contencioso.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Nosso foco é <strong>estruturar e proteger ativos intangíveis</strong>, garantindo segurança,
              exclusividade e crescimento sustentável para negócios que constroem marcas próprias.
            </p>

            <div className="bg-brand-primary/5 border-l-4 border-brand-accent p-4 mb-10">
              <p className="text-brand-primary font-bold italic text-center text-xl">
                "Atuamos antes do problema surgir."
              </p>
            </div>

            <h3 className="text-xl font-heading font-bold text-brand-primary mb-6">Nossos Diferenciais</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {differentials.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-accent shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
