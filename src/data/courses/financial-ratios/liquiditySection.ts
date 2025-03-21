
import { Section } from '../types';

export const liquiditySection: Section = {
  id: 'liquidity',
  title: 'Ratios de liquidité',
  content: `## Ratios de liquidité
      
Les ratios de liquidité permettent d'évaluer la capacité de l'entreprise à faire face à ses engagements à court terme.

#

### a) Ratio de liquidité générale

←
Formule :
Ratio de liquidité générale =
Actifs circulants
Passifs à court terme

←
Comptes utilisés (Bilan) :
**Actifs circulants (1000 - 1499)**:
1000-1099 : Liquidités (Banques, Caisse)
1100-1199 : Créances clients
1200-1299 : Stocks

**Passifs à court terme (2000 - 2499)**:
2000-2099 : Dettes fournisseurs
2100-2199 : Emprunts à court terme

#

### b) Ratio de liquidité immédiate

←
Formule :
Ratio de liquidité immédiate =
Liquidités + Créances clients
Passifs à court terme

←
Comptes utilisés :
Liquidités (1000-1099)
Créances clients (1100-1199)
Passifs à court terme (2000-2499)`
};
