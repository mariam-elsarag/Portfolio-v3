import Logo from "../assets/logo.png";
import LogoDark from "../assets/logo_dark.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkMode";
import { navLink } from "../data";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const { theme } = useDarkMode();
  return (
    <footer className="section_container font-navFont" id="contact">
      <div className="mb-5 mt-5 flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <div>
          {theme === "dark" ? (
            <img src={LogoDark} className="w-[30px] md:w-[50px]" alt="logo" />
          ) : (
            <img src={Logo} className="w-[30px] md:w-[50px] " alt="logo" />
          )}
        </div>
        <div className="mt-3 flex flex-col items-start gap-3 text-headingColor  dark:text-gray-400  sm:flex-row sm:items-center">
          <Link
            className="text-[15px] hover:text-headingColor hover:dark:text-gray-300"
            to="tel:+201010402069"
          >
            +201 010 402 069
          </Link>
          <Link
            to="mailto:mariam.4.tarek@gmail.com"
            className="text-[15px] hover:text-headingColor hover:dark:text-gray-300"
          >
            mariam.4.tarek@gmail.com
          </Link>
          <ul className="flex  gap-4 text-headingColor dark:text-gray-400">
            <li>
              <Link to="https://github.com/Mariamtarek514" target="_blank">
                <FaGithub
                  size={20}
                  className="transition-colors duration-200 hover:text-headingColor dark:text-gray-400 hover:dark:text-gray-300"
                />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/mariamtarek514/"
                target="_blank"
              >
                <FaLinkedinIn
                  size={20}
                  className="transition-colors duration-200 hover:text-headingColor dark:text-gray-400 hover:dark:text-gray-300"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex flex-col  justify-center gap-3  border-t border-gray-500 pb-3 pt-7 dark:border-headingColor/30 sm:items-center md:flex-row md:justify-between ">
        <ul className="flex flex-col gap-5 sm:flex-row sm:items-center">
          {navLink.map((item) => (
            <li
              key={item.id}
              className=" cursor-pointer  text-[14px] text-gray-600 transition-colors duration-200 hover:text-headingColor dark:text-gray-400 hover:dark:text-gray-300 "
            >
              <ScrollLink to={item.link} smooth={true} duration={500}>
                {item.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <p className="text-[13px] text-gray-600 dark:text-gray-400">
          Designed by <span className="text-gradient">Pavan MG</span> and built
          by
          <span className="text-gradient pl-1"> Mariam Tarek</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
