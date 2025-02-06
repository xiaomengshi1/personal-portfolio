import {
    mobile,
    frontend,
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
    Python,
    Cathy,
    forum,
    
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React.JS Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Data analysis",
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
      name: "Mysql",
      icon: mysql,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Hoyun Fitness System",
      company_name: "Haoyun technology",
      icon: reactjs,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Develop modular front-end components: Developed 8+ reusable modular front-end components  using the React framework",
        "Dynamic responsive page design: 5+ dynamic responsive pages were implemented using HTML5 and CSS3 to ensure compatibility between mobile and desktop",
        "State management and data consistency: Managed state sharing of complex business logic through React Context API, solved the problem of cross-component data inconsistency",
        "UI Framework Integration and Development Efficiency Improvement: We integrated Material-UI and Tailwind CSS to quickly build 10+ consistent and beautiful user interfaces",
      ],
    },
    {
      title: "Blue Pigeon Intelligent Language Lab Software",
      company_name: "Haoyun technology",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Single Page Application Optimization: Using React Router to implement front-end routing management, we optimized the single page application (SPA) experience",
        "Through lazy loading and code segmentation techniques, the page loading speed was increased by 35% and the system response speed was increased by 20%",
        "Back-end service development: 5+ back-end API services were built using Node.js and Express.js to handle complex business logic",
        
      ],
    },
    {
      title: "LinkedIn Job Recommendation Engine Enhancement Project",
      company_name: "School Assignment",
      icon: Python,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Machine Learning and Optimization: Multi-objective Optimization Models, Weighted Linear Models, Genetic Algorithms, Bayesian Optimization",
        "Data Analysis and Statistical Methods: Descriptive Statistical Analysis, Confidence Interval Estimation, Hypothesis Testing, Correlation Analysis",
        "Project Management: Agile Methodology, Cross-team Collaboration, Technical Writing",
        
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Cathy Hao",
      designation: "Director",
      company: "MengCow",
      image: Cathy,
    },
    
  ];
  
  const projects = [
    {
      name: "Full-Stack post forum",
      description:
        "Web-based platform that allows users to post, comment, and send likes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: forum,
      source_code_link: "https://github.com/xiaomengshi1/React-FullStack-Forum-1",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };