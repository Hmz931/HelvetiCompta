
import React from 'react';
import { Check, X, HelpCircle } from 'lucide-react';
import { QuizQuestion } from './types';

type QuestionDisplayProps = {
  question: QuizQuestion;
  selectedAnswer: number | null;
  handleAnswerSelection: (index: number) => void;
  showExplanation: boolean;
  quizSubmitted: boolean;
};

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  selectedAnswer,
  handleAnswerSelection,
  showExplanation,
  quizSubmitted
}) => {
  const isCorrect = selectedAnswer !== null && selectedAnswer === question.correctAnswer;

  return (
    <div className="mb-6">
      <div className="bg-swiss-blue/5 p-4 rounded-lg mb-6">
        <h4 className="text-lg font-medium mb-2">{question.question}</h4>
        <div className="space-y-3 mt-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelection(index)}
              className={`w-full text-left p-3 rounded-lg flex items-center transition-colors ${
                selectedAnswer === index 
                  ? isCorrect 
                    ? 'bg-green-100 border border-green-300' 
                    : 'bg-red-100 border border-red-300'
                  : 'bg-white border border-gray-200 hover:border-swiss-blue/30'
              }`}
              disabled={quizSubmitted}
            >
              <div className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 ${
                selectedAnswer === index 
                  ? isCorrect 
                    ? 'bg-green-500 text-white' 
                    : 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {selectedAnswer === index 
                  ? isCorrect 
                    ? <Check size={14} /> 
                    : <X size={14} /> 
                  : String.fromCharCode(65 + index)}
              </div>
              <span>{option}</span>
              {selectedAnswer === index && (
                <div className="ml-auto">
                  {isCorrect 
                    ? <Check size={20} className="text-green-500" /> 
                    : <X size={20} className="text-red-500" />}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {showExplanation && selectedAnswer !== null && (
        <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <div className="flex items-start">
            <div className={`p-2 rounded-full mr-3 mt-0.5 ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              <HelpCircle size={16} />
            </div>
            <div>
              <h5 className="font-semibold mb-1">{isCorrect ? 'Correct!' : 'Incorrect'}</h5>
              <p className="text-sm">{question.explanation}</p>
              {!isCorrect && (
                <p className="mt-2 text-sm font-medium">
                  La bonne réponse était: {question.options[question.correctAnswer]}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionDisplay;
