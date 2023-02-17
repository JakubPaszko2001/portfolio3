import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProjectsContainer = ({
  src,
  name,
  start,
  live,
  github,
  setModalData,
  information,
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center col-start-2 col-span-4 lg:col-span-2 ${
        start ? "lg:col-end-4" : ""
      }`}
    >
      <h3 className="mb-2 text-xl md:text-4xl">{name}</h3>
      <LazyLoadImage
        className="rounded-lg"
        loading="lazy"
        threshold={300}
        src={src}
        alt={name + "icon"}
      />
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => {
            setModalData({ information });
            document.body.style.overflow = "hidden";
            const modal = document.querySelector(".modal");
            modal.showModal();
          }}
          type="button"
          className="px-4 py-2 border-2 border-black rounded-xl texl-lg 2xl:text-xl ease-in duration-200 hover:bg-black hover:text-light dark:border-light dark:hover:bg-white dark:hover:text-dark cursor-pointer"
        >
          Information
        </button>
        <a
          href={live}
          rel="noreferrer"
          target="_blank"
          className="px-4 py-2 border-2 border-black rounded-xl texl-lg 2xl:text-xl ease-in duration-200 hover:bg-black hover:text-light dark:border-light dark:hover:bg-white dark:hover:text-dark cursor-pointer"
        >
          Live
        </a>
        <a
          href={github}
          rel="noreferrer"
          target="_blank"
          className="px-4 py-2 border-2 border-black rounded-xl texl-lg 2xl:text-xl ease-in duration-200 hover:bg-black hover:text-light dark:border-light dark:hover:bg-white dark:hover:text-dark cursor-pointer"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default ProjectsContainer;
