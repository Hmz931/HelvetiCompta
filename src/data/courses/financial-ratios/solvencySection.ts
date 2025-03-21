
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

<div className="ml-8 my-4">
  <p className="text-lg mb-2">Ratio d'endettement total =</p>
  <div className="flex flex-col">
    <p className="text-lg border-b-2 border-gray-700 pb-1 mb-1">Total des dettes</p>
    <p className="text-lg">Total des actifs</p>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

<ul className="list-disc ml-8 mb-6">
  <li>Total des dettes (2000-2699)</li>
  <li>Total des actifs (1000-1999)</li>
</ul>

### b) Ratio d'autonomie financière

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="ml-8 my-4">
  <p className="text-lg mb-2">Ratio d'autonomie financière =</p>
  <div className="flex flex-col">
    <p className="text-lg border-b-2 border-gray-700 pb-1 mb-1">Capitaux propres</p>
    <p className="text-lg">Total du passif</p>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

<ul className="list-disc ml-8 mb-6">
  <li>Capitaux propres (2800-2899)</li>
  <li>Total du passif (2000-2999)</li>
</ul>`
};
