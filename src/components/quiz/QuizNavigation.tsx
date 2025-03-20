
import React from 'react';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';

type QuizNavigationProps = {
  currentQuestion: number;
  questionsLength: number;
  goToPreviousQuestion: () => void;
  goToNextQuestion: () => void;
  handleSubmitQuiz: () => void;
  selectedAnswers: (number | null)[];
  setCurrentQuestion: (index: number) => void;
};

const QuizNavigation: React.FC<QuizNavigationProps> = ({
  currentQuestion,
  questionsLength,
  goToPreviousQuestion,
  goToNextQuestion,
  handleSubmitQuiz,
  selectedAnswers,
  setCurrentQuestion
}) => {
  return (
    <>
      <div className="flex justify-between">
        <button
          onClick={goToPreviousQuestion}
          disabled={currentQuestion === 0}
          className={`px-4 py-2 rounded-lg flex items-center ${
            currentQuestion === 0 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-swiss-blue/10 text-swiss-blue hover:bg-swiss-blue/20'
          }`}
        >
          <ArrowRight size={16} className="transform rotate-180 mr-2" />
          Précédent
        </button>
        
        <div>
          {currentQuestion < questionsLength - 1 ? (
            <button
              onClick={goToNextQuestion}
              className="px-4 py-2 rounded-lg bg-swiss-blue/10 text-swiss-blue hover:bg-swiss-blue/20 flex items-center"
            >
              Suivant
              <ArrowRight size={16} className="ml-2" />
            </button>
          ) : (
            <button
              onClick={handleSubmitQuiz}
              className="px-4 py-2 rounded-lg bg-swiss-blue text-white hover:bg-swiss-blue/90 flex items-center"
            >
              Terminer le quiz
              <Check size={16} className="ml-2" />
            </button>
          )}
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex space-x-1">
            {Array.from({ length: questionsLength }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                  currentQuestion === index 
                    ? 'bg-swiss-blue text-white'
                    : selectedAnswers[index] !== null
                      ? 'bg-swiss-blue/20 text-swiss-blue'
                      : 'bg-gray-100 text-gray-700'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          <button
            onClick={handleSubmitQuiz}
            className="px-4 py-2 rounded-lg bg-swiss-blue text-white hover:bg-swiss-blue/90 flex items-center"
          >
            Soumettre
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </>
  );
};

export default QuizNavigation;
