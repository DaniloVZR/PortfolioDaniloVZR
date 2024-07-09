import Image from "next/image";
import { RiGithubFill, RiLinksFill } from "react-icons/ri";

const ProjectCard = ({
  image,
  title,
  link,
  gitLink,
  stack
}: {
  image: string;
  title: string;
  link?: string;
  gitLink: string;
  stack: string[];
}) => {
  return (
    <div className="rounded-2xl flex justify-between">
      <div className="m-3">
        <Image
          src={image}
          width={400}
          height={400}
          alt="Image"
          className="rounded-xl h-auto"
        />
      </div>
      <div className="flex flex-col items-end">
        <h1 className="mb-4 text-2xl flex-1">{title}</h1>
        <div>
          <ul className="flex items-center gap-2">
            {stack.map((stackItem) => (
              <li key={stackItem}>
                {/* <img
                  src={`TechStack/${stackItem}-icon.svg`}
                  alt=""
                  width={28}
                  height={28}
                /> */}
                <span className="text-slate-200 font-bold bg-purple-primary p-1.5 rounded-xl">{stackItem}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-1 mt-5">
          <div className="icon-container">
            <a href={gitLink} target="_blank">
              <RiGithubFill size="2rem" />
            </a>
          </div>
          {
            link && (
              <div className="icon-container">
                <a href={link} target="_blank">
                  <RiLinksFill size="2rem" />
                </a>
              </div>
            )
          }
        </div>
      </div>
    </div >
  );
};

export default ProjectCard;