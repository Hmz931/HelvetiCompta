
import { Course } from './types';

export const taxCourse: Course = {
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
};
