import {
  // mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  c,
  cpp,
  bootstrap,
  // figma,
  // docker,
  aczeron,
  vcbay,
  threejs,
  aarvis,
  ecom,
  pawHavan,
  spotify,
  quiz,
  capcha
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Bootstrap",
  //   icon: bootstrap,
  // },
  // {
  //   name: "C",
  //   icon: c,
  // },
  // {
  //   name: "C++",
  //   icon: cpp,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "VCBay",
    icon: vcbay,
    iconBg: "#383E56",
    date: "August 2021 - Present",
    points: [
      "Streamlined event management processes by designing and deploying an intuitive Events Management tool with ReactJS, resulting in 40% faster event planning and execution.",
      "Develop a project where companies can reduce emissions by filling the log data and offsetting it.",
      "Enhanced user engagement by seamlessly highlighting relevant navigation items as users scrolled, using Intersection Observer API to deliver intuitive guidance..",
      "Integrate Eslint with this project to avoid errors and set Multi-Factor Authentication to provide an extra layer of security to users.",
      "Achieved a significant reduction of up to 30% in loading time by using lazy loading, code splitting, optimizing components, and effectively using React lifecycle methods.",
      "Developed and implemented a robust password meter algorithm that reduced account breaches by 40% and enhanced overall data security on the platform.",
      "Developed an image cropper, an editor like Google Docs, and drag and drop functionality and tools.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Aczeron India Pvt. Ltd",
    icon: aczeron,
    iconBg: "#383E56",
    date: "July 2020 - OCT 2020",
    points: [
      "Brought web pages to life with interactive elements and seamless responsiveness across devices, expertly wielding JavaScript, HTML/CSS, and media queries.",
      "Collaborated with developers and designers to develop responsive and user-friendly web pages.",
      "Improve skills in HTML and CSS to enhance the design and layout of web pages.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Paw-haven",
    description:
      "Web platform connecting animal lovers with dog NGOs for volunteering, donations, and support. Facilitates user-NGO matching, simplifies impactful action, and empowers communities to improve street dog welfare.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node js",
        color: "pink-text-gradient",
      },
      {
        name: "express js",
        color: "blue-text-gradient",
      },
    ],
    image: pawHavan,
    source_code_link: "",
  },
  {
    name: "Aarvis",
    description:
      "Developed a JavaScript web application that seamlessly incorporates voice input and response capabilities for a hands-free, intuitive user experience. Designed a streamlined user interface that guides users through voice-driven interactions, ensuring accessibility and ease of use.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: aarvis,
    source_code_link: "https://aarvis.onrender.com/",
  },
  {
    name: "1 day Ecommerce",
    description:
      " Developed a fully functional e-commerce website using React JS within a 5-hour hackathon timeframe, demonstrating rapid prototyping and problem-solving skills under pressure.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://aman97703-od-ecom.netlify.app/",
  },
  {
    name: "Spotify Clone",
    description:
      " Developed a fully functional Spotify clone and  Implemented core music streaming functionalities, including Stream tracks seamlessly with playback controls",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://aman-musicplayer.netlify.app/",
  },
  {
    name: "Quiz App",
    description:
      " Built an interactive web application that enables users to take quizzes and receive immediate feedback on their performance, demonstrating proficiency in web development, user interaction, and data management.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://seekhoquizaman97703.netlify.app/",
  },
  {
    name: "Captcha generator",
    description:
      "Developed a dynamic web application that generates CAPTCHA challenges to enhance security and user experience, demonstrating expertise in web development, accessibility, and user customization.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: capcha,
    source_code_link: "https://aman97703-captcha.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
