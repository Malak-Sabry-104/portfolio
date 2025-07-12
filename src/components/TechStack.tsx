import React from "react";

type Category = {
  title: string;
  items: string[];
};

const techCategories: Category[] = [
  {
    title: "Languages",
    items: [
      "C",
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frontend",
    items: ["TailwindCSS", "Bootstrap", "React", "Next.js"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Django", "MongoDB", "MySQL", "AWS"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Figma", "Postman", "Three.js"],
  },
];

const TechStack: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0b0011] px-6 py-16 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[400px] bg-purple-500 blur-3xl opacity-30 rounded-full" />

      {/* Main Content */}
      <div className="z-10 text-center w-full max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          My Tech Stack
        </h2>
        <div className="flex flex-col gap-12">
          {techCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl text-white/70 mb-4">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-white/20 text-white text-sm bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
