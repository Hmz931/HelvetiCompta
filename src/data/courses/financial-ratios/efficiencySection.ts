
import { Section } from '../types';

export const efficiencySection: Section = {
  id: 'efficiency',
  title: 'Ratios d\'efficacité',
  content: null, // Replace direct content with subsections
  subsections: [
    {
      title: 'Mesure de la performance opérationnelle',
      content: 'Les ratios d\'efficacité mesurent la performance opérationnelle de l\'entreprise dans l\'utilisation de ses ressources.'
    },
    {
      title: 'Rotation des stocks',
      content: `<div class="formula-header">Formule :</div>

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
</ul>`
    },
    {
      title: 'Délai moyen de recouvrement des créances clients',
      content: `<div class="formula-header">Formule :</div>

<div class="ratio-formula-equation">
  Délai moyen de recouvrement = (Créances clients × 360) / Chiffre d'affaires (en jours)
</div>

<div class="accounts-header">Comptes utilisés :</div>

<ul class="accounts-list">
  <li>Créances clients (1100 à 1199)</li>
  <li>Chiffre d'affaires (3000 à 3799)</li>
</ul>`
    }
  ]
};
