import Link from "next/link";

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
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur similique minus adipisci quo, accusamus tempore nisi perferendis sunt quos nesciunt libero voluptates eum labore, maiores, cumque molestias et officiis?"
  }
]

export const projects = [
  {
    id: "1",
    image: "/PortfolioImages/Fademet.webp",
    title: "Fademet",
    link: "https://fademet.vercel.app",
    gitLink: "https://github.com/DaniloVZR/Fademet-Vite"
  },
  {
    id: "2",
    image: "/PortfolioImages/PlanificadorDeGastos.webp",
    title: "Planificador de Gastos",
    link: "https://admirable-kulfi-3fc4cf.netlify.app",
    gitLink: "https://github.com/DaniloVZR/Control-Gastos"
  },
  {
    id: "3",
    image: "/PortfolioImages/Encriptador.webp",
    title: "Encriptador",
    link: "https://desencriptador-ms.netlify.app",
    gitLink: "https://github.com/DaniloVZR/Encriptador"
  },
  {
    id: "4",
    image: "/PortfolioImages/GuitarLA.webp",
    title: "GuitarLA",
    link: "https://guitar-la-next-1r3eu7c5k-danilovzr.vercel.app",
    gitLink: "https://github.com/DaniloVZR/GuitarLA_Next"
  },
  {
    id: "5",
    image: "/PortfolioImages/QuioscoApp.webp",
    title: "Quiosco App",
    gitLink: "https://github.com/DaniloVZR/QuioscoApp_Deploy"
  },
]