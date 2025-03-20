
import { Course } from './types';

export const interestsCourse: Course = {
  id: 'interests',
  title: 'Le calcul des intérêts et leur comptabilisation',
  description: 'Méthodes de calcul des intérêts et leur traitement comptable',
  sections: [
    {
      id: 'calculation',
      title: 'Méthodes de calcul des intérêts',
      content: 'Les intérêts peuvent être calculés selon différentes méthodes: intérêts simples, intérêts composés, etc. Chaque méthode répond à des besoins spécifiques et s\'applique dans des contextes particuliers.'
    },
    {
      id: 'accounting-interests',
      title: 'Comptabilisation des intérêts',
      content: 'Les intérêts représentent soit des charges financières (intérêts débiteurs) soit des produits financiers (intérêts créditeurs). Leur comptabilisation suit des règles précises, notamment en matière de rattachement à l\'exercice.'
    },
    {
      id: 'special-cases',
      title: 'Cas particuliers',
      content: 'Certaines situations nécessitent un traitement spécifique: intérêts intercalaires, escomptes, agios et disagios, intérêts moratoires... Cette section détaille ces cas particuliers et leur traitement comptable.'
    }
  ]
};
