import {
    IoCodeWorking,
    IoLogoGithub,
    IoLogoYoutube,
    IoLogoTwitter,
    IoLogoLinkedin,
    IoLogoWhatsapp,
  } from "react-icons/io5";
  import profile from "./images/profile.jpeg";
  import project1 from "./images/project1.png";
  import project2 from "./images/project2.png";
  
  export const Experience = [
    {
      id: 1,
      date: "2021 - present",
      iconsSrc: <IoCodeWorking />,
      title: "Web Developer",
      company: "OnebByte",
      location: "Lahore, Pakistan",
      description:
        "Working as Frontend and Wordpress developer",
    },
    {
      id: 2,
      date: "2021",
      iconsSrc: <IoCodeWorking />,
      title: "Intern",
      company: "DHA Main complex",
      location: "Lahore, Pakistan",
      description:
        "Intern as a IOT developer",
    },
    
  ];
  
  export const Projects = [
    {
      id: 1,
      name: "RedBuffer",
      imageSrc: project1,
      techs: "Wordpress",
      github: "https://redbuffer.ai/",
    },
    {
      id: 2,
      name: "Salahmusic Portfolio",
      imageSrc: project2,
      techs: "Wordpress",
      github: "https://salahmusicofficial.com/",
    },
  
  ];
  
  export const SocialLinks = [
    {
      id: 1,
      iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
      name: "GitHub",
      link: "https://github.com/HafizAwais5",
    },
   
    {
      id: 3,
      iconSrc: (
        <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
      ),
      name: "Twitter",
      link: "https://twitter.com/awaismahmood44",
    },
    {
      id: 4,
      iconSrc: (
        <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
      ),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/hafiz-awais-48694b156/",
    },
   
  ];