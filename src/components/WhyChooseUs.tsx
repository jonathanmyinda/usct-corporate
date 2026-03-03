import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Award, Zap, Truck, LifeBuoy } from 'lucide-react';

export const WhyChooseUs = () => {
  const { t } = useLanguage();

  const icons = [
    <Award size={40} className="text-blue-600" />,
    <Zap size={40} className="text-blue-600" />,
    <Truck size={40} className="text-blue-600" />,
    <LifeBuoy size={40} className="text-blue-600" />,
  ];

  return (
    <section id="why-us" className="py-24 bg-blue-600 dark:bg-blue-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {t.whyUs.title}
          </motion.h2>
          <p className="text-blue-100">
            {t.whyUs.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {t.whyUs.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl text-center shadow-xl hover:shadow-2xl transition-all hover:translate-y-[-5px]"
            >
              <div className="inline-flex items-center justify-center p-4 bg-blue-50 dark:bg-slate-700 rounded-2xl mb-6">
                {icons[idx]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-blue-100">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};