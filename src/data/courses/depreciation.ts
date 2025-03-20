
import { Course } from './types';

export const depreciationCourse: Course = {
  id: 'depreciation',
  title: 'Les amortissements',
  description: 'Principes et méthodes d\'amortissement en comptabilité suisse',
  sections: [
    {
      id: 'principles',
      title: 'Principes de l\'amortissement',
      content: 'L\'amortissement est la constatation comptable de la dépréciation d\'un actif immobilisé due à l\'usure, au temps ou à l\'obsolescence. C\'est une charge qui permet de répartir le coût d\'acquisition d\'un bien sur sa durée d\'utilisation.'
    },
    {
      id: 'methods',
      title: 'Méthodes d\'amortissement',
      content: 'Différentes méthodes d\'amortissement peuvent être utilisées: linéaire, dégressif, progressif, par unités de production... Le choix dépend de la nature du bien et de la politique financière de l\'entreprise.'
    },
    {
      id: 'tax-aspects',
      title: 'Aspects fiscaux',
      content: 'En Suisse, les autorités fiscales publient des directives concernant les taux d\'amortissement admis fiscalement. Cette section détaille ces aspects et leurs implications pour les entreprises.'
    }
  ]
};
