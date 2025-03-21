
import { Section } from '../types';

export const profitabilitySection: Section = {
  id: 'profitability',
  title: 'Ratios de rentabilité',
  content: `## Ratios de rentabilité
      
Les ratios de rentabilité mesurent la capacité de l'entreprise à générer des profits à partir de ses ressources.

### a) Marge bénéficiaire nette

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="ml-8 my-4">
  <p className="text-lg mb-2">Marge bénéficiaire nette =</p>
  <div className="flex flex-col">
    <p className="text-lg border-b-2 border-gray-700 pb-1 mb-1">Résultat net</p>
    <p className="text-lg">Chiffre d'affaires</p>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

<ul className="list-disc ml-8 mb-6">
  <li>Chiffre d'affaires net (3000-3799)</li>
  <li>Résultat net (9900)</li>
</ul>

### b) Rentabilité des capitaux propres (ROE)

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="ml-8 my-4">
  <p className="text-lg mb-2">ROE =</p>
  <div className="flex flex-col">
    <p className="text-lg border-b-2 border-gray-700 pb-1 mb-1">Résultat net</p>
    <p className="text-lg">Capitaux propres</p>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

<ul className="list-disc ml-8 mb-6">
  <li>Résultat net (9900)</li>
  <li>Capitaux propres (2800-2899)</li>
</ul>

### c) Rentabilité des actifs (ROA)

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="ml-8 my-4">
  <p className="text-lg mb-2">ROA =</p>
  <div className="flex flex-col">
    <p className="text-lg border-b-2 border-gray-700 pb-1 mb-1">Résultat net</p>
    <p className="text-lg">Total des actifs</p>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

<ul className="list-disc ml-8 mb-6">
  <li>Résultat net (9900)</li>
  <li>Total des actifs (1000-1999)</li>
</ul>`
};
