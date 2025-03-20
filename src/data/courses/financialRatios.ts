
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

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="my-4 py-3 px-6 bg-swiss-blue/5 border-l-4 border-swiss-blue rounded-md">
  <div className="flex justify-center my-1">
    <div className="text-center">
      <div className="mb-1">Actifs circulants</div>
      <div className="border-t border-gray-400"></div>
      <div className="mt-1">Passifs à court terme</div>
    </div>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés (Bilan) :</span>
</div>

- **Actifs circulants (1000 - 1499)**:
  - 1000-1099 : Liquidités (Banques, Caisse)
  - 1100-1199 : Créances clients
  - 1200-1299 : Stocks
- **Passifs à court terme (2000 - 2499)**:
  - 2000-2099 : Dettes fournisseurs
  - 2100-2199 : Emprunts à court terme

### b) Ratio de liquidité immédiate

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="my-4 py-3 px-6 bg-swiss-blue/5 border-l-4 border-swiss-blue rounded-md">
  <div className="flex justify-center my-1">
    <div className="text-center">
      <div className="mb-1">Liquidités + Créances clients</div>
      <div className="border-t border-gray-400"></div>
      <div className="mt-1">Passifs à court terme</div>
    </div>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

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

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="my-4 py-3 px-6 bg-swiss-blue/5 border-l-4 border-swiss-blue rounded-md">
  <div className="flex justify-center my-1">
    <div className="text-center">
      <div className="mb-1">Résultat net</div>
      <div className="border-t border-gray-400"></div>
      <div className="mt-1">Chiffre d'affaires</div>
    </div>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

- Chiffre d'affaires net (3000-3799)
- Résultat net (9900)

### b) Rentabilité des capitaux propres (ROE)

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="my-4 py-3 px-6 bg-swiss-blue/5 border-l-4 border-swiss-blue rounded-md">
  <div className="flex justify-center my-1">
    <div className="text-center">
      <div className="mb-1">Résultat net</div>
      <div className="border-t border-gray-400"></div>
      <div className="mt-1">Capitaux propres</div>
    </div>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

- Résultat net (9900)
- Capitaux propres (2800-2899)

### c) Rentabilité des actifs (ROA)

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="my-4 py-3 px-6 bg-swiss-blue/5 border-l-4 border-swiss-blue rounded-md">
  <div className="flex justify-center my-1">
    <div className="text-center">
      <div className="mb-1">Résultat net</div>
      <div className="border-t border-gray-400"></div>
      <div className="mt-1">Total des actifs</div>
    </div>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

- Résultat net (9900)
- Total des actifs (1000-1999)`
    },
    {
      id: 'solvency',
      title: 'Ratios de solvabilité',
      content: `## Ratios de solvabilité
      
Les ratios de solvabilité évaluent la structure financière de l'entreprise et sa capacité à faire face à ses engagements à long terme.

### a) Ratio d'endettement total

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="my-4 py-3 px-6 bg-swiss-blue/5 border-l-4 border-swiss-blue rounded-md">
  <div className="flex justify-center my-1">
    <div className="text-center">
      <div className="mb-1">Total des dettes</div>
      <div className="border-t border-gray-400"></div>
      <div className="mt-1">Total des actifs</div>
    </div>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

- Total des dettes (2000-2699)
- Total des actifs (1000-1999)

### b) Ratio d'autonomie financière

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="my-4 py-3 px-6 bg-swiss-blue/5 border-l-4 border-swiss-blue rounded-md">
  <div className="flex justify-center my-1">
    <div className="text-center">
      <div className="mb-1">Capitaux propres</div>
      <div className="border-t border-gray-400"></div>
      <div className="mt-1">Total du passif</div>
    </div>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

- Capitaux propres (2800-2899)
- Total du passif (2000-2999)`
    },
    {
      id: 'efficiency',
      title: 'Ratios d\'efficacité',
      content: `## Ratios d'efficacité
      
Les ratios d'efficacité mesurent la performance opérationnelle de l'entreprise dans l'utilisation de ses ressources.

### a) Rotation des stocks

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="my-4 py-3 px-6 bg-swiss-blue/5 border-l-4 border-swiss-blue rounded-md">
  <div className="flex justify-center my-1">
    <div className="text-center">
      <div className="mb-1">Coût des marchandises vendues</div>
      <div className="border-t border-gray-400"></div>
      <div className="mt-1">Stock moyen</div>
    </div>
  </div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

- Coût des marchandises vendues (4000-4099)
- Stocks (1200-1299)

### b) Délai moyen de recouvrement des créances clients

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Formule :</span>
</div>

<div className="my-4 py-3 px-6 bg-swiss-blue/5 border-l-4 border-swiss-blue rounded-md">
  <div className="flex justify-center my-1">
    <div className="text-center">
      <div className="mb-1">Créances clients × 360</div>
      <div className="border-t border-gray-400"></div>
      <div className="mt-1">Chiffre d'affaires</div>
    </div>
  </div>
  <div className="text-right text-sm text-gray-600 mt-2">(en jours)</div>
</div>

<div className="flex items-center gap-2 my-3 text-swiss-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="m9 4-7 8 7 8"/></svg>
  <span className="font-semibold">Comptes utilisés :</span>
</div>

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
