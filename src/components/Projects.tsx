import { instance } from "@/App";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";
import { toast } from "react-toastify";

const ProjectCard = () => {
  let [projects, setProjects] = useState([]);

  useEffect(() => {
    instance.get('P/projects/').then((res) => {
      setProjects(res.data);
    })
  }, [])

  return (
    <>
      <section className="pt-[8rem] flex gap-8 " id="projects">
        {projects.map((proj) => <div className="mx-[50px] mt-9 relative w-[300px] rounded-3xl shadow-xl bg-[#1a1a1a] text-white">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 bg-purple-500/20 backdrop-blur-md p-2 rounded-xl shadow-md border border-purple-400">
            <Globe className="text-purple-200 w-7 h-7 cursor-pointer" />
          </div>
          <div className="h-32 bg-cover bg-center bg-img" style={{backgroundImage: `url("${proj.image}")`}} />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{proj.name}</h2>
            <p className="text-gray-400 text-sm mb-4">
              {proj.stack.map((s) => s.title).join(" + ")}
            </p>

            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2 mt-2 mb-4">
                {proj.stack.map((s) => <img src={s.icon} className="w-7" />)}
                {/* <SiReact className="text-xl text-purple-400 " />
                <SiTypescript className="text-purple-400 text-xl" />
                <SiTailwindcss className="text-purple-400 text-xl" /> */}
              </div>
              <div>
                <button
                  className="text-[10px] border-gradient px-3 py-2 rounded-xl text-purple-100 shadow-md   cursor-pointer hover:scale-[1.02] border-gradient"
                  onClick={() => {
                    toast.dark("Coming Soon");
                  }}
                >
                  More Info
                </button>
              </div>
            </div>

            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-semibold">Progress</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-purple-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>)}
      </section>
    </>
  );
};

export default ProjectCard;
