
const skills = [
  "C++",
  "JavaScript",
  "Python",
  "TypeScript",
  "Dart",
  "HTML",
  "CSS",
  "TailwindCSS",
  "Bootstrap",
  "React",
  "MySQL",
  "npm",
  "Vite",
  "GitHub",
  "Figma",
  "Photoshop",
  "Illustrator",
];

const SkillButton = ({ skill }: { skill: string }) => (
  <button
    className="relative rounded-lg px-6 py-2 font-medium 
    font-openSans backdrop-blur-xl transition-shadow duration-300
     ease-in-out hover:shadow top-[0px]
      dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] 
      dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]"
    tabIndex={0}
  >
    <span
      className="relative  block size-full text-sm tracking-wide
       text-purple-200 dark:font-light dark:text-[rgb(255,255,255,90%)]"
    >
      {skill}
    </span>
    <span className="absolute inset-0 z-10  block rounded-[inherit] p-px"></span>
  </button>
);

const SkillsSection = () => {
  return (
    <div className="relative flex  top-[-55px] flex-wrap gap-4 max-w-5xl justify-center px-4 py-6">
      {skills.map((skill) => (
        <SkillButton key={skill} skill={skill} />
      ))}
    </div>
  );
};

const TechStack = () => {
  return (
    <section id="skills">
<div className="dark:bg-[#0f0017] md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col">
      <div className="flex flex-col gap-36">
        <div className="flex flex-col">
          <div className="mb-0 sm:mb-12 mt-36">
            <section className="flex flex-col text-center w-full justify-center items-center gap-6 md:gap-10 px-4">
              <div className="max-w-lg text-center flex justify-center items-center flex-col gap-2">
                <p className="text-2xl md:text-4xl font-ysabeau text-purple-500">
                  SKILLS
                </p>
                <p className="text-sm md:text-lg lg:text-xl  text-purple-200 font-ubuntu font-medium">
                  My key expertises and technical proficiencies
                </p>
              </div>
            </section>
          </div>

          <div className="flex relative max-h-[429.44px] min-h-[429.44px] h-[60vh] flex-col items-center justify-center overflow-hidden dark:bg-[#0f0017] w-full rounded-md z-0">
            {/* Background Gradients & Overlays */}
            <div className="hidden sm:flex relative items-center justify-center isolate z-0">
              {/* Left Gradient */}
              <div
                className="hidden sm:block absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-purple-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                style={{
                  backgroundImage:
                    "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
                  opacity: 1,
                  width: "30rem",
                }}
              >
                <div className="hidden sm:block absolute w-full left-0 dark:bg-[#0f0017] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                <div className="hidden sm:block absolute w-40 h-full left-0 dark:bg-[#0f0017] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
              </div>

              {/* Right Gradient */}
              <div
                className="hidden sm:block absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-purple-500 text-white [--conic-position:from_290deg_at_center_top]"
                style={{
                  backgroundImage:
                    "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
                  opacity: 1,
                  width: "30rem",
                }}
              >
                <div className="hidden sm:block absolute w-40 h-full right-0 dark:bg-[#0f0017] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                <div className="hidden sm:block absolute w-full right-0 dark:bg-[#0f0017] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
              </div>

              {/* Background Overlays */}
              <div className="hidden sm:block absolute top-1/2 h-48 w-full translate-y-12 dark:bg-[#0f0017] blur-2xl" />
              <div className="hidden sm:block absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
              <div className="hidden sm:block absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-purple-500 opacity-50 blur-3xl" />
              <div
                className="hidden sm:block absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-purple-400 blur-2xl"
                style={{ width: "16rem" }}
              />
              <div
                className="hidden sm:block top-[-30px] absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-purple-400"
                style={{ width: "15rem" }}
              />
              <div className="hidden sm:block absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-50 dark:bg-[#0f0017]" />
            </div>

            {/* Skills Buttons Section */}
            <div className="relative z-50 flex -translate-y-4 flex-col items-center px-5">
              <SkillsSection />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default TechStack;
