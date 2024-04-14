import { Link } from "react-scroll";
import { Link as HrefLink } from "react-router-dom";

import {
  FaBars,
  FaGithub,
  FaLinkedinIn,
  FaToggleOff,
  FaToggleOn,
} from "react-icons/fa";
import { useDarkMode } from "../context/DarkMode";
import { useState } from "react";
import { navLink } from "../data";

const Navbar = () => {
  const { handleThemeSwitch, theme } = useDarkMode();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="section_container flex items-center justify-between  py-6">
      <div>
        <h1
          className={`text-gradient w-[150px] text-sm font-semibold uppercase tracking-[1px] md:w-[200px] md:tracking-[4px]`}
        >
          Mariam El-sarag
        </h1>
      </div>

      <ul
        className={`absolute left-[50%] top-[80px] flex h-auto  w-[90%] translate-x-[-50%]   flex-col items-center gap-4 rounded-lg  bg-white p-8 font-navFont text-gray-500  transition-transform duration-300   dark:bg-Black sm:gap-5  md:relative md:left-0 md:top-0   md:w-full  md:translate-x-0 md:translate-y-[0] md:flex-row md:items-center md:justify-end  md:py-0 md:shadow-none  ${
          openMenu ? "translate-y-[0]" : "translate-y-[-200%]"
        } w-[250px] shadow-lightModeShadow shadow-slate-300 dark:shadow-darkModeShadow md:bg-transparent   md:shadow-none md:dark:bg-transparent md:dark:shadow-none  `}
      >
        {navLink.map((item) => (
          <li
            key={item.id}
            className=" cursor-pointer  text-[17px] text-gray-600 transition-colors duration-200 hover:text-headingColor dark:text-gray-400 hover:dark:text-gray-300 "
          >
            <Link
              onClick={() => setOpenMenu(false)}
              to={item.link}
              smooth={true}
              duration={1000}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex  gap-4 text-gray-500 dark:text-gray-400">
        <li>
          <HrefLink to="https://github.com/Mariamtarek514" target="_blank">
            <FaGithub
              size={20}
              className="transition-colors duration-200 hover:text-headingColor dark:text-gray-400 hover:dark:text-gray-300"
            />
          </HrefLink>
        </li>
        <li>
          <HrefLink
            to="https://www.linkedin.com/in/mariamtarek514/"
            target="_blank"
          >
            <FaLinkedinIn
              size={20}
              className="transition-colors duration-200 hover:text-headingColor dark:text-gray-400 hover:dark:text-gray-300"
            />
          </HrefLink>
        </li>

        <li onClick={handleThemeSwitch} className="cursor-pointer">
          {theme === "dark" ? (
            <FaToggleOn size={25} className="" />
          ) : (
            <FaToggleOff
              size={25}
              className="dark:text-text_dark text-gray-500"
            />
          )}
        </li>
        <li
          onClick={() => setOpenMenu((pre) => !pre)}
          className="cursor-pointer md:hidden"
        >
          <FaBars size={20} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
