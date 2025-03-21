
import { Section } from '../types';

export const solvencySection: Section = {
  id: 'solvency',
  title: 'Ratios de solvabilité',
  content: `## Ratios de solvabilité
      
Les ratios de solvabilité évaluent la structure financière de l'entreprise et sa capacité à faire face à ses engagements à long terme.

### a) Ratio d'endettement total

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="my-4 py-3 px-6 bg-swiss-blue/5 border-l-4 border-swiss-blue rounded-md">
  <div className="flex items-center">
    <div className="mr-3 text-lg font-medium">Ratio d'endettement total = </div>
    <div className="inline-block text-center">
      <div className="border-b-2 border-gray-800 px-8 py-2 text-center font-medium">Total des dettes</div>
      <div className="px-8 py-2 text-center font-medium">Total des actifs</div>
    </div>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

- Total des dettes (2000-2699)
- Total des actifs (1000-1999)

### b) Ratio d'autonomie financière

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="my-4 py-3 px-6 bg-swiss-blue/5 border-l-4 border-swiss-blue rounded-md">
  <div className="flex items-center">
    <div className="mr-3 text-lg font-medium">Ratio d'autonomie financière = </div>
    <div className="inline-block text-center">
      <div className="border-b-2 border-gray-800 px-8 py-2 text-center font-medium">Capitaux propres</div>
      <div className="px-8 py-2 text-center font-medium">Total du passif</div>
    </div>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

- Capitaux propres (2800-2899)
- Total du passif (2000-2999)`
};
