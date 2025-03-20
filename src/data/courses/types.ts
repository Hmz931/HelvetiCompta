
export type Section = {
  id: string;
  title: string;
  content?: string;
};

export type Course = {
  id: string;
  title: string;
  description?: string;
  sections: Section[];
};

export type CourseStructure = {
  [key: string]: Course;
};
