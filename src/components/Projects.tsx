import { instance } from "@/App";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
// import { SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";
import { toast } from "react-toastify";

const ProjectCard = () => {
  let [projects, setProjects] = useState([]);
  const [year, setYear] = useState(2025);

  useEffect(() => {
    instance.get("P/projects/").then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <>
      <section className="pt-[8rem] grid md:grid-cols-3  justify-center gap-8 " id="projects">
        {projects.map((proj) => (
          <div className=" mx-[50px] mt-9
           relative w-[300px] rounded-3xl shadow-xl bg-[#1a1a1a]
            text-white">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2
             z-20 bg-purple-500/20 backdrop-blur-md p-2 rounded-xl
              shadow-md border border-purple-400">
              <Globe className="text-purple-200 w-7 h-7 
              cursor-pointer" />
            </div>

            <div
              className="h-32 bg-cover bg-center bg-img"
                style={{ backgroundImage: `url("${proj.image}")` }}/>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{proj.name}</h2>
              <p className="text-gray-400 text-sm mb-4">
                {proj.stack.map((s) => s.title).join(" + ")}
              </p>

              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2 mt-2 mb-4">
                  {proj.stack.map((s) => (
                    <img src={s.icon} className="w-7" />
                  ))}
                  
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
          </div>
        ))}
      </section>
      <section className="mt-9">
        <div className="mt-[100px] md:mt-0">
          <h1 className="md:text-5xl text-3xl text-center mb-6 text-purple-300 font-semibold font-mono  ">
            GitHub Contribution Graph
          </h1>
          <div
            className="bg-white/10 rounded-4xl mx-auto w-[80%] ring-2 ring-white/20"
            style={{
              minHeight: "50vh",
              padding: "2rem",
              color: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                marginBottom: "2rem",
              }}
            >
              {[2025, 2024].map((y) => (
                <button
                  key={y}
                  onClick={() => setYear(y)}
                  style={{
                    padding: "0.5rem 1.5rem",
                    borderRadius: "1rem",
                    fontWeight: "bold",
                    background: year === y ? "#a855f7" : "transparent",
                    color: year === y ? "black" : "#a855f7",
                    border: "1px solid #a855f7",
                    cursor: "pointer",
                  }}
                >
                  {y}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <GitHubCalendar
                username="malak-sabry-104"
                year={year}
                colorScheme="dark"
                blockRadius={4}
                blockSize={14}
                fontSize={14}
                showWeekdayLabels
                theme={{
                  dark: ["#161B22", "#C084FC", "#9333EA", "#6B21A8", "#581C87"],
                }}
                // renderBlock={(block, activity) => (
                //   <div title={`${activity.count} activities on ${activity.date}`}>
                //     {block}
                //   </div>
                // )}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectCard;
