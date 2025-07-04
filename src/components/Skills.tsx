import { useState } from "react";
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
const Skills = () => {
  const [skills, setSkills] = useState([
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
  ]);
  return (
    <>
      <section id="skills">
        <div className="cards  mx-[50px] grid grid-cols-4 gap-3 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="card flex items-center justify-between px-9 py-3  rounded-lg bg-purple-900/10"
            >
              <div className="text-2xl text-purple-400">{skill.icon}</div>

              <p className="text-white text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
