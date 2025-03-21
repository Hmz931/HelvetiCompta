
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

<div className="my-4 py-3 px-6 bg-swiss-blue/5 border-l-4 border-swiss-blue rounded-md">
  <div className="flex items-center">
    <div className="mr-3 text-lg font-medium">Ratio de liquidité générale = </div>
    <div className="inline-block text-center">
      <div className="px-8 py-2 text-center font-medium border-b-[3px] border-gray-800">Actifs circulants</div>
      <div className="px-8 py-2 text-center font-medium">Passifs à court terme</div>
    </div>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés (Bilan) :</span>
</div>

- **Actifs circulants (1000 - 1499)**:
  - 1000-1099 : Liquidités (Banques, Caisse)
  - 1100-1199 : Créances clients
  - 1200-1299 : Stocks
- **Passifs à court terme (2000 - 2499)**:
  - 2000-2099 : Dettes fournisseurs
  - 2100-2199 : Emprunts à court terme

### b) Ratio de liquidité immédiate

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="my-4 py-3 px-6 bg-swiss-blue/5 border-l-4 border-swiss-blue rounded-md">
  <div className="flex items-center">
    <div className="mr-3 text-lg font-medium">Ratio de liquidité immédiate = </div>
    <div className="inline-block text-center">
      <div className="px-8 py-2 text-center font-medium border-b-[3px] border-gray-800">Liquidités + Créances clients</div>
      <div className="px-8 py-2 text-center font-medium">Passifs à court terme</div>
    </div>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

- Liquidités (1000-1099)
- Créances clients (1100-1199)
- Passifs à court terme (2000-2499)`
};
