
import { Course } from './types';

export const transitionalCourse: Course = {
  id: 'transitional',
  title: 'Les actifs et passifs transitoires (Comptes de régularisation)',
  description: 'Comprendre et comptabiliser les opérations de régularisation',
  sections: [
    {
      id: 'principles',
      title: 'Principes de régularisation',
      content: 'La régularisation des comptes repose sur le principe de rattachement des charges et des produits à l\'exercice concerné, indépendamment de la date d\'encaissement ou de décaissement.'
    },
    {
      id: 'active-transitional',
      title: 'Actifs transitoires',
      content: 'Les actifs transitoires comprennent les charges payées d\'avance (dépenses enregistrées pendant l\'exercice mais concernant l\'exercice suivant) et les produits à recevoir (recettes concernant l\'exercice mais qui seront encaissées ultérieurement).'
    },
    {
      id: 'passive-transitional',
      title: 'Passifs transitoires',
      content: 'Les passifs transitoires comprennent les charges à payer (dépenses concernant l\'exercice mais qui seront payées ultérieurement) et les produits reçus d\'avance (recettes encaissées pendant l\'exercice mais concernant l\'exercice suivant).'
    }
  ]
};
