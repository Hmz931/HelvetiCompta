
import { Course } from './types';

export const financialCourse: Course = {
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
};
