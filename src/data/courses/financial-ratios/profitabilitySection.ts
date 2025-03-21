
import { Section } from '../types';

export const profitabilitySection: Section = {
  id: 'profitability',
  title: 'Ratios de rentabilité',
  content: `## Ratios de rentabilité
      
Les ratios de rentabilité mesurent la capacité de l'entreprise à générer des profits à partir de ses ressources.

#

### a) Marge bénéficiaire nette

<div className="formula-display">
  <p>Marge bénéficiaire nette = <span className="fraction"><span className="numerator">Résultat net</span><span className="denominator">Chiffre d'affaires</span></span></p>
</div>

<div className="accounts-used">
  <p className="accounts-title">Comptes utilisés :</p>
  <ul>
    <li>Chiffre d'affaires net (3000-3799)</li>
    <li>Résultat net (9900)</li>
  </ul>
</div>

#

### b) Rentabilité des capitaux propres (ROE)

<div className="formula-display">
  <p>ROE = <span className="fraction"><span className="numerator">Résultat net</span><span className="denominator">Capitaux propres</span></span></p>
</div>

<div className="accounts-used">
  <p className="accounts-title">Comptes utilisés :</p>
  <ul>
    <li>Résultat net (9900)</li>
    <li>Capitaux propres (2800-2899)</li>
  </ul>
</div>

#

### c) Rentabilité des actifs (ROA)

<div className="formula-display">
  <p>ROA = <span className="fraction"><span className="numerator">Résultat net</span><span className="denominator">Total des actifs</span></span></p>
</div>

<div className="accounts-used">
  <p className="accounts-title">Comptes utilisés :</p>
  <ul>
    <li>Résultat net (9900)</li>
    <li>Total des actifs (1000-1999)</li>
  </ul>
</div>`
};
