
import { Course } from './types';

export const corporationsCourse: Course = {
  id: 'corporations',
  title: 'Sociétés anonymes (SA)',
  description: 'Structure, fonctionnement et comptabilité des sociétés anonymes en Suisse',
  sections: [
    {
      id: 'characteristics',
      title: 'Caractéristiques de la SA',
      content: 'La société anonyme est une société de capitaux dont le capital est divisé en actions. Les actionnaires ne sont responsables qu\'à concurrence de leur apport. La SA est régie par les articles 620 à 763 du Code des Obligations.'
    },
    {
      id: 'foundation',
      title: 'Constitution et capital',
      content: 'La constitution d\'une SA requiert un capital minimum de 100\'000 CHF, dont 50\'000 CHF au moins doivent être libérés. Cette section détaille les étapes de création et les formalités à accomplir.'
    },
    {
      id: 'accounting-specifics',
      title: 'Spécificités comptables',
      content: 'Cette section traite des particularités comptables des SA: comptabilisation du capital-actions, des réserves légales et statutaires, distribution des dividendes, etc.'
    }
  ]
};
