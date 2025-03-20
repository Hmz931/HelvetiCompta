
import { Course } from './types';

export const closingCourse: Course = {
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
};
