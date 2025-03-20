
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

export const courseStructure: CourseStructure = {
  overview: {
    id: 'overview',
    title: 'Vue d\'ensemble de la comptabilité suisse',
    description: 'Introduction au système comptable suisse et à ses spécificités',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction à la comptabilité suisse',
        content: 'La comptabilité en Suisse répond à des normes spécifiques définies principalement par le Code des Obligations (CO). Cette section présente les fondements du système comptable suisse et ses principales caractéristiques.'
      },
      {
        id: 'legal-framework',
        title: 'Cadre légal et réglementaire',
        content: 'Le cadre juridique de la comptabilité suisse repose principalement sur le Code des Obligations (articles 957 à 964), mais également sur d\'autres textes comme la loi sur la TVA, les dispositions fiscales, et pour certaines entreprises, les normes Swiss GAAP RPC ou IFRS.'
      },
      {
        id: 'accounting-principles',
        title: 'Principes comptables suisses',
        content: 'Cette section détaille les principes fondamentaux de la comptabilité suisse : régularité, exhaustivité, clarté, prudence, permanence des méthodes, et continuité d\'exploitation.'
      }
    ]
  },
  financial: {
    id: 'financial',
    title: 'Comptabilité financière',
    description: 'Maîtrisez les aspects fondamentaux de la comptabilité générale',
    sections: [
      {
        id: 'accounts-chart',
        title: 'Plan comptable suisse',
        content: 'Le plan comptable suisse PME est structuré selon les classes suivantes : 1-Actifs, 2-Passifs, 3-Produits, 4-Charges de matières et de marchandises, 5-Charges de personnel, 6-Autres charges d\'exploitation, 7-Résultats des activités annexes, 8-Résultats hors exploitation et extraordinaires, 9-Clôture.'
      },
      {
        id: 'daily-operations',
        title: 'Comptabilisation des opérations courantes',
        content: 'Cette section couvre les écritures comptables des opérations quotidiennes : achats, ventes, TVA, salaires, ainsi que les particularités suisses dans le traitement de ces opérations.'
      }
    ]
  },
  salary: {
    id: 'salary',
    title: 'Gestion des salaires',
    description: 'Tout sur la comptabilisation des salaires et charges sociales',
    sections: [
      {
        id: 'social-insurance',
        title: 'Assurances sociales en Suisse',
        content: 'Vue d\'ensemble du système d\'assurances sociales suisse : AVS, AI, APG, AC, LAA, LPP, etc.'
      },
      {
        id: 'payroll-accounting',
        title: 'Comptabilisation des salaires',
        content: 'Méthodes et écritures pour la comptabilisation des salaires et des charges sociales.'
      }
    ]
  },
  analytics: {
    id: 'analytics',
    title: 'Comptabilité analytique',
    description: 'Techniques de comptabilité analytique pour l\'analyse des coûts',
    sections: [
      {
        id: 'cost-accounting',
        title: 'Comptabilité par centres de coûts',
        content: 'Méthodes d\'allocation des coûts par départements ou activités.'
      },
      {
        id: 'profitability',
        title: 'Analyse de rentabilité',
        content: 'Techniques pour évaluer la rentabilité des produits, services ou projets.'
      }
    ]
  },
  tax: {
    id: 'tax',
    title: 'TVA et fiscalité',
    description: 'Maîtrisez les aspects fiscaux de la comptabilité suisse',
    sections: [
      {
        id: 'vat',
        title: 'TVA suisse',
        content: 'Principes de la TVA suisse, taux applicables, méthodes de décompte et particularités.'
      },
      {
        id: 'tax-deductions',
        title: 'Déductions fiscales',
        content: 'Optimisation fiscale légale pour les entreprises suisses.'
      }
    ]
  },
  closing: {
    id: 'closing',
    title: 'Clôtures et opérations de fin d\'exercice',
    description: 'Techniques et procédures pour les bouclements comptables',
    sections: [
      {
        id: 'year-end',
        title: 'Travaux de bouclement',
        content: 'Procédures et écritures de régularisation pour la clôture annuelle.'
      },
      {
        id: 'financial-statements',
        title: 'États financiers',
        content: 'Préparation du bilan, compte de résultat et annexe selon les normes suisses.'
      }
    ]
  },
  exercises: {
    id: 'exercises',
    title: 'Exercices pratiques',
    description: 'Mettez en pratique vos connaissances avec des exercices réels',
    sections: [
      {
        id: 'basic-exercises',
        title: 'Exercices de base',
        content: 'Série d\'exercices couvrant les opérations comptables fondamentales.'
      },
      {
        id: 'advanced-cases',
        title: 'Cas pratiques avancés',
        content: 'Études de cas complètes simulant des situations réelles d\'entreprises suisses.'
      }
    ]
  }
};
