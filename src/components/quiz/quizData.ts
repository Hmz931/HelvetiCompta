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
  },
  {
    id: '8',
    question: 'Dans quelle colonne du bilan figure la caisse?',
    options: [
      'Actif',
      'Passif',
      'Les deux selon les cas',
      'Ni l\'un ni l\'autre'
    ],
    correctAnswer: 0,
    explanation: 'La caisse (liquidités) figure toujours dans la colonne Actif du bilan. Elle représente les moyens de paiement immédiatement disponibles pour l\'entreprise.'
  },
  {
    id: '9',
    question: 'Dans quelle colonne du bilan figurent les créances clients?',
    options: [
      'Actif',
      'Passif',
      'Les deux selon le solde',
      'Dans le compte de résultat uniquement'
    ],
    correctAnswer: 0,
    explanation: 'Les créances clients représentent les montants dus à l\'entreprise par ses clients. Elles figurent toujours dans la colonne Actif du bilan, généralement dans les actifs circulants.'
  },
  {
    id: '10',
    question: 'Dans quelle colonne du bilan figurent les dettes fournisseurs?',
    options: [
      'Actif',
      'Passif',
      'Actif si solde débiteur, Passif si solde créditeur',
      'Ni l\'un ni l\'autre'
    ],
    correctAnswer: 1,
    explanation: 'Les dettes fournisseurs représentent les montants que l\'entreprise doit à ses fournisseurs. Elles figurent toujours dans la colonne Passif du bilan, généralement dans les dettes à court terme.'
  },
  {
    id: '11',
    question: 'Dans quelle colonne du bilan figure le capital?',
    options: [
      'Actif',
      'Passif',
      'Les deux selon le type d\'entreprise',
      'Uniquement dans le compte de résultat'
    ],
    correctAnswer: 1,
    explanation: 'Le capital représente les apports des propriétaires ou actionnaires. Il figure toujours dans la colonne Passif du bilan, dans les fonds propres.'
  },
  {
    id: '12',
    question: 'Dans quelle colonne du bilan figure un immeuble?',
    options: [
      'Actif',
      'Passif',
      'Dépend de son utilisation',
      'Hors bilan'
    ],
    correctAnswer: 0,
    explanation: 'Un immeuble, qu\'il soit à usage commercial ou d\'investissement, figure toujours dans la colonne Actif du bilan, généralement dans les actifs immobilisés.'
  },
  {
    id: '13',
    question: 'Dans quelle colonne du bilan figure une dette hypothécaire?',
    options: [
      'Actif',
      'Passif',
      'Actif si taux négatif, Passif si taux positif',
      'Ni l\'un ni l\'autre'
    ],
    correctAnswer: 1,
    explanation: 'Une dette hypothécaire est un emprunt contracté pour financer l\'achat d\'un bien immobilier. Elle figure toujours dans la colonne Passif du bilan, généralement dans les dettes à long terme.'
  },
  {
    id: '14',
    question: 'Dans quelle colonne du bilan figure le stock de marchandises?',
    options: [
      'Actif',
      'Passif',
      'Dépend de leur valeur',
      'Dans le compte de résultat uniquement'
    ],
    correctAnswer: 0,
    explanation: 'Le stock de marchandises représente les biens destinés à être vendus. Il figure toujours dans la colonne Actif du bilan, dans les actifs circulants.'
  },
  {
    id: '15',
    question: 'Dans quelle colonne du bilan figure le mobilier?',
    options: [
      'Actif',
      'Passif',
      'Selon son état d\'amortissement',
      'Hors bilan après amortissement'
    ],
    correctAnswer: 0,
    explanation: 'Le mobilier (meubles, équipements de bureau) figure toujours dans la colonne Actif du bilan, dans les actifs immobilisés, même s\'il est partiellement ou totalement amorti tant qu\'il est encore utilisé.'
  },
  {
    id: '16',
    question: 'Dans quelle colonne du bilan figurent les véhicules?',
    options: [
      'Actif',
      'Passif',
      'Actif pour les véhicules neufs, Passif pour les anciens',
      'Doivent être entièrement amortis dès la première année'
    ],
    correctAnswer: 0,
    explanation: 'Les véhicules utilisés par l\'entreprise figurent toujours dans la colonne Actif du bilan, dans les actifs immobilisés, quelle que soit leur ancienneté.'
  },
  {
    id: '17',
    question: 'Dans quelle colonne du bilan figure une dette bancaire à court terme?',
    options: [
      'Actif',
      'Passif',
      'Actif si solde créditeur, Passif si solde débiteur',
      'En déduction des liquidités à l\'actif'
    ],
    correctAnswer: 1,
    explanation: 'Une dette bancaire à court terme représente un emprunt à rembourser dans un délai inférieur à un an. Elle figure toujours dans la colonne Passif du bilan, dans les dettes à court terme.'
  },
  {
    id: '18',
    question: 'Dans quelle colonne du bilan figure un brevet?',
    options: [
      'Actif',
      'Passif',
      'Uniquement dans l\'annexe aux comptes',
      'Ne peut pas figurer au bilan selon les normes suisses'
    ],
    correctAnswer: 0,
    explanation: 'Un brevet est un actif incorporel qui figure dans la colonne Actif du bilan, dans les immobilisations incorporelles, s\'il a été acquis à titre onéreux ou développé en interne (certaines restrictions s\'appliquent pour ce dernier cas).'
  },
  {
    id: '19',
    question: 'Dans quelle colonne du bilan figure l\'outillage?',
    options: [
      'Actif',
      'Passif',
      'Ne figure pas au bilan si d\'une valeur inférieure à 5\'000 CHF',
      'Directement comptabilisé en charge'
    ],
    correctAnswer: 0,
    explanation: 'L\'outillage figure dans la colonne Actif du bilan, dans les immobilisations corporelles, à moins qu\'il ne soit de faible valeur et comptabilisé directement en charge selon la politique d\'activation de l\'entreprise.'
  },
  {
    id: '20',
    question: 'Dans quelle colonne du bilan figure une créance à long terme?',
    options: [
      'Actif',
      'Passif',
      'Hors bilan jusqu\'à son échéance',
      'Uniquement dans l\'annexe aux comptes'
    ],
    correctAnswer: 0,
    explanation: 'Une créance à long terme représente un montant dû à l\'entreprise avec une échéance supérieure à un an. Elle figure dans la colonne Actif du bilan, généralement dans les actifs immobilisés financiers.'
  },
  {
    id: '21',
    question: 'L\'ensemble des ventes à crédit figurent au bilan sous les créances clients.',
    options: [
      'Vrai',
      'Faux',
      'Cela dépend de la date de paiement',
      'Elles figurent uniquement dans le compte de résultat'
    ],
    correctAnswer: 0,
    explanation: 'Les ventes à crédit (non encore encaissées) sont considérées comme des créances clients et figurent à l\'actif du bilan dans les actifs circulants.'
  },
  {
    id: '22',
    question: 'Le bilan correspond à une sorte de photographie de la situation d\'une entreprise à un moment donné.',
    options: [
      'Vrai',
      'Faux',
      'Le bilan montre l\'évolution sur une période',
      'Le bilan est une projection future'
    ],
    correctAnswer: 0,
    explanation: 'Le bilan est effectivement une "photographie" de la situation patrimoniale de l\'entreprise à une date précise, montrant ses actifs, ses passifs et ses fonds propres à cet instant.'
  },
  {
    id: '23',
    question: 'Le bilan doit toujours être dressé le 31 décembre.',
    options: [
      'Vrai',
      'Faux',
      'Uniquement pour les sociétés anonymes',
      'Uniquement pour les entreprises cotées en bourse'
    ],
    correctAnswer: 1,
    explanation: 'Le bilan n\'est pas obligatoirement dressé le 31 décembre. L\'entreprise peut choisir une autre date de clôture qui correspond mieux à son cycle d\'activité, sous réserve de certaines contraintes fiscales selon les cantons.'
  },
  {
    id: '24',
    question: 'Le passif du bilan indique la provenance des fonds mis à disposition de l\'entreprise.',
    options: [
      'Vrai',
      'Faux',
      'Le passif indique uniquement les dettes',
      'Le passif indique l\'utilisation des fonds'
    ],
    correctAnswer: 0,
    explanation: 'Le passif du bilan indique effectivement l\'origine des ressources (fonds propres et dettes) dont dispose l\'entreprise, tandis que l\'actif montre l\'utilisation qui en est faite.'
  },
  {
    id: '25',
    question: 'Le Brevet est à classer parmi les actifs circulants.',
    options: [
      'Vrai',
      'Faux',
      'Uniquement s\'il est destiné à être vendu dans l\'année',
      'Cela dépend de sa durée de validité restante'
    ],
    correctAnswer: 1,
    explanation: 'Un brevet est généralement classé parmi les actifs immobilisés incorporels et non dans les actifs circulants, car il s\'agit d\'un actif à long terme dont l\'entreprise tire des avantages sur plusieurs années.'
  },
  {
    id: '26',
    question: 'Le fonds de roulement (FR) est identique au total des actifs circulants.',
    options: [
      'Vrai',
      'Faux',
      'Uniquement dans les petites entreprises',
      'Uniquement si l\'entreprise n\'a pas de dettes à court terme'
    ],
    correctAnswer: 1,
    explanation: 'Le fonds de roulement n\'est pas identique au total des actifs circulants. Il correspond à la différence entre les actifs circulants et les dettes à court terme (passifs circulants).'
  },
  {
    id: '27',
    question: 'Les Autres dettes font partie des actifs immobilisés.',
    options: [
      'Vrai',
      'Faux',
      'Uniquement si leur échéance est supérieure à un an',
      'Uniquement s\'il s\'agit de dettes envers les associés'
    ],
    correctAnswer: 1,
    explanation: 'Les "Autres dettes" sont des passifs et figurent au passif du bilan, soit dans les dettes à court terme, soit dans les dettes à long terme selon leur échéance. Elles ne font jamais partie des actifs immobilisés.'
  },
  {
    id: '28',
    question: 'Les capitaux étrangers doivent immédiatement ou à terme être remboursés par l\'entreprise, à l\'inverse des capitaux propres qui ne doivent pas être remboursés.',
    options: [
      'Vrai',
      'Faux',
      'Cela dépend du type de société',
      'Cela dépend des contrats de prêt'
    ],
    correctAnswer: 0,
    explanation: 'C\'est exact. Les capitaux étrangers (dettes) sont destinés à être remboursés selon des échéances définies, tandis que les capitaux propres représentent les ressources permanentes de l\'entreprise et ne font pas l\'objet d\'une obligation de remboursement (sauf cas particuliers comme une réduction de capital).'
  },
  {
    id: '29',
    question: 'À l\'inverse du compte, le bilan représente une image statique de la comptabilité.',
    options: [
      'Vrai',
      'Faux',
      'Cela dépend du type de bilan',
      'Le bilan est également dynamique'
    ],
    correctAnswer: 0,
    explanation: 'En effet, le bilan est une photographie de la situation financière de l\'entreprise à un moment précis (donc statique), alors que les comptes sont des éléments dynamiques qui enregistrent les mouvements.'
  },
  {
    id: '30',
    question: 'Lorsqu\'on écrit une somme à gauche du compte, on dit que l\'on débite le compte.',
    options: [
      'Vrai',
      'Faux',
      'Cela dépend du type de compte',
      'On dit qu\'on crédite le compte'
    ],
    correctAnswer: 0,
    explanation: 'C\'est exact. La colonne de gauche d\'un compte est le débit (ou Doit). Lorsqu\'on porte une somme au débit d\'un compte, on dit qu\'on débite le compte.'
  },
  {
    id: '31',
    question: 'L\'ensemble des comptes actifs s\'appelle le Grand Livre.',
    options: [
      'Vrai',
      'Faux',
      'Seulement les comptes de classe 1',
      'Le Grand Livre ne concerne que les comptes du bilan'
    ],
    correctAnswer: 1,
    explanation: 'C\'est faux. Le Grand Livre est l\'ensemble de tous les comptes de la comptabilité, qu\'ils soient actifs, passifs, de charges ou de produits, et non pas uniquement les comptes actifs.'
  },
  {
    id: '32',
    question: 'Les comptes actifs sont numérotés de 2000 à 2999.',
    options: [
      'Vrai',
      'Faux',
      'Ils sont numérotés de 1000 à 1999',
      'La numérotation varie selon le plan comptable utilisé'
    ],
    correctAnswer: 1,
    explanation: 'C\'est faux. Selon le plan comptable suisse PME, les comptes actifs commencent par le chiffre 1 (donc numérotés de 1000 à 1999), tandis que les comptes passifs commencent par le chiffre 2 (numérotés de 2000 à 2999).'
  },
  {
    id: '33',
    question: 'Le côté droit d\'un compte s\'appelle toujours le crédit.',
    options: [
      'Vrai',
      'Faux',
      'Seulement pour les comptes de bilan',
      'Seulement pour les comptes de résultat'
    ],
    correctAnswer: 0,
    explanation: 'C\'est exact. Dans un compte en T, la colonne de droite s\'appelle toujours le crédit (ou l\'Avoir), indépendamment du type de compte.'
  },
  {
    id: '34',
    question: 'Le bilan est un tableau de l\'ensemble des soldes à nouveau des comptes actifs et passifs.',
    options: [
      'Vrai',
      'Faux',
      'Le bilan inclut tous les comptes y compris les comptes de résultat',
      'Le bilan ne montre que les comptes avec des soldes positifs'
    ],
    correctAnswer: 0,
    explanation: 'C\'est exact. Le bilan présente l\'ensemble des soldes à nouveau des comptes d\'actif et de passif, montrant ainsi la situation financière de l\'entreprise à un moment donné.'
  },
  {
    id: '35',
    question: 'Le côté gauche d\'un compte s\'appelle toujours le débit.',
    options: [
      'Vrai',
      'Faux',
      'Seulement pour les comptes actifs',
      'Seulement pour les comptes de charges'
    ],
    correctAnswer: 0,
    explanation: 'C\'est exact. Dans un compte en T, la colonne de gauche s\'appelle toujours le débit (ou Doit), quel que soit le type de compte.'
  },
  {
    id: '36',
    question: 'Clôturer un compte actif signifie déterminer la différence entre le total du débit et du crédit du compte; le montant est porté en solde du compte.',
    options: [
      'Vrai',
      'Faux',
      'C\'est seulement vrai pour les comptes passifs',
      'La clôture d\'un compte actif implique toujours un solde nul'
    ],
    correctAnswer: 0,
    explanation: 'C\'est exact. Clôturer un compte consiste à calculer la différence entre le total des montants au débit et au crédit, puis à inscrire cette différence du côté le moins élevé pour équilibrer le compte.'
  },
  {
    id: '37',
    question: 'Lorsqu\'un compte est clôturé, le total du débit est toujours égal au total du crédit.',
    options: [
      'Vrai',
      'Faux',
      'Uniquement pour les comptes de bilan',
      'Uniquement lors de la clôture annuelle'
    ],
    correctAnswer: 0,
    explanation: 'C\'est exact. Après la clôture d\'un compte, les totaux du débit et du crédit s\'équilibrent toujours, car on ajoute le solde du côté le moins élevé pour égaliser les deux colonnes.'
  },
  {
    id: '38',
    question: 'Le N° attribué au compte Caisse est 2000.',
    options: [
      'Vrai',
      'Faux',
      'C\'est 1000',
      'Le numéro varie selon l\'entreprise'
    ],
    correctAnswer: 1,
    explanation: 'C\'est faux. Dans le plan comptable suisse PME, le compte Caisse porte généralement le numéro 1000, car il s\'agit d\'un compte d\'actif (les comptes d\'actif commencent par 1).'
  },
  {
    id: '39',
    question: 'Le compte est un élément statique de la comptabilité.',
    options: [
      'Vrai',
      'Faux',
      'Il est à la fois statique et dynamique',
      'Cela dépend s\'il est utilisé dans le bilan ou dans le compte de résultat'
    ],
    correctAnswer: 1,
    explanation: 'C\'est faux. Le compte est un élément dynamique de la comptabilité qui enregistre les mouvements (augmentations et diminutions) des différents éléments du patrimoine et du résultat, contrairement au bilan qui est statique.'
  },
  {
    id: '40',
    question: 'Chaque poste du bilan correspond au moins à un compte de la comptabilité.',
    options: [
      'Vrai',
      'Faux',
      'Certains postes du bilan n\'ont pas de compte correspondant',
      'Les postes du bilan correspondent uniquement aux comptes actifs et passifs'
    ],
    correctAnswer: 0,
    explanation: 'C\'est exact. Chaque poste figurant au bilan correspond à au moins un compte de la comptabilité, bien que parfois un poste du bilan puisse regrouper plusieurs comptes pour des raisons de présentation simplifiée.'
  }
];
