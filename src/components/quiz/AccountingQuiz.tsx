
import React, { useState } from 'react';
import { Check, X, Award, ArrowRight, HelpCircle, RefreshCcw, ChevronRight, SmilePlus, Frown, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';

type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

type QuizProps = {
  title: string;
};

const questions: QuizQuestion[] = [
  {
    id: '1',
    question: 'Selon le Code des Obligations suisse, à partir de quel chiffre d\'affaires annuel une entreprise individuelle doit-elle obligatoirement tenir une comptabilité complète?',
    options: [
      '100\'000 CHF',
      '500\'000 CHF',
      '1\'000\'000 CHF',
      '1\'500\'000 CHF'
    ],
    correctAnswer: 1,
    explanation: 'Selon l\'art. 957 al. 1 ch. 1 CO, les entreprises individuelles qui ont réalisé un chiffre d\'affaires d\'au moins 500\'000 francs lors du dernier exercice sont tenues de tenir une comptabilité et de présenter des comptes.'
  },
  {
    id: '2',
    question: 'Quel est le taux normal de TVA en Suisse depuis le 1er janvier 2024?',
    options: [
      '7.5%',
      '7.7%',
      '8.0%',
      '8.1%'
    ],
    correctAnswer: 2,
    explanation: 'Le taux normal de TVA en Suisse est de 8.0% depuis le 1er janvier 2024. Les autres taux sont de 2.6% (taux réduit) et 3.8% (taux spécial pour l\'hébergement).'
  },
  {
    id: '3',
    question: 'Quelle est la durée minimale de conservation des pièces comptables selon le droit suisse?',
    options: [
      '5 ans',
      '7 ans',
      '10 ans',
      '15 ans'
    ],
    correctAnswer: 2,
    explanation: 'Selon l\'art. 958f al. 1 CO, les livres et les pièces comptables, ainsi que le rapport de gestion et le rapport de révision, doivent être conservés pendant 10 ans.'
  },
  {
    id: '4',
    question: 'Dans le plan comptable suisse, à quelle classe appartiennent les comptes de charges de personnel?',
    options: [
      'Classe 1',
      'Classe 3',
      'Classe 5',
      'Classe 6'
    ],
    correctAnswer: 2,
    explanation: 'Dans le plan comptable suisse, les charges de personnel sont enregistrées dans la classe 5. La classe 1 correspond aux actifs, la classe 3 aux produits et la classe 6 aux autres charges d\'exploitation.'
  },
  {
    id: '5',
    question: 'Quelle méthode d\'amortissement n\'est PAS reconnue fiscalement en Suisse pour les immobilisations?',
    options: [
      'Méthode linéaire',
      'Méthode dégressive',
      'Méthode des unités d\'œuvre',
      'Amortissement immédiat'
    ],
    correctAnswer: 2,
    explanation: 'La méthode des unités d\'œuvre n\'est généralement pas reconnue fiscalement en Suisse. Les méthodes couramment acceptées sont la méthode linéaire, dégressive, ou l\'amortissement immédiat dans certains cas.'
  },
  {
    id: '6',
    question: 'Quel est le taux de cotisation AVS/AI/APG pour les salariés en 2024?',
    options: [
      '5.05%',
      '5.3%',
      '10.6%',
      '13.1%'
    ],
    correctAnswer: 1,
    explanation: 'Le taux de cotisation AVS/AI/APG pour les salariés est de 5.3% du salaire brut. L\'employeur paie également 5.3%, ce qui fait un total de 10.6%.'
  },
  {
    id: '7',
    question: 'Quelle norme comptable est spécifiquement conçue pour les PME suisses?',
    options: [
      'IFRS',
      'Swiss GAAP RPC',
      'US GAAP',
      'IPSAS'
    ],
    correctAnswer: 1,
    explanation: 'Swiss GAAP RPC (Recommandations relatives à la présentation des comptes) est la norme comptable suisse spécifiquement adaptée aux besoins des PME suisses.'
  }
];

const AccountingQuiz: React.FC<QuizProps> = ({ title }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  
  const handleAnswerSelection = (answerIndex: number) => {
    if (quizSubmitted) return;
    
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
    setShowExplanation(true);
  };
  
  const goToNextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  const goToPreviousQuestion = () => {
    setShowExplanation(false);
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(Array(questions.length).fill(null));
    setShowExplanation(false);
    setQuizSubmitted(false);
    setScore(0);
  };
  
  const handleSubmitQuiz = () => {
    const hasUnansweredQuestions = selectedAnswers.some((answer) => answer === null);
    if (hasUnansweredQuestions) {
      alert('Veuillez répondre à toutes les questions avant de soumettre le quiz.');
      return;
    }
    
    const newScore = selectedAnswers.reduce((total, answer, index) => {
      return answer === questions[index].correctAnswer ? total + 1 : total;
    }, 0);
    
    setScore(newScore);
    setQuizSubmitted(true);
    
    if (newScore / questions.length >= 0.7) {
      // Trigger confetti for good performance
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };
  
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
  
  const question = questions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];
  const isCorrect = selectedAnswer !== null && selectedAnswer === question.correctAnswer;
  
  return (
    <div className="glass rounded-xl p-6 shadow-card">
      {!quizSubmitted ? (
        <>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="text-sm text-swiss-text-secondary">
              Question {currentQuestion + 1} / {questions.length}
            </div>
          </div>
          
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
              {currentQuestion < questions.length - 1 ? (
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
                {questions.map((_, index) => (
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
      ) : (
        // Results display
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
      )}
    </div>
  );
};

export default AccountingQuiz;
