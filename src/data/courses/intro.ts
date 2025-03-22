
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
    },
    {
      id: 'role-in-business',
      title: 'Rôle dans l\'entreprise',
      content: `La comptabilité constitue un pilier fondamental dans la gestion d'une entreprise. Elle établit des connections entre tous les départements et services de l'organisation, servant de langage commun pour les opérations financières. Avec l'évolution technologique, la majorité des processus comptables sont aujourd'hui informatisés, permettant une gestion plus efficace des données.

Un objectif essentiel de la comptabilité est d'établir avec précision la situation financière de l'entreprise à un moment précis. Pour y parvenir, il est nécessaire de réaliser des inventaires détaillés qui permettent de connaître:

- L'ensemble des liquidités (trésorerie, comptes bancaires) et des biens matériels (équipements, immobilier) et immatériels (brevets, licences) constituant le patrimoine
- La totalité des créances clients (montants dus à l'entreprise par des tiers)
- L'intégralité des dettes fournisseurs (montants que l'entreprise doit à des tiers)

### Le bilan comptable

La situation financière de l'entreprise est présentée dans un document appelé "bilan". Ce document essentiel est généralement établi à la fin de l'exercice comptable, traditionnellement le 31 décembre, après la réalisation des travaux d'inventaire.

Le bilan offre une vision détaillée des différents éléments du patrimoine de l'entreprise (actifs et passifs) et peut être présenté sous deux formes:

#### Présentation en tableau
- La partie droite, appelée "passif", indique l'origine des ressources financières de l'entreprise
- La partie gauche, appelée "actif", montre comment ces ressources ont été investies et utilisées

#### Présentation en liste
- La première section, "actif", détaille l'utilisation des fonds
- La seconde section, "passif", présente le financement ou la provenance de ces fonds

Il est important de noter que le bilan présente une image statique et équilibrée de la situation de l'entreprise à une date précise, reflétant le principe fondamental selon lequel l'entreprise ne peut utiliser que les ressources mises à sa disposition.`
    }
  ]
};
