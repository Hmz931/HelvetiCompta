
import { Course } from './types';

export const journalCourse: Course = {
  id: 'journal',
  title: 'Les écritures comptables et le journal',
  description: 'Comprendre et maîtriser les principes des écritures comptables',
  sections: [
    {
      id: 'principles',
      title: 'Principes des écritures comptables',
      content: 'Les écritures comptables suivent le principe de la partie double: chaque opération économique est enregistrée à la fois au débit d\'un compte et au crédit d\'un autre compte pour un montant identique, garantissant ainsi l\'équilibre comptable.'
    },
    {
      id: 'journal',
      title: 'Le journal comptable',
      content: 'Le journal est le livre comptable où sont inscrites, par ordre chronologique, toutes les opérations effectuées par l\'entreprise. Chaque écriture comprend une date, un libellé explicatif, les comptes mouvementés et les montants.'
    },
    {
      id: 'registrations',
      title: 'Enregistrement des opérations courantes',
      content: 'Cette section présente les règles d\'enregistrement des opérations les plus courantes: achats, ventes, règlements, salaires, etc. Chaque type d\'opération suit des schémas d\'écritures spécifiques.'
    }
  ]
};
