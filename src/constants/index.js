import htmlLogo from "@/tech_stack_pic/htmll.svg"
import cssLogo from "@/tech_stack_pic/css.svg"
import javascriptlogo from "@/tech_stack_pic/javascript.svg"
import tailwindLogo from "@/tech_stack_pic/tailwind.svg"
import reactLogo from "@/tech_stack_pic/react.svg"
import nextjsLogo from "@/tech_stack_pic/next-js-icon.svg"
import expressLogo from "@/tech_stack_pic/express.svg"
import mongodbLogo from "@/tech_stack_pic/mongodb.svg"
import nodejsLogo from "@/tech_stack_pic/nodejs.svg"
import phpLogo from "@/tech_stack_pic/php.svg"
import laravelLogo from "@/tech_stack_pic/laravel.svg"
import mySQL from "@/tech_stack_pic/sqll.svg"


export const techImage = [
  {
    title: "HTML",
    desc: "I use HTML to structure the content of web pages. It provides the basic framework for displaying text, images, and other elements on the web.",
    imgURL: htmlLogo,
    alt: "html",
    className: "w-11 h-auto",
  },
  {
    title: "CSS",
    desc: "CSS helps me style and format the HTML content. It allows me to control layout, colors, fonts, and overall presentation of the website.",
    imgURL: cssLogo,
    alt: "css",
    className: "w-11 h-auto",
  },
  {
    title: "JavaScript",
    desc: "JavaScript is used for adding interactivity to web pages. It allows me to create dynamic and responsive features for the user.",
    imgURL: javascriptlogo,
    alt: "js",
    className: "w-12 h-auto",
  },
  {
    title: "Tailwind CSS",
    desc: "Tailwind CSS is a utility-first CSS framework that streamlines the design process and helps maintain a consistent and responsive design system.",
    imgURL: tailwindLogo,
    alt: "tailwind",
    className: "w-12 h-auto",
  },
  {
    title: "React",
    desc: "I use React to build user interfaces for web applications. It offers a component-based architecture and allows for efficient rendering of data.",
    imgURL: reactLogo,
    alt: "react",
    className: "w-12 h-auto",
  },
  {
    title: "Next.js",
    desc: "Next.js is a React framework that simplifies server-side rendering and routing, improving SEO and performance in web applications.",
    imgURL: nextjsLogo,
    alt: "nextjs",
    className: "w-12 h-auto",
  },
  {
    title: "Express",
    desc: "Express is a web application framework for Node.js. It helps me build scalable and robust server-side applications.",
    imgURL: expressLogo,
    alt: "ex",
    className: "w-20 h-auto",
  },
  {
    title: "Node.js",
    desc: "Node.js is used as the server runtime for JavaScript. It enables building server-side applications with the same language as the client-side, promoting code reuse.",
    imgURL: nodejsLogo,
    alt: "nodejs",
    className: "w-16 h-auto",
  },
  {
    title: "MongoDB",
    desc: "MongoDB is a NoSQL database that provides flexible data storage for web applications, making it easier to handle unstructured data and scale as needed.",
    imgURL: mongodbLogo,
    alt: "mongodb",
    className: "w-14 h-auto",
  },
  {
    title: "PHP",
    desc: "PHP is a server-side scripting language that I use for building dynamic web applications and connecting to databases like MySQL.",
    imgURL: phpLogo,
    alt: "php",
    className: "w-16 h-auto",
  },
  {
    title: "Laravel",
    desc: "Laravel is a PHP web application framework that simplifies common tasks like routing, authentication, and caching, making development more efficient.",
    imgURL: laravelLogo,
    alt: "laravel",
    className: "w-12 h-auto",
  },
  {
    title: "MySQL",
    desc: "MySQL is a widely used relational database management system (RDBMS) that I use to store structured data for web applications.",
    imgURL: mySQL,
    alt: "mySQL",
    className: "w-12 h-auto",
  },
];

  
  export const navbarItem = [
    { value: "hero", label: "Home"},
    { value: "about", label: "About"},
    { value: "project", label: "Project"},
    { value: "contact", label: "Contact"},
  ];