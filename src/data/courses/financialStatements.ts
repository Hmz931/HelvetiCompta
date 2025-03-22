
import { Course } from './types';

export const financialStatementsCourse: Course = {
  id: 'financial-statements',
  title: 'Les états financiers',
  description: 'Comprendre, analyser et interpréter les états financiers suisses',
  sections: [
    {
      id: 'balance-sheet',
      title: 'Le bilan',
      content: `
## Le bilan
Le bilan (ou état de la situation financière) est un document comptable qui présente l'ensemble des ressources (actifs) et des moyens de financement (passifs) d'une entreprise à un moment précis, généralement à la fin de l'exercice comptable.

### Structure du bilan suisse
Selon le droit comptable suisse (Code des Obligations), le bilan doit être structuré comme suit:

#### ACTIFS
**Actifs circulants:**
- Trésorerie et actifs cotés en bourse détenus à court terme (comptes 10XX)
- Créances résultant de la vente de biens et de prestations de services (11XX)
- Autres créances à court terme (11XX)
- Stocks et prestations de services non facturées (12XX)
- Actifs de régularisation (13XX)

**Actifs immobilisés:**
- Immobilisations financières (14XX)
- Participations (15XX)
- Immobilisations corporelles (16XX)
- Immobilisations incorporelles (17XX)
- Capital non libéré (18XX)

#### PASSIFS
**Capitaux étrangers à court terme:**
- Dettes résultant de l'achat de biens et de prestations de services (20XX)
- Dettes à court terme portant intérêt (21XX) 
- Autres dettes à court terme (22XX)
- Passifs de régularisation (23XX)
- Provisions à court terme (24XX)

**Capitaux étrangers à long terme:**
- Dettes à long terme portant intérêt (25XX)
- Autres dettes à long terme (26XX)
- Provisions et postes analogues prévus par la loi (27XX)

**Capitaux propres:**
- Capital social ou capital de fondation (28XX)
- Réserve légale issue du capital (28XX)
- Réserve légale issue du bénéfice (28XX)
- Réserves facultatives issues du bénéfice (28XX)
- Propres parts du capital (28XX)
- Bénéfice ou perte reporté (29XX)
- Bénéfice ou perte de l'exercice (29XX)

### Principes fondamentaux du bilan
- **Principe d'équilibre**: Le total des actifs doit toujours être égal au total des passifs
- **Principe de liquidité**: Les actifs sont classés par ordre de liquidité décroissante
- **Principe d'exigibilité**: Les passifs sont classés par ordre d'exigibilité croissante
- **Principe de permanence**: Les méthodes de présentation et d'évaluation doivent rester constantes d'un exercice à l'autre
      `
    },
    {
      id: 'income-statement',
      title: 'Le compte de résultat',
      content: `
## Le compte de résultat
Le compte de résultat (ou état du résultat global) est un document comptable qui présente les produits et les charges d'une entreprise sur une période donnée, généralement un exercice comptable. Il permet de déterminer si l'entreprise a réalisé un bénéfice ou une perte.

### Structure du compte de résultat suisse
Selon le droit comptable suisse, le compte de résultat peut être présenté selon la méthode de l'affectation des charges par nature ou par fonction:

#### Présentation par nature des charges

1. **Produits nets des ventes de biens et de prestations de services** (comptes 3XXX)
2. **Variation des stocks de produits finis et semi-finis et variation des prestations de services non facturées**
3. **Charges de matières et de marchandises** (comptes 4XXX)
4. **Charges de personnel** (comptes 5XXX)
5. **Autres charges d'exploitation** (comptes 6XXX)
6. **Amortissements et corrections de valeur sur les postes de l'actif immobilisé**
7. **Charges et produits financiers** (comptes 68XX, 69XX)
8. **Charges et produits hors exploitation** (comptes 7XXX)
9. **Charges et produits exceptionnels, uniques ou hors période** (comptes 8XXX)
10. **Impôts directs** (comptes 89XX)
11. **Bénéfice ou perte de l'exercice**

#### Présentation par fonction des charges

1. **Produits nets des ventes de biens et de prestations de services**
2. **Coûts d'acquisition ou de production des biens et prestations de services vendus**
3. **Résultat brut**
4. **Charges de distribution et d'administration**
5. **Autres produits et charges d'exploitation**
6. **Résultat d'exploitation**
7. **Charges et produits financiers**
8. **Charges et produits hors exploitation**
9. **Charges et produits exceptionnels, uniques ou hors période**
10. **Impôts directs**
11. **Bénéfice ou perte de l'exercice**

### Principes fondamentaux du compte de résultat
- **Principe de prudence**: Ne pas surévaluer les produits et sous-évaluer les charges
- **Principe de rattachement**: Les charges doivent être rattachées aux produits correspondants
- **Principe de périodicité**: Les produits et charges doivent être comptabilisés dans la période à laquelle ils se rapportent
- **Principe de spécialisation des exercices**: Les opérations doivent être enregistrées dans l'exercice auquel elles se rattachent
      `
    },
    {
      id: 'cash-flow',
      title: 'Le tableau des flux de trésorerie',
      content: `
## Le tableau des flux de trésorerie
Le tableau des flux de trésorerie est un document comptable qui présente les mouvements d'argent (entrées et sorties) d'une entreprise sur une période donnée. Il est complémentaire au bilan et au compte de résultat et permet de comprendre comment l'entreprise génère et utilise sa trésorerie.

### Structure du tableau des flux de trésorerie suisse
Le tableau des flux de trésorerie est structuré en trois parties distinctes:

#### 1. Flux de trésorerie liés à l'activité opérationnelle
Cette section présente les flux de trésorerie générés par les activités principales de l'entreprise.

**Méthode directe:**
- Encaissements provenant des clients
- Paiements aux fournisseurs
- Paiements aux employés
- Autres paiements/encaissements opérationnels
- Impôts payés
- Intérêts payés/reçus

**Méthode indirecte:**
- Résultat de l'exercice
- Ajustements pour éléments sans incidence sur la trésorerie (amortissements, provisions)
- Variation du besoin en fonds de roulement

#### 2. Flux de trésorerie liés aux activités d'investissement
Cette section présente les flux de trésorerie liés à l'acquisition et à la cession d'actifs à long terme:
- Acquisition d'immobilisations corporelles et incorporelles
- Cession d'immobilisations corporelles et incorporelles
- Acquisition/cession d'immobilisations financières
- Acquisition/cession de filiales

#### 3. Flux de trésorerie liés aux activités de financement
Cette section présente les flux de trésorerie liés au financement de l'entreprise:
- Augmentation/diminution de capital
- Émission/remboursement d'emprunts
- Dividendes versés

### Importance du tableau des flux de trésorerie
Ce document est essentiel car il permet:
- D'évaluer la capacité de l'entreprise à générer des liquidités
- D'analyser les besoins de financement
- De comprendre la différence entre le résultat comptable et la variation de trésorerie
- D'anticiper les problèmes de liquidité
      `
    },
    {
      id: 'notes',
      title: 'L\'annexe aux comptes',
      content: `
## L'annexe aux comptes
L'annexe (ou notes aux états financiers) est un document qui complète le bilan, le compte de résultat et le tableau des flux de trésorerie. Elle fournit des informations supplémentaires pour permettre une meilleure compréhension des états financiers.

### Contenu de l'annexe selon le droit suisse
Selon l'article 959c du Code des Obligations, l'annexe doit contenir les informations suivantes:

#### Informations obligatoires pour toutes les entreprises:
1. Les principes comptables appliqués
2. Les informations, la structure et les commentaires concernant les postes du bilan et du compte de résultat
3. Le montant total des réserves de remplacement et des réserves latentes dissoutes
4. Les autres informations prescrites par la loi

#### Informations supplémentaires pour les entreprises soumises à un contrôle ordinaire:
1. Les dettes à long terme portant intérêt
2. Les honoraires versés à l'organe de révision
3. Le nombre d'emplois à plein temps en moyenne annuelle
4. Les participations directes ou indirectes
5. Les augmentations et diminutions des réserves de réévaluation
6. Les événements importants survenus après la date du bilan
7. Les motifs ayant conduit à la démission anticipée de l'organe de révision

### Importance de l'annexe
L'annexe est essentielle car elle:
- Fournit des explications sur les méthodes comptables utilisées
- Détaille les postes significatifs du bilan et du compte de résultat
- Présente des informations qui ne figurent pas dans les autres états financiers
- Permet une meilleure compréhension de la situation financière de l'entreprise
      `
    },
    {
      id: 'analysis',
      title: 'Analyse des états financiers',
      content: `
## Analyse des états financiers
L'analyse des états financiers consiste à étudier les informations contenues dans le bilan, le compte de résultat, le tableau des flux de trésorerie et l'annexe pour évaluer la situation financière et la performance d'une entreprise.

### Méthodes d'analyse
#### 1. Analyse horizontale
L'analyse horizontale consiste à comparer les états financiers sur plusieurs exercices pour identifier les tendances et les évolutions.

#### 2. Analyse verticale
L'analyse verticale consiste à exprimer chaque poste du bilan en pourcentage du total du bilan et chaque poste du compte de résultat en pourcentage du chiffre d'affaires.

#### 3. Analyse par les ratios
L'analyse par les ratios consiste à calculer différents indicateurs financiers pour évaluer:
- La liquidité: capacité à faire face aux engagements à court terme
- La solvabilité: capacité à faire face aux engagements à long terme
- La rentabilité: capacité à générer des bénéfices
- L'efficacité: capacité à utiliser efficacement les ressources

Pour une analyse détaillée des ratios financiers, consultez le cours [Ratios et indicateurs financiers](/formation/financial-ratios).

### Interprétation des résultats
L'interprétation des résultats de l'analyse doit tenir compte:
- Du secteur d'activité de l'entreprise
- De la taille de l'entreprise
- De la phase de développement de l'entreprise
- Du contexte économique général
- Des spécificités suisses (notamment fiscales)

### Limites de l'analyse des états financiers
- Les états financiers sont basés sur des coûts historiques
- Les méthodes comptables peuvent varier d'une entreprise à l'autre
- Certaines informations importantes peuvent ne pas être reflétées dans les états financiers
- Les états financiers peuvent faire l'objet de manipulations (comptabilité créative)
      `
    }
  ]
};
