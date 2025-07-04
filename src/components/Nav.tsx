import logo from "../assets/logo.png";
import { HashLink } from 'react-router-hash-link';
const Nav = () => (
  <>
    <nav id="navbar" className="z-100 fixed right-0 left-0 flex justify-between items-center px-[20px] mx-[50px] mt-8 rounded-2xl ring-2 ring-white/50 bg-white/20">
      <HashLink to="/">
        <img src={logo} alt="" />
      </HashLink>
      <ul className="flex justify-center items-center gap-[25px] ">
        <li>
          <HashLink className=" rounded-full relative" to="/">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink className="rounded-full relative" to="/#about" smooth={true}>
            About Me
          </HashLink>
        </li>
        <li>
          <HashLink className="rounded-full relative" to="#">
            Resume
          </HashLink>
        </li>
        <li>
          <HashLink className="rounded-full relative" to="/contact" smooth={true}>
            Contact
          </HashLink>
        </li>
        <li>
          <HashLink className="rounded-full relative" to="#">
            Blog
          </HashLink>
        </li>
      </ul>
      <button
        type="button"
        className="bg-gradient px-4 py-2 rounded-xl
             cursor-pointer "
      >
        Hire Me
      </button>
    </nav>
  </>
);

export default Nav;
