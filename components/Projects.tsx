"use client";
import { projects } from "@/constants";
import ProjectCard from "./ui/ProjectCard";
import { useState } from "react";

const Projects = () => {

  const [hovered, setHovered] = useState<string | null>(null);

  const handleCardHover = (projectId: string) => {
    setHovered(projectId);
  };

  const handleCardLeave = () => {
    setHovered(null);
  };

  return (
    <section id="experience" className="py-10 border-t-2 border-slate-800">
      <h1 className="heading tracking-normal p-10">
        Projects
      </h1>
      <div className="my-10">
        <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-[2rem]">
          {
            projects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => handleCardHover(project.id)}
                onMouseLeave={handleCardLeave}
                className={`relative project-card ${hovered && hovered !== project.id ? "brightness-50" : ""
                  } transition duration-300 ease-in-out`}
              >
                <ProjectCard
                  image={project.image}
                  title={project.title}
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
