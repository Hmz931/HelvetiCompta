
export type Section = {
  id: string;
  title: string;
  content?: string;
};

export type Course = {
  id: string;
  title: string;
  description?: string;
  sections: Section[];
};

export type CourseStructure = {
  [key: string]: Course;
};

export const courseStructure: CourseStructure = {
  overview: {
    id: 'overview',
    title: 'Vue d\'ensemble de la comptabilité suisse',
    description: 'Introduction au système comptable suisse et à ses spécificités',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction à la comptabilité suisse',
        content: 'La comptabilité en Suisse répond à des normes spécifiques définies principalement par le Code des Obligations (CO). Cette section présente les fondements du système comptable suisse et ses principales caractéristiques.'
      },
      {
        id: 'legal-framework',
        title: 'Cadre légal et réglementaire',
        content: 'Le cadre juridique de la comptabilité suisse repose principalement sur le Code des Obligations (articles 957 à 964), mais également sur d\'autres textes comme la loi sur la TVA, les dispositions fiscales, et pour certaines entreprises, les normes Swiss GAAP RPC ou IFRS.'
      },
      {
        id: 'accounting-principles',
        title: 'Principes comptables suisses',
        content: 'Cette section détaille les principes fondamentaux de la comptabilité suisse : régularité, exhaustivité, clarté, prudence, permanence des méthodes, et continuité d\'exploitation.'
      }
    ]
  },
  financial: {
    id: 'financial',
    title: 'Comptabilité financière',
    description: 'Maîtrisez les aspects fondamentaux de la comptabilité générale',
    sections: [
      {
        id: 'accounts-chart',
        title: 'Plan comptable suisse',
        content: 'Le plan comptable suisse PME est structuré selon les classes suivantes : 1-Actifs, 2-Passifs, 3-Produits, 4-Charges de matières et de marchandises, 5-Charges de personnel, 6-Autres charges d\'exploitation, 7-Résultats des activités annexes, 8-Résultats hors exploitation et extraordinaires, 9-Clôture.'
      },
      {
        id: 'daily-operations',
        title: 'Comptabilisation des opérations courantes',
        content: 'Cette section couvre les écritures comptables des opérations quotidiennes : achats, ventes, TVA, salaires, ainsi que les particularités suisses dans le traitement de ces opérations.'
      }
    ]
  },
  salary: {
    id: 'salary',
    title: 'Gestion des salaires',
    description: 'Tout sur la comptabilisation des salaires et charges sociales',
    sections: [
      {
        id: 'social-insurance',
        title: 'Assurances sociales en Suisse',
        content: `Vue d'ensemble du système d'assurances sociales suisse : AVS, AI, APG, AC, LAA, LPP, etc.

## Tableau des taux de cotisations sociales

| | Cotisations dues par l'employeur | Cotisations dues par l'employé | Cotisations dues totales |
|-|----------------------------------|--------------------------------|--------------------------|
| AVS | 4,35 | 4,35 | 8,7 |
| AI | 0,7 | 0,7 | 1,4 |
| APG | 0,25 | 0,25 | 0,5 |
| TOTAL | 5,3 | 5,3 | 10,6 |
| AC normale jusqu'à 148'200 par an soit par 12'350 mois | 1,1 | 1,1 | 2,2 |
| AC solidarité dès 148'200 par an soit par 12'350 mois | 0,5 | 0,5 | 1 |
| Allocations familiales AFa (Genève) jusqu'à 148'200.- de revenu | 2,45 | - | 2,45 |
| Assurance-maternité (AMAT) Genève (pas de plafond) | 0,043 | 0,043 | 0,086 |
| Contribution en faveur de l'accueil de la petite enfance (PE) | 0,07 | - | 0,07 |
| Cotisation FFPC (Fondation pour la formation professionnelle et continue) | 31*N | - | - |
| Redistribution de la taxe CO2 | -XX.XX | - | - |
| Frais administratifs de la caisse de compensation | Soit % du prime AVS ou % de base AVS | - | - |

## Prévoyance professionnelle (LPP)

| | | Cotisations dues par l'employeur | Cotisations dues par l'employé | Cotisations dues totales |
|-|-|----------------------------------|--------------------------------|--------------------------|
| LPP obligatoire | -jusqu'à 21'510 par an | - | - | - |
| | -de 21'510 à 28'650 | x% * 3'585 | x% * 3'585 | 2x% * 3'585 |
| | -de 28'650 à 86'040 | x% * (salaire - 25'095) | x% * (salaire - 25'095) | 2x% * (salaire - 25'095) |
| | -dès 86'040 | x% * 60'945 | x% * 60'945 | 2x% * 60'945 |

## Assurance accident (LAA)

| | | Cotisations dues par l'employeur | Cotisations dues par l'employé | Cotisations dues totales |
|-|-|----------------------------------|--------------------------------|--------------------------|
| LAA professionnels | -jusqu'à 148'200 | x% | - | x% |
| | -la partie supérieure n'est pas obligatoirement assurée | - | - | - |
| LAA non-professionnels Obligatoire dès 8h travail/semaine | -jusqu'à 148'200 | - | x% | x% |
| | -la partie supérieure n'est pas obligatoirement assurée | - | - | - |

## Assurance perte de gain maladie (IJM)

| | | Cotisations dues par l'employeur | Cotisations dues par l'employé | Cotisations dues totales |
|-|-|----------------------------------|--------------------------------|--------------------------|
| IJM (Assurance indemnités journalières en cas de maladie - appelée aussi perte de gain maladie) | -Malgré l'absence d'obligation, la plupart des employés de Suisse sont assurés contre les conséquences d'une perte de gain découlant d'une maladie, l'assurance garantie le maintien du paiement du salaire de des employés en cas d'absence prolongée cause de maladie | 50% | 50% | 100% |

## Éléments soumis et non soumis à l'AVS

| | |
|-|-|
| Non soumis à l'AVS | Indemnités maladie (1) |
| Non soumis à l'AVS | Indemnités accident (1) |
| Non soumis à l'AVS | AF |
| Soumis | Salaire accident premiers jours (1) |
| Soumis | Salaire maladie premiers jours (1) |

Les éléments soumis à l'AVS sont en détails sur:
- https://www.ahv-iv.ch/p/2.01.f
- https://www.hotela.ch/sites/default/files/downloads/avs/cotisations/remunerations_soumises-fr.pdf
- https://www.centrepatronal.ch/wp-content/uploads/2021/03/guide-salaire-determinant1.pdf

## Remarques importantes

| | |
|-|-|
| RHT | On réduit (au débit) de la part employeur les montants AVS 2270 reçus de la caisse cantonale genevoise de chômage |
| AF | On débite le compte 1020 et on crédite le compte 5 (s'il n'existe pas dans le plan comptable on le crée) |
| REMARQUE IS | La commission de 2% sur l'IS est une sorte de réduction si l'entreprise paie au délais et au format numérique et 1% si au délai au format papier. https://www.vd.ch/themes/etat-droit-finances/impots/pour-les-employeurs/impot-a-la-source/retenue-dimpot-a-la-source/#:~:text=Une%20commission%20de%20perception%20de,ACI%20dans%20les%20d%C3%A9lais%20fix%C3%A9s. |
| REMARQUE AVS (selon la masse salariale annuelle) | Salaire total par année: Jusqu'à CHF10'000.00 - Période de paiement: annuellement<br>Salaire total par année: CHF 10'001.00 à CHF 200'000.00 - Période de paiement: trimestriellement<br>Salaire total par année: au-delà de CHF 200'000.00 - Période de paiement: mensuellement |
| REMARQUE AVS | La taxe CO2 peut être comptabilisée en tant que produit dans 3700 ou produit exceptionnel<br>TPC peut être comptabilisée en tant que taxes 67... ou 7920 Taxe professionnelle PLO<br>FFPC peut être comptabilisée sous 6520 Cotisations, dons, cadeaux |
| Off. Popul | Les permis de travail sont comptabilisés sous un compte de 5.. (autres charges employés) |

## Étapes de comptabilisation des salaires

### Étape 1 : paiement des assurances sociales
2270 Dette ass. soc. (AVS)     à     1020 Banque     CHF 318.00
2270 Dette ass. soc. (AC)      à     1020 Banque     CHF 66.00
2270 Dette ass. soc. (LAANP)   à     1020 Banque     CHF 75.00
2270 Dette ass. soc. (LAAP)    à     1020 Banque     CHF 24.00
2270 Dette ass. soc. (LPP)     à     1020 Banque     CHF 300.00
2270 Dette ass. soc. (CAF)     à     1020 Banque     CHF 90.00

### Étape 2 : encaissement de l'allocation pour enfant
1020 Banque     à     2275 CAF employés     CHF 200.00

### Étape 3 : enregistrement du salaire payé
5000 Salaires            à     1020 Banque               CHF 2'583.00
2275 CAF employés        à     1020 Banque               CHF 200.00
5000 Salaires            à     2270 Dette ass. soc. (AVS) CHF 159.00
5000 Salaires            à     2270 Dette ass. soc. (AC)  CHF 33.00
5000 Salaires            à     2270 Dette ass. soc. (LAA) CHF 75.00
5000 Salaires            à     2270 Dette ass. soc. (LPP) CHF 150.00

### Étape 4 : enregistrement des charges sociales employeurs
5700 Charges sociales    à     2270 Dette ass. soc. (AVS) CHF 159.00
5700 Charges sociales    à     2270 Dette ass. soc. (AC)  CHF 33.00
5700 Charges sociales    à     2270 Dette ass. soc. (LAA) CHF 24.00
5700 Charges sociales    à     2270 Dette ass. soc. (LPP) CHF 150.00
5700 Charges sociales    à     2270 Dette ass. soc. (CAF) CHF 90.00`
      },
      {
        id: 'payroll-accounting',
        title: 'Comptabilisation des salaires',
        content: 'Méthodes et écritures pour la comptabilisation des salaires et des charges sociales.'
      }
    ]
  },
  analytics: {
    id: 'analytics',
    title: 'Comptabilité analytique',
    description: 'Techniques de comptabilité analytique pour l\'analyse des coûts',
    sections: [
      {
        id: 'cost-accounting',
        title: 'Comptabilité par centres de coûts',
        content: 'Méthodes d\'allocation des coûts par départements ou activités.'
      },
      {
        id: 'profitability',
        title: 'Analyse de rentabilité',
        content: 'Techniques pour évaluer la rentabilité des produits, services ou projets.'
      }
    ]
  },
  tax: {
    id: 'tax',
    title: 'TVA et fiscalité',
    description: 'Maîtrisez les aspects fiscaux de la comptabilité suisse',
    sections: [
      {
        id: 'vat',
        title: 'TVA suisse',
        content: 'Principes de la TVA suisse, taux applicables, méthodes de décompte et particularités.'
      },
      {
        id: 'tax-deductions',
        title: 'Déductions fiscales',
        content: 'Optimisation fiscale légale pour les entreprises suisses.'
      }
    ]
  },
  closing: {
    id: 'closing',
    title: 'Clôtures et opérations de fin d\'exercice',
    description: 'Techniques et procédures pour les bouclements comptables',
    sections: [
      {
        id: 'year-end',
        title: 'Travaux de bouclement',
        content: `Procédures et écritures de régularisation pour la clôture annuelle.

## Checklist de bouclement comptable

### 1. Liquidités
**Caisse**
- Un solde physique de la caisse a-t-il été fait ?
- Le solde de caisse est-il identique au solde comptable ?

**Banque CHF**
- Le solde bancaire correspond-il au solde comptable à la date de clôture ?

**Banque ME**
- Le solde bancaire correspond-il au solde comptable à la date de clôture ?
- La différence de change à la date de bouclement a-t-elle été faite ?

### 2. Créances/Débiteurs
**Débiteurs**
- Tous les débiteurs de l'année précédente ont-ils été extournés ?
- Les débiteurs ouverts à la date de clôture sont-ils comptabilisés ?
- Détail des débiteurs de l'année en cours avec indication de la TVA sur les débiteurs en cas d'exportation.

**Ducroire**
- Provision sur les débiteurs.

**Compte courant associé/Actionnaire**
- En cas de prêt, y a-t-il un plan de remboursement pour le prêt associé/actionnaire ?

### 3. Correction d'actifs
**Stock**
- Les stocks ont-ils été reçus à la date de bouclement ? Si oui, la valeur comptable du stock correspond-elle au montant du stock physique ?

**Actifs transitoires**
- Est-ce que les actifs transitoires de l'année antérieure ont-ils été extournés ?
- La société attend-elle des produits ?
- La société a-t-elle payé des charges en avance ?
- Faire une liste des actifs transitoires.

### 4. Actifs Immobilisés
**Immobilisation financière**
- Quelle est la nature de l'immobilisation ?
- Cette immobilisation est-elle rémunérée ?
- Y a-t-il une pièce justificative pour cette immobilisation ?

**Immobilisation corporelle**
- Les montants comptabilisés ont-ils une valeur significative ?
- Les immobilisations d'une valeur inférieure à CHF 600.00 HT sont comptabilisées en charge.

**Immobilisation incorporelle**
- Les montants comptabilisés ont-ils une valeur significative ?
- Les immobilisations d'une valeur inférieure à CHF 600.00 HT sont comptabilisées en charge.

### 5. Passifs
**Créanciers**
- Tous les créanciers de l'année antérieure ont-ils été payés ?
- Une vérification des créanciers ouverts à la date de clôture a-t-elle été faite ?
- Détail des créanciers à la date de clôture avec indication de la TVA à récupérer selon le modèle standard (fichier Listing Créanciers).
- Contrôle du paiement des créanciers dans les mois qui suivent la date du bouclement, si on possède les relevés.

**Salaire à payer**
- Tous les salaires ont-ils été payés ?
- Liste des salaires ouverts à la date de clôture des comptes selon le modèle standard.

**Créancier AVS**
- Quelle est la caisse de compensation ? Quel est le numéro d'affilié ?
- Les charges employeurs ont-elles été comptabilisées ?
- Le solde de l'année précédente a-t-il été payé et remis à zéro en cas d'estimation ?
- A-t-on le décompte final de l'AVS pour justifier le solde du compte ?

**Créancier LPP**
- Quelle est la caisse de pension ? Quel est le numéro d'affilié ?
- Les charges employeurs ont-elles été comptabilisées ?
- Le solde de l'année précédente a-t-il été payé et remis à zéro en cas d'estimation ?
- A-t-on le décompte final de l'LPP pour justifier le solde du compte ?

**Créancier LAA/CLAA**
- Quel est le nom des assurances et leur numéro de police ?
- Quels sont les taux de cotisation ? (Vérifier sur les factures.)
- Les charges employeurs ont-elles été comptabilisées ?
- Le solde de l'année précédente a-t-il été payé et remis à zéro en cas d'estimation ?
- A-t-on le décompte final de la LAA/CLAA pour justifier le solde du compte ?

**Créancier IJM**
- Quel est le nom des assurances et leur numéro de police ?
- Quels sont les taux de cotisation ? (Vérifier sur les factures.)
- Les charges employeurs ont-elles été comptabilisées ?
- Le solde de l'année précédente a-t-il été payé et remis à zéro en cas d'estimation ?
- A-t-on le décompte final de l'IJM pour justifier le solde du compte ?

**Créancier IS**
- Le solde de l'année précédente a-t-il été payé et remis à zéro en cas d'estimation ?
- La commission de perception a-t-elle été comptabilisée ?
- A-t-on le décompte final ? Correspond-il à la déclaration établie ?

**Créancier TVA**
- Quelle est la méthode de décompte ?
- Une réconciliation du CA a-t-elle été effectuée ?
- La réconciliation avec le compte TVA due a-t-elle été effectuée ?
- Pour le TDFN, indiquer le taux de TVA.
- Pour le TDFN, le décompte S12 a-t-il été provisionné ?
- Y a-t-il des différences entre le paiement des décomptes et les décomptes ?
- Les intérêts passifs sont-ils bien comptabilisés en charges d'intérêts ?

### 6. Compte de régularisation de passifs
**Produits reçus d'avance**
- Le solde de l'année antérieure a-t-il été extourné ?
- Les clients ont-ils versé des acomptes pour lesquels le travail n'a pas encore été exécuté ? (Il faut toujours indiquer au niveau du libellé en comptabilité la période de la facturation.)
- Faire une liste détaillée avec indication de la TVA.

**Charges à payer**
- Le solde de l'année antérieure a-t-il été extourné ?

### 7. Prêt à long terme
**Prêt de tiers**
- Quelles sont les conditions du prêt ? Ressortir le contrat.

### 8. Fonds propres
**Capital social/action**
- Le capital correspond-il au statut ?
- Le capital est-il entièrement libéré ?

**Bénéfice reporté**
- Le bénéfice de l'exercice antérieur a-t-il été mis au crédit du bénéfice reporté ?

**Bénéfice de l'exercice**
- Le bénéfice au bilan est-il identique à celui du compte de pertes et profits ?

### 9. Produits
**Chiffre d'affaires**
- Contrôler si tout a été comptabilisé.
- Faire la différence entre le chiffre d'affaires en monnaie locale et en monnaie étrangère.

**Intérêts créanciers**

**Pertes sur débiteurs**
- Une analyse des débiteurs a-t-elle été faite ?

**Produits divers**
- Faire le détail des produits divers.

**Gains et pertes de change**
- Vérifier si la différence de change a été constatée.

### 10. Charges directes
**PRA des marchandises vendues**
- Contrôler si tous les achats ont été effectués.

**Divers frais directs**
- Vérifier que les frais sont liés directement à l'activité de la société.

**Variation de stock**
- Vérifier le montant du stock de N-1.
- La variation a-t-elle été constatée ?

### 11. Charges de personnel
**Salaires**
- Les salaires de toute l'année ont-ils été comptabilisés ?
- Le montant du salaire brut est-il identique au montant du salaire déclaré à l'AVS et/ou à Crésus salaire ?

**Autres charges de personnel**
- Est-ce qu'on a tous les décomptes finaux ?

### 12. Autres charges d'exploitation
**Loyer et charges**
- Contrôler si 12 factures de loyer ont été comptabilisées.
- Contrôler les factures de charges d'électricité et la provision.
- Contrôler la provision des charges d'entretien des locaux.

**Frais de véhicule**
- Contrôler le leasing.
- Contrôler les assurances et les périodes.
- Contrôler les impôts sur véhicule.
- Connaître la marque et le prix d'achat hors taxe du véhicule.

**Assurances divers**
- Contrôler les périodes des assurances.
- Contrôler qu'il s'agit des assurances de société uniquement (ni assurance de véhicule, ni charges sociales).

**Abonnements et cotisations**
- Vérifier la période de référence.

**Téléphone**
- Contrôler si 12 factures ont été comptabilisées.

**Fournitures de bureau**
- Vérifier qu'il s'agit de charges et non d'immobilisations.

**Honoraires**
- Vérifier les honoraires de Compta Conseil (demander les factures si nécessaire).
- Vérifier les honoraires d'avocat lorsqu'il s'agit d'un litige.

**Frais de représentation**
- Vérifier qu'il s'agit de frais de représentation et non de frais de repas, frais de voyage ou frais de personnel.

**Intérêts et frais bancaires**
- Vérifier qu'il s'agit d'intérêts bancaires et non d'intérêts moratoires ou autres (créer un compte séparé pour les autres intérêts).

### 13. Amortissements

### 14. Impôts et taxes
- Vérifier qu'il s'agit des taxes de la société (les taxes sur véhicules sont comptabilisées sous les frais de véhicules).
- La société a-t-elle reçu la décision de taxation de l'année précédente ? L'extourne de provision y relative a-t-elle été faite ?`
      },
      {
        id: 'financial-statements',
        title: 'États financiers',
        content: 'Préparation du bilan, compte de résultat et annexe selon les normes suisses.'
      }
    ]
  },
  exercises: {
    id: 'exercises',
    title: 'Exercices pratiques',
    description: 'Mettez en pratique vos connaissances avec des exercices réels',
    sections: [
      {
        id: 'basic-exercises',
        title: 'Exercices de base',
        content: 'Série d\'exercices couvrant les opérations comptables fondamentales.'
      },
      {
        id: 'advanced-cases',
        title: 'Cas pratiques avancés',
        content: 'Études de cas complètes simulant des situations réelles d\'entreprises suisses.'
      }
    ]
  }
};
