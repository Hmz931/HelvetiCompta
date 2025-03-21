
import { Section } from '../types';

export const solvencySection: Section = {
  id: 'solvency',
  title: 'Ratios de solvabilité',
  content: `## Ratios de solvabilité
      
Les ratios de solvabilité évaluent la structure financière de l'entreprise et sa capacité à faire face à ses engagements à long terme.

#

### a) Ratio d'endettement total

<div className="formula-display">
  <p>Ratio d'endettement total = Total des dettes / Total des actifs</p>
</div>

<div className="accounts-used">
  <p className="accounts-title">Comptes utilisés :</p>
  <ul>
    <li>Total des dettes (2000-2699)</li>
    <li>Total des actifs (1000-1999)</li>
  </ul>
</div>

#

### b) Ratio d'autonomie financière

<div className="formula-display">
  <p>Ratio d'autonomie financière = Capitaux propres / Total du passif</p>
</div>

<div className="accounts-used">
  <p className="accounts-title">Comptes utilisés :</p>
  <ul>
    <li>Capitaux propres (2800-2899)</li>
    <li>Total du passif (2000-2999)</li>
  </ul>
</div>`
};
