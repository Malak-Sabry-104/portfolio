import { toast } from "react-toastify";
import logo from "../assets/branding-identity-corporate-vector-logo-m-design.png";
import { HashLink } from "react-router-hash-link";
const Nav = () => (
  <>
    <nav
      id="navbar"
      className="z-100 fixed right-0 left-0 flex justify-between items-center px-[20px] mx-[50px] mt-8 rounded-2xl ring-2 ring-white/50 bg-white/20"
    >
      <HashLink to="/" className="">
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
        className="bg-gradient px-4 py-2 rounded-xl
             cursor-pointer "
      >
        Hire Me
      </HashLink>
    </nav>
  </>
);

export default Nav;
