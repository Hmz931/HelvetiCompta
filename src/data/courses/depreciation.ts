
import { Course } from './types';

export const depreciationCourse: Course = {
  id: 'depreciation',
  title: 'Les amortissements',
  description: 'Principes et méthodes d\'amortissement en comptabilité suisse',
  sections: [
    {
      id: 'principles',
      title: 'Principes de l\'amortissement',
      content: null,
      subsections: [
        {
          title: 'Définition et objectifs',
          content: 'L\'amortissement est la constatation comptable de la dépréciation d\'un actif immobilisé due à l\'usure, au temps ou à l\'obsolescence. C\'est une charge qui permet de répartir le coût d\'acquisition d\'un bien sur sa durée d\'utilisation.'
        },
        {
          title: 'Cadre légal',
          content: 'En Suisse, les amortissements sont régis par le Code des Obligations et les directives fiscales. Ils doivent être conformes aux principes comptables et fiscaux en vigueur.'
        }
      ]
    },
    {
      id: 'methods',
      title: 'Méthodes d\'amortissement',
      content: null,
      subsections: [
        {
          title: 'Amortissement linéaire',
          content: 'L\'amortissement linéaire répartit de manière égale le coût d\'acquisition moins la valeur résiduelle sur la durée d\'utilisation du bien. C\'est la méthode la plus couramment utilisée pour sa simplicité et sa prévisibilité.'
        },
        {
          title: 'Amortissement dégressif',
          content: 'L\'amortissement dégressif applique un taux constant à la valeur comptable résiduelle. Cette méthode permet d\'amortir plus rapidement les biens au début de leur utilisation, reflétant ainsi la perte de valeur plus importante dans les premières années.'
        },
        {
          title: 'Autres méthodes',
          content: 'D\'autres méthodes incluent l\'amortissement progressif et l\'amortissement par unités de production. Le choix dépend de la nature du bien et de la politique financière de l\'entreprise.'
        }
      ]
    },
    {
      id: 'tax-aspects',
      title: 'Aspects fiscaux',
      content: null,
      subsections: [
        {
          title: 'Taux d\'amortissement admis',
          content: 'En Suisse, les autorités fiscales publient des directives concernant les taux d\'amortissement admis fiscalement. Ces taux varient selon la nature des biens et leur durée d\'utilisation prévue.'
        },
        {
          title: 'Implications fiscales',
          content: 'Les amortissements ont un impact direct sur le bénéfice imposable. Une planification adéquate des amortissements peut contribuer à optimiser la charge fiscale de l\'entreprise, dans le respect du cadre légal.'
        }
      ]
    }
  ]
};
