
import { Section } from '../types';

export const efficiencySection: Section = {
  id: 'efficiency',
  title: 'Ratios d\'efficacité',
  content: `## Ratios d'efficacité
      
Les ratios d'efficacité mesurent la performance opérationnelle de l'entreprise dans l'utilisation de ses ressources.

### a) Rotation des stocks

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="my-4 py-3 px-6 bg-swiss-blue/5 border-l-4 border-swiss-blue rounded-md">
  <div className="flex items-center">
    <div className="mr-3 text-lg font-medium">Rotation des stocks = </div>
    <div className="inline-block text-center">
      <div className="border-b-2 border-gray-800 px-8 py-2 text-center font-medium">Coût des marchandises vendues</div>
      <div className="px-8 py-2 text-center font-medium">Stock moyen</div>
    </div>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

- Coût des marchandises vendues (4000-4099)
- Stocks (1200-1299)

### b) Délai moyen de recouvrement des créances clients

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="my-4 py-3 px-6 bg-swiss-blue/5 border-l-4 border-swiss-blue rounded-md">
  <div className="flex items-center">
    <div className="mr-3 text-lg font-medium">Délai moyen de recouvrement = </div>
    <div className="inline-block text-center">
      <div className="border-b-2 border-gray-800 px-8 py-2 text-center font-medium">Créances clients × 360</div>
      <div className="px-8 py-2 text-center font-medium">Chiffre d'affaires</div>
    </div>
    <div className="ml-2 text-sm text-gray-600">(en jours)</div>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

- Créances clients (1100-1199)
- Chiffre d'affaires (3000-3799)`
};
