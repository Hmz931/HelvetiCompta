
import { Section } from '../types';

export const profitabilitySection: Section = {
  id: 'profitability',
  title: 'Ratios de rentabilité',
  content: 'Les ratios de rentabilité mesurent la capacité de l\'entreprise à générer des profits à partir de ses ressources.',
  subsections: [
    {
      title: 'Marge bénéficiaire nette',
      content: `
<h3>Marge bénéficiaire nette</h3>

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
  <li>Chiffre d'affaires net (3000 à 3799)</li>
  <li>Résultat net (9900)</li>
</ul>

<p>Ce ratio indique la proportion du chiffre d'affaires qui se traduit en bénéfice net. Il mesure l'efficacité globale de l'entreprise à transformer ses ventes en profits après déduction de toutes les charges.</p>
`
    },
    {
      title: 'Rentabilité des capitaux propres (ROE)',
      content: `
<h3>Rentabilité des capitaux propres (ROE)</h3>

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
  <li>Capitaux propres (2800 à 2899)</li>
</ul>

<p>Ce ratio mesure la rentabilité des capitaux investis par les actionnaires. Il est particulièrement important pour les investisseurs qui souhaitent évaluer le rendement de leur investissement.</p>
`
    },
    {
      title: 'Rentabilité des actifs (ROA)',
      content: `
<h3>Rentabilité des actifs (ROA)</h3>

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
  <li>Total des actifs (1000 à 1999)</li>
</ul>

<p>Ce ratio mesure l'efficacité avec laquelle l'entreprise utilise ses actifs pour générer des profits. Il indique le rendement obtenu pour chaque franc investi dans les actifs de l'entreprise.</p>
`
    }
  ]
};
