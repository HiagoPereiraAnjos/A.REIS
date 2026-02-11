import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-brand-light scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-4">
                Perguntas Frequentes
            </h2>
            <p className="text-gray-600">
                Tire suas dúvidas sobre proteção de marcas e ativos empresariais.
            </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
                <Disclosure key={idx} as="div" className="bg-white rounded-lg shadow-sm border border-gray-200">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left font-medium text-brand-primary hover:bg-gray-50 rounded-lg focus:outline-none">
                                <span className="text-lg">{item.question}</span>
                                <ChevronUp
                                    className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-brand-accent`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                                {item.answer}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
