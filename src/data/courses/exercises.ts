
import { Course } from './types';

export const exercisesCourse: Course = {
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
};
