import { toast } from "react-toastify";
import logo from "../assets/logo.png";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";

import { useEffect, useState } from "react";
const Nav = () => {
  const [show, setShow] = useState(false);
  const toggleNavBar = () => {
    setShow(!show);
  };

  const [scroll, setScroll] = useState({x:0,y:0})

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll({x:window.scrollX,y:window.scrollY})
    })
  }, [])

  return (
    <>
      <nav
        id="navbar"
        className={`z-100 fixed right-0 left-0 justify-between 
      items-center px-[20px] mx-[50px] mt-8 rounded-2xl ring-2
       ring-white/50 bg-white/20 transition-all duration-500 ${scroll.y > 120? 'backdrop-blur-md' : ''} hidden md:flex`}
      >
        <HashLink to="/" className="w-[90px]">
          <img src={logo} alt="" className="" />
        </HashLink>
        <ul className="flex justify-center items-center gap-[25px] ">
          <li>
            <HashLink className=" rounded-full relative" to="/">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink
              className="rounded-full relative"
              to="/#about"
              smooth={true}
            >
              About Me
            </HashLink>
          </li>

          <li>
            <HashLink
              className="rounded-full relative"
              to="/contact"
              smooth={true}
            >
              Contact
            </HashLink>
          </li>
          <li>
            <HashLink
              className="rounded-full relative"
              to="/projects"
              smooth={true}
            >
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink
              className="rounded-full relative"
              to="#"
              onClick={() => {
                toast.dark("Coming Soon!");
              }}
            >
              Blog
            </HashLink>
          </li>
        </ul>
        <HashLink
          to="/#about"
          smooth={true}
          type="button"
          className="nav-btn bg-gradient px-4 py-2 rounded-xl
             cursor-pointer "
        >
          Hire Me
        </HashLink>
      </nav>
      <nav
        className={`${
          show ? "rounded-b-none  " : " rounded2xl ring-2 ring-white/50"
        }
         ${scroll.y > 120? 'backdrop-blur-md' : ''}
        flex md:hidden 
        px-3 justify-between 

      items-center rounded-b-2xl
        bg-white/20  fixed left-0 right-0 z-100`}
      >
        <HashLink to="/" className="w-[70px]">
          <img src={logo} alt="" className="" />
        </HashLink>
      <ul
  className={`transition-all duration-500 ease-in-out overflow-hidden ${
    show
      ? " opacity-100 translate-y-0"
      : " opacity-0 -translate-y-5"
  }
  flex flex-col justify-center items-center gap-[25px] 
  rounded-b-3xl border-b-1 ring-white/50 w-full absolute top-18 bg-white/20 left-0 p-3`}
>

        
          <li className="w-[100%] text-center">
            <HashLink className=" rounded-full relative" to="/">
              Home
            </HashLink>
          </li>
          <li className="w-[100%] text-center">
            <HashLink
              className="rounded-full relative"
              to="/#about"
              smooth={true}
            >
              About Me
            </HashLink>
          </li>
          <li className="w-[100%] text-center">
            <HashLink
              className="rounded-full relative"
              to="/contact"
              smooth={true}
            >
              Contact
            </HashLink>
          </li>
          <li className="w-[100%] text-center">
            <HashLink
              className="rounded-full relative"
              to="/projects"
              smooth={true}
            >
              Projects
            </HashLink>
          </li>
          <li className="w-[100%] text-center">
            <HashLink
              className="rounded-full relative"
              to="#"
              onClick={() => {
                toast.dark("Coming Soon!");
              }}
            >
              Blog
            </HashLink>
          </li>
          <HashLink
            to="/#about"
            smooth={true}
            type="button"
            className=" flex justify-center items-center w-[100%] nav-btn bg-gradient px-4 py-2 rounded-xl
             cursor-pointer "
          >
            Hire Me
          </HashLink>
        </ul>

        <div className="right flex gap-5">
          <button
            className="cursor-pointer block md:hidden "
            onClick={toggleNavBar}
          >
            {show ? (
              <X className="text-white/60 w-7 h-7" />
            ) : (
              <Menu className="text-white/60 w-8 h-8" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
