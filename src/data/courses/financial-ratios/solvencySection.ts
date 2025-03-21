
import { Section } from '../types';

export const solvencySection: Section = {
  id: 'solvency',
  title: 'Ratios de solvabilité',
  content: `## Ratios de solvabilité
      
Les ratios de solvabilité évaluent la structure financière de l'entreprise et sa capacité à faire face à ses engagements à long terme.

#

### a) Ratio d'endettement total

<div class="ratio-formula">
  <span class="fraction">
    <span class="numerator">Total des dettes</span>
    <span class="denominator">Total des actifs</span>
  </span>
</div>

Comptes utilisés :
- Total des dettes (2000-2699)
- Total des actifs (1000-1999)

#

### b) Ratio d'autonomie financière

<div class="ratio-formula">
  <span class="fraction">
    <span class="numerator">Capitaux propres</span>
    <span class="denominator">Total du passif</span>
  </span>
</div>

Comptes utilisés :
- Capitaux propres (2800-2899)
- Total du passif (2000-2999)`
};
