
import { Course } from './types';

export const llcCourse: Course = {
  id: 'llc',
  title: 'Sociétés à responsabilité limitée (Sàrl)',
  description: 'Structure, fonctionnement et comptabilité des Sàrl en Suisse',
  sections: [
    {
      id: 'characteristics',
      title: 'Caractéristiques de la Sàrl',
      content: 'La Sàrl est une société de capitaux dont le capital est divisé en parts sociales. Les associés ne sont responsables qu\'à concurrence de leur apport. La Sàrl est régie par les articles 772 à 827 du Code des Obligations.'
    },
    {
      id: 'foundation',
      title: 'Constitution et capital',
      content: 'La constitution d\'une Sàrl requiert un capital minimum de 20\'000 CHF, entièrement libéré. Cette section détaille les étapes de création et les formalités à accomplir.'
    },
    {
      id: 'accounting-specifics',
      title: 'Spécificités comptables',
      content: 'Cette section traite des particularités comptables des Sàrl: comptabilisation du capital social, des réserves légales et statutaires, distribution des bénéfices, etc.'
    }
  ]
};
