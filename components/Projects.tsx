"use client";
import { projects } from "@/constants";
import ProjectCard from "./ui/ProjectCard";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const Projects = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 3;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = projects.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(projects.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % projects.length;
    setItemOffset(newOffset);
  };

  const handleCardHover = (projectId: string) => {
    setHovered(projectId);
  };

  const handleCardLeave = () => {
    setHovered(null);
  };

  return (
    <section id="projects" className="py-10 border-t-2 border-slate-800">
      <h1 className="heading tracking-normal p-10">
        Projects
      </h1>
      <div className="my-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
        <div className="flex flex-col my-10">
          {
            currentItems.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => handleCardHover(project.id)}
                onMouseLeave={handleCardLeave}
                className={`relative project-card mb-16 ${hovered && hovered !== project.id ? "brightness-50" : ""
                  } transition duration-300 ease-in-out`}
              >
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  link={project.link}
                  gitLink={project.gitLink}
                  stack={project.stack}
                  desc={project.desc}
                />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Projects;
