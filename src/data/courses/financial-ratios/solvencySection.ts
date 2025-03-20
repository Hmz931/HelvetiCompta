
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
  <div className="flex justify-center my-1">
    <div className="text-center">
      <div className="mb-1">Total des dettes</div>
      <div className="border-t border-gray-400"></div>
      <div className="mt-1">Total des actifs</div>
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
  <div className="flex justify-center my-1">
    <div className="text-center">
      <div className="mb-1">Capitaux propres</div>
      <div className="border-t border-gray-400"></div>
      <div className="mt-1">Total du passif</div>
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
