
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

<div className="ml-8 my-4">
  <p className="text-lg mb-2">Rotation des stocks =</p>
  <div className="flex flex-col">
    <p className="text-lg border-b-2 border-gray-700 pb-1 mb-1">Coût des marchandises vendues</p>
    <p className="text-lg">Stock moyen</p>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

<ul className="list-disc ml-8 mb-6">
  <li>Coût des marchandises vendues (4000-4099)</li>
  <li>Stocks (1200-1299)</li>
</ul>

### b) Délai moyen de recouvrement des créances clients

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="ml-8 my-4">
  <p className="text-lg mb-2">Délai moyen de recouvrement =</p>
  <div className="flex flex-col">
    <p className="text-lg border-b-2 border-gray-700 pb-1 mb-1">Créances clients × 360</p>
    <p className="text-lg">Chiffre d'affaires</p>
  </div>
  <p className="text-sm text-gray-600 mt-1">(en jours)</p>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

<ul className="list-disc ml-8 mb-6">
  <li>Créances clients (1100-1199)</li>
  <li>Chiffre d'affaires (3000-3799)</li>
</ul>`
};
