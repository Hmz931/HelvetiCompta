
import { Section } from '../types';

export const liquiditySection: Section = {
  id: 'liquidity',
  title: 'Ratios de liquidité',
  content: 'Les ratios de liquidité permettent d\'évaluer la capacité de l\'entreprise à faire face à ses engagements à court terme.',
  subsections: [
    {
      title: 'Ratio de liquidité générale',
      content: `
<h3>Ratio de liquidité générale</h3>

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
  <li>Actifs circulants (1000 à 1499)</li>
  <li>Passifs à court terme (2000 à 2499)</li>
</ul>

<p>Ce ratio mesure la capacité de l'entreprise à payer ses dettes à court terme avec ses actifs circulants. Un ratio supérieur à 1 indique que l'entreprise dispose de suffisamment d'actifs circulants pour couvrir ses dettes à court terme.</p>
`
    },
    {
      title: 'Ratio de liquidité immédiate',
      content: `
<h3>Ratio de liquidité immédiate</h3>

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
  <li>Liquidités (1000 à 1099)</li>
  <li>Créances clients (1100 à 1199)</li>
  <li>Passifs à court terme (2000 à 2499)</li>
</ul>

<p>Ce ratio plus restrictif que le ratio de liquidité générale exclut les stocks qui sont plus difficiles à convertir rapidement en liquidités. Un ratio supérieur à 0.8 est généralement considéré comme satisfaisant.</p>
`
    }
  ]
};
