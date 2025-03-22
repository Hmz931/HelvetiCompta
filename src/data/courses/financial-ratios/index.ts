
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
