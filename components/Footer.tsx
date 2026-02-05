import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Instagram, MessageCircle, MapPin, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  const instagramHandle = CONTACT_INFO.instagram.replace(/^@/, '');
  const instagramUrl = `https://www.instagram.com/${instagramHandle}/`;

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-brand-primary">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="grid md:grid-cols-4 gap-8">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck className="text-brand-accent" size={32} />
                    <div>
                        <span className="font-heading font-bold text-xl block">A.REIS</span>
                        <span className="text-xs text-gray-400 uppercase tracking-widest">Empresarial</span>
                    </div>
                </div>
                <p className="text-gray-400 max-w-sm mb-6">
                    Proteção, gestão e valorização de marcas empresariais em São Paulo. 
                    Segurança jurídica estratégica para o seu crescimento.
                </p>
                <div className="flex gap-4">
                    <a href={instagramUrl} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition-colors">
                        <Instagram size={20} />
                    </a>
                    <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors">
                        <MessageCircle size={20} />
                    </a>
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="font-bold text-lg mb-4 text-brand-accent">Menu</h4>
                <ul className="space-y-2 text-gray-400">
                    <li><a href="#home" className="hover:text-white">Início</a></li>
                    <li><a href="#quem-somos" className="hover:text-white">A Empresa</a></li>
                    <li><a href="#servicos" className="hover:text-white">Serviços</a></li>
                    <li><a href="#faq" className="hover:text-white">Dúvidas</a></li>
                </ul>
            </div>

            {/* Contact / Location */}
            <div>
                <h4 className="font-bold text-lg mb-4 text-brand-accent">Contato</h4>
                <ul className="space-y-4 text-gray-400">
                    <li className="flex items-start gap-3">
                        <MapPin className="shrink-0 mt-1" size={18} />
                        <span>
                            Atendimento em São Paulo<br/>
                            <span className="text-sm text-gray-500">Brás, Bom Retiro e 25 de Março</span>
                        </span>
                    </li>
                    <li className="flex items-center gap-3">
                        <MessageCircle className="shrink-0" size={18} />
                        <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="hover:text-white">
                            {CONTACT_INFO.whatsappDisplay}
                        </a>
                    </li>
                    <li className="flex items-center gap-3">
                        <Instagram className="shrink-0" size={18} />
                        <span>{CONTACT_INFO.instagram}</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} A.Reis Empresarial. Todos os direitos reservados.</p>
        <p>Google Meu Negócio Otimizado</p>
      </div>
    </footer>
  );
};

export default Footer;
