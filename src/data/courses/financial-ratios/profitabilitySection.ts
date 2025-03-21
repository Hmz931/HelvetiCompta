
import { Section } from '../types';

export const profitabilitySection: Section = {
  id: 'profitability',
  title: 'Ratios de rentabilité',
  content: `## Ratios de rentabilité
      
Les ratios de rentabilité mesurent la capacité de l'entreprise à générer des profits à partir de ses ressources.

#

### a) Marge bénéficiaire nette

<div class="ratio-formula">
  <span class="fraction">
    <span class="numerator">Résultat net</span>
    <span class="denominator">Chiffre d'affaires</span>
  </span>
</div>

Comptes utilisés :
- Chiffre d'affaires net (3000-3799)
- Résultat net (9900)

#

### b) Rentabilité des capitaux propres (ROE)

<div class="ratio-formula">
  <span class="fraction">
    <span class="numerator">Résultat net</span>
    <span class="denominator">Capitaux propres</span>
  </span>
</div>

Comptes utilisés :
- Résultat net (9900)
- Capitaux propres (2800-2899)

#

### c) Rentabilité des actifs (ROA)

<div class="ratio-formula">
  <span class="fraction">
    <span class="numerator">Résultat net</span>
    <span class="denominator">Total des actifs</span>
  </span>
</div>

Comptes utilisés :
- Résultat net (9900)
- Total des actifs (1000-1999)`
};
