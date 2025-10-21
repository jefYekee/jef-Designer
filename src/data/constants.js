
export const Bio = {
  name: "Jef", // User's name
  roles: [
    "UI/UX Designer",
    "Graphic Designer",
    "Web & Mobile App Developer",
    "Brand Identity Creator"
  ],
  description: `
<p>
    I am a <strong>UI/UX Designer</strong> and <strong>Front-End Developer</strong> focused on creating <strong>intuitive, engaging, and technically robust</strong> digital experiences.
</p>
<p>
  I manage the complete <strong>IDEA &rarr; PLAN &rarr; DESIGN &rarr; DEVELOP</strong> process, integrating interface design with graphic design and development.
</p>
<p>
    My toolkit includes 
    <span style="color: #66ff33; font-weight: 600;">Figma</span>, 
    <span style="color: #66ff33; font-weight: 600;">Adobe tools</span>, 
    <span style="color: #66ff33; font-weight: 600;">HTML/CSS/JavaScript</span>, 
    <span style="color: #66ff33; font-weight: 600;">React</span>, and 
    <span style="color: #66ff33; font-weight: 600;">Node.js</span>. 
    I deliver <strong>end-to-end solutions</strong> that turn great concepts into flawless code.
</p>
  `,
};

export const skills = [
  {
    title: "Design Tools",
    skills: [
      {
        name: "Adobe Photoshop",
        image: require("../images/Adobe-Photoshop.png"),
      },
      
      {
        name: "Adobe Illustrator",
        image: require("../images/Illustrator.png"),
      },
      {
        name: "Adobe Lightroom",
        image: require("../images/Lightroom.png"),
      },
      {
        name: "Figma",
        image: require("../images/figma.png"),
      },
      {
        name: "Next Js",
        image: require("../images/nextjs.jpg"),
      },
      {
        name: "React Js",
        image: require("../images/react.png"),
      },
      {
        name: "Html",
        image: require("../images/html5.png"),
      },
    ],
  },
];




export const experiences = [
  {
    id: 0,
    img: "https://docs.vigilantliving.org/wp-content/uploads/2024/07/finalLogo.png",
    role: "Chief Technical Officer",
    company: "Vigilantliving -> Giga Health LTD ",
    date: "Jan 2021 - Present",
    desc: "Appointed as the Chief Technical Officer at Vigilantliving, a division of Giga Health LTD, since January 2021.Proficiency in HTML, CSS, JavaScript, and Node.js for efficient application development.  Leading hands-on research and development for groundbreaking e-health and wellness tech solutions. Skilled in Development Operations, Docker, and Amazon Web Services (AWS) EC2 for streamlined deployment and management, contributing to our technology-driven startup culture.",
      skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "DevOps",
      "Docker",
      "AWS",
      "EC2",
      "JavaScript",
      "Node Js",
    ],
  },
  {
    id: 1,
    img: "https://docs.vigilantliving.org/wp-content/uploads/2024/02/logoWhite-1536x606.png",
    role: "Junior Mobile App Developer",
    company: "Teamwork Homecare services",
    date: "Dec 2023 - Present",
    desc: "Junior Frontend Developer transforming Figma designs into seamless mobile interfaces for optimal user experiences.",
      skills: [
      "Figma",
      "React Native",
      "React js",
      "JavaScript",
      "Tailwind Css",
    ],
  },
  {
    id: 2,
    img: "https://lh3.googleusercontent.com/p/AF1QipP7VmBJs3Ga2Ge5hYOJ7tMv73sI6IC1n-RNZyrD=s680-w680-h510",
    role: "Junior Backend Developer",
    company: "Async Tech",
    date: "December 2020 - Present",
    desc: "Designing and developing APIs, creating and maintaining databases, writing and debugging code working with front-end developers to integrate user-facing elements with server-side logic",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "Docker",
      "AWS",
      "EC2",
      "Postgresql",
    ],
  },
  {
    id: 3,
    img: "https://docs.vigilantliving.org/wp-content/uploads/2023/11/log.png",
    role: "Freelancer",
    company: "Self Employed",
    date: "June 2018 - November 2020",
    desc: "Web developer responsible for the full development lifecycle of a website or web application, from designing and developing to testing and debugging.",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
      "Docker",
      "AWS",
      "MongoDB",
    ],
  },
 
 
];

export const education = [
  {
    id: 0,
    img: "https://methodistschool-dankuni.webs.com/NEW%20BADGE.jpg",
    school: "Coursera",
    date: "Apr 2021 - March 2023",
    desc: "I completed a Full-Stack Development with Cloud Technologies course, where I learned how to integrate full-stack applications with cloud computing technologies such as Amazon Web Services (AWS) and Google Cloud Platform (GCP). I built a web application that used AWS to store user data and GCP to serve static content.",
    degree: "CERTIFICATE",
  },
  {
    id: 1,
    img: "https://methodistschool-dankuni.webs.com/NEW%20BADGE.jpg",
    school: "Coursera",
    date: "Mar 2019 - Apr 2021",
    desc: "Pursued a course on Frontend with Django + Postgresql at Coursera, where I learned the fundamentals of front-end development with HTML, CSS, and JavaScript, as well as the basics of Django, a popular Python web framework. I also learned how to use PostgreSQL, a popular relational database management system.",
    degree: "CERTIFICATE",
  },
  {
    id: 2,
    img: "https://media.licdn.com/dms/image/C560BAQE4UC9Z_k3c7A/company-logo_200_200/0/1579422507409?e=1692230400&v=beta&t=HJssPsrwwkAJAsvFiVIYPdM8GzUuuSK5YlATKgLx3Bc",
    school: "Udemy",
    date: "Feb 2016 - Jan 2019",
    desc: "I completed a Beginner to Advanced Web Development course on Udemy, where I learned the fundamentals of web development from HTML and CSS to JavaScript and React. I also had the opportunity to collaborate with a team of experienced developers on exciting projects, which helped me to learn new technologies and build amazing projects.",
    degree: "CERTIFICATE",
  },
  
];

export const projects = [
  {
    id: 0,
    title: "Creative Logo Showcase",
    description:
      "Explore a selection of thoughtfully crafted logos, each a visual representation of brand identity. Crafted using Illustrator, Figma, and Photoshop, these logos go beyond design—they embody brand values. Take a closer look at how creativity, precision, and innovation converge to shape impactful brand identities.",
    image: require("../images/projects/graphics.png"),

    tags: [
      "FIGMA",
      "PHOTOSHOP",
      "ILLUSTRATOR",
    ],
    category: "graphic design",
    // webapp: "https://hotelsantamaria-arua.com/",
  },
  
  {
    "id": 4,
    "title": "web Agency",
    "description": "This UI showcases a sleek and modern website design for an innovative IT agency. With a focus on clean aesthetics and user-friendly navigation, the design seamlessly adapts to both desktop and mobile screens, ensuring a smooth experience across all devices. The layout highlights the agency's expertise in technology solutions, featuring intuitive sections for services, portfolio, and client engagement. This design is crafted to enhance user interaction and reflect the agency’s cutting-edge approach to digital transformation",
    image: require("../images/projects/web-app.jpg"),
    tags: [
      "FIGMA",
      "PHOTOSHOP",
      "ILLUSTRATOR",
    ],
    "category": "web app"
  },

  {
    id: 5,
    title: "TEAMWORK HOMECARE",
    description:
      "This UI showcases a sleek and modern mobile app design for Teamwork Homecare, a seamless platform for booking nurses and healthcare professionals. Designed with a user-friendly interface and intuitive navigation, the app ensures effortless access to essential healthcare services.",
    
    image: require("../images/projects/mobile-app.png"),
    // tags: ["React Native", "Expo", "Sanity", "Nextjs"],
    tags: [
      "FIGMA",
      "PHOTOSHOP",
      "ILLUSTRATOR",
    ],
    category: "android app",
    
  },
 
  // {
  //   id: 7,
  //   title: "Creative Logo Showcase",
  //   // date: "Jan 2021, ",
  //   description:
  //     "Explore a selection of thoughtfully crafted logos, each a visual representation of brand identity. Crafted using Illustrator, Figma, and Photoshop, these logos go beyond design—they embody brand values. Take a closer look at how creativity, precision, and innovation converge to shape impactful brand identities.",
  //   image:
  //     "https://docs.vigilantliving.org/wp-content/uploads/2023/11/Logos.png",
  //   tags: ["illustrator, Figma, Photoshop"],
  //   category: "graphic design",
  //   github: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
  //   webapp: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
  // },
  // {
  //   id: 8,
  //   title: "Layered Flyer Designs ",
  //   // date: "Jan 2021",
  //   description:
  //     "Explore intricately designed flyers that captivate visually. Made with Figma, Canva, and Photoshop, these go beyond typical flyers, inviting you to discover layers of creativity. Immerse yourself in this collection and experience the artistry defining these compelling visual invitations.",
  //   image:
  //     "https://docs.vigilantliving.org/wp-content/uploads/2023/11/Flyers-1-1.png",
  //   tags: ["Figma, Canva, Photoshop"],
  //   category: "graphic design",
  //   github: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
  //   // webapp: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
  // },
];

export const mypackages = [
  {
    id: 0,
    title: "Basic",
    image: "https://example.com/basic-package-image.png",
    features: [
      "Custom website design",
      "Responsive design for various devices",
      "Basic content creation assistance",
      "Basic setup of contact form and social media links",
      "Basic SEO optimization",
      "Domain and hosting assistance",
      "Limited post-launch support",
    ],
    category: "Website Development",
    price: "$150",
  },
  {
    id: 1,
    title: "Premium",
    image: "https://example.com/premium-package-image.png",
    features: [
      "All features from the Basic package",
      "Standard SEO optimization",
      "Premium support (24/7 or priority support)",
      "Extended post-launch support",
      "Enhanced security features (firewall, malware scanner, etc.)",
      "Analytics and reporting",
      "Monthly maintaince",
      "Integration with additional marketing tools and platforms",
      "Performance optimization for faster loading times",
      "Additional customization options for design and functionality",
    ],
    category: "Website Development",
    price: "$300",
  },
  {
    id: 2,
    title: "Business",
    image: "https://example.com/business-package-image.png",
    features: [
      "All features from the Premium package",
      "E-commerce integration and support",
      "Advanced e-commerce features (product variations, discounts, coupons, etc.)",
      "Payment gateway integration",
      "Inventory management system",
      "Order management system",
      "Customer relationship management (CRM) integration",
      "Multi-language support",
      "Advanced scalability and flexibility for growing businesses",
      "Dedicated account manager or consultant",
      "Custom development options for unique business needs",
    ],
    category: "Website Development",
    price: "$450",
  },
];

export const socialmedia = [
  {
    title: "Basic Package",
    skills: [
      { name: "Content Creation", image: "path-to-content-creation-icon.png" },
      { name: "Community Management", image: "path-to-community-management-icon.png" },
      // Add more skills as needed
    ],
  },
  {
    title: "Pro Package",
    skills: [
      { name: "Advanced Analytics", image: "path-to-advanced-analytics-icon.png" },
      { name: "Campaign Strategy", image: "path-to-campaign-strategy-icon.png" },
      // Add more skills as needed
    ],
  },
  // Add more packages as needed
];


export const mobilepackages = [
  {
    id: 0,
    title: "Basic",
    image: "https://example.com/basic-package-image.png",
    features: [
      "Up to 5 screens/pages",
      "Basic UI/UX design",
      "Basic features implementation",
      "Single platform (iOS or Android)",
      "Email support",
    ],
    category: "Mobile App Development",
    price: "$410 - $600",
    period: "Estimated 4-6 weeks",

  },
  {
    id: 1,
    title: "Premium",
    image: "https://example.com/premium-package-image.png",
    features: [
      "Up to 10 screens/pages",
      "Custom UI/UX design",
      "Standard features implementation",
      "Cross-platform (iOS and Android)",
      "Email and phone support",
      "Basic analytics integration",
    ],
    category: "Mobile App Development",
    price: "$799 - $1,599 ",
    period: "Estimated 8-12 weeks",

  },
];

export const certificates = [
  {
    id: 0,
    img: "https://methodistschool-dankuni.webs.com/NEW%20BADGE.jpg",
    school: "Coursera",
    date: "Apr 2021 - March 2023",
    desc: "I completed a Full-Stack Development with Cloud Technologies course, where I learned how to integrate full-stack applications with cloud computing technologies such as Amazon Web Services (AWS) and Google Cloud Platform (GCP). I built a web application that used AWS to store user data and GCP to serve static content.",
    degree: "CERTIFICATE",
  },
  {
    id: 1,
    img: "https://methodistschool-dankuni.webs.com/NEW%20BADGE.jpg",
    school: "Coursera",
    date: "Mar 2019 - Apr 2021",
    desc: "Pursued a course on Frontend with Django + Postgresql at Coursera, where I learned the fundamentals of front-end development with HTML, CSS, and JavaScript, as well as the basics of Django, a popular Python web framework. I also learned how to use PostgreSQL, a popular relational database management system.",
    degree: "CERTIFICATE",
  },
  {
    id: 2,
    img: "https://media.licdn.com/dms/image/C560BAQE4UC9Z_k3c7A/company-logo_200_200/0/1579422507409?e=1692230400&v=beta&t=HJssPsrwwkAJAsvFiVIYPdM8GzUuuSK5YlATKgLx3Bc",
    school: "Udemy",
    date: "Feb 2016 - Jan 2019",
    desc: "I completed a Beginner to Advanced Web Development course on Udemy, where I learned the fundamentals of web development from HTML and CSS to JavaScript and React. I also had the opportunity to collaborate with a team of experienced developers on exciting projects, which helped me to learn new technologies and build amazing projects.",
    degree: "CERTIFICATE",
  },
  
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
