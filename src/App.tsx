import About from "./components/About";
import EmblaCarousel from "./components/carousel";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import type { EmblaOptionsType } from "embla-carousel";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDart,
  SiCplusplus,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
  SiNpm,
  SiVite,
  SiMysql,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import axios from "axios";
import { useEffect, useState } from "react";

export const instance = axios.create({
  baseURL: "https://malaksabry2.pythonanywhere.com/api/",
  timeout: 10000,
});

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 8;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const App = () => {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    instance.get("P/certificates/").then((res) => {
      setCerts(res.data);
    });
  }, []);
  return (
    <>
      <h1 className="pt-[110px] hello-text uppercase text-center text-8xl relative top-[-20px] text-transparent">
        hello
      </h1>
      <Hero />
      <About />
      <EmblaCarousel slides={certs} options={OPTIONS} />
      <Skills
        skills={[
          { name: "HTML", icon: <SiHtml5 /> },
          { name: "CSS", icon: <SiCss3 /> },
          { name: "JavaScript", icon: <SiJavascript /> },
          { name: "TypeScript", icon: <SiTypescript /> },
          { name: "Python", icon: <SiPython /> },
          { name: "Dart", icon: <SiDart /> },
          { name: "C++", icon: <SiCplusplus /> },
          { name: "Bootstrap", icon: <SiBootstrap /> },
          { name: "Tailwind", icon: <SiTailwindcss /> },
          { name: "React", icon: <SiReact /> },
          { name: "GitHub", icon: <SiGithub /> },
          { name: "VS Code", icon: <BiLogoVisualStudio /> },
          { name: "npm", icon: <SiNpm /> },
          { name: "Vite", icon: <SiVite /> },
          { name: "MySQL", icon: <SiMysql /> },
          { name: "Figma", icon: <SiFigma /> },
          { name: "Photoshop", icon: <SiAdobephotoshop /> },
          { name: "Illustrator", icon: <SiAdobeillustrator /> },
        ]}
      />
      <Journey />
    </>
  );
};

export default App;

// const App = () => {
//   const [skills ,setSkills]=useState([])

//   useEffect(() => {
//     instance.get('P/ST').then((res) => {
//       setSkills(res.data);
//     });
//   }, []);
//     // setCounter(counter+1);

// return(
// <>

//   <Nav />
//   <h1 className="uppercase text-center text-6xl tracking-widest text-black drop-shadow-[0_1.0px_1.0px_rgba(255,255,255,0.8)] ">hello</h1>
//   <h2>{"counter"}</h2>
//   <ul>
//     {skills.map((skill,index)=>(
//       <li key={index}>{skill.title}</li>
//     ))}
//   </ul>
// </>)
// }
// export default App;
