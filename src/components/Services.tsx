import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Laptop, 
  Network, 
  Cctv, 
  Printer, 
  Wrench, 
  MapPin 
} from 'lucide-react';

export const Services = () => {
  const { t } = useLanguage();

  const serviceIcons = [
    <Laptop size={32} className="text-blue-600" />,
    <Network size={32} className="text-blue-600" />,
    <Cctv size={32} className="text-blue-600" />,
    <Printer size={32} className="text-blue-600" />,
    <Wrench size={32} className="text-blue-600" />,
    <MapPin size={32} className="text-blue-600" />,
  ];

  const serviceImages = [
    "https://storage.googleapis.com/dala-prod-public-storage/generated-images/641f870a-9c78-4820-9bb5-0974c52ce30e/it-equipment-55c8a358-1772391902942.webp",
    "https://storage.googleapis.com/dala-prod-public-storage/generated-images/641f870a-9c78-4820-9bb5-0974c52ce30e/networking-service-a389b0ed-1772391897674.webp",
    "https://storage.googleapis.com/dala-prod-public-storage/generated-images/641f870a-9c78-4820-9bb5-0974c52ce30e/security-service-8b417a4a-1772391898064.webp",
    "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800",
    "https://storage.googleapis.com/dala-prod-public-storage/generated-images/641f870a-9c78-4820-9bb5-0974c52ce30e/tech-support-3b67883c-1772391898188.webp",
    "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section id="services" className="py-24 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {t.services.title}
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={serviceImages[idx]} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 p-3 bg-white/90 dark:bg-slate-900/90 rounded-xl backdrop-blur-sm shadow-md">
                  {serviceIcons[idx]}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};