
import { Section } from '../types';

export const liquiditySection: Section = {
  id: 'liquidity',
  title: 'Ratios de liquidité',
  content: `## Ratios de liquidité
      
Les ratios de liquidité permettent d'évaluer la capacité de l'entreprise à faire face à ses engagements à court terme.

#

### a) Ratio de liquidité générale

<div className="formula-display">
  <p>Ratio de liquidité générale = <span className="fraction"><span className="numerator">Actifs circulants</span><span className="denominator">Passifs à court terme</span></span></p>
</div>

<div className="accounts-used">
  <p className="accounts-title">Comptes utilisés (Bilan) :</p>
  <p><strong>Actifs circulants (1000 - 1499)</strong>:</p>
  <ul>
    <li>1000-1099 : Liquidités (Banques, Caisse)</li>
    <li>1100-1199 : Créances clients</li>
    <li>1200-1299 : Stocks</li>
  </ul>
  <p><strong>Passifs à court terme (2000 - 2499)</strong>:</p>
  <ul>
    <li>2000-2099 : Dettes fournisseurs</li>
    <li>2100-2199 : Emprunts à court terme</li>
  </ul>
</div>

#

### b) Ratio de liquidité immédiate

<div className="formula-display">
  <p>Ratio de liquidité immédiate = <span className="fraction"><span className="numerator">Liquidités + Créances clients</span><span className="denominator">Passifs à court terme</span></span></p>
</div>

<div className="accounts-used">
  <p className="accounts-title">Comptes utilisés :</p>
  <ul>
    <li>Liquidités (1000-1099)</li>
    <li>Créances clients (1100-1199)</li>
    <li>Passifs à court terme (2000-2499)</li>
  </ul>
</div>`
};
