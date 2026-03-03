import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const partners = [
  { name: 'ACER', color: 'text-green-600' },
  { name: 'HP', color: 'text-blue-700' },
  { name: 'Dell', color: 'text-blue-500' },
  { name: 'Lenovo', color: 'text-red-600' },
  { name: 'Canon', color: 'text-red-700' },
  { name: 'Epson', color: 'text-blue-800' },
  { name: 'Samsung', color: 'text-blue-900' },
  { name: 'Cisco', color: 'text-cyan-600' },
  { name: 'Kaspersky', color: 'text-emerald-700' },
  { name: 'Microsoft', color: 'text-blue-400' },
  { name: 'Evolis', color: 'text-red-500' }
];

export const Partners = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="partners" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {t.partners.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 text-lg"
          >
            {t.partners.subtitle}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8"
        >
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all group"
            >
              <span className={`text-xl md:text-2xl font-black tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 ${partner.color}`}>
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};