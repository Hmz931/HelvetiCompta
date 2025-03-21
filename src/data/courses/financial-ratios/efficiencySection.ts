
import { Section } from '../types';

export const efficiencySection: Section = {
  id: 'efficiency',
  title: 'Ratios d\'efficacité',
  content: `## Ratios d'efficacité
      
Les ratios d'efficacité mesurent la performance opérationnelle de l'entreprise dans l'utilisation de ses ressources.

#

### a) Rotation des stocks

<div class="ratio-formula">
  <span class="fraction">
    <span class="numerator">Coût des marchandises vendues</span>
    <span class="denominator">Stock moyen</span>
  </span>
</div>

Comptes utilisés :
- Coût des marchandises vendues (4000-4099)
- Stocks (1200-1299)

#

### b) Délai moyen de recouvrement des créances clients

<div class="ratio-formula">
  (Créances clients × 360) / Chiffre d'affaires (en jours)
</div>

Comptes utilisés :
- Créances clients (1100-1199)
- Chiffre d'affaires (3000-3799)`
};
