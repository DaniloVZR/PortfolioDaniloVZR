"use client";
import { projectsData } from "@/constants";
import ProjectCard from "./ui/ProjectCard";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Loader from "./ui/Loader";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProjectData, TranslatedProject } from "@/types";

interface Project extends ProjectData, TranslatedProject { }

const Projects = () => {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState<string | null>(null);
  const [itemOffset, setItemOffset] = useState(0);

  const translatedProjects = t('projects.items') as unknown as TranslatedProject[];

  const projects: Project[] = projectsData.map((project, index) => ({
    ...project,
    ...translatedProjects[index]
  }));

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
    <section id="projects" className="py-16 border-t-2 border-slate-800">
      <h1 className="heading tracking-normal p-10">
        {t('projects.title') as string}
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
            currentItems.length ? (
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
            ) : <Loader />
          }
        </div>
      </div>
    </section>
  );
};

export default Projects;