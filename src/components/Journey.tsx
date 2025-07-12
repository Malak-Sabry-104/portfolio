const Journey = () => {
  return (
    <>
      <section className="h-100 relative " id="journey">
        <div className="glow z-100"></div>
        <div className="glow-editting glow"></div>

        <h2 className=" text-2xl md:text-4xl text-center
         p-2 mt-9 tracking-widest capitalize mb-3 md:mb-9 gradient-text">
          My Academic and professional journey
        </h2>
        <div className="md:mx-[50px] mx-[20px] flex justify-center gap-4 md:gap-8">
          <div className="edu w-[50%]  gap-3 flex flex-col mb-3">
            <h3 className="p-2 text-lg md:text-2xl text-center text-white/70 ">
              Education
            </h3>
            <div className="card bg-white/10 py-5 w-[100%] px-4 ">
              <span className="text-sm gradient-text font-semibold italic ">
                October 2023
              </span>{" "}
              {/* date */}
              <h4 className="font-semibold ">Web development Track</h4>
              {/* coursename */}
              <p className="text-sm  mt-2 text-white/40 ">
                WE Applied Technology School
              </p>{" "}
              {/* provider */}
            </div>
            <div className="card bg-white/10 py-5 w-[100%] px-4 ">
              <span className="text-sm gradient-text font-semibold italic ">
                May 2025
              </span>{" "}
              {/* date */}
              <h4 className="font-semibold ">React Course</h4>
              {/* coursename */}
              <p className="text-sm  mt-2 text-white/40 ">
              Code With Mosh
              </p>{" "}
              {/* provider */}
            </div>
            <div className="card bg-white/10 py-5 w-[100%] px-4 ">
              <span className="text-sm gradient-text font-semibold italic ">
              April 2025
              </span>{" "}
              {/* date */}
              <h4 className="font-semibold ">TailwindCss</h4>
              {/* coursename */}
              <p className="text-sm  mt-2 text-white/40 ">
              Code With Mosh
              </p>{" "}
              {/* provider */}
            </div>
          </div>
          <div className="achievements w-[50%] gap-3 flex flex-col mb-3">
            <h3 className="p-2 text-lg md:text-2xl text-center text-white/70">
              Achievements
            </h3>
            <div className="card bg-white/10 py-3 w-[100%] px-4">
              <span className="text-sm gradient-text font-semibold italic">
                March 2025
              </span>
              {/* date */}
              <h4 className="font-semibold">
                2nd place at Scrapyard Alex
              </h4>
              {/* title */}
              <p className="text-sm  mt-2 text-white/40 ">
                A 2 days of a hackclub hackathon, where high school students are
                building projects that support youth and entrepreneurs.
              </p>
              {/* description */}
            </div>
            <div className="card bg-white/10 py-3 w-[100%] px-4">
              <span className="text-sm gradient-text font-semibold italic">
              July 2024
              </span>
              {/* date */}
              <h4 className="font-semibold">
              53rd place at ECPC 
              </h4>
              {/* title */}
              <p className="text-sm  mt-2 text-white/40 ">
              A competetive Programing contest
              </p>
              {/* description */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Journey;
