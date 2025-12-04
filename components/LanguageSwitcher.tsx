// components/LanguageSwitcher.tsx
"use client";
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-slate-800/50 rounded-full p-1">
      <div
        onClick={() => setLanguage('en')}
        className={`cursor-pointer relative px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${language === 'en'
          ? 'text-white'
          : 'text-gray-400 hover:text-white'
          }`}
      >
        {language === 'en' && (
          <motion.div
            layoutId="activeLanguage"
            className="absolute inset-0 bg-purple-primary rounded-full"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </div>

      <div
        onClick={() => setLanguage('es')}
        className={`cursor-pointer relative px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${language === 'es'
          ? 'text-white'
          : 'text-gray-400 hover:text-white'
          }`}
      >
        {language === 'es' && (
          <motion.div
            layoutId="activeLanguage"
            className="absolute inset-0 bg-purple-primary rounded-full"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">ES</span>
      </div>
    </div>
  );
};

export default LanguageSwitcher;