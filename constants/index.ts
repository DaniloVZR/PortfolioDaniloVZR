import { IconType } from 'react-icons';
import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri';

export const techStack = [
  {
    title: "Languages",
    items: [
      { id: "csharp", name: "C#" },
      { id: "javascript", name: "Javascript" },
      { id: "typescript", name: "Typescript" }
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
      { id: "framermotion", name: "Framer Motion" }
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
      { id: "SQLServer", name: "SQL Server" },
      { id: "sequelize", name: "Sequelize" }
    ]
  }
];

interface SocialMediaItem {
  id: string;
  icon: IconType;
  link: string;
}

export const socialMedia: SocialMediaItem[] = [
  { id: "github", icon: RiGithubFill, link: "https://github.com/DaniloVZR" },
  { id: "twitterX", icon: RiTwitterXFill, link: "https://x.com/DaniloVZR_" },
  { id: "linkedin", icon: RiLinkedinFill, link: "https://www.linkedin.com/in/joimar-danilo-urrego-david/" },
];

export const projectsData = [
  {
    id: "7",
    image: "/PortfolioImages/PlataformaEgresadosBackend.webp",
    link: "https://plataforma-de-egresados-frontend.vercel.app/",
    gitLink: "https://github.com/DaniloVZR/PlataformaDeEgresados_Backend"
  },
  {
    id: "8",
    image: "/PortfolioImages/PlataformaEvaluacionesProyectos.webp",
    gitLink: "https://github.com/DaniloVZR/Plataforma-de-evaluaciones-IUPB"
  },
  {
    id: "9",
    image: "/PortfolioImages/TidalWarfare.webp",
    gitLink: "https://github.com/DaniloVZR/TidalWarfareV1"
  },
  {
    id: "6",
    image: "/PortfolioImages/PlataformaEgresados.webp",
    link: "https://plataforma-de-egresados-frontend.vercel.app/",
    gitLink: "https://github.com/DaniloVZR/PlataformaDeEgresados_Frontend"
  },
  {
    id: "1",
    image: "/PortfolioImages/Fademet.webp",
    link: "https://fademet.vercel.app",
    gitLink: "https://github.com/DaniloVZR/Fademet-Vite"
  },
  {
    id: "4",
    image: "/PortfolioImages/GuitarLA.webp",
    link: "https://guitar-la-next-1r3eu7c5k-danilovzr.vercel.app",
    gitLink: "https://github.com/DaniloVZR/GuitarLA_Next"
  },
  {
    id: "5",
    image: "/PortfolioImages/QuioscoApp.webp",
    gitLink: "https://github.com/DaniloVZR/QuioscoApp_Deploy"
  },
  {
    id: "2",
    image: "/PortfolioImages/PlanificadorDeGastos.webp",
    link: "https://admirable-kulfi-3fc4cf.netlify.app",
    gitLink: "https://github.com/DaniloVZR/Control-Gastos"
  },
  {
    id: "3",
    image: "/PortfolioImages/Encriptador.webp",
    link: "https://desencriptador-ms.netlify.app",
    gitLink: "https://github.com/DaniloVZR/Encriptador"
  }
];