import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  mysql,
  // starbucks,
  // tesla,
  // shopify,
  docker,
  express,
  school,
  college,
  pathology,
  bliss,
  veetech,
  hoslogo,
  github_b,
  jwt,
  postman,
  eye_camp,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "JWT",
    icon: jwt,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Github",
    icon: github_b,
  },
 {
    name: "Postman",
    icon: postman,
  },
{
  name: "Docker",
  icon: docker,
},
]

const experiences = [
  {
    title: "Full stack Developer (In-House Developer)",
    company_name: "Adhiparasakthi Hospitals",
    website: "https://adhiparasakthihospitals.com/",
    icon: hoslogo,
    iconBg: "#383E56",
    points: [
      "Designed and developed scalable, high-performance web applications using React, Node.js, and MongoDB.",
      "Improved API speed by 30%, optimizing system efficiency, response time, and resource utilization.",
      "Engineered secure authentication & access control mechanisms, ensuring data integrity and user protection.",
      "Automated workflows with custom dashboards, boosting productivity and simplifying complex operations.",
      "Implemented real-time data processing and optimized database queries for faster data retrieval and analysis.",
      "Integrated third-party APIs and microservices, enhancing functionality and scalability of applications.",
    ],
  },
  {
    title: "Mobile App Developer (Flutter)",
    company_name: "Adhiparasakthi Hospitals",
    icon: hoslogo,
    iconBg: "#383E56",
    points: [
      "Developed and launched high-performance Flutter apps, enhancing user engagement.",
      "Integrated robust backend services, ensuring seamless functionality and data flow.",
      "Resolved performance bottlenecks, boosting app speed, stability, and efficiency.",
      "Assisted in publishing, updating, and maintaining apps on the Play Store.",
    ],
  },
  {
    title: "Third Party HIS & Dental HIS Software Support",
    company_name: "Adhiparasakthi Hospitals",
    icon: hoslogo,
    iconBg: "#383E56", 
      // #E6DEDD
    points: [
      "Delivered top-tier technical support and issue resolution for HIS applications and Inventory applications (Fitsys, Backbone), optimizing performance and uptime.",
      "Integrated HIS with hospital systems, ensuring seamless data flow.",
      "Fixed critical system errors, minimizing downtime and disruptions.",
      "Collaborated with vendors to enhance and customize HIS functionalities.",
    ],
  },
  {
    title: "Lab LIS Integration & Configuration Developer",
    company_name: "Adhiparasakthi Hospitals",
    icon: hoslogo,
    iconBg: "#383E56",
    points: [
      "Seamlessly integrated LIS with HIS, enabling automated and error-free test result processing.",
      "Configured LIS for precise machine-to-system communication, optimizing efficiency.",
      "Automated data transfer workflows, reducing manual errors and improving accuracy.",
      "Conducted comprehensive system testing & troubleshooting, ensuring seamless operations.",
    ],
  },
];

const education = [
  {
    title: "Bachelor of Computer Application ( BCA )",
    company_name: "Madurai Kamaraj University College",
    website: "https://www.mkucollegemdu2.org/", // Correct school website
    icon: college,
    iconBg: "#E6DEDD",
    date: "June 2019 - May 2022",
    points: [
      "Completed BCA with hands-on experience in programming, software development, and database management.",
      "Strong analytical and problem solving skills, committed to continuous learning.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "1st Standard to 12th Standard",
    company_name: "St.Mary's Higher Secondery School",
    website: "https://stmaryshssmdu.in/index.html", // Correct school website
    icon: school,
    iconBg: "#383E56",
    // #383E56
    date: "June 2007 - May 2019",
    points: [
      "Twelfth grade completion with academic excellence, adept at time management, active in extracurriculars, fostering teamwork, and leadership qualities.",
    ],
  },
];


// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Eye Camp Application",
    description:
      "Effortless Eye Camp Management – Simplify patient onboarding, automate workflows, and ensure a smooth, seamless experience for staff and patients alike.",
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
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: eye_camp,
    source_code_link: "https://github.com/MurugananthamB/eyecamp-frontend.git",
    live_demo_link: "https://eyecamp-aph.netlify.app/",
  },
  {
    name: "Pathology Managment",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pathology,
    source_code_link: "https://github.com/MurugananthamB/Path-Frontend.git",
    live_demo_link: "https://pathologyportal.netlify.app/",
  },
  {
    name: "BLISS Website",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bliss,
    source_code_link:
      "https://github.com/MurugananthamB/BLISS-React-Frontend.git",
    live_demo_link: "https://bliss-med-react.netlify.app/",
  },
  {
    name: "Veetech Website",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: veetech,
    source_code_link: "https://github.com/MurugananthamB/Vee-Tech-Site.git",
    live_demo_link: "https://veetechdesign.com/",
  },
  // {
  //   name: "Pathology Managment",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: pathology,
  //   source_code_link: "https://github.com/MurugananthamB/Path-Frontend.git",
  // },
  // {
  //   name: "BLISS Website",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: bliss,
  //   source_code_link:
  //     "https://github.com/MurugananthamB/BLISS-React-Frontend.git",
  // },
  // {
  //   name: "Veetech Website",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: veetech,
  //   source_code_link: "https://github.com/MurugananthamB/Vee-Tech-Site.git",
  // },
];

export {
  services,
  technologies,
  experiences,
  // testimonials,
  projects,
  education,
};
