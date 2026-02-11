import React from "react";
import { LAWYERS } from "../constants";

const Lawyers: React.FC = () => {
  return (
    <section id="advogados" className="py-20 bg-brand-light scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-3">
            Advogados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os profissionais que atuam na proteção e valorização das
            marcas da sua empresa.
          </p>
          <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LAWYERS.map((lawyer) => (
            <article
              key={lawyer.name}
              className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={lawyer.photo}
                  alt={`Foto de ${lawyer.name}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-heading font-bold text-brand-primary">
                  {lawyer.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{lawyer.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lawyers;
