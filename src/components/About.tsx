import { toast } from "react-toastify";
import images from "../assets/photo_6021628713059338622_y.jpg";
import { HashLink } from "react-router-hash-link";

const About = () => {
  return (
    <>
      <section id="about" className="mt-[100px] ">
        <h1 className="header text-[28px] md:text-5xl font-semibold  mx-auto overflow-hidden ">
          Know Who <span className="gradient-text ">I'm</span>
        </h1>
        <div className="justify-between  flex flex-col md:flex-row   pt-[20px]  pb-[50px] px-[50px]">
          <div className="left flex justify-center items-center mb-4  rounded-2xl ">
            <img src={images} alt="" className="w-[250px]  rounded-2xl" />
          </div>
          <div className="border-r-2  border-purple-500/20 shadow-[0_0_7px_rgba(168,85,247,0.5)] rounded-xl p-[2px] "></div>
          <div className="right md:w-[77%] w-[100%] text-md p-4 flex flex-col items-start ">
            <p className="md:text-start text-center text-md">
              I'm Malak Sabry, a high school student and passionate front-end
              developer with a strong interest in UI/UX design. While my journey
              with technology began earlier, I officially started exploring web
              development in 9th grade. Since then, I’ve participated in several
              competitions and worked on various projects that have shaped my
              skills and creativity. High school has played a significant role
              in supporting my learning journey. It allowed me to explore my
              passion more deeply and provided a strong foundation in both
              design and programming. I'm always eager to learn new technologies
              and expand my knowledge, with the goal of becoming a full-stack
              developer.
            </p>
            <div className="flex items-center gap-8 mt-4 justify-center">
              <HashLink
                smooth={true}
                to="/#journey"
                className="link relative italic "
              >
                Education
              </HashLink>
              <HashLink
                smooth={true}
                to="/#journey"
                className="link relative italic "
              >
                Experiences
              </HashLink>

              <HashLink
                to="/#skills"
                smooth={true}
                className="link relative italic "
              >
                Skills
              </HashLink>
            </div>
            <div className="flex justify-center  items-center  gap-10 mt-9">
              <button
                className=" text-xs md:text-sm bg-gradient md:px-3 px-5 md:py-2 py-1 rounded-xl backdrop-blur-md text-purple-100 ring-1 ring-purple-300/30 hover:scale-[1.04] shadow-md  cursor-pointer"
                onClick={() => {
                  toast.dark("Coming Soon");
                }}
              >
                Download CV
              </button>
              <HashLink
                className=" text-xs md:text-sm border-gradient md:px-3 px-5 md:py-2 py-1 rounded-xl text-purple-100 shadow-md text-center  cursor-pointer hover:scale-[1.04]"
                to="/#journey"
                smooth={true}
              >
                More Info
              </HashLink>
            </div>

            {/* the content that appears when click in the a  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
