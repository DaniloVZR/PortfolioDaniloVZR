import Image from "next/image";
import { RiGithubFill, RiLinksFill } from "react-icons/ri";
import AceternityButton from "./AceternityButton";

const ProjectCard = ({
  image,
  title,
  link,
  gitLink,
  desc,
  stack
}: {
  image: string;
  title: string;
  link?: string;
  gitLink: string;
  desc: string | string[];
  stack: string[];
}) => {
  return (
    <div className="flex flex-col xl:flex-row xl:gap-8">
      <div className="flex-shrink-0 mb-4 xl:mb-0 xl:mr-4 xl:w-1/2">
        <Image
          src={image}
          width={1000}
          height={1000}
          alt={title}
          className="rounded-lg object-cover h-auto w-full"
        />
      </div>
      <div className="flex flex-col justify-between xl:w-1/2">
        <div>
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
          <div className="text-gray-400">
            {
              Array.isArray(desc) ? desc.map((d, i) =>
                <p key={i} className="mb-4">{d}</p>)
                : <p className="mb-4">{desc}</p>
            }
          </div>
          <ul className="flex flex-wrap gap-2">
            {stack.map((stackItem) => (
              <li key={stackItem}>
                <span className="text-slate-200 font-bold text-xs bg-slate-800 p-1.5 rounded-lg">
                  {stackItem}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2 mt-4">
          <a href={gitLink} target="_blank" className="flex-grow">
            <AceternityButton
              className="w-full"
              text="Ver código"
              icon={<RiGithubFill size="2rem" />}
            />
          </a>
          {
            link && (
              <a href={link} target="_blank" className="flex-grow">
                <AceternityButton
                  className="w-full"
                  text="Ver Web"
                  icon={<RiLinksFill size="2rem" />}
                />
              </a>
            )
          }
        </div>
      </div >
    </div >
  );
};

export default ProjectCard;