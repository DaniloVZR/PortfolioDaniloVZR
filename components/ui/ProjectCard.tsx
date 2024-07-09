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
  desc: string;
  stack: string[];
}) => {
  return (
    <div className="rounded-2xl block md:flex md:justify-between">
      <div className="mb-5">
        <Image
          src={image}
          width={400}
          height={400}
          alt="Image"
          className="rounded-xl h-auto"
        />
      </div>
      <div className="flex flex-col md:items-end">
        <h1 className="mb-4 text-2xl flex-1">{title}</h1>
        <div>
          <p>{desc}</p>
          <ul className="flex items-center gap-2">
            {stack.map((stackItem) => (
              <li key={stackItem}>
                <span className="text-slate-200 font-bold text-xs bg-slate-800 p-1.5 rounded-xl">{stackItem}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-1 mt-5">
          <a href={gitLink} target="_blank">
            <AceternityButton
              text="Ver código"
              icon={<RiGithubFill size="2rem" />}
            />
          </a>
          {
            link && (
              <a href={link} target="_blank">
                <AceternityButton
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