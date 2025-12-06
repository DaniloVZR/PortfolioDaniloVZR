export const es = {
  nav: {
    home: "Inicio",
    about: "Sobre Mí",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
    close: "Cerrar"
  },
  hero: {
    welcome: "Bienvenido a mi portafolio",
    roles: [
      "Tecnológo en Desarrollo de Software",
      "Desarrollador Web",
      "Transformando Ideas en Interfaces",
      "Creando Experiencias Digitales"
    ],
    description: "Apasionado por crear soluciones digitales que generan impacto con tecnologías modernas. Conoce mi enfoque, mis proyectos y mi camino como desarrollador.",
    viewWork: "Ver Mi Trabajo",
    getInTouch: "Contáctame",
    downloadCV: "Descargar CV",
    scrollDown: "Desplázate"
  },
  about: {
    title: "Sobre",
    me: "Mí",
    subtitle: "Desarrollador de software apasionado buscando crear experiencias impactantes",
    stats: {
      experience: "Año de Experiencia",
      projects: "Proyectos Personales y académicos",
      english: "Nivel de Inglés",
      dedication: "Dedicación"
    },
    hello: {
      title: "¡Hola!",
      description: "Soy un Desarrollador de Software en crecimiento, con formación como tecnólogo y experiencia construyendo proyectos personales, académicos y reales. Actualmente me encuentro en sexto semestre de la tecnología de desarrollo de software, donde desarrollo aplicaciones fullstack con tecnologías modernas. Me apasiona crear soluciones digitales que aporten valor y estoy buscando mi primera oportunidad profesional para seguir aprendiendo y aportar al máximo."
    },
    abilities: {
      title: "Habilidades",
      description: "Manejo tecnologías modernas para el desarrollo frontend y backend, incluyendo JavaScript, React, Node.js y bases de datos SQL/NoSQL, o incluso cualquier tecnología que sea requerida. Me adapto rápidamente a nuevos entornos, trabajo bien en equipo y tengo una base sólida en algoritmos, estructuras de datos y buenas prácticas de desarrollo."
    },
    certifications: {
      title: "Certificaciones",
      description: "Cuento con certificación de inglés B2 tras 600 horas de formación, lo que me permite comunicarme efectivamente en entornos globales. Además, he completado cursos y prácticas enfocadas en desarrollo fullstack, resolución de problemas y trabajo colaborativo."
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
    title: "Experiencia",
    jobs: [
      {
        title: "GTD Colombia",
        job: "Auxiliar de Sistemas",
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
        job: "Desarrollador Frontend",
        text: [
          "Desarrollo de una landing page para un cliente dedicado al sector de metalmecánica. La página está diseñada para mostrar el trabajo del cliente, destacando sus servicios y productos, con un enfoque en la usabilidad y la experiencia del usuario.",
          "Se utilizaron tecnologías como React, SwiperJS, Aos y EmailJS."
        ]
      }
    ]
  },
  projects: {
    title: "Proyectos",
    viewCode: "Ver Código",
    viewWebsite: "Ver Sitio Web",
    items: [
      {
        id: "7",
        title: "Plataforma de Egresados - Backend",
        desc: [
          'Este fue un proyecto web (backend) para la feria FIPA 2025-2 de la IU Pascual Bravo de Medellín, Colombia.',
          'API RESTful y servidor WebSocket para la red social de egresados de la Institución Universitaria Pascual Bravo, en conjunto con el proyecto de frontend. Maneja autenticación, gestión de usuarios, publicaciones, mensajería en tiempo real y manejo de imagenes con cloudinary.'
        ],
        stack: ["NodeJS", "ExpressJS", "Javascript", "MongoDB", "Mongoose", "Socket.IO", "JWT", "Bcrypt", "Cloudinary", "SendGrid"]
      },
      {
        id: "8",
        title: "Plataforma de Evaluaciones de Proyectos Académicos",
        desc: [
          'Este fue un proyecto web para la feria FIPA 2025-1 de la IU Pascual Bravo de Medellín, Colombia.',
          'Esta página web consiste en una plataforma a donde los estudiantes de una universidad puedan agregar un proyecto a una evento estilo feria en donde se enseñen dichos proyectos. Los proyectos pueden ser evaluados jurados asignados por los administradores de la plataforma. Los administradores también pueden gestionar los eventos y los usuarios de la plataforma.'
        ],
        stack: ["Laravel", "NodeJS", "Javascript", "PostgreSQL", "PHP", "TailwindCSS", "Eloquent ORM", "Blade", "Laravel/Breeze"]
      },
      {
        id: "9",
        title: "Tidal Warfare",
        desc: [
          'Este fue un proyecto final de curso de programación orientada a objetos de la IU Pascual Bravo.',
          'Este proyecto es un videojuego 2D, donde dos jugadores pueden entrar en combate usando sus barcos, pueden recoger items que les puede subir su vida. El objetivo es destruir el barco del oponente.'
        ],
        stack: ["C#", "SQL Server"]
      },
      {
        id: "6",
        title: "Plataforma de Egresados - Frontend",
        desc: [
          'Este fue un proyecto web (frontend) para la feria FIPA 2025-2 de la IU Pascual Bravo de Medellín, Colombia.',
          'La plataforma web permite a los egresados registrarse, iniciar sesión y gestionar su perfil. Pueden actualizar su información personal y realizar publicaciones en la plataforma, además de contar con la funcionalidad de chatear con otros usuarios de la plataforma. La interfaz es intuitiva y fácil de usar.'
        ],
        stack: ["React", "Typescript", "Vite", "React Router", "Zustand", "Socket.IO Client", "CSS Modules"]
      },
      {
        id: "1",
        title: "Fademet",
        desc: "Landing Page para Fademet, empresa de metalmecánica de Medellín. La página web cuenta con distintas animaciones, galería y formulario de contacto.",
        stack: ["React", "Javascript", "Module CSS", "Aos", "EmailJS", "SwiperJS", "Vite"]
      },
      {
        id: "4",
        title: "GuitarLA",
        desc: [
          'Página web de venta de guitarras y blog de música, con funciones de carrito con local storage y uso de Strapi como CMS.',
          'Créditos: Este proyecto fue desarrollado como parte del curso de React impartido por Juan de la Torre en Udemy. He realizado modificaciones adicionales para personalizar y mejorar el proyecto.'
        ],
        stack: ["React", "Javascript", "Module CSS", "NextJS", "Strapi"]
      },
      {
        id: "5",
        title: "Quiosco App",
        desc: [
          'Página web para restaurante con un menú interactivo con las opciones del restaurante. Los clientes pueden seleccionar los productos que deseen comprar y ver un resumen de su pedido, además el sistema cuenta con una sección para administradores para gestionar las órdenes.',
          'Créditos: Este proyecto fue desarrollado como parte del curso de React impartido por Juan de la Torre en Udemy. He realizado modificaciones adicionales para personalizar y mejorar el proyecto.'
        ],
        stack: ["React", "NextJS", "Javascript", "Typescript", "TailwindCSS", "SWR", "Prisma", "UseContext", "NodeJS"]
      },
      {
        id: "2",
        title: "Planificador de Gastos",
        desc: [
          'Aplicación web planificadora de gastos con local storage, con funcionalidades como definir un presupuesto y ver datos como el dinero disponible y el dinero total gastado; además de poder agregar y filtrar los gastos, como también editarlos o eliminarlos.',
          'Créditos: Este proyecto fue desarrollado como parte del curso de React impartido por Juan de la Torre en Udemy. He realizado modificaciones adicionales para personalizar y mejorar el proyecto.'
        ],
        stack: ["React", "Javascript", "CSS", "Vite"]
      },
      {
        id: "3",
        title: "Encriptador",
        desc: "Aplicación web con la funcionalidad de encriptar o desencriptar un mensaje de texto según el tipo de encriptamiento que se le ordene. Destacar que este fue un pequeño proyecto para la universidad.",
        stack: ["React", "Javascript", "CSS", "Vite"]
      }
    ]
  },
  stack: {
    title: "Mi stack tecnológico",
  },
  footer: {
    title: "¡Contáctame!",
    description: "Estoy listo para contribuir a tu equipo y llevar tus proyectos al siguiente nivel. No dudes en ponerte en contacto conmigo para discutir cómo puedo aportar valor a tu empresa.",
    talkSoon: "¡Hablemos pronto!"
  }
};