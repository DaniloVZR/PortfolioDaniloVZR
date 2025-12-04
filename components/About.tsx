"use client";
import { motion } from "framer-motion";
import { RiCodeSSlashLine, RiLightbulbFlashLine, RiTeamLine, RiRocketLine } from "react-icons/ri";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {

  const { t } = useLanguage();

  const stats = [
    { number: "1+", label: t('about.stats.experience') },
    { number: "10+", label: t('about.stats.projects') },
    { number: "B2", label: t('about.stats.english') },
    { number: "100%", label: t('about.stats.dedication') }
  ];

  const highlights = [
    {
      icon: RiCodeSSlashLine,
      title: t('about.highlights.cleanCode.title'),
      description: t('about.highlights.cleanCode.description')
    },
    {
      icon: RiLightbulbFlashLine,
      title: t('about.highlights.problemSolver.title'),
      description: t('about.highlights.problemSolver.description')
    },
    {
      icon: RiTeamLine,
      title: t('about.highlights.teamPlayer.title'),
      description: t('about.highlights.teamPlayer.description')
    },
    {
      icon: RiRocketLine,
      title: t('about.highlights.fastLearner.title'),
      description: t('about.highlights.fastLearner.description')
    }
  ];

  return (
    <section id="about" className="py-20 border-t-2 border-slate-800 relative">
      {/* Background Effects */}
      <div className="absolute z-0 left-[-20%] top-0 w-[40%] h-[60%] rounded-full purple__gradient" />
      <div className="absolute z-0 right-[-20%] bottom-0 w-[40%] h-[60%] rounded-full blue__gradient" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="heading tracking-normal w-auto px-10 pb-6">
            {t('about.title')} <span className="text-purple-primary">{t('about.me')}</span>
          </h1>
          <p className="text-center text-gray-400 max-w-2xl mx-auto px-4 mb-16">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gray-primary border border-slate-800 rounded-xl p-6 text-center hover:border-purple-primary transition-all hover:scale-105"
            >
              <div className="absolute left-[50%] -translate-x-1/2 top-[20%] w-12 h-12 bg-blue-700 rounded-3xl backdrop-blur-3xl blur-xl" />
              <h3 className="text-4xl font-bold mb-2 text-white relative z-10">{stat.number}</h3>
              <p className="text-gray-400 text-sm relative z-10">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Column - Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gray-primary border border-slate-800 rounded-xl p-8 hover:border-purple-primary transition-all">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">👋</span>
                  {t('about.hello.title')}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t('about.hello.description')}
                </p>
              </div>

              <div className="bg-gray-primary border border-slate-800 rounded-xl p-8 hover:border-purple-primary transition-all">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">🌀</span>
                  {t('about.abilities.title')}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t('about.abilities.description')}
                </p>
              </div>

              <div className="bg-gray-primary border border-slate-800 rounded-xl p-8 hover:border-purple-primary transition-all">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">🌟</span>
                  {t('about.certifications.title')}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t('about.certifications.description')}
                </p>
              </div>
            </motion.div>

            {/* Right Column - Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-primary border border-slate-800 rounded-xl p-6 hover:border-purple-primary transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-primary/10 rounded-lg group-hover:bg-purple-primary/20 transition-all">
                      <highlight.icon className="text-purple-primary" size="1.5rem" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                      <p className="text-gray-400 text-sm">{highlight.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-primary to-pink-600 rounded-xl p-8 text-center"
              >
                <h3 className="text-2xl font-bold mb-3">{t('about.cta.title')}</h3>
                <p className="text-white/90 mb-6">
                  {t('about.cta.description')}
                </p>
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 bg-white text-purple-primary font-semibold rounded-lg hover:bg-gray-100 transition-all hover:scale-105"
                >
                  {t('about.cta.button')}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;