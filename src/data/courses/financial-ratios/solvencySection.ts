
import { Section } from '../types';

export const solvencySection: Section = {
  id: 'solvency',
  title: 'Ratios de solvabilité',
  content: 'Les ratios de solvabilité évaluent la structure financière de l\'entreprise et sa capacité à faire face à ses engagements à long terme.',
  subsections: [
    {
      title: 'Ratio d\'endettement total',
      content: `
<h3>Ratio d'endettement total</h3>

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
  <li>Total des dettes (2000 à 2699)</li>
  <li>Total des actifs (1000 à 1999)</li>
</ul>

<p>Ce ratio mesure la proportion des actifs financés par des dettes. Un ratio élevé indique un niveau d'endettement important et donc un risque financier plus élevé.</p>
`
    },
    {
      title: 'Ratio d\'autonomie financière',
      content: `
<h3>Ratio d'autonomie financière</h3>

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
  <li>Capitaux propres (2800 à 2899)</li>
  <li>Total du passif (2000 à 2999)</li>
</ul>

<p>Ce ratio mesure la part des capitaux propres dans le financement total de l'entreprise. Un ratio élevé indique une plus grande indépendance financière vis-à-vis des créanciers.</p>
`
    }
  ]
};
