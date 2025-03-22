
import { Section } from '../types';

export type RatioSummary = {
  name: string;
  accounts: string;
};

export const ratioSummaries: RatioSummary[] = [
  { name: "Liquidité générale", accounts: "1000 à 1499 / 2000 à 2499" },
  { name: "Liquidité immédiate", accounts: "1000 à 1099, 1100 à 1199 / 2000 à 2499" },
  { name: "Marge bénéficiaire nette", accounts: "9900 / 3000 à 3799" },
  { name: "Rentabilité des capitaux propres (ROE)", accounts: "9900 / 2800 à 2899" },
  { name: "Rentabilité des actifs (ROA)", accounts: "9900 / 1000 à 1999" },
  { name: "Endettement total", accounts: "2000 à 2699 / 1000 à 1999" },
  { name: "Autonomie financière", accounts: "2800 à 2899 / 2000 à 2999" },
  { name: "Rotation des stocks", accounts: "4000 à 4099 / 1200 à 1299" },
  { name: "Délai moyen de recouvrement", accounts: "1100 à 1199 × 360 / 3000 à 3799" }
];

export const summarySection: Section = {
  id: 'summary',
  title: 'Tableau récapitulatif',
  content: `## Résumé des correspondances entre les comptes et les ratios

### Structure du bilan suisse
Un bilan suisse standard présente les éléments suivants classés par numéros de compte:

#### ACTIFS (1)
- **10 Actifs circulants**
  - 100 Trésorerie
  - 106 Actifs cotés en bourse détenus à court terme
  - 110 Créances résultant de la vente de biens et de prestations de services
  - 114 Autres créances à court terme
  - 120 Stocks et prestations de services non facturées
  - 130 Actifs de régularisation (actifs transitoires)

- **14 Actifs immobilisés**
  - 140 Immobilisations financières
  - 148 Participations
  - 150 Immobilisations corporelles meubles
  - 160 Immobilisations corporelles immeubles
  - 170 Immobilisations incorporelles
  - 180 Capital social (ou capital de fondation) non libéré

#### PASSIFS (2)
- **20 Capitaux étrangers à court terme**
  - 200 Dettes résultant de l'achat de biens et de prestations de services
  - 210 Dettes à court terme portant intérêt
  - 220 Autres dettes à court terme
  - 227 Autres dettes à court terme relatives aux charges salariales
  - 230 Passifs de régularisation (passifs transitoires) et provisions à court terme

- **24 Capitaux étrangers à long terme**
  - 240 Dettes à long terme portant intérêt
  - 250 Autres dettes à long terme
  - 260 Provisions et postes analogues prévus par la loi
  - 270 Prêts postposés

- **28 Capitaux propres (personnes morales)**
  - 280 Capital social (capital-actions, capital de fondation, capital propre)
  - 2900 Réserve légale issue du capital
  - 2940 Réserve d'évaluation
  - 2950 Réserve légale issue du bénéfice
  - 2960 Réserves facultatives
  - 2970 Bénéfice ou perte reporté
  - 2979 Bénéfice ou perte de l'exercice
  - 2980 Propres actions, parts sociales, droits de participations (poste négatif)

Ces informations sont essentielles pour comprendre les ratios financiers et leur calcul.`
};
