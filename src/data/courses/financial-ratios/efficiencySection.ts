
import { Section } from '../types';

export const efficiencySection: Section = {
  id: 'efficiency',
  title: 'Ratios d\'efficacité',
  content: `## Ratios d'efficacité
      
Les ratios d'efficacité mesurent la performance opérationnelle de l'entreprise dans l'utilisation de ses ressources.

#

### a) Rotation des stocks

<div className="formula-display">
  <span className="fraction">
    <span className="numerator">Coût des marchandises vendues</span>
    <span className="denominator">Stock moyen</span>
  </span>
</div>

<div className="accounts-used">
  <p className="accounts-title">Comptes utilisés :</p>
  <ul>
    <li>Coût des marchandises vendues (4000-4099)</li>
    <li>Stocks (1200-1299)</li>
  </ul>
</div>

#

### b) Délai moyen de recouvrement des créances clients

<div className="formula-display">
  <p>(Créances clients × 360) / Chiffre d'affaires (en jours)</p>
</div>

<div className="accounts-used">
  <p className="accounts-title">Comptes utilisés :</p>
  <ul>
    <li>Créances clients (1100-1199)</li>
    <li>Chiffre d'affaires (3000-3799)</li>
  </ul>
</div>`
};
