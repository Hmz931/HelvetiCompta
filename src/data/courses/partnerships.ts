
import { Course } from './types';

export const partnershipsCourse: Course = {
  id: 'partnerships',
  title: 'Sociétés de personnes',
  description: 'Caractéristiques et fonctionnement des sociétés de personnes en Suisse',
  sections: [
    {
      id: 'general-partnerships',
      title: 'La société en nom collectif (SNC)',
      content: 'La SNC est une société de personnes dans laquelle les associés sont personnellement et solidairement responsables des dettes sociales. Elle est régie par les articles 552 à 593 du Code des Obligations.'
    },
    {
      id: 'limited-partnerships',
      title: 'La société en commandite',
      content: 'La société en commandite se caractérise par la présence de deux types d\'associés: les commandités (responsabilité illimitée) et les commanditaires (responsabilité limitée à leur apport). Elle est régie par les articles 594 à 619 du CO.'
    },
    {
      id: 'accounting-specifics',
      title: 'Spécificités comptables',
      content: 'Cette section aborde les particularités comptables des sociétés de personnes: traitement des apports, répartition des bénéfices, comptabilisation des prélèvements des associés, etc.'
    }
  ]
};
