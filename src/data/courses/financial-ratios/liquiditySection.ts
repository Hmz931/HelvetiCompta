
import { Section } from '../types';

export const liquiditySection: Section = {
  id: 'liquidity',
  title: 'Ratios de liquidité',
  content: `## Ratios de liquidité
      
Les ratios de liquidité permettent d'évaluer la capacité de l'entreprise à faire face à ses engagements à court terme.

### a) Ratio de liquidité générale

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="ml-8 my-4">
  <p className="text-lg mb-2">Ratio de liquidité générale =</p>
  <div className="flex flex-col">
    <p className="text-lg border-b-2 border-gray-700 pb-1 mb-1">Actifs circulants</p>
    <p className="text-lg">Passifs à court terme</p>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés (Bilan) :</span>
</div>

<ul className="list-disc ml-8 mb-6">
  <li>**Actifs circulants (1000 - 1499)**:
    <ul className="list-disc ml-6 mt-1">
      <li>1000-1099 : Liquidités (Banques, Caisse)</li>
      <li>1100-1199 : Créances clients</li>
      <li>1200-1299 : Stocks</li>
    </ul>
  </li>
  <li>**Passifs à court terme (2000 - 2499)**:
    <ul className="list-disc ml-6 mt-1">
      <li>2000-2099 : Dettes fournisseurs</li>
      <li>2100-2199 : Emprunts à court terme</li>
    </ul>
  </li>
</ul>

### b) Ratio de liquidité immédiate

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="ml-8 my-4">
  <p className="text-lg mb-2">Ratio de liquidité immédiate =</p>
  <div className="flex flex-col">
    <p className="text-lg border-b-2 border-gray-700 pb-1 mb-1">Liquidités + Créances clients</p>
    <p className="text-lg">Passifs à court terme</p>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

<ul className="list-disc ml-8 mb-6">
  <li>Liquidités (1000-1099)</li>
  <li>Créances clients (1100-1199)</li>
  <li>Passifs à court terme (2000-2499)</li>
</ul>`
};
