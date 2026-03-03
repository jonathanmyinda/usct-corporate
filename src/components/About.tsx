import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: <Target className="text-blue-500" />, title: t.about.mission, text: t.about.missionText },
    { icon: <Eye className="text-blue-500" />, title: t.about.vision, text: t.about.visionText },
    { icon: <ShieldCheck className="text-blue-500" />, title: t.about.values, text: t.about.valuesText },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {t.about.title}
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {t.about.description}
            </p>
  
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                {t.company.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-2">
                <strong>{t.company.nameLabel}</strong> {t.company.name}
              </p>

              <p className="text-slate-600 dark:text-slate-400 mb-2">
                <strong>{t.company.industryLabel}</strong> {t.company.industry}
              </p>

              <p className="text-slate-600 dark:text-slate-400">
                <strong>{t.company.locationLabel}</strong> {t.company.location}
              </p>
            </div>                                                                           
          </motion.div>

          <div className="space-y-6">
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start space-x-5 border border-slate-100 dark:border-slate-700"
              >
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};