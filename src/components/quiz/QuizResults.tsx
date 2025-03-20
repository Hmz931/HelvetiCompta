
import React from 'react';
import { Award, Check, X, RefreshCcw, PartyPopper, SmilePlus, Frown } from 'lucide-react';
import { QuizQuestion } from './types';

type QuizResultsProps = {
  score: number;
  questions: QuizQuestion[];
  selectedAnswers: (number | null)[];
  resetQuiz: () => void;
};

const QuizResults: React.FC<QuizResultsProps> = ({
  score,
  questions,
  selectedAnswers,
  resetQuiz
}) => {
  const calculatePercentage = () => {
    return Math.round((score / questions.length) * 100);
  };
  
  const getFeedbackMessage = () => {
    const percentage = calculatePercentage();
    if (percentage >= 90) return "Excellent! Vous êtes un expert en comptabilité suisse!";
    if (percentage >= 70) return "Très bien! Vous avez de solides connaissances en comptabilité.";
    if (percentage >= 50) return "Pas mal! Quelques concepts à revoir mais c'est encourageant.";
    return "Continuez à apprendre! La comptabilité suisse a ses subtilités.";
  };
  
  const getFeedbackIcon = () => {
    const percentage = calculatePercentage();
    if (percentage >= 70) return <PartyPopper size={36} className="text-green-500" />;
    if (percentage >= 50) return <SmilePlus size={36} className="text-yellow-500" />;
    return <Frown size={36} className="text-orange-500" />;
  };

  return (
    <div className="text-center py-6">
      <div className="mb-6">
        {getFeedbackIcon()}
      </div>
      
      <h3 className="text-2xl font-bold mb-2">Quiz Terminé!</h3>
      <p className="text-lg text-swiss-text-secondary mb-6">{getFeedbackMessage()}</p>
      
      <div className="glass p-8 rounded-xl mb-8 inline-block">
        <div className="relative w-32 h-32 mx-auto">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle 
              className="text-gray-200" 
              strokeWidth="8" 
              stroke="currentColor" 
              fill="transparent" 
              r="45" 
              cx="50" 
              cy="50" 
            />
            <circle 
              className="text-swiss-blue" 
              strokeWidth="8" 
              strokeDasharray={`${calculatePercentage() * 2.83}, 283`}
              strokeLinecap="round" 
              stroke="currentColor" 
              fill="transparent" 
              r="45" 
              cx="50" 
              cy="50" 
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-3xl font-bold">{score}</div>
            <div className="text-sm text-swiss-text-secondary">sur {questions.length}</div>
          </div>
        </div>
        
        <div className="mt-4 text-lg font-semibold text-swiss-blue">
          {calculatePercentage()}%
        </div>
      </div>
      
      <div className="mb-8">
        <h4 className="font-semibold mb-4 flex items-center justify-center">
          <Award size={20} className="mr-2 text-swiss-blue" />
          Résumé de vos réponses
        </h4>
        
        <div className="space-y-3 max-w-md mx-auto">
          {questions.map((q, index) => (
            <div 
              key={index} 
              className={`p-3 rounded-lg flex items-center ${
                selectedAnswers[index] === q.correctAnswer 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}
            >
              <div className={`w-8 h-8 flex items-center justify-center rounded-full mr-3 ${
                selectedAnswers[index] === q.correctAnswer 
                  ? 'bg-green-500 text-white' 
                  : 'bg-red-500 text-white'
              }`}>
                {selectedAnswers[index] === q.correctAnswer 
                  ? <Check size={16} /> 
                  : <X size={16} />}
              </div>
              <div className="flex-1 truncate">
                <div className="text-sm font-medium truncate">Question {index + 1}</div>
                <div className="text-xs text-swiss-text-secondary truncate">
                  {selectedAnswers[index] !== q.correctAnswer && 
                    `Votre réponse: ${selectedAnswers[index] !== null ? q.options[selectedAnswers[index]] : 'Non répondu'}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={resetQuiz}
        className="px-6 py-3 rounded-lg bg-swiss-blue text-white hover:bg-swiss-blue/90 flex items-center mx-auto"
      >
        <RefreshCcw size={16} className="mr-2" />
        Recommencer le quiz
      </button>
    </div>
  );
};

export default QuizResults;
