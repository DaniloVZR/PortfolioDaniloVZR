"use client";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { RiArrowDownLine, RiGithubFill, RiLinkedinFill, RiDownloadLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();
  const [currentRole, setCurrentRole] = useState(0);

  // Get translated roles
  const roles = t('hero.roles') as unknown as string[];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length, language]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute h-full w-full top-0 left-0">
        <BackgroundBeams />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-10 md:px-30 lg:px-44 py-20 sm:py-25 lg:py-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-xs sm:text-sm mb-3 uppercase tracking-wider"
              >
                {t('hero.welcome')}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 leading-tight"
              >
                Danilo Urrego
                <br />
                <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl">David</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="h-12 sm:h-14 md:h-16"
              >
                <motion.h2
                  key={`${currentRole}-${language}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl sm:text-2xl md:text-2xl lg:text-2xl 2xl:text-3xl font-extrabold text-[#b936c0]"
                >
                  {roles[currentRole]}
                </motion.h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-gray-300 text-sm sm:text-base md:text-base lg:text-lg mb-5 sm:mb-6 max-w-xl mx-auto lg:mx-0 px-4 sm:px-0"
              >
                {t('hero.description')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 px-4 sm:px-0"
              >
                <a
                  href="#projects"
                  className="group relative px-6 sm:px-8 py-2.5 sm:py-3 bg-[#b936c0] text-white font-semibold rounded-lg overflow-hidden transition-all hover:scale-105 text-sm sm:text-base"
                >
                  <span className="relative z-10">{t('hero.viewWork')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </a>

                <a
                  href="#contact"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-[#b936c0] text-white font-semibold rounded-lg hover:bg-[#b936c0] transition-all hover:scale-105 text-sm sm:text-base"
                >
                  {t('hero.getInTouch')}
                </a>

                {/* CV Download Button */}
                <a
                  href={language === 'es' ? '/CV_ES.pdf' : '/CV_EN.pdf'}
                  download={language === 'es' ? 'CV_Danilo_Urrego_ES.pdf' : 'CV_Danilo_Urrego_EN.pdf'}
                  className="flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#3262ffba] text-white font-semibold rounded-lg hover:bg- transition-all hover:scale-105 text-sm sm:text-base"
                >
                  <RiDownloadLine className="w-5 h-5" />
                  {t('hero.downloadCV')}
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <a
                  href="https://github.com/DaniloVZR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full bg-slate-800 hover:bg-[#b936c0] transition-all hover:scale-110"
                >
                  <RiGithubFill className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/joimar-danilo-urrego-david/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full bg-slate-800 hover:bg-[#b936c0] transition-all hover:scale-110"
                >
                  <RiLinkedinFill className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Side - Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center items-center order-1 lg:order-2"
            >
              <div className="relative w-[180px] sm:w-[220px] md:w-[230px] lg:w-[250px] xl:w-[350px] 2xl:w-[450px]">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#b936c0] to-[#4158d0] rounded-full blur-2xl sm:blur-3xl opacity-30 animate-pulse"></div>

                {/* Profile Picture */}
                <div className="relative w-full aspect-square">
                  <div className="absolute inset-0 rounded-full border-2 sm:border-4 border-[#b936c0] animate-spin-slow"></div>
                  <img
                    src="/Profile-Picture.png"
                    alt="Danilo Urrego David"
                    className="md:max-w-300 w-full h-full rounded-full object-cover p-1 sm:p-2"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        className="hidden sm:flex absolute bottom-6 sm:bottom-8 z-10 justify-center w-full"
      >
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
          <span className="text-xs sm:text-sm mb-2">{t('hero.scrollDown')}</span>
          <RiArrowDownLine className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;