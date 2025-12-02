"use client";
import { motion } from "framer-motion";
import { RiCodeSSlashLine, RiLightbulbFlashLine, RiTeamLine, RiRocketLine } from "react-icons/ri";

const About = () => {
  const stats = [
    { number: "1+", label: "Year Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "B2", label: "English Level" },
    { number: "100%", label: "Dedication" }
  ];

  const highlights = [
    {
      icon: RiCodeSSlashLine,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices"
    },
    {
      icon: RiLightbulbFlashLine,
      title: "Problem Solver",
      description: "Quick learner with strong analytical and creative thinking"
    },
    {
      icon: RiTeamLine,
      title: "Team Player",
      description: "Excellent collaboration and communication skills"
    },
    {
      icon: RiRocketLine,
      title: "Fast Learner",
      description: "Always eager to learn new technologies and improve"
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
            About <span className="text-purple-primary">Me</span>
          </h1>
          <p className="text-center text-gray-400 max-w-2xl mx-auto px-4 mb-16">
            Passionate Frontend Developer seeking to create impactful web experiences
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
              className="bg-gray-primary border border-slate-800 rounded-xl p-6 text-center hover:border-purple-primary transition-all hover:scale-105"
            >
              <h3 className="text-4xl font-bold text-purple-primary mb-2">{stat.number}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
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
                  Hello there!
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I am a passionate and committed Frontend Web Developer seeking my first job
                  as a developer. Currently focused on training through the SoyHenry programming
                  bootcamp, oriented towards web development.
                </p>
              </div>

              <div className="bg-gray-primary border border-slate-800 rounded-xl p-8 hover:border-purple-primary transition-all">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">💼</span>
                  Experience
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  One year of experience in the IT sector as a Systems Assistant, which has
                  provided me with a solid technical foundation. Professional degree in
                  Information Systems Programming from Politécnico Jaime Isaza Cadavid.
                </p>
              </div>

              <div className="bg-gray-primary border border-slate-800 rounded-xl p-8 hover:border-purple-primary transition-all">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">🌟</span>
                  Certifications
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  B2 English certificate with 600 hours of study at Comfama, demonstrating
                  strong communication skills in international environments.
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
                <h3 className="text-2xl font-bold mb-3">Let&apos;s Work Together!</h3>
                <p className="text-white/90 mb-6">
                  I&apos;m ready to contribute to your team and take your projects to the next level
                </p>
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 bg-white text-purple-primary font-semibold rounded-lg hover:bg-gray-100 transition-all hover:scale-105"
                >
                  Get In Touch
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