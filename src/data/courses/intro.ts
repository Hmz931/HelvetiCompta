
import { Course } from './types';

export const introCourse: Course = {
  id: 'intro',
  title: 'Introduction à la comptabilité',
  description: 'Les concepts fondamentaux de la comptabilité suisse',
  sections: [
    {
      id: 'basics',
      title: 'Principes fondamentaux',
      content: 'La comptabilité est un système d\'information qui permet de collecter, traiter et communiquer des données financières sur une entreprise. En Suisse, elle est encadrée par le Code des Obligations (CO) qui définit les principes généraux à respecter.'
    },
    {
      id: 'importance',
      title: 'Importance de la comptabilité',
      content: 'La comptabilité joue un rôle crucial pour toute entreprise. Elle permet de suivre l\'activité, prendre des décisions éclairées, rendre des comptes aux parties prenantes et répondre aux obligations légales et fiscales.'
    },
    {
      id: 'swiss-context',
      title: 'Contexte suisse',
      content: 'La Suisse possède un cadre comptable qui lui est propre, avec des spécificités notamment en matière de fiscalité, de déclaration et de normes. Ces particularités sont importantes à maîtriser pour une gestion conforme des comptes d\'une entreprise suisse.'
    }
  ]
};
