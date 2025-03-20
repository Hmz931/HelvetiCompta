
import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { QuizProps } from './types';
import { accountingQuizQuestions } from './quizData';
import QuestionDisplay from './QuestionDisplay';
import QuizNavigation from './QuizNavigation';
import QuizResults from './QuizResults';

const AccountingQuiz: React.FC<QuizProps> = ({ title }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(accountingQuizQuestions.length).fill(null));
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
    if (currentQuestion < accountingQuizQuestions.length - 1) {
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
    setSelectedAnswers(Array(accountingQuizQuestions.length).fill(null));
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
      return answer === accountingQuizQuestions[index].correctAnswer ? total + 1 : total;
    }, 0);
    
    setScore(newScore);
    setQuizSubmitted(true);
    
    if (newScore / accountingQuizQuestions.length >= 0.7) {
      // Trigger confetti for good performance
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.6 }
      });
    }
  };
  
  const question = accountingQuizQuestions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];
  
  return (
    <div className="glass rounded-xl p-6 shadow-card">
      {!quizSubmitted ? (
        <>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="text-sm text-swiss-text-secondary">
              Question {currentQuestion + 1} / {accountingQuizQuestions.length}
            </div>
          </div>
          
          <QuestionDisplay
            question={question}
            selectedAnswer={selectedAnswer}
            handleAnswerSelection={handleAnswerSelection}
            showExplanation={showExplanation}
            quizSubmitted={quizSubmitted}
          />
          
          <QuizNavigation
            currentQuestion={currentQuestion}
            questionsLength={accountingQuizQuestions.length}
            goToPreviousQuestion={goToPreviousQuestion}
            goToNextQuestion={goToNextQuestion}
            handleSubmitQuiz={handleSubmitQuiz}
            selectedAnswers={selectedAnswers}
            setCurrentQuestion={setCurrentQuestion}
          />
        </>
      ) : (
        <QuizResults
          score={score}
          questions={accountingQuizQuestions}
          selectedAnswers={selectedAnswers}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
};

export default AccountingQuiz;
