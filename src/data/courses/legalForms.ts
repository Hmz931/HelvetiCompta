
import { Course } from './types';

export const legalFormsCourse: Course = {
  id: 'legal-forms',
  title: 'Les formes juridiques des entreprises',
  description: 'Panorama des différentes formes juridiques d\'entreprises en Suisse',
  sections: [
    {
      id: 'overview',
      title: 'Vue d\'ensemble',
      content: 'La Suisse offre plusieurs formes juridiques pour créer une entreprise. Le choix dépend de nombreux facteurs: activité, nombre d\'associés, capital disponible, responsabilité souhaitée, fiscalité, etc.'
    },
    {
      id: 'individual-company',
      title: 'L\'entreprise individuelle',
      content: 'L\'entreprise individuelle est la forme la plus simple. L\'entrepreneur exerce en son nom propre et est personnellement responsable des dettes de l\'entreprise sur l\'ensemble de son patrimoine.'
    },
    {
      id: 'comparison',
      title: 'Comparaison des formes juridiques',
      content: 'Cette section compare les principales caractéristiques des différentes formes juridiques: capital minimum, nombre d\'associés requis, organes obligatoires, responsabilité, imposition, etc.'
    }
  ]
};
