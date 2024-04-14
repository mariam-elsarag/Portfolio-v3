import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import HeroLight from "../assets/hero-light.png";
const Hero = () => {
  return (
    <div
      id="home"
      className="section_container my-10 text-headingColor dark:text-gray-300  "
    >
      <div className="flex flex-wrap items-center gap-8 py-10 text-center sm:gap-0  sm:py-14 sm:text-start   ">
        <div className="order-2  flex w-full flex-col items-center sm:order-1 sm:w-1/2 sm:items-start">
          <h1 className="font-primary text-3xl font-bold leading-10 ">
            Hi 👋,
            <br />
            I'm
            <span className="text-gradient pl-1">Mariam Tarek</span>
          </h1>
          <p className="mt-3 w-[420px] max-w-full text-gray-600 dark:text-gray-400">
            I am a Front-End developer and I am Creating pixel-perfect websites
            with modern web technologies
          </p>
          <div className="mt-5 flex items-center gap-4">
            <div className=" w-[130px] rounded-sm bg-gradient-to-r  from-[#FF9898] to-[#8054FF] px-2 py-[8px] text-center">
              <a
                href="./cv/Mariam_Tarek_CV.pdf"
                download
                className="cursor-pointer text-white"
              >
                Download CV
              </a>
            </div>
            <div className=" w-[130px] rounded-sm bg-gradient-to-r  from-[#FF9898] to-[#8054FF] p-[2px] text-center">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={1000}
                className="inline-block w-full cursor-pointer rounded-sm bg-white py-[6px] text-Black  dark:bg-Black dark:text-white"
              >
                {" "}
                Let's talk
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="order-1 flex w-full justify-center  sm:order-2 sm:w-1/2 md:justify-end">
          <div className=" w-[180px] rounded-full bg-gradient-to-r from-[#FF9898] to-[#8054FF]  p-1 md:w-[220px]">
            <figure className="rounded-full dark:bg-Black">
              <img
                src={HeroLight}
                alt="hero"
                className="w-[180px] rounded-full md:w-[220px] "
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
