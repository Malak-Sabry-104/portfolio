import type { JSX } from "react";

interface Props{
  skills:{
    icon: JSX.Element;
    name: string;
  }[]
}
const Skills = ({skills}:Props) => {
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
