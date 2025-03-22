
import { Course } from '../types';
import { introSection } from './introSection';
import { liquiditySection } from './liquiditySection';
import { profitabilitySection } from './profitabilitySection';
import { solvencySection } from './solvencySection';
import { efficiencySection } from './efficiencySection';
import { summarySection } from './summarySection';

export const financialRatiosCourse: Course = {
  id: 'financial-ratios',
  title: 'Ratios et indicateurs comptables et financiers',
  description: 'Analyser la santé financière d\'une entreprise à l\'aide de ratios',
  introduction: `
    <p>Les ratios financiers sont des outils d'analyse indispensables pour évaluer et suivre la santé financière d'une entreprise. Ils permettent de transformer les données comptables brutes en informations pertinentes et facilement interprétables.</p>
    <p>Qu'il s'agisse d'évaluer la liquidité, la rentabilité, la solvabilité ou l'efficacité opérationnelle, les ratios offrent une vision claire et synthétique des performances de l'entreprise.</p>
    <p>Ce cours explique les principaux ratios utilisés dans l'analyse financière suisse, leur calcul, leur interprétation et leur utilisation dans le contexte économique actuel.</p>
  `,
  sections: [
    introSection,
    liquiditySection,
    profitabilitySection,
    solvencySection,
    efficiencySection,
    summarySection
  ]
};

export default financialRatiosCourse;
