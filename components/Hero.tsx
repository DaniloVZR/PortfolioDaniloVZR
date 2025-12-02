"use client";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { RiArrowDownLine, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Frontend Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Web Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute h-full w-full top-0 left-0">
        <BackgroundBeams />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-0">
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
                className="text-gray-400 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 uppercase tracking-wider"
              >
                Welcome to my portfolio
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 leading-tight"
              >
                Danilo Urrego
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">David</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="h-14 sm:h-16 md:h-20 mb-6 sm:mb-8"
              >
                <motion.h2
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#b936c0]"
                >
                  {roles[currentRole]}
                </motion.h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 px-4 sm:px-0"
              >
                Passionate about creating amazing web experiences with modern technologies.
                Let&apos;s build something great together!
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
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </a>

                <a
                  href="#contact"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-[#b936c0] text-white font-semibold rounded-lg hover:bg-[#b936c0] transition-all hover:scale-105 text-sm sm:text-base"
                >
                  Get In Touch
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
                  <RiGithubFill className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/joimar-danilo-urrego-david/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full bg-slate-800 hover:bg-[#b936c0] transition-all hover:scale-110"
                >
                  <RiLinkedinFill className="w-5 h-5 sm:w-6 sm:h-6" />
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
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[480px]">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#b936c0] to-[#4158d0] rounded-full blur-2xl sm:blur-3xl opacity-30 animate-pulse"></div>

                {/* Profile Picture */}
                <div className="relative w-full aspect-square">
                  <div className="absolute inset-0 rounded-full border-2 sm:border-4 border-[#b936c0] animate-spin-slow"></div>
                  <img
                    src="/Profile-Picture.png"
                    alt="Danilo Urrego David"
                    className="w-full h-full rounded-full object-cover p-1 sm:p-2"
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
        className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
          <span className="text-xs sm:text-sm mb-2">Scroll Down</span>
          <RiArrowDownLine className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;