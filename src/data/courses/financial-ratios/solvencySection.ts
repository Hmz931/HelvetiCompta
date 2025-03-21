
import { Section } from '../types';

export const solvencySection: Section = {
  id: 'solvency',
  title: 'Ratios de solvabilité',
  content: `## Ratios de solvabilité
      
Les ratios de solvabilité évaluent la structure financière de l'entreprise et sa capacité à faire face à ses engagements à long terme.

#

### Ratio d'endettement total

<div class="formula-header">Formule :</div>

<div class="ratio-formula-equation">
  Ratio d'endettement total = 
  <span class="fraction">
    <span class="numerator">Total des dettes</span>
    <span class="denominator">Total des actifs</span>
  </span>
</div>

<div class="accounts-header">Comptes utilisés :</div>

<ul class="accounts-list">
  <li>Total des dettes (2000-2699)</li>
  <li>Total des actifs (1000-1999)</li>
</ul>

#

### Ratio d'autonomie financière

<div class="formula-header">Formule :</div>

<div class="ratio-formula-equation">
  Ratio d'autonomie financière = 
  <span class="fraction">
    <span class="numerator">Capitaux propres</span>
    <span class="denominator">Total du passif</span>
  </span>
</div>

<div class="accounts-header">Comptes utilisés :</div>

<ul class="accounts-list">
  <li>Capitaux propres (2800-2899)</li>
  <li>Total du passif (2000-2999)</li>
</ul>`
};
