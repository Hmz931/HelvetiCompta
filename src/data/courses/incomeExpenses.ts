
import { Course } from './types';

export const incomeExpensesCourse: Course = {
  id: 'income-expenses',
  title: 'Les charges, produits et le résultat de l\'entreprise',
  description: 'Comprendre comment se forme le résultat d\'une entreprise',
  sections: [
    {
      id: 'charges',
      title: 'Les charges',
      content: 'Les charges représentent les dépenses et coûts nécessaires à l\'activité de l\'entreprise. Elles comprennent les achats de marchandises, les frais de personnel, les frais généraux, les amortissements, etc.'
    },
    {
      id: 'products',
      title: 'Les produits',
      content: 'Les produits correspondent aux recettes générées par l\'activité de l\'entreprise. Ils comprennent principalement le chiffre d\'affaires issu des ventes de biens et services, mais également d\'autres revenus comme les produits financiers.'
    },
    {
      id: 'results',
      title: 'Le résultat',
      content: 'Le résultat est la différence entre les produits et les charges. Si cette différence est positive, l\'entreprise dégage un bénéfice. Si elle est négative, l\'entreprise enregistre une perte. Le résultat est calculé à la fin de l\'exercice comptable.'
    }
  ]
};
