
import { Section } from '../types';

export const efficiencySection: Section = {
  id: 'efficiency',
  title: 'Ratios d\'efficacité',
  content: 'Les ratios d\'efficacité mesurent la performance opérationnelle de l\'entreprise dans l\'utilisation de ses ressources.',
  subsections: [
    {
      title: 'Rotation des stocks',
      content: `
<h3>Rotation des stocks</h3>

<div class="formula-header">Formule :</div>

<div class="ratio-formula-equation">
  Rotation des stocks = 
  <span class="fraction">
    <span class="numerator">Coût des marchandises vendues</span>
    <span class="denominator">Stock moyen</span>
  </span>
</div>

<div class="accounts-header">Comptes utilisés :</div>

<ul class="accounts-list">
  <li>Coût des marchandises vendues (4000 à 4099)</li>
  <li>Stocks (1200 à 1299)</li>
</ul>

<p>Ce ratio indique combien de fois l'entreprise a renouvelé son stock au cours de l'exercice. Un ratio élevé indique une bonne gestion des stocks et une réduction des coûts de stockage.</p>
`
    },
    {
      title: 'Délai moyen de recouvrement des créances clients',
      content: `
<h3>Délai moyen de recouvrement des créances clients</h3>

<div class="formula-header">Formule :</div>

<div class="ratio-formula-equation">
  Délai moyen de recouvrement = (Créances clients × 360) / Chiffre d'affaires (en jours)
</div>

<div class="accounts-header">Comptes utilisés :</div>

<ul class="accounts-list">
  <li>Créances clients (1100 à 1199)</li>
  <li>Chiffre d'affaires (3000 à 3799)</li>
</ul>

<p>Ce ratio mesure le temps moyen qu'il faut à l'entreprise pour recouvrer ses créances clients. Un délai plus court indique une meilleure gestion des créances et une amélioration de la trésorerie.</p>
`
    }
  ]
};
