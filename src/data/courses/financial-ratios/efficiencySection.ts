
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
  <div className="flex justify-center my-1">
    <div className="text-center">
      <div className="mb-1">Coût des marchandises vendues</div>
      <div className="border-t border-gray-400"></div>
      <div className="mt-1">Stock moyen</div>
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
  <div className="flex justify-center my-1">
    <div className="text-center">
      <div className="mb-1">Créances clients × 360</div>
      <div className="border-t border-gray-400"></div>
      <div className="mt-1">Chiffre d'affaires</div>
    </div>
  </div>
  <div className="text-right text-sm text-gray-600 mt-2">(en jours)</div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

- Créances clients (1100-1199)
- Chiffre d'affaires (3000-3799)`
};
