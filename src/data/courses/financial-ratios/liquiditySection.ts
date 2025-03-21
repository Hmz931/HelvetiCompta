
import { Section } from '../types';

export const liquiditySection: Section = {
  id: 'liquidity',
  title: 'Ratios de liquidité',
  content: `Les ratios de liquidité permettent d'évaluer la capacité de l'entreprise à faire face à ses engagements à court terme.

#

### Ratio de liquidité générale

<div class="formula-header">Formule :</div>

<div class="ratio-formula-equation">
  Ratio de liquidité générale = 
  <span class="fraction">
    <span class="numerator">Actifs circulants</span>
    <span class="denominator">Passifs à court terme</span>
  </span>
</div>

<div class="accounts-header">Comptes utilisés :</div>

<ul class="accounts-list">
  <li>Actifs circulants (1000-1499)</li>
  <li>Passifs à court terme (2000-2499)</li>
</ul>

#

### Ratio de liquidité immédiate

<div class="formula-header">Formule :</div>

<div class="ratio-formula-equation">
  Ratio de liquidité immédiate = 
  <span class="fraction">
    <span class="numerator">Liquidités + Créances clients</span>
    <span class="denominator">Passifs à court terme</span>
  </span>
</div>

<div class="accounts-header">Comptes utilisés :</div>

<ul class="accounts-list">
  <li>Liquidités (1000-1099)</li>
  <li>Créances clients (1100-1199)</li>
  <li>Passifs à court terme (2000-2499)</li>
</ul>`
};
