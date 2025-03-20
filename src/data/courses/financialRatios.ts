
import { Course } from './types';

export const financialRatiosCourse: Course = {
  id: 'financial-ratios',
  title: 'Ratios et indicateurs comptables et financiers',
  description: 'Analyser la santé financière d\'une entreprise à l\'aide de ratios',
  sections: [
    {
      id: 'intro',
      title: 'Introduction aux ratios financiers',
      content: 'Les ratios financiers sont des outils d\'analyse essentiels pour évaluer la performance, la santé financière et la gestion d\'une entreprise. Ils permettent de transformer des données comptables brutes en indicateurs significatifs pour la prise de décision.'
    },
    {
      id: 'liquidity',
      title: 'Ratios de liquidité',
      content: `## Ratios de liquidité
      
Les ratios de liquidité permettent d'évaluer la capacité de l'entreprise à faire face à ses engagements à court terme.

### a) Ratio de liquidité générale

📌 **Formule**:
Ratio de liquidité générale = Actifs circulants / Passifs à court terme

📌 **Comptes utilisés (Bilan)**:
- **Actifs circulants (1000 - 1499)**:
  - 1000-1099 : Liquidités (Banques, Caisse)
  - 1100-1199 : Créances clients
  - 1200-1299 : Stocks
- **Passifs à court terme (2000 - 2499)**:
  - 2000-2099 : Dettes fournisseurs
  - 2100-2199 : Emprunts à court terme

### b) Ratio de liquidité immédiate

📌 **Formule**:
Ratio de liquidité immédiate = (Liquidités + Créances clients) / Passifs à court terme

📌 **Comptes utilisés**:
- Liquidités (1000-1099)
- Créances clients (1100-1199)
- Passifs à court terme (2000-2499)`
    },
    {
      id: 'profitability',
      title: 'Ratios de rentabilité',
      content: `## Ratios de rentabilité
      
Les ratios de rentabilité mesurent la capacité de l'entreprise à générer des profits à partir de ses ressources.

### a) Marge bénéficiaire nette

📌 **Formule**:
Marge bénéficiaire nette = Résultat net / Chiffre d'affaires

📌 **Comptes utilisés**:
- Chiffre d'affaires net (3000-3799)
- Résultat net (9900)

### b) Rentabilité des capitaux propres (ROE)

📌 **Formule**:
ROE = Résultat net / Capitaux propres

📌 **Comptes utilisés**:
- Résultat net (9900)
- Capitaux propres (2800-2899)

### c) Rentabilité des actifs (ROA)

📌 **Formule**:
ROA = Résultat net / Total des actifs

📌 **Comptes utilisés**:
- Résultat net (9900)
- Total des actifs (1000-1999)`
    },
    {
      id: 'solvency',
      title: 'Ratios de solvabilité',
      content: `## Ratios de solvabilité
      
Les ratios de solvabilité évaluent la structure financière de l'entreprise et sa capacité à faire face à ses engagements à long terme.

### a) Ratio d'endettement total

📌 **Formule**:
Ratio d'endettement total = Total des dettes / Total des actifs

📌 **Comptes utilisés**:
- Total des dettes (2000-2699)
- Total des actifs (1000-1999)

### b) Ratio d'autonomie financière

📌 **Formule**:
Ratio d'autonomie financière = Capitaux propres / Total du passif

📌 **Comptes utilisés**:
- Capitaux propres (2800-2899)
- Total du passif (2000-2999)`
    },
    {
      id: 'efficiency',
      title: 'Ratios d\'efficacité',
      content: `## Ratios d'efficacité
      
Les ratios d'efficacité mesurent la performance opérationnelle de l'entreprise dans l'utilisation de ses ressources.

### a) Rotation des stocks

📌 **Formule**:
Rotation des stocks = Coût des marchandises vendues / Stock moyen

📌 **Comptes utilisés**:
- Coût des marchandises vendues (4000-4099)
- Stocks (1200-1299)

### b) Délai moyen de recouvrement des créances clients

📌 **Formule**:
Délai moyen de recouvrement = (Créances clients × 360) / Chiffre d'affaires (en jours)

📌 **Comptes utilisés**:
- Créances clients (1100-1199)
- Chiffre d'affaires (3000-3799)`
    },
    {
      id: 'summary',
      title: 'Tableau récapitulatif',
      content: `## Résumé des correspondances entre les comptes et les ratios

| Ratios | Comptes utilisés |
| --- | --- |
| Liquidité générale | 1000-1499 / 2000-2499 |
| Liquidité immédiate | 1000-1099, 1100-1199 / 2000-2499 |
| Marge bénéficiaire nette | 9900 / 3000-3799 |
| Rentabilité des capitaux propres (ROE) | 9900 / 2800-2899 |
| Rentabilité des actifs (ROA) | 9900 / 1000-1999 |
| Endettement total | 2000-2699 / 1000-1999 |
| Autonomie financière | 2800-2899 / 2000-2999 |
| Rotation des stocks | 4000-4099 / 1200-1299 |
| Délai moyen de recouvrement | 1100-1199 / 3000-3799 |`
    }
  ]
};
