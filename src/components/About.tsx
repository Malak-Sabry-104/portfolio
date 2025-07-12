import { toast } from "react-toastify";
import images from "../assets/images.png";
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
            <img src={images} alt="" className="w-full  rounded-2xl" />
          </div>
          <div className="border-r-2  border-purple-500/20 shadow-[0_0_7px_rgba(168,85,247,0.5)] rounded-xl p-[2px] "></div>
          <div className="right md:w-[77%] w-[100%] text-md p-4 flex flex-col items-start ">
            <p className="md:text-start text-center text-md">
              I am Malak, a high school student, and I have always had a passion
              for technology since I was young, but I started my journey since
              the ninth grade of primary school. High school helped me and
              guided me, and I started my journey in website development. I
              participated in competitions, including ISEF, and worked on many
              projects. I seek to be a full-stack developer and to learn more
              skills and increase my programming experience.
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
