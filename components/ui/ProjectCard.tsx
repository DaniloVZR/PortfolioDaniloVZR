import Image from "next/image";
import { RiGithubFill, RiLinksFill } from "react-icons/ri";

const ProjectCard = ({
  image,
  title,
  link,
  gitLink
}: {
  image: string;
  title: string;
  link?: string;
  gitLink: string;
}) => {
  return (
    <div className="bg-gray-primary border border-gray-800 rounded-2xl flex flex-col hover:scale-110 duration-300">
      <div className="m-3">
        <Image
          src={image}
          width={800}
          height={800}
          alt="Image"
          className="rounded-2xl h-auto xl:h-[220px]"
        />
      </div>
      <div className="p-4">
        <h1 className="mb-4 text-2xl">{title}</h1>
        <p className="mb-2 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, sunt.</p>
        <div className="flex gap-1">
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