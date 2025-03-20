
import { Course } from './types';

export const overviewCourse: Course = {
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
};
