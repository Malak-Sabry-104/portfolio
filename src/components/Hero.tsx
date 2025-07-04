import { Mail, Github, Facebook, Linkedin } from "lucide-react";
import images from "../assets/images.png";
import { toast } from "react-toastify";
import { HashLink } from "react-router-hash-link";
import GradientBtn from "./GradientButton";

const Hero = () => {
  return (
    <>
      {/* Hero Sec  */}
      <section
        id="hero"
        className="flex items-center justify-center gap-3 py-3 h-[70vh] "
      >
        <div className="glow"></div>
        {/* Left Side */}
        <div className="left-side  z-100 w-[50%] ml-[50px] flex flex-col justify-center">
          <div className="w-[80%] text-start p-2">
            <h4 className="capitalize font-semibold text-xs italic">
              This is Malak Sabry
            </h4>
            <h1 className="text-5xl font-bold pt-1 pb-5">
              UI/UX and Graphic Designer
            </h1>
            <p className="capitalize flex items-center justify-start text-[14px]">
              With {/* Experience Badge */}
              <span
                className="bg-ring/10 backdrop-blur-md
               text-white px-2 rounded-xl ring-1 ring-white/30 font-semibold shadow-sm mx-2"
              >
                +5
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
              className="border-gradient px-4 py-2 rounded-xl text-purple-100 shadow-md   cursor-pointer hover:scale-[1.04]"
              to="/#projects"
            >
              See Projects
            </HashLink>
          </div>

          {/* Client Card*/}
          <div className="client-card bg-white/10 backdrop-blur-md rounded-2xl flex w-[50%] my-4 px-4 py-5 shadow-lg ring-1 ring-white/10 justify-center items-center gap-3">
            {/* Avatar Imgs */}
            <div className="flex items-center space-x-[-15px] mb-4 pl-[10px]">
              <img
                src={images}
                alt="Client 1"
                className="rounded-full ring-2 ring-white w-[48px] h-[48px] z-30"
              />
              <img
                src={images}
                alt="Client 2"
                className="rounded-full ring-2 ring-white w-[48px] h-[48px] z-20"
              />
              <img
                src={images}
                alt="Client 3"
                className="rounded-full ring-2 ring-white w-[48px] h-[48px] z-10"
              />
            </div>

            {/* Client Count Info */}
            <div className="bg-purple-200/40 text-white px-4 py-2 rounded-xl text-center shadow-inner ring-1 ring-white/10 cursor-pointer">
              <span className="font-semibold text-lg">+44</span>
              <p className="text-xs text-white/80 mt-1">Recent Clients</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="mr-[50px] right-content flex justify-between items-start gap-3 w-[50%]">
          <img
            src={images}
            alt="Hero"
            className=" w-[260px] rounded-3xl ring-2 ring-purple-500/30 "
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
