const Journey = () => {
  return (
    <>
      <section className="md:h-[143vh]  relative " id="journey">
        <div className="glow z-100"></div>
        <div className="glow-editting glow"></div>

        <h2 className="text-2xl md:text-4xl text-center p-2 mt-9 tracking-widest capitalize mb-3 md:mb-9 gradient-text">
          My Academic and Professional Journey
        </h2>

        <div className="md:mx-[50px] mx-[20px] flex justify-center gap-4 md:gap-8 flex-wrap md:flex-nowrap">
          {/* Education */}
          <div className="edu w-full md:w-[50%] gap-3 flex flex-col mb-3">
            <h3 className="p-2 text-lg md:text-2xl text-center text-white/70">
              Education
            </h3>
            {[
              {
                date: "Expected Graduation 2026",
                title: "Study Web Development",
                desc: "WE Applied Technology School"
              },
              // {
              //   date: "May 2025",
              //   title: "React Course",
              //   desc: "Code With Mosh"
              // },
              // {
              //   date: "April 2025",
              //   title: "TailwindCSS Course",
              //   desc: "Code With Mosh"
              // },
              {
                date: "May 2024",
                title: "53rd Place – ECPC",
                desc: "Participated in one of Egypt’s top competitive programming contests."
              },
              {
                date: "November 2024",
                title: "101st Globally – Physics Brawl Online",
                desc: "Scored 46 points in a prestigious international physics competition."
              },
              {
                date: "December 2024",
                title: "Participant – ISEF 2024",
                desc: "Built a platform to help individuals with rare diseases find vital resources."
              }
            ].map((item, idx) => (
              <div key={idx} className="card bg-white/10 py-5 w-full px-4">
                <span className="text-sm gradient-text font-semibold italic">
                  {item.date}
                </span>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm mt-2 text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="achievements w-full md:w-[50%] gap-3 flex flex-col mb-3 ">
            <h3 className="p-2 text-lg md:text-2xl text-center text-white/70">
              Achievements
            </h3>
            {[
              {
                date: "March 2025",
                title: "2nd Place – Scrapyard Alex",
                desc: "Developed Thoughty, an AI platform for youth to share and monetize ideas."
              },
              {
                date: "June 2025",
                title: "1st Place – Creativity & Ambition",
                desc: "Won for an interactive and innovative educational game website."
              },
              {
                date: "June 2025",
                title: "Top Globally – IEEE YESIST 12",
                desc: "Built a productivity app with AI and neuroscience techniques (Emovate)."
              },
              {
                date: "May 2025",
                title: "Top 3 – YIL with AnkhNet",
                desc: "Developed a vibration-based system for deafblind communication."
              },
              {
                date: "June 2025",
                title: "Winner – Grub & Reactive Hackathons",
                desc: "Recognized for impactful web development projects."
              },
              {
                date: "June 2025",
                title: "Winner – Terminal Craft v2",
                desc: "Won with Axon CLI, a command-line innovation toolset."
              }
            ].map((item, idx) => (
              <div key={idx} className="card bg-white/10 py-3 w-full px-4">
                <span className="text-sm gradient-text font-semibold italic">
                  {item.date}
                </span>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm mt-2 text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Journey;
