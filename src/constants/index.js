import {
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  devfolio,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
} from "../assets";
import infodartLogo from "../assets/infodartLogo.png";
import suntech from "../assets/Suntech Logo.png";
import EimpleLabLogo from "../assets/EimpleLabLogo.jfif";
import ditLogo from "../assets/DIT Logo.jpg";
import cLogo from "../assets/cLogo.png";
import udemy from "../assets/udemy.png";
import iotLogo from "../assets/iotLogo.jpg";
import EausetLogo from "../assets/EausetLogo.jfif";
import cpyLogo from "../assets/cpyLogo.png";
import rLogo from "../assets/rLogo.jpeg";
import ELearningLogo from "../assets/ELearningLogo.jfif";
import chatLogo from "../assets/chatLogo.webp";
import { FaJava } from "react-icons/fa";
import { SiArduino } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { FaRaspberryPi } from "react-icons/fa";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiPhp,
  SiTailwindcss,
  SiRedux,
  SiJquery,
  SiPostman,
  SiGit,
  SiVite,
  SiFigma,
  SiStyledcomponents,
  SiSass,
  SiTypescript,
  SiAxios,
  SiReactrouter,
  SiWebpack,
  SiHtml5,
  SiFirebase,
} from "react-icons/si";

import { MdIntegrationInstructions } from "react-icons/md";

import { DiCss3 } from "react-icons/di";

export const resumeLink =
  "https://drive.google.com/file/d/1l0DTV05w4IW9uGHZ8NM3Kk14QoGK8KUj/view?usp=drive_link";
export const repoLink = "https://github.com/MehraShyvanshu";

export const callToAction =
  "https://www.linkedin.com/in/shyvanshu-mehra-20a447193/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  // {
  //   id: "achievements",
  //   title: "Achievements",
  // },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certification",
    title: "Certification",
  },
  // {
  //   id: "extraCurricular",
  //   title: "Extra Curricular",
  // },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: ditLogo,
    title: "DIT University, Dehradun, Uttrakhand",
    degree: "B-Tech ( Electronics and Communication )",
    duration: "July 2018 - August 2022",
    //content1: "CGPA - 8.04",
    // content2: "Minor: Information Technology",
  },
  // {
  //   id: "education-2",
  //   icon: vbuLogo,
  //   title: "Vinoba Bhave University ,Hazaribagh, Jharkhand",
  //   degree: "Bachelor Of Computer Application (BCA)",
  //   duration: "July 2018 - September 2021",
  //   content1: "CGPA - 8.45",
  // },
];

export const achievements = [
  // {
  //   id: "a-1",
  //   icon: ethglobal,
  //   event: "",
  //   position: "Winner",
  //   content1: "Top 12 winners among 20k+ registrations",
  //   content2: "One of Polygon's Best Public Goods",
  //   content3: "",
  //   article: "",
  //   project: "",
  //   youtube: "",
  // },
  // {
  //   id: "a-2",
  //   icon: polkadot,
  //   event: "Polkadot Hackathon: Europe Edition",
  //   position: "2nd Runner Up in the ink! Smart Contract Category",
  //   content1:
  //     "Built GreenTrust offering a novel solution for obtaining certification in organic farming.",
  //   content2: "",
  //   content3: "",
  //   github: "https://github.com/pranav2305/GreenTrust",
  // },
  // {
  //   id: "a-3",
  //   icon: lightspeed,
  //   event: "Warpspeed by Lightspeed",
  //   position: "1st Runner Up",
  //   content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
  //   content2: "Top 3 projects using Replit",
  //   content3: "1st Runner Up by Amazon Web Services (AWS)",
  //   article: "https://shorturl.at/fhjsT",
  // },
  // {
  //   id: "a-4",
  //   icon: dennisivy,
  //   event: "September Hackathon by Dennis Ivy",
  //   position: "Winner",
  //   content1:
  //     "Rated the best portfolio website among 450+ participants across the globe.",
  //   content2: "",
  //   content3: "",
  //   youtube: "https://www.youtube.com/watch?v=X2473En3h_o&t=5278s",
  //   project: "https://parthmittal.netlify.app/",
  // },
  // {
  //   id: "a-5",
  //   icon: manipal,
  //   event: "Manipal Hackathon'22",
  //   position: "Consolation Prize",
  //   content1: "Top 10 among 500+ teams across India",
  //   content2:
  //     "Developed a cross-platform mobile application to address the problem of social cohesion.",
  //   content3: "",
  //   article: "https://shorturl.at/exEIQ",
  // },
  // {
  //   id: "a-6",
  //   icon: icon,
  //   event: "HackerRank",
  //   position: "Gold Badge",
  //   content1:
  //     "I've received a Gold Badge 🥇 and a 5-star rating in Problem Solving on HackerRank! ⭐⭐⭐⭐⭐",
  //   content2: "",
  //   content3: "",
  //   project: "",
  // },
  // {
  //   id: "a-7",
  //   icon: ethforall,
  //   event: "ETHForAll 2023",
  //   position: "Top 3 Superfluid Projects",
  //   content1:
  //     "Bounty winners among 430 projects in ETHGlobal's largest online hackathon.",
  //   content2: "",
  //   content3: "",
  //   project: "https://devfolio.co/projects/green-trust-ed14",
  // },
];

export const skills = [
  {
    title: "Frontend",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "React.Js",
      },
      // {
      //   id: "f-2",
      //   icon: SiRedux,
      //   name: "Redux",
      // },
      {
        id: "f-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "f-9",
        icon: SiPhp,
        name: "Php",

      },
      {
        id: "f-4",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "f-5",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "f-6",
        icon: SiStyledcomponents,
        name: "Styled Component",
      },
      // {
      //   id: "f-7",
      //   icon: SiSass,
      //   name: "SASS",
      // },
      // {
      //   id: "f-8",
      //   icon: SiTypescript,
      //   name: "TypeScript",
      // },
    ],
  },

  {
    title: "Backend",
    items: [
      {
        id: "f-1",
        icon: FaJava,
        name: "Java",
      },
      // {
      //   id: "f-2",
      //   icon: SiRedux,
      //   name: "Redux",
      // },
      {
        id: "f-3",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "f-9",
        icon: SiMysql,
        name: "Mysql",

      },
      {
        id: "f-4",
        icon: FaNodeJs,
        name: "NodeJs",
      },
      // {
      //   id: "f-5",
      //   icon: DiCss3,
      //   name: "CSS",
      // },
      // {
      //   id: "f-6",
      //   icon: SiStyledcomponents,
      //   name: "Styled Component",
      // },
      // {
      //   id: "f-7",
      //   icon: SiSass,
      //   name: "SASS",
      // },
      // {
      //   id: "f-8",
      //   icon: SiTypescript,
      //   name: "TypeScript",
      // },
    ],
  },

  {
    title: "Tools & Libraries",
    items: [
      {
        id: "t-1",
        icon: SiArduino,
        name: "Arduino",
      },
      {
        id: "t-2",
        icon: SiOracle,
        name: "Oracle",
      },
      {
        id: "t-3",
        icon: SiReactrouter,
        name: "React Router",
      },
      {
        id: "t-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "t-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "t-6",
        icon: SiJquery,
        name: "Material-UI",
      },
      {
        id: "t-7",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-8",
        icon: SiWebpack,
        name: "Webpack",
      },
      {
        id: "t-9",
        icon: SiVite,
        name: "Vite",
      },
      {
        id: "t-10",
        icon: SiFigma,
        name: "Figma",
      },
      {
        id: "t-11",
        icon: FaRaspberryPi,
        name: "RaspberryPi",
      },
      
    ],
  },
  {
    title: "APIs",
    items: [
      {
        id: "t-5",
        icon: MdIntegrationInstructions,
        name: "RESTapi",
      },
    ],
  },
  {
    title: "Version Control",
    items: [
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Infodart Technologies Ltd, India",
    logo: infodartLogo,
    link: "https://www.infodartglobal.com/",
    positions: [
      {
        title: "Software Engineer",
        duration: "August 2023 - Present",
        content: [
          {
            text: "Developed responsive user interfaces using React.js for efficient and intuitive web applications.",
            link: "",
          },
          {
            text: "Implemented state management with Redux for centralized data flow and enhanced application performance.",
            link: "",
          },
          {
            text: " Integrated RESTful APIs to fetch and display data dynamically, ensuring seamless user interactions.",
            link: "",
          },
          {
            text: "Utilized Git for version control, managing code repositories, and facilitating team collaboration.",
            link: "",
          },
          {
            text: " Actively engaged in learning and implementing new technologies to enhance development efficiency and stay updated with industry trends.",
            link: "",
          },
        ],
      },
      // {
      //   title: "Software Engineer Trainee",
      //   duration: "November 2023 - June 2024",
      //   content: [
      //     {
      //       text: "Collaborated with senior developers to design and implement responsive web interfaces using HTML, CSS, JavaScript, and React, ensuring optimal performance across devices and browsers.",
      //       link: "",
      //     },
      //     {
      //       text: "Assisted in debugging and testing applications, optimizing code for enhanced user experience while adhering to industry best practices and coding standards.",
      //       link: "",
      //     },
      //   ],
      // },
    ],
  },
  {
    organisation: "Suntech Global Infosolutions",
    logo: suntech,
    link: "https://suntechglobal.in/",
    positions: [
      {
        title: "Software Engineer",
        duration: " July 2022 – March 2023",
        content: [
          {
            text: "•Demonstrated proficiency in web development and design by creating visually appealing and responsive landing pages using HTML, CSS, and JavaScript.",
            link: "",
          },
          {
            text: "Successfully developed a personal portfolio website showcasing projects and skills, incorporating interactive elements and animations. Built a functional temperature converter application using JavaScript, allowing users to convert temperatures between different units.",
            link: "",
          },
        ],
      },
    ],
  },
  // {
  //   organisation: "Eimple Labs",
  //   logo: EimpleLabLogo,
  //   link: "https://eimple.com/",
  //   positions: [
  //     {
  //       title: "Summer Intern",
  //       duration: "July 2023 - July 2023",
  //       content: [
  //         {
  //           text: "Gained valuable experience in coding and building functional applications using HTML, CSS, JavaScript, and ReactJs. Contributed effectively to team projects, fostering a collaborative and productive work environment link",
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export const certification = [
  {
    organisation: "Coursera",
    title: "Introduction to Python",
    icon: cLogo,
    link: "https://www.infodartglobal.com/",
    duration: "January 2023",
    content1: "Python, Django, Flask",
  },
  // {
  //   organisation: "Coding Ninjas",
  //   title: "Frontend",
  //   icon: cnLogo,
  //   link: "https://oasisinfobyte.com/",
  //   duration: "Sep 2023",
  //   content1:
  //     "HTML, CSS3, JavaScript, Bootstrap, Ajax, jQuery, APIs, Material-UI, Git, Github",
  // },
  {
    organisation: "Udemy",
    title: "PHP Full Stack Web Developer Bootcamp",
    icon: udemy,
    link: "https://drive.google.com/file/d/1T6imrdqkos09Uv2HJPJQO3dZGD26YZJy/view?usp=drive_link",
    duration: "July-2020",
    content1: "HTML, CSS, JAVASCRIPT, BOOTSTRAP, PHP, MYSQL, PHP OOP, WORDPRESS, XML, API, JSON and REST",
  },

  {
    organisation: "Udemy",
    title: "Internet of Things(IoT) using Arduino",
    icon: udemy,
    link: "https://www.udemy.com/certificate/UC-9ba150a5-2434-4715-bca6-d8cef6fa31b7/",
    duration: "July-2020",
    content1: "Practical applications of modern technology, including receiving data from Arduino via Bluetooth using the HC-06 module, sending voice commands to Arduino, enabling communication between smartphones and home appliances, enhancing home technology, and using Android devices to wirelessly control electrical outlets with relay switches to reduce electricity wastage."
  },
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title:
      "Move _wiki to old table look, common template for email and settings digest only",
    link: "https://github.com/publiclab/plots2/pull/10731",
    number: "#10731",
    date: "Feb 24 2022",
    linesAdded: "101",
    linesDeleted: "48",
  },
  {
    id: "os-2",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Combine templates for email digest and settings digest",
    link: "https://github.com/publiclab/plots2/pull/10681",
    number: "#10681",
    date: "Feb 9 2022",
    linesAdded: "86",
    linesDeleted: "106",
  },
  {
    id: "os-3",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Fix reverse chronological sorting on inline grids",
    link: "https://github.com/publiclab/plots2/pull/11114",
    number: "#11114",
    date: "May 4 2022",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-4",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "style: Make post page footer responsive",
    link: "https://github.com/publiclab/plots2/pull/10634",
    number: "#10634",
    date: "Feb 24 2022",
    linesAdded: "64",
    linesDeleted: "8",
  },
  {
    id: "os-5",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Typos in Translation_System.md",
    link: "https://github.com/publiclab/plots2/issues/11120",
    number: "#11120",
    date: "May 6 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-6",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translations on layouts/_header.html.erb",
    link: "https://github.com/publiclab/plots2/issues/11115",
    number: "#11115",
    date: "May 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-7",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translation of 'This is part of' on _tagging.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10986",
    number: "#10986",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-8",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Wrong closing heading tag in _digest.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10985",
    number: "#10985",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-9",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Add class to center wiki.scraped_image in wikis template",
    link: "https://github.com/publiclab/plots2/issues/10797",
    number: "#10797",
    date: "Mar 18 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-10",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Images on /wiki are not center aligned",
    link: "https://github.com/publiclab/plots2/issues/10755",
    number: "#10755",
    date: "Mar 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-11",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-12",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-13",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "authentication: Fix placeholder realms for redirects.",
    link: "https://github.com/zulip/zulip/pull/19689",
    number: "#19689",
    date: "Sep 9 2021",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-14",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "message_editing : Fix topic edit propagate option cut-off",
    link: "https://github.com/zulip/zulip/pull/19760",
    number: "#19760",
    date: "Feb 10 2022",
    linesAdded: "9",
    linesDeleted: "8",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Home-Automation",
    github: "https://github.com/MehraShyvanshu/Home-Automation-master-IoT-Project-",
    link: "",
    image: iotLogo,
    content:
      "The main objective of this project is to develop a home automation system using an Arduino board with Bluetooth being remotely controlled by any Android OS smartphone. As technology is advancing so houses are also getting smarter. Modern houses are gradually shifting from conventional switches to centralized control system, involving remote controlled switches. Presently, conventional wall switches located in different parts of the house makes it difficult for the user to go near them to operate. Even more it becomes more difficult for the elderly or physically handicapped people to do so. Remote controlled home automation system provides a most modern solution with smartphones.",
    stack: [
      {
        id: "icon-1",
        icon: FaJava,
        name: "Java",
      },
       {
         id: "icon-5",
         icon: SiArduino,
         name: "Arduino",
       },
      // {
      //   id: "icon-3",
      //   icon: SiHtml5,
      //   name: "HTML",
      // },
      // {
      //   id: "icon-4",
      //   icon: DiCss3,
      //   name: "CSS",
      // },
      // {
      //   id: "icon-2",
      //   icon: SiTailwindcss,
      //   name: "TailwindCSS",
      // },
    ],
  },
  {
    id: "project-2",
    title: "Obstacle-avoider-voice-control-robot",
    github: "https://github.com/MehraShyvanshu/Obstacle-avoider-voice-control-robot-IoT-Project-",
    link: "",
    image: iotLogo,
    content:
      "Arduino obstacle avoiding, voice control, bluetooth control car: This robot was made using Arduino UNO equipped with ultrasonic sensors to detect obstacles in its path, Bluetooth module which serves as a wireless communication interface, Motor driver L293D which controls the motor of the robot.",
    stack: [
      {
        id: "icon-1",
        icon: SiArduino,
        name: "Arduino",
      },
      // {
      //   id: "icon-5",
      //   icon: SiJavascript,
      //   name: "JavaScript",
      // },
      // {
      //   id: "icon-3",
      //   icon: SiHtml5,
      //   name: "HTML",
      // },
      // {
      //   id: "icon-4",
      //   icon: DiCss3,
      //   name: "CSS",
      // },
      // {
      //   id: "icon-2",
      //   icon: SiTailwindcss,
      //   name: "TailwindCSS",
      // },
    ],
  },
  {
    id: "project-7",
    title: "Real-time-Chat-App-master",
    github: "https://github.com/MehraShyvanshu/Real-time-Chat-App-master/tree/main",
    link: "",
    image: chatLogo,
    content:
      "Basic real time chat application with : Node.js, socket.io, ExpressJS",
    stack: [
      {
        id: "icon-1",
        icon: FaNodeJs,
        name: "Nodejs",
      },
      {
        id: "icon-5",
        icon: SiJavascript,
        name: "JavaScript",
      },
      // {
      //   id: "icon-3",
      //   icon: SiHtml5,
      //   name: "HTML",
      // },
      // {
      //   id: "icon-4",
      //   icon: DiCss3,
      //   name: "CSS",
      // },
      // {
      //   id: "icon-2",
      //   icon: SiTailwindcss,
      //   name: "TailwindCSS",
      // },
    ],
  },
  {
    id: "project-3",
    title: "Chat-Master-using-Python-and-Django",

    github: "https://github.com/MehraShyvanshu/Chat-Master-using-Python-and-Django/tree/main/django-channels-chat-master",
    link: "",
    image: cpyLogo,
    content:
      "A small functional person-to-person message center application built using Django. It has a REST API and uses WebSockets to notify clients of new messages and avoid polling.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "icon-2",
        icon: DiDjango,
        name: "Django",
      },
      {
        id: "icon-3",
        icon: FaCss3,
        name: "Css",
      },
      {
        id: "icon-4",
        icon: IoLogoJavascript,
        name: "Javascript",
      },
      {
        id: "icon-5",
        icon: FaBootstrap,
        name: "Bootstrap",
      },
      {
        id: "icon-6",
        icon: DiJqueryLogo,
        name: "Jquery",
      },
    ],
  },
  {
    id: "project-4",
    title: "Python-Radar-Emulator-Master",
    github: "https://github.com/MehraShyvanshu/Python-Radar-Emulator-Master/tree/main/arduino-python-radar-emulator-master",
    link: "",
    image: rLogo,
    content:
      "Arduino radar emulator using ultrasonic sensor and servo motor. Python uses the serial port to read data from Arduino board and plots it in real-time to emulate a radar by approximating the distance of objects along the 180° axis of the servo motor.",
    stack: [
      {
        id: "icon-1",
        icon: SiArduino,
        name: "Arduino",
      },
      {
        id: "icon-5",
        icon: SiPython,
        name: "Python",
      },
      // {
      //   id: "icon-3",
      //   icon: SiHtml5,
      //   name: "HTML",
      // },
      // {
      //   id: "icon-4",
      //   icon: DiCss3,
      //   name: "CSS",
      // },
      // {
      //   id: "icon-2",
      //   icon: SiTailwindcss,
      //   name: "TailwindCSS",
      // },
    ],
  },
  // {
  //   id: "project-5",
  //   title: "E-Learning App",
  //   github: "https://github.com/Shristy1908/E-learning-App",
  //   link: "https://e-learning-app-tau.vercel.app/",
  //   image: ELearningLogo,
  //   content:
  //     "Developed an interactive eLearning application using React, enhancing user engagement through dynamic content delivery and responsive design",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiReact,
  //       name: "React",
  //     },
  //     {
  //       id: "icon-5",
  //       icon: SiJavascript,
  //       name: "JavaScript",
  //     },
  //     {
  //       id: "icon-3",
  //       icon: SiHtml5,
  //       name: "HTML",
  //     },
  //     {
  //       id: "icon-4",
  //       icon: DiCss3,
  //       name: "CSS",
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiTailwindcss,
  //       name: "TailwindCSS",
  //     },
  //   ],
  // },
  {
    id: "project-6",
    title: "Portfolio",
    github: "https://github.com/MehraShyvanshu/My-Portfolio",
    link: "https://shyvanshuportfolio.netlify.app/",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML",
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    id: 2,
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    id: 3,
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    id: 4,
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: iris,
  },
  {
    id: 5,
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/shyvanshu-mehra-20a447193/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/MehraShyvanshu",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:shyvanshumehra179@gmail.com",
  },
  // {
  //   id: "social-media-5",
  //   icon: AiFillInstagram,
  //   link: "",
  // },
];

export const aboutMe = {
  name: "Shyvanshu Mehra",
  tagLine:
    "Software Engineer @Infodart Technology Ltd | Software Developer",
  intro:
    "Dedicated Frontend Developer with expertise in React, focused on building responsive, user-centric web applications.",
};
