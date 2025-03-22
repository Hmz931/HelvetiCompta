
import { Section } from '../types';

export type RatioSummary = {
  name: string;
  accounts: string;
};

export const ratioSummaries: RatioSummary[] = [
  { name: "Liquidité générale", accounts: "1000 à 1499 / 2000 à 2499" },
  { name: "Liquidité immédiate", accounts: "1000 à 1099, 1100 à 1199 / 2000 à 2499" },
  { name: "Marge bénéficiaire nette", accounts: "9900 / 3000 à 3799" },
  { name: "Rentabilité des capitaux propres (ROE)", accounts: "9900 / 2800 à 2899" },
  { name: "Rentabilité des actifs (ROA)", accounts: "9900 / 1000 à 1999" },
  { name: "Endettement total", accounts: "2000 à 2699 / 1000 à 1999" },
  { name: "Autonomie financière", accounts: "2800 à 2899 / 2000 à 2999" },
  { name: "Rotation des stocks", accounts: "4000 à 4099 / 1200 à 1299" },
  { name: "Délai moyen de recouvrement", accounts: "1100 à 1199 × 360 / 3000 à 3799" }
];

export const summarySection: Section = {
  id: 'summary',
  title: 'Tableau récapitulatif',
  content: `## Résumé des correspondances entre les comptes et les ratios`,
  subsections: [
    {
      title: 'Structure du bilan suisse',
      content: `
<h3>Structure du bilan suisse</h3>
<p>Un bilan suisse standard présente les éléments suivants classés par numéros de compte:</p>

<h4>ACTIFS (1)</h4>
<ul>
<li><strong>10 Actifs circulants</strong>
  <ul>
  <li>100 Trésorerie</li>
  <li>106 Actifs cotés en bourse détenus à court terme</li>
  <li>110 Créances résultant de la vente de biens et de prestations de services</li>
  <li>114 Autres créances à court terme</li>
  <li>120 Stocks et prestations de services non facturées</li>
  <li>130 Actifs de régularisation (actifs transitoires)</li>
  </ul>
</li>

<li><strong>14 Actifs immobilisés</strong>
  <ul>
  <li>140 Immobilisations financières</li>
  <li>148 Participations</li>
  <li>150 Immobilisations corporelles meubles</li>
  <li>160 Immobilisations corporelles immeubles</li>
  <li>170 Immobilisations incorporelles</li>
  <li>180 Capital social (ou capital de fondation) non libéré</li>
  </ul>
</li>
</ul>

<h4>PASSIFS (2)</h4>
<ul>
<li><strong>20 Capitaux étrangers à court terme</strong>
  <ul>
  <li>200 Dettes résultant de l'achat de biens et de prestations de services</li>
  <li>210 Dettes à court terme portant intérêt</li>
  <li>220 Autres dettes à court terme</li>
  <li>227 Autres dettes à court terme relatives aux charges salariales</li>
  <li>230 Passifs de régularisation (passifs transitoires) et provisions à court terme</li>
  </ul>
</li>

<li><strong>24 Capitaux étrangers à long terme</strong>
  <ul>
  <li>240 Dettes à long terme portant intérêt</li>
  <li>250 Autres dettes à long terme</li>
  <li>260 Provisions et postes analogues prévus par la loi</li>
  <li>270 Prêts postposés</li>
  </ul>
</li>

<li><strong>28 Capitaux propres (personnes morales)</strong>
  <ul>
  <li>280 Capital social (capital-actions, capital de fondation, capital propre)</li>
  <li>2900 Réserve légale issue du capital</li>
  <li>2940 Réserve d'évaluation</li>
  <li>2950 Réserve légale issue du bénéfice</li>
  <li>2960 Réserves facultatives</li>
  <li>2970 Bénéfice ou perte reporté</li>
  <li>2979 Bénéfice ou perte de l'exercice</li>
  <li>2980 Propres actions, parts sociales, droits de participations (poste négatif)</li>
  </ul>
</li>
</ul>
`
    },
    {
      title: 'Correspondance entre ratios et comptes',
      content: `
<h3>Correspondance entre ratios et comptes</h3>
<p>Le tableau ci-dessous présente les principaux ratios financiers et les comptes utilisés pour leur calcul selon le plan comptable suisse:</p>

<table class="w-full border-collapse">
  <thead>
    <tr>
      <th class="border border-gray-300 px-4 py-2 bg-gray-100">Catégorie</th>
      <th class="border border-gray-300 px-4 py-2 bg-gray-100">Ratio</th>
      <th class="border border-gray-300 px-4 py-2 bg-gray-100">Comptes utilisés</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-4 py-2" rowspan="2">Liquidité</td>
      <td class="border border-gray-300 px-4 py-2">Liquidité générale</td>
      <td class="border border-gray-300 px-4 py-2">1000 à 1499 / 2000 à 2499</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 py-2">Liquidité immédiate</td>
      <td class="border border-gray-300 px-4 py-2">1000 à 1099, 1100 à 1199 / 2000 à 2499</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 py-2" rowspan="3">Rentabilité</td>
      <td class="border border-gray-300 px-4 py-2">Marge bénéficiaire nette</td>
      <td class="border border-gray-300 px-4 py-2">9900 / 3000 à 3799</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 py-2">ROE</td>
      <td class="border border-gray-300 px-4 py-2">9900 / 2800 à 2899</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 py-2">ROA</td>
      <td class="border border-gray-300 px-4 py-2">9900 / 1000 à 1999</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 py-2" rowspan="2">Solvabilité</td>
      <td class="border border-gray-300 px-4 py-2">Endettement total</td>
      <td class="border border-gray-300 px-4 py-2">2000 à 2699 / 1000 à 1999</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 py-2">Autonomie financière</td>
      <td class="border border-gray-300 px-4 py-2">2800 à 2899 / 2000 à 2999</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 py-2" rowspan="2">Efficacité</td>
      <td class="border border-gray-300 px-4 py-2">Rotation des stocks</td>
      <td class="border border-gray-300 px-4 py-2">4000 à 4099 / 1200 à 1299</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 py-2">Délai de recouvrement</td>
      <td class="border border-gray-300 px-4 py-2">1100 à 1199 × 360 / 3000 à 3799</td>
    </tr>
  </tbody>
</table>

<p>Ces informations sont essentielles pour comprendre les ratios financiers et leur calcul selon le plan comptable suisse.</p>
`
    }
  ]
};
