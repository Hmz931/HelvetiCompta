
import { Section } from '../types';

export const profitabilitySection: Section = {
  id: 'profitability',
  title: 'Ratios de rentabilité',
  content: `## Ratios de rentabilité
      
Les ratios de rentabilité mesurent la capacité de l'entreprise à générer des profits à partir de ses ressources.

#

### Marge bénéficiaire nette

<div class="formula-header">Formule :</div>

<div class="ratio-formula-equation">
  Marge bénéficiaire nette = 
  <span class="fraction">
    <span class="numerator">Résultat net</span>
    <span class="denominator">Chiffre d'affaires</span>
  </span>
</div>

<div class="accounts-header">Comptes utilisés :</div>

<ul class="accounts-list">
  <li>Chiffre d'affaires net (3000-3799)</li>
  <li>Résultat net (9900)</li>
</ul>

#

### Rentabilité des capitaux propres (ROE)

<div class="formula-header">Formule :</div>

<div class="ratio-formula-equation">
  Rentabilité des capitaux propres = 
  <span class="fraction">
    <span class="numerator">Résultat net</span>
    <span class="denominator">Capitaux propres</span>
  </span>
</div>

<div class="accounts-header">Comptes utilisés :</div>

<ul class="accounts-list">
  <li>Résultat net (9900)</li>
  <li>Capitaux propres (2800-2899)</li>
</ul>

#

### Rentabilité des actifs (ROA)

<div class="formula-header">Formule :</div>

<div class="ratio-formula-equation">
  Rentabilité des actifs = 
  <span class="fraction">
    <span class="numerator">Résultat net</span>
    <span class="denominator">Total des actifs</span>
  </span>
</div>

<div class="accounts-header">Comptes utilisés :</div>

<ul class="accounts-list">
  <li>Résultat net (9900)</li>
  <li>Total des actifs (1000-1999)</li>
</ul>`
};
