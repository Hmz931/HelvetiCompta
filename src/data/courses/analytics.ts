
import { Course } from './types';

export const analyticsCourse: Course = {
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
};
