
import React, { useState } from 'react';
import { CheckCircle, XCircle, HelpCircle, RefreshCw, Award } from 'lucide-react';

type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

type QuizProps = {
  questions: Question[];
  title: string;
};

const quizQuestions: Question[] = [
  {
    id: 1,
    text: "Quel compte du plan comptable suisse est utilisé pour la caisse?",
    options: ["1000", "2000", "3000", "4000"],
    correctAnswer: 0,
    explanation: "La caisse est enregistrée au compte 1000 dans le plan comptable suisse. Les comptes 1xxx correspondent aux actifs."
  },
  {
    id: 2,
    text: "À quel taux standard la TVA est-elle prélevée en Suisse?",
    options: ["7.7%", "8.1%", "2.5%", "3.7%"],
    correctAnswer: 1,
    explanation: "Le taux standard de la TVA en Suisse est de 8.1% depuis le 1er janvier 2024. Le taux réduit est de 2.6% et le taux spécial pour l'hébergement est de 3.8%."
  },
  {
    id: 3,
    text: "Quel document doit obligatoirement comporter le numéro d'identification TVA?",
    options: ["Un reçu de caisse", "Une facture", "Un bulletin de livraison", "Un relevé bancaire"],
    correctAnswer: 1,
    explanation: "Une facture doit obligatoirement comporter le numéro d'identification TVA, tant celui du fournisseur que celui du client dans certains cas (auto-liquidation)."
  },
  {
    id: 4,
    text: "Quelle est la durée légale de conservation des pièces comptables en Suisse?",
    options: ["5 ans", "7 ans", "10 ans", "15 ans"],
    correctAnswer: 2,
    explanation: "La durée légale de conservation des pièces comptables en Suisse est de 10 ans, conformément à l'article 958f du Code des obligations."
  },
  {
    id: 5,
    text: "Comment s'appelle le document qui résume les charges et les produits d'une entreprise?",
    options: ["Le bilan", "Le compte de résultat", "L'annexe", "Le tableau de flux de trésorerie"],
    correctAnswer: 1,
    explanation: "Le compte de résultat (aussi appelé compte de profits et pertes) résume les charges et les produits d'une entreprise sur une période donnée."
  },
  {
    id: 6,
    text: "Que signifie l'acronyme LPP?",
    options: [
      "Loi sur la Prévoyance Professionnelle",
      "Loi sur les Produits et Prestations",
      "Loi sur les Placements Privés",
      "Loi sur la Protection du Personnel"
    ],
    correctAnswer: 0,
    explanation: "LPP signifie Loi sur la Prévoyance Professionnelle. Elle constitue le 2ème pilier du système de prévoyance suisse et est obligatoire pour tous les salariés."
  },
  {
    id: 7,
    text: "Quelle est la différence fondamentale entre un actif et un passif?",
    options: [
      "Un actif génère des dépenses, un passif des recettes",
      "Un actif appartient à l'entreprise, un passif est dû par l'entreprise",
      "Un actif est toujours matériel, un passif est toujours immatériel",
      "Un actif est un bien meuble, un passif est un bien immeuble"
    ],
    correctAnswer: 1,
    explanation: "Un actif représente ce que l'entreprise possède ou ce qui lui est dû, tandis qu'un passif représente ce que l'entreprise doit à des tiers ou à ses propriétaires."
  },
  {
    id: 8,
    text: "Quel logiciel de comptabilité est le plus utilisé en Suisse pour les grandes entreprises?",
    options: ["SAP", "Sage", "Abacus", "Oracle"],
    correctAnswer: 2,
    explanation: "Abacus est le logiciel de comptabilité le plus répandu en Suisse pour les grandes entreprises, mais aussi pour les PME. Il est spécialement adapté aux spécificités de la comptabilité suisse."
  },
  {
    id: 9,
    text: "Quelle méthode d'amortissement est la plus couramment utilisée en Suisse?",
    options: [
      "Amortissement linéaire",
      "Amortissement dégressif",
      "Amortissement par unités d'œuvre",
      "Amortissement progressif"
    ],
    correctAnswer: 1,
    explanation: "L'amortissement dégressif est la méthode la plus couramment utilisée en Suisse, notamment pour des raisons fiscales. Cette méthode permet de déduire des montants plus importants les premières années."
  },
  {
    id: 10,
    text: "Dans le plan comptable suisse, à quelle classe appartiennent les comptes commençant par 5?",
    options: [
      "Actifs",
      "Passifs",
      "Produits",
      "Charges"
    ],
    correctAnswer: 3,
    explanation: "Les comptes de la classe 5 correspondent aux charges de personnel dans le plan comptable suisse."
  }
];

const AccountingQuiz: React.FC<QuizProps> = ({ questions = quizQuestions, title = "Quiz Comptabilité Suisse" }) => {
  const [currentAnswers, setCurrentAnswers] = useState<Array<number | null>>(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...currentAnswers];
    newAnswers[questionIndex] = optionIndex;
    setCurrentAnswers(newAnswers);
  };
  
  const handleSubmit = () => {
    setShowResults(true);
  };
  
  const resetQuiz = () => {
    setCurrentAnswers(Array(questions.length).fill(null));
    setShowResults(false);
    setCurrentQuestion(0);
  };
  
  const score = currentAnswers.reduce((acc, answer, index) => {
    if (answer === questions[index].correctAnswer) {
      return acc + 1;
    }
    return acc;
  }, 0);
  
  const scorePercentage = Math.round((score / questions.length) * 100);
  
  const getScoreMessage = () => {
    if (scorePercentage >= 90) return "Excellent! Vous maîtrisez parfaitement le sujet!";
    if (scorePercentage >= 75) return "Très bien! Vous avez de solides connaissances!";
    if (scorePercentage >= 60) return "Bien! Vous avez compris les concepts essentiels.";
    if (scorePercentage >= 40) return "Pas mal, mais il y a encore des points à améliorer.";
    return "Continuez à étudier, la pratique fait la perfection!";
  };
  
  const navigateQuestion = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (direction === 'next' && currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="glass rounded-xl shadow-card p-6">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      
      {!showResults ? (
        <div>
          <div className="mb-4 flex justify-between items-center">
            <span className="text-sm text-swiss-text-secondary">
              Question {currentQuestion + 1} sur {questions.length}
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-swiss-text-secondary">
                {currentAnswers.filter(a => a !== null).length} réponses sur {questions.length}
              </span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-swiss-blue h-2.5 rounded-full" 
                  style={{ width: `${(currentAnswers.filter(a => a !== null).length / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="bg-swiss-muted p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">{questions[currentQuestion].text}</h3>
            
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleAnswer(currentQuestion, optionIndex)}
                  className={`w-full text-left p-3 rounded-md transition-colors ${
                    currentAnswers[currentQuestion] === optionIndex
                      ? 'bg-swiss-blue text-white'
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  <span className="font-medium">
                    {String.fromCharCode(65 + optionIndex)}.
                  </span>{' '}
                  {option}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <button
                onClick={() => navigateQuestion('prev')}
                disabled={currentQuestion === 0}
                className={`px-4 py-2 rounded-md border transition-colors ${
                  currentQuestion === 0
                    ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                    : 'border-swiss-blue text-swiss-blue hover:bg-swiss-blue/10'
                }`}
              >
                Question précédente
              </button>
            </div>
            
            <div className="flex space-x-3">
              {currentQuestion < questions.length - 1 ? (
                <button
                  onClick={() => navigateQuestion('next')}
                  className="px-4 py-2 rounded-md bg-swiss-blue text-white hover:bg-swiss-blue/90 transition-colors"
                >
                  Question suivante
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={currentAnswers.includes(null)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    currentAnswers.includes(null)
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  Valider mes réponses
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-4 bg-swiss-blue/10 rounded-full mb-4">
              <Award size={48} className="text-swiss-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-2">
              Votre score: {score}/{questions.length} ({scorePercentage}%)
            </h3>
            <p className="text-lg text-swiss-text-secondary">{getScoreMessage()}</p>
          </div>
          
          <div className="space-y-6 mb-8">
            {questions.map((question, questionIndex) => {
              const isCorrect = currentAnswers[questionIndex] === question.correctAnswer;
              
              return (
                <div 
                  key={questionIndex}
                  className={`p-4 rounded-lg border ${
                    isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                  }`}
                >
                  <div className="flex items-start mb-2">
                    <div className="mr-3 mt-1">
                      {isCorrect ? (
                        <CheckCircle size={20} className="text-green-600" />
                      ) : (
                        <XCircle size={20} className="text-red-600" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">
                        {questionIndex + 1}. {question.text}
                      </h4>
                      
                      <div className="ml-6 mt-2 space-y-1">
                        {question.options.map((option, optionIndex) => (
                          <div 
                            key={optionIndex}
                            className={`py-1 px-2 rounded ${
                              optionIndex === question.correctAnswer
                                ? 'bg-green-200 text-green-800'
                                : currentAnswers[questionIndex] === optionIndex
                                  ? 'bg-red-200 text-red-800'
                                  : ''
                            }`}
                          >
                            <span className="font-medium">
                              {String.fromCharCode(65 + optionIndex)}.
                            </span>{' '}
                            {option}
                            {optionIndex === question.correctAnswer && (
                              <span className="ml-2">✓</span>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-3 bg-white p-3 rounded border border-gray-200">
                        <div className="flex items-center">
                          <HelpCircle size={16} className="text-swiss-blue mr-2" />
                          <span className="font-medium">Explication:</span>
                        </div>
                        <p className="mt-1 text-swiss-text-secondary">
                          {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <button
              onClick={resetQuiz}
              className="inline-flex items-center px-4 py-2 rounded-md bg-swiss-blue text-white hover:bg-swiss-blue/90 transition-colors"
            >
              <RefreshCw size={16} className="mr-2" />
              Recommencer le quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountingQuiz;
