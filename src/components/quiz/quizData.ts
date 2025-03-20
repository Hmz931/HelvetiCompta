
import { QuizQuestion } from './types';

export const accountingQuizQuestions: QuizQuestion[] = [
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
