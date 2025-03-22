
export type Subsection = {
  title: string;
  content: string;
};

export type Section = {
  id: string;
  title: string;
  content?: string;
  subsections?: Subsection[];
};

export type Course = {
  id: string;
  title: string;
  description?: string;
  introduction?: string;
  sections: Section[];
};

export type CourseStructure = {
  [key: string]: Course;
};

export type Account = {
  number: string;
  title: string;
  description?: string;
};
