import {
  logo1,
  backend,
  mobile,
  web,
  aws,
  mui,
  figma,
  git,
  dart,
  github,
  javascript,
  nestify,
  donorpulse,
  school,
  tasks,
  pbrs,
  raj,
  ravi,
  rudransh,
  rablo
  
} from '../assets'

// Import Tekisky separately
import takshshila from "../assets/takshshila.png";

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
   {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Flutter Developer",
    icon: mobile,
  },
   {
    title: "Dart",
    icon: dart,
  },
  {
    title: "Firebase",
    icon: aws,
  },
  {
    title: "Github",
    icon: github,
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: mobile,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Firebase",
    icon: aws,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Flutter Flow",
    icon: mui,
  },
  {
    name: "VS Code",
    icon: web,
  },
  {
    name: "Android Studio",
    icon: logo1,
  },
  {
    name: "Postman",
    icon: backend, 
  },
];


const experiences = [
  {
    title: "Flutter Developer",
    company_name: "Student / Personal Projects",
    icon: takshshila, // You can replace this with your own logo if you have one
    iconBg: "#383E56",
    date: "2021 - 2025",
    points: [
      "Developed multiple Flutter applications with Firebase backend for real-time data.",
      "Built scalable user interfaces and maintained code quality with best practices.",
"Completed B.Tech in Computer Science from Takshshila Institute of Engineering & Technology, Jabalpur, securing a CGPA of 8.05."    ],
  },
  {
    title: "Flutter Developer Intern",
    company_name: "Rablo Software Limited",
    icon: rablo, 
    iconBg: "#383E56",
    date: "Dec 2024 - Feb 2025",
    points: [
      "Developed responsive and visually appealing mobile interfaces using Flutter and Dart.",
      "Implemented state management using GetX to efficiently manage UI state and business logic.",
      "Collaborated using Git and GitHub for version control and project sharing.",
      "Gained hands-on experience in publishing debug APKs and testing on real Android devices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Prashant is a dedicated developer who delivered a great Flutter app for our project.",
    name: "Rajkumar Patel",
    designation: "Senior Flutter Dev",
    company: "Impetrosys",
    image: raj,
  },
  {
    testimonial:
      "His work ethic and skills helped us launch our app on time with excellent quality.",
    name: "Ravi Kumar",
    designation: "Flutter Developer",
    company: "Rablo Software Limited",
    image: ravi,
  },
  {
    testimonial:
      "Highly recommend Prashant for any Flutter development needs.",
    name: "Rudransh Pandey",
    designation: "Flutter Developer",
    company: "Rablo Software Limited",
    image: rudransh,
  },
];

const projects = [
  {
    name: "Nestify",
    description:
      "Nestify is a room rental Flutter app with features like user authentication, room listing, and real-time chat.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: nestify,
    source_code_link: "https://github.com/Prashant1125/Nestify",
  },
  {
    name: "Donor Pulse",
    description:
      "Blood donation app built in Flutter that helps users find nearby donors and organize donation drives.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
       {
        name: "getx",
        color: "pink-text-gradient",
      },
    ],
    image: donorpulse, 
    source_code_link: "https://github.com/Prashant1125/Rakt_daan.git",
  },
  {
    name: "School Management",
    description:
      "A Flutter-based school management system with attendance, homework, announcements, and calendar features.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "local storage",
        color: "yellow-text-gradient",
      },
       {
        name: "getx",
        color: "pink-text-gradient",
      },
    ],
    image: school,
    source_code_link: "https://github.com/Prashant1125/Student-Management.git",
  },
  {
    name: "Task Manager",
    description:
      "Task Manager app for organizing and managing daily tasks with notifications and reminders.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: tasks,
    source_code_link: "https://github.com/Prashant1125/Tasks.git",
  },
  {
    name: "PBRS",
    description:
      "A project management and booking system developed with Flutter and Firebase.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Apis",
        color: "yellow-text-gradient",
      },
    ],
    image: pbrs, 
    source_code_link: "https://github.com/Rajkumar07793/pbrs_mart.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
