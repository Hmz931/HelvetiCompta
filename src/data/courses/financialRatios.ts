
import { Course } from './types';

export const financialRatiosCourse: Course = {
  id: 'financial-ratios',
  title: 'Ratios et indicateurs comptables et financiers',
  description: 'Analyser la santé financière d\'une entreprise à l\'aide de ratios',
  sections: [
    {
      id: 'liquidity',
      title: 'Ratios de liquidité',
      content: 'Les ratios de liquidité (liquidité générale, liquidité réduite, liquidité immédiate) permettent d\'évaluer la capacité de l\'entreprise à faire face à ses engagements à court terme.'
    },
    {
      id: 'solvency',
      title: 'Ratios de solvabilité',
      content: 'Les ratios de solvabilité (taux d\'endettement, autonomie financière, capacité de remboursement) permettent d\'évaluer la structure financière de l\'entreprise et sa capacité à rembourser ses dettes à long terme.'
    },
    {
      id: 'profitability',
      title: 'Ratios de rentabilité',
      content: 'Les ratios de rentabilité (rentabilité économique, rentabilité financière, marge nette) permettent d\'évaluer la capacité de l\'entreprise à générer des bénéfices par rapport aux moyens mis en œuvre.'
    }
  ]
};
