"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase();
      const detectedLang = browserLang.startsWith('es') ? 'es' : 'en';
      setLanguageState(detectedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Simple translation function
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translation object
const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      menu: "Menu",
      close: "Close"
    },
    hero: {
      welcome: "Welcome to my portfolio",
      roles: [
        "Frontend Developer",
        "React Specialist",
        "UI/UX Enthusiast",
        "Web Developer"
      ],
      description: "Passionate about creating amazing web experiences with modern technologies. Let's build something great together!",
      viewWork: "View My Work",
      getInTouch: "Get In Touch",
      scrollDown: "Scroll Down"
    },
    about: {
      title: "About",
      me: "Me",
      subtitle: "Passionate Frontend Developer seeking to create impactful web experiences",
      stats: {
        experience: "Year Experience",
        projects: "Projects Completed",
        english: "English Level",
        dedication: "Dedication"
      },
      hello: {
        title: "Hello there!",
        description: "I am a passionate and committed Frontend Web Developer seeking my first job as a developer. Currently focused on training through the SoyHenry programming bootcamp, oriented towards web development."
      },
      experience: {
        title: "Experience",
        description: "One year of experience in the IT sector as a Systems Assistant, which has provided me with a solid technical foundation. Professional degree in Information Systems Programming from Politécnico Jaime Isaza Cadavid."
      },
      certifications: {
        title: "Certifications",
        description: "B2 English certificate with 600 hours of study at Comfama, demonstrating strong communication skills in international environments."
      },
      highlights: {
        cleanCode: {
          title: "Clean Code",
          description: "Writing maintainable, scalable code following best practices"
        },
        problemSolver: {
          title: "Problem Solver",
          description: "Quick learner with strong analytical and creative thinking"
        },
        teamPlayer: {
          title: "Team Player",
          description: "Excellent collaboration and communication skills"
        },
        fastLearner: {
          title: "Fast Learner",
          description: "Always eager to learn new technologies and improve"
        }
      },
      cta: {
        title: "Let&apos;s Work Together!",
        description: "I&apos;m ready to contribute to your team and take your projects to the next level",
        button: "Get In Touch"
      }
    },
    experience: {
      title: "Experience"
    },
    projects: {
      title: "Projects",
      viewCode: "View Code",
      viewWebsite: "View Website"
    },
    stack: {
      title: "Technologies"
    },
    footer: {
      title: "Contact Me!",
      description: "I'm ready to contribute to your team and take your projects to the next level. Don't hesitate to contact me to discuss how I can add value to your company.",
      talkSoon: "Let's talk soon!",
    }
  },
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      menu: "Menú",
      close: "Cerrar"
    },
    hero: {
      welcome: "Bienvenido a mi portafolio",
      roles: [
        "Desarrollador Frontend",
        "Especialista en React",
        "Entusiasta UI/UX",
        "Desarrollador Web"
      ],
      description: "Apasionado por crear experiencias web increíbles con tecnologías modernas. ¡Construyamos algo grandioso juntos!",
      viewWork: "Ver Mi Trabajo",
      getInTouch: "Contáctame",
      scrollDown: "Desplázate"
    },
    about: {
      title: "Sobre",
      me: "Mí",
      subtitle: "Desarrollador Frontend apasionado buscando crear experiencias web impactantes",
      stats: {
        experience: "Año de Experiencia",
        projects: "Proyectos Completados",
        english: "Nivel de Inglés",
        dedication: "Dedicación"
      },
      hello: {
        title: "¡Hola!",
        description: "Soy un Desarrollador Web Frontend apasionado y comprometido buscando mi primer empleo como desarrollador. Actualmente enfocado en mi formación a través del bootcamp de programación SoyHenry, orientado al desarrollo web."
      },
      experience: {
        title: "Experiencia",
        description: "Un año de experiencia en el sector TI como Auxiliar de Sistemas, lo que me ha proporcionado una sólida base técnica. Título profesional en Programación de Sistemas de Información del Politécnico Jaime Isaza Cadavid."
      },
      certifications: {
        title: "Certificaciones",
        description: "Certificado de inglés B2 con 600 horas de estudio en Comfama, demostrando fuertes habilidades de comunicación en entornos internacionales."
      },
      highlights: {
        cleanCode: {
          title: "Código Limpio",
          description: "Escribiendo código mantenible y escalable siguiendo las mejores prácticas"
        },
        problemSolver: {
          title: "Solucionador de Problemas",
          description: "Aprendizaje rápido con pensamiento analítico y creativo"
        },
        teamPlayer: {
          title: "Trabajo en Equipo",
          description: "Excelentes habilidades de colaboración y comunicación"
        },
        fastLearner: {
          title: "Aprendizaje Rápido",
          description: "Siempre ansioso por aprender nuevas tecnologías y mejorar"
        }
      },
      cta: {
        title: "¡Trabajemos Juntos!",
        description: "Estoy listo para contribuir a tu equipo y llevar tus proyectos al siguiente nivel",
        button: "Contáctame"
      }
    },
    experience: {
      title: "Experiencia"
    },
    projects: {
      title: "Proyectos",
      viewCode: "Ver Código",
      viewWebsite: "Ver Sitio Web"
    },
    stack: {
      title: "Tecnologías"
    },
    footer: {
      title: "¡Contáctame!",
      description: "Estoy listo para contribuir a tu equipo y llevar tus proyectos al siguiente nivel. No dudes en ponerte en contacto conmigo para discutir cómo puedo aportar valor a tu empresa.",
      talkSoon: "¡Hablemos pronto!",
    }
  }
};