export interface ProjectData {
  id: string;
  image: string;
  link?: string;
  gitLink: string;
}

export interface TranslatedProject {
  id: string;
  title: string;
  desc: string | string[];
  stack: string[];
}

export interface Project extends ProjectData, TranslatedProject { }

export interface Job {
  title: string;
  job: string;
  text: string[];
}