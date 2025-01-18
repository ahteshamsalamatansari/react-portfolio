import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";



export const HERO_CONTENT = `With a knack for both the front end and back end, I weave seamless digital experiences from pixel-perfect design to robust server-side logic. But I don’t just stop at building great software — I turn data into actionable insights that drive success. Through innovative lead generation strategies and meticulous data analysis, I ensure businesses not only reach their audience but captivate them. Let’s transform potential into performance!`;
export const ABOUT_TEXT = `Whether you're looking to brainstorm, collaborate, or get technical advice, I’m here to help your projects reach new heights. Let's connect and make something extraordinary happen!`;
export const iconClass = ["h-12 w-12 hover:scale-125 hover:cursor-pointer transition-all ease-in-out duration:900"];
export const bggradient = ["absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"]
export const EXPERIENCES = [
  {
    year: "2021 - 2024",
    role: "Senior Sales Executive",
    company: "Funnelbyte",
    description: `Drive business growth through innovative lead generation, engaging in inbound & outbound calling, LinkedIn lead generation, and crafting compelling cold emails. Build strong customer relationships, manage sales pipelines, and collaborate with teams to exceed sales targets.`,
    technologies: ["Linkedin Sales Navigator", "Cold Calling", "apollo.io", "Zoominfo"],
  },
  {
    year: "2021 - 2022",
    role: "Software Developer",
    company: "CodeClause",
    description: `Specialized in developing robust ERP solutions using Java and SpringBoot, with extensive experience in Visual Studio and MS SQL Server. Delivered seamless integration and performance enhancements across various enterprise systems.`,
    technologies: ["Springboot", "Java", "MS SQL Server", "Microsoft Visual Studio"],
  },
  {
    year: "2018 - 2019",
    role: "Software Developer",
    company: "Affimintus Technologies",
    description: `Expert in developing scalable applications using Java MVC and Spring Core, with proficiency in designing RESTful Web APIs and version control with Git. Delivered innovative solutions and maintained high code quality standards.`,
    technologies: ["Java MVC", "Springboot", "Spring Core", "RESTful API"],
  },
];

export const EDUCATION = [
  {
    year: "2015 - 2019",
    role: "Bach. of Engineering",
    university: "Thakur Shivkumarsingh Memorial Engineering College",
    description: `A comprehensive program focused on software development, algorithms, data structures, computer networks, and system design. Equipped with strong analytical and problem-solving skills, ready to tackle real-world technological challenges.`,
  },
  {
    year: "2013 - 2015",
    role: "HSC & SSC",
    university: "State Board of Madhya Pradesh",
    description: `Completed a well-rounded curriculum with a strong focus on science and mathematics, laying a solid foundation for advanced studies in engineering and technology.`,
  },
];

export const CERTIFICATIONS = [
  {
    year: "2023 - 2024",
    role: "Certified Java Developer",
    university: "CodeClause",
    description: `Demonstrated proficiency in Java programming through rigorous coursework and hands-on projects, covering topics such as OOP, data structures, and software design patterns. Recognized for excellent coding skills and problem-solving abilities.`,
  },
  {
    year: "2022 - 2023",
    role: "Full Stack Java Developer",
    university: "Seed InfoTech, Pune",
    description: `Gained expertise in both front-end and back-end development, including technologies such as HTML, CSS, JavaScript, and Node.js.Proficient in creating dynamic web applications, managing databases, and ensuring seamless user experiences.`,
  },
]

export const PROJECTS = [
  {
    title: "Password Generator",
    image: project1,
    description:
      "Created a secure password generator using HTML, CSS, JavaScript, JDBC, and JSP, focusing on encryption and user-friendly interfaces.",
    technologies: ["HTML", "CSS", "Javascript", "JDBC", "JSP"],
    link: "https://github.com/maddy046/CodeClauseInternship_PasswordGenerator"
  },
 
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Developed a personal portfolio website utilizing HTML, CSS, and JavaScript, showcasing projects and skills with a clean and responsive design.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link: "https://github.com/maddy046/PortfolioWebsite"
  },
  {
    title: "E-Learning Website",
    image: project4,
    description:
      "Built an e-learning platform using HTML, CSS, and JavaScript for the front end, and integrated with backend technologies to provide interactive courses and assessments.",
    technologies: ["ReactJS", "Springboot", "HTML5", "mySQL"],
    link:"https://github.com/maddy046/CourseWebsite"
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

export const SOCIAL_MEDIA = [
  {
    name: "Github",
    icon: "fa-github",
    url: "https://github.com/your-username",
  },
  {
    name: "LinkedIn",
    icon: "fab fa-linkedin",
    url: "https://www.linkedin.com/in/your-profile",
  },
  {
    name: "Instagram",
    icon: "fab fa-instagram",
    url: "https://www.instagram.com/your-username",
  },
  {
    name: "Twitter",
    icon: "fab fa-twitter",
    url: "https://www.twitter.com/your-username",
  },
  {
    name: "Facebook",
    icon: "fab fa-facebook-f",
    url: "https://www.facebook.com/your-profile",
  },
]

export const BLOGS = [
  {
    title: "RESTful APIs Explained: A Developer's Road Map from Confusion to Confidence",
    date: "December 15 2024",
    content: "Discover how RESTful APIs power modern web applications. Learn the core principles, best practices, and implementation techniques for building robust API services.",
    author: "Maddy",
    image : "https://plus.unsplash.com/premium_photo-1723299602204-deac42432f93?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  },
  {
    title: "Top 5 Tips for Building a Strong Team",
    date: "July 8, 2023",
    content: "Master Email.js integration in your web projects. Learn to create dynamic contact forms and send emails directly from JavaScript without server setup.",
    author: "Maddy",
    image: "https://plus.unsplash.com/premium_photo-1669638780828-fbbe3088074a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfDB8MHx8fDA%3D"
    
  },
  
] 