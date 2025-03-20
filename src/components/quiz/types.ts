
export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export type QuizProps = {
  title: string;
};

export type QuizData = {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
};
