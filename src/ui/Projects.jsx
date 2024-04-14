import ReactPaginate from "react-paginate";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import Card from "./Card";
import { projectsData } from "../data";

const Projects = () => {
  const [filterProjects, setFilterProjects] = useState(projectsData);
  const [selectedProjectCategory, setSelectedProjectCategory] = useState("all");
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filterProjects.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filterProjects.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filterProjects.length;

    setItemOffset(newOffset);
  };
  function filter(category) {
    const filtered =
      category === "all"
        ? projectsData
        : projectsData.filter((project) => project.category === category);
    setFilterProjects(filtered);
    setSelectedProjectCategory(category);
    setItemOffset(0);
  }

  return (
    <div id="projects" className="section_container mp-10 sm:py-16">
      <SectionHeader title="Projects" text="Things I’ve built so far" />
      <div>
        <ul className="mb-8 flex  flex-wrap gap-4">
          <li
            onClick={() => filter("all")}
            className={`${
              selectedProjectCategory === "all"
                ? "text-gradient"
                : "text-gray-600 dark:text-gray-400"
            } hover:text-gradient cursor-pointer rounded-md px-2 py-1 text-[14px] font-semibold capitalize transition-colors duration-200 sm:text-[16px]`}
          >
            All
          </li>

          <li
            onClick={() => filter("js")}
            className={`${
              selectedProjectCategory === "js"
                ? "text-gradient"
                : "text-gray-600 dark:text-gray-400"
            } hover:text-gradient sm:text-[16px]] cursor-pointer rounded-md px-2 py-1 text-[14px] font-semibold capitalize transition-colors duration-200`}
          >
            Js
          </li>
          <li
            onClick={() => filter("react")}
            className={`${
              selectedProjectCategory === "react"
                ? "text-gradient"
                : "text-gray-600 dark:text-gray-400"
            } hover:text-gradient cursor-pointer rounded-md px-2 py-1 text-[14px] font-semibold capitalize transition-colors duration-200 sm:text-[16px]`}
          >
            React
          </li>
          <li
            onClick={() => filter("frontend mentor")}
            className={`${
              selectedProjectCategory === "frontend mentor"
                ? "text-gradient"
                : "text-gray-600 dark:text-gray-400"
            } hover:text-gradient cursor-pointer rounded-md px-2 py-1 text-[14px] font-semibold capitalize transition-colors duration-200 sm:text-[16px]`}
          >
            Frontend Mentor
          </li>
        </ul>
        <div className="grid grid-cols-1  justify-center  gap-8  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4   ">
          {currentItems.map((items) => (
            <Card key={items.id} project={items} />
          ))}
        </div>
        <div className="">
          <ReactPaginate
            breakLabel="..."
            nextLabel=" >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< "
            renderOnZeroPageCount={null}
            containerClassName="flex items-center justify-center mt-8 gap-5  capitalize "
            pageLinkClassName=" w-[28px] h-[28px] flex items-center justify-center text-gray-400 text-gray-600 rounded-[5px] "
            activeLinkClassName="!text-headingColor dark:!text-white border border-headingColor dark:border-white "
            nextLinkClassName="text-xl dark:text-gray-400 text-gray-600 focus:outline-none"
            previousLinkClassName="text-xl dark:text-gray-400 text-gray-600 focus:outline-none "
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
