import { Link } from "react-router-dom";
import { FaLink, FaGithub } from "react-icons/fa";
import { useState } from "react";
const Card = ({ project }) => {
  const [showFullText, setShowFullText] = useState(false);
  function toggleText() {
    setShowFullText(!showFullText);
  }
  function truncate(text, maxLength = 100) {
    const orginalText = text;
    const truncateText =
      text.length <= maxLength
        ? text.slice(0, maxLength)
        : text.slice(0, maxLength) + "...";

    return showFullText ? orginalText : truncateText;
  }
  return (
    <div className=" rounded-md font-primary shadow-lightModeShadow dark:bg-lightBlack dark:shadow-darkModeShadow ">
      <img
        src={project.image}
        alt={project.name}
        className="h-[180px] w-full rounded-t-md object-cover object-top"
      />
      <div className="px-5 py-4">
        <h3 className="font-primary text-xl font-semibold text-black dark:text-gray-400 ">
          {project.name}
        </h3>
        <p
          onClick={toggleText}
          className="my-2 font-primary text-[14px] font-light text-[#666] dark:text-gray-400 "
        >
          {truncate(project.description, 160)}
        </p>
        <p className=" text-[13px] font-light capitalize text-headingColor dark:text-gray-400 ">
          <span className="font-semibold">Tech Stack:</span>
          <span className="whitespace-normal">{project.technology}</span>
        </p>
        <div className=" mt-3 flex items-center justify-between dark:text-white">
          <Link
            className="flex w-1/2 items-center gap-2 text-[14px]"
            to={project.demoLink}
            target="_blank"
          >
            <FaLink />
            <span className=" underline underline-offset-1">Live Preview</span>
          </Link>
          <Link
            className="flex w-1/2 items-center gap-2 text-[14px]"
            to={project.sourceLink}
            target="_blank"
          >
            <FaGithub />
            <span className="underline">View Code</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
