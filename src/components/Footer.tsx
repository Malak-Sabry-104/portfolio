import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { Github, Linkedin } from "lucide-react";
import { HashLink } from 'react-router-hash-link';

import footerVideo from "../assets/blackhole.webm";
import { toast } from "react-toastify";

const Footer = () => {
  return (
    <>
      <section id="footer" className="relative flex items-end mt-100">
        <video
          autoPlay
          loop
          muted
          className="z-90 w-[100%] object-cover h-[80vh] absolute "
        >
          <source src={footerVideo} type="video/webm" />
        </video>
        <footer className="flex flex-col  gap-7 justify-center items-center overflow-hidden w-[100%] ">
          <div
            className=" flex justify-between px-[60px]  z-100 
           bg-[#030014]/10 pt-4 w-[90%] mx-[50px]  backdrop-blur-xl "
          >
            <div className="left">
              <h4 className="text-lg font-semibold my-1 capitalize text-white">
                Malak
              </h4>
              <p className="text-white/60 w-[200px] tracking-wider py-2 mb-3">
                Crafting digital ecstasies with code, creativity (& a bit of
                caffiene of course!).{" "}
              </p>
              <span className="gradient-text uppercase font-semibold">
                Thanks for stopping, bye!
              </span>
            </div>
            <div className="cen1">
              <ul className=" ">
                <h4 className="text-lg font-semibold my-1 capitalize text-white">
                  {" "}
                  Quick Links
                </h4>
                <li
                  className=" hover:text-purple-400 transition-transform
                 hover:scale-105 list-none mb-1 text-white/60 text-md capitalize hover:underline"
                >
                  <HashLink to="/">Home</HashLink>
                </li>
                <li
                  className=" hover:text-purple-400 transition-transform
                 hover:scale-105 list-none mb-1 text-white/60 text-md capitalize hover:underline"
                >
                  <HashLink to="/#about" smooth={true}>About</HashLink>
                </li>
                <li
                  className=" hover:text-purple-400 transition-transform 
                hover:scale-105  list-none mb-1 text-white/60 text-md capitalize hover:underline"
                >
                  <HashLink to="/#projects" smooth={true}>Projects</HashLink>
                </li>
                <li
                  className=" hover:text-purple-400 transition-transform 
                hover:scale-105 hover:underline list-none mb-1 text-white/60 text-md capitalize"
                >
                  <HashLink to="/contact" smooth={true}>Contact</HashLink>
                </li>
              </ul>
            </div>
            <div className="cen2">
              <h4 className="text-lg font-semibold my-1 capitalize text-white">
                Get IN Touch
              </h4>
              <div className="data">
                <div
                  className="cursor-pointer hover:text-purple-400 
                transition-transform hover:scale-102  flex gap-2 justify-start items-center
                 text-sm my3 text-white/60 py-1 mb-2"
                >
                  <Mail />
                  <a href="#">example@gmail.com</a>
                </div>
                <div
                  className="cursor-pointer hover:text-purple-400 transition-transform hover:scale-102
                 flex gap-2 justify-start items-center text-sm  text-white/60 py-1"
                >
                  <MapPin />
                  Alexandria, Egypt
                </div>
              </div>
            </div>
            <div className=" flex flex-col">
              <h4 className="text-lg font-semibold my-1 capitalize text-white text-center">
                Contact
              </h4>
              <div
                className="flex justify-center items-center gap-3 mt-3  py-2 px-2
               cursor-pointer text-white/60  "
              >
                <a href="https://github.com/Malak-Sabry-104">
                  {" "}
                  <Github
                    className=" w-5 hover:text-purple-400 transition-transform 
                  hover:scale-110"
                  />
                </a>
                <a href="https://www.linkedin.com/in/malak-sabry-muhammad440221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  {" "}
                  <Linkedin className=" w-5 hover:text-purple-400 transition-transform hover:scale-110" />
                </a>
                <a href="mailto:malaksabry1020@gmail.com">
                  {" "}
                  <Mail className="  w-5 hover:text-purple-400 transition-transform hover:scale-110 " />
                </a>
              </div>
            </div>
          </div>

          <div
            className=" flex justify-between px-[20px] pt-1 border-t-1 border-t-white/30  z-100 
          w-[80%]  mx-[50px] pb-3  text-white/60 "
          >
            <p className="capitalize">
              &copy; 2025 Malak | portfolio. All rights reversed.
            </p>
            <div className="capitalize flex gap-7">
              <a
                href="#"
                className="hove:underline"
                onClick={() => {
                  toast.dark("Coming Soon!");
                }}
              >
                {" "}
                Privacy Policy{" "}
              </a>

              <a href="#" className="hove:underline"   onClick={() => {
                  toast.dark("Coming Soon!");
                }}>
                {" "}
                Terms Of Services{" "}
              </a>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
