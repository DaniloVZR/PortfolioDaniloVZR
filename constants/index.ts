import { title } from "process";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const textAboutMe = [
  {
    emoji: "🤠",
    text: "I am a passionate and committed Frontend Web Developer seeking my first job as a developer."
  },
  {
    emoji: "🧠",
    text: "Currently, I am focused on my training through the SoyHenry programming bootcamp, oriented towards web development, where I am acquiring valuable skills in the latest technologies and trends in the field, as well as soft skills."
  },
  {
    emoji: "🌟",
    text: "I also have one year of experience in the IT sector as a Systems Assistant, which has provided me with a solid technical foundation. Additionally, I hold a professional degree in Information Systems Programming from Politécnico Jaime Isaza Cadavid and have a B2 English certificate with 600 hours of study at Comfama."
  },
  {
    emoji: "😉",
    text: "I consider myself to have valuable soft skills for web development, such as the ability to work in a team, solve problems, learn quickly, and pay attention to detail. I am also a proactive, adaptable person with a strong interest in collaborating with organizational goals and ensuring excellence in every project."
  }
]

export const textExperience = [
  {
    title: "GTD Colombia",
    job: "Systems Auxiliary",
    text: [
      "Configuración y mantenimiento de equipos.",
      "Manejo de inventario de equipos.",
      "Manejo de herramientas ofimáticas, Sistema AX, MySQL Query, Active Directory.",
      "Administración de usuarios en directorios activos.",
      "Soporte y mantenimiento de aplicaciones."
    ]
  },
  {
    title: "Freelance Project - Fademet",
    job: "Frontend Developer",
    text: [
      "Desarrollo de una landing page para un cliente dedicado al sector de metalmecánica. La página está diseñada para mostrar el trabajo del cliente, destacando sus servicios y productos, con un enfoque en la usabilidad y la experiencia del usuario.",
      "Se utilizaron tecnologías como React, SwiperJS, Aos y EmailJS."]
  }
]

export const projects = [
  {
    id: "1",
    image: "/PortfolioImages/Fademet.webp",
    title: "Fademet",
    link: "https://fademet.vercel.app",
    gitLink: "https://github.com/DaniloVZR/Fademet-Vite",
    desc: "Landing Page para Fademet, empresa de metalmecánica de Medellín. La página web cuenta con distintas animaciones, galería y formulario de contacto.",
    stack: ["React", "Javascript", "Module CSS", "Aos", "EmailJS", "SwiperJS"]
  },
  {
    id: "2",
    image: "/PortfolioImages/PlanificadorDeGastos.webp",
    title: "Planificador de Gastos",
    link: "https://admirable-kulfi-3fc4cf.netlify.app",
    gitLink: "https://github.com/DaniloVZR/Control-Gastos",
    desc: ".",
    stack: ["react", "javascript", "css"]
  },
  {
    id: "3",
    image: "/PortfolioImages/Encriptador.webp",
    title: "Encriptador",
    link: "https://desencriptador-ms.netlify.app",
    gitLink: "https://github.com/DaniloVZR/Encriptador",
    desc: ".",
    stack: ["react", "javascript", "css"]
  },
  {
    id: "4",
    image: "/PortfolioImages/GuitarLA.webp",
    title: "GuitarLA",
    link: "https://guitar-la-next-1r3eu7c5k-danilovzr.vercel.app",
    gitLink: "https://github.com/DaniloVZR/GuitarLA_Next",
    desc: ".",
    stack: ["react", "javascript", "css", "nextjs"]
  },
  {
    id: "5",
    image: "/PortfolioImages/QuioscoApp.webp",
    title: "Quiosco App",
    gitLink: "https://github.com/DaniloVZR/QuioscoApp_Deploy",
    desc: ".",
    stack: ["react", "javascript", "css"]
  },
]

export const techStack = [
  {
    title: "Languages",
    items: [
      { id: "javascript", name: "JavaScript" },
      { id: "typescript", name: "TypeScript" },
      { id: "cpp", name: "C++" },
      { id: "csharp", name: "C#" }
    ]
  },
  {
    title: "Frontend",
    items: [
      { id: "html", name: "HTML" },
      { id: "css", name: "CSS" },
      { id: "tailwind", name: "TailwindCSS" },
      { id: "sass", name: "SASS" },
      { id: "react", name: "React" },
      { id: "nextjs", name: "Next.js" },
      { id: "redux", name: "Redux" },
      { id: "framer", name: "Framer" }
    ]
  },
  {
    title: "Backend",
    items: [
      { id: "nodejs", name: "NodeJS" },
      { id: "express", name: "ExpressJS" },
      { id: "mysql", name: "MySQL" },
      { id: "postgresql", name: "PostgreSQL" },
      { id: "mongodb", name: "MongoDB" },
      { id: "sequelize", name: "Sequelize" }
    ]
  }
];