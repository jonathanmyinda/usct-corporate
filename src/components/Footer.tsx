import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">
              USCT <span className="text-blue-500">SARL</span>
            </h3>
            <p className="leading-relaxed mb-6">
              {t.footer.summary}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-blue-400 transition-colors">{t.nav.home}</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">{t.nav.about}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t.nav.services}</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t.services.title}</h4>
            <ul className="space-y-4">
              {t.services.items.slice(0, 4).map((item, idx) => (
                <li key={idx}><a href="#services" className="hover:text-blue-400 transition-colors">{item.title}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t.footer.contactInfo}</h4>
            <ul className="space-y-4">
              <li className="text-sm">769, Av. de l’Équateur, Gombe, Kinshasa, DRC</li>
              <li className="text-sm">+243 999 910 010</li>
              <li className="text-sm">info@usctcongo.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          <p>© {new Date().getFullYear()} USCT SARL. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};