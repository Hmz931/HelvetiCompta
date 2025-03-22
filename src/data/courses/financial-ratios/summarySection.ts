
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
  content: `## Résumé des correspondances entre les comptes et les ratios`
};
