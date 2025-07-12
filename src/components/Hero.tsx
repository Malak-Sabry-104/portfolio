import { Mail, Github, Facebook, Linkedin } from "lucide-react";
import me from "../assets/photo_6021628713059338626_y.jpg";
import images from "../assets/photo_6021628713059338626_y.jpg";

import { toast } from "react-toastify";
import { HashLink } from "react-router-hash-link";
import GradientBtn from "./GradientButton";

const Hero = () => {
  return (
    <>
      {/* Hero Sec  */}
      <section
        id="hero"
        className="flex items-center justify-center gap-3 py-3 h-[70vh]  "
      >
        <div className="glow"></div>
        {/* Left Side */}
        <div className="left-side  w-[50%] ml-[50px] flex flex-col justify-center">
          <div className="w-[80%] text-start p-2">
            <h4 className="capitalize font-semibold text-xs italic">
              This is Malak Sabry
            </h4>
            <h1 className="text-5xl font-bold pt-1 pb-5">
              Front-End Developer
            </h1>
            <p className="capitalize flex items-center justify-start text-[14px]">
              With {/* Experience Badge */}
              <span
                className="bg-ring/10 backdrop-blur-md
               text-white px-2 rounded-xl ring-1 ring-white/30 font-semibold shadow-sm mx-2"
              >
                +2
              </span>
              years of Experience
            </p>
          </div>

          {/* CTA Btns  */}
          <div className="btns-group flex gap-4 mt-6">
            <GradientBtn
              onClick={() => {
                toast.dark("Hi!!");
              }}
            >
              Say Hello
            </GradientBtn>
            <HashLink
              className="nav-btn border-gradient px-4 py-2
               rounded-xl text-purple-100 shadow-md 
                 cursor-pointer hover:scale-[1.04]"
              to="/projects"
              smooth={true}
            >
              See Projects
            </HashLink>
          </div>

          {/* Client Card*/}
          <div
            className="client-card  client-card bg-white/10 backdrop-blur-md
           rounded-2xl shadow-lg ring-1 ring-white/10  flex gap-5 w-[40%] mt-4 "
          >
            <div className="imgs flex p-2 rounded-2xl  space-x-[-15px]  pl-[14px] ">
              <img
                src={images}
                className="w-[50px] rounded-full ring-2 ring-white"
              />
              <img
                src={images}
                className="w-[50px] rounded-full ring-2 ring-white"
              />
              <img
                src={images}
                className="w-[50px] rounded-full ring-2 ring-white"
              />
            </div>
            <div
              className="count-info bg-purple-200/40 text-white
           rounded-xl text-center shadow-inner ring-1
              ring-white/10 cursor-pointer w-[40%] my-2 mr-2 flex  flex-col justify-center items-center"
            >
              <span className="w-[100%] text-center font-semibold text-lg">
                +44
              </span>
              <p className="text-xs text-white/80">Recent Clients</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="mr-[50px] right-content flex justify-between
         items-center gap-6 w-[50%]"
        >
          <img
            src={me}
            alt="Hero"
            className=" w-[290px] rounded-full z-10   ring-2 ring-purple-500/30 "
          />

          {/* Social Icons */}
          <div className="icons flex flex-col gap-2 pt-2 text-white bg-ring/20 py-4 px-1 rounded-xl justify-center cursor-pointer  ">
            <a href="mailto:malaksabry1020@gmail.com">
              {" "}
              <Mail className="m-2 w-6 hover:text-purple-400 transition-transform hover:scale-110 " />
            </a>
            <a href="https://github.com/Malak-Sabry-104">
              {" "}
              <Github className="m-2 w-6 hover:text-purple-400 transition-transform hover:scale-110" />
            </a>
            <a href="https://www.facebook.com/share/12LFgTZ3AgM/">
              {" "}
              <Facebook className="m-2 w-6 hover:text-purple-400 transition-transform hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/malak-sabry-muhammad440221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              {" "}
              <Linkedin className="m-2 w-6 hover:text-purple-400 transition-transform hover:scale-110" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
