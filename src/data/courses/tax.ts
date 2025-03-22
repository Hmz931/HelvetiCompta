
import { Course } from './types';

export const taxCourse: Course = {
  id: 'tax',
  title: 'TVA et fiscalité',
  description: 'Maîtrisez les aspects fiscaux de la comptabilité suisse',
  sections: [
    {
      id: 'vat',
      title: 'TVA suisse',
      content: `Principes de la TVA suisse, taux applicables, méthodes de décompte et particularités.

## Principes fondamentaux
La Taxe sur la Valeur Ajoutée (TVA) est un impôt indirect sur la consommation prélevé en Suisse. Les entreprises agissent comme intermédiaires en collectant la TVA auprès des consommateurs et en la reversant à l'Administration fédérale des contributions (AFC).

## Taux de TVA en Suisse (2024)
| Catégorie | Taux | Application |
| --- | --- | --- |
| Taux normal | 8.1% | Majorité des biens et services |
| Taux réduit | 2.6% | Produits alimentaires, médicaments, livres, journaux |
| Taux spécial hébergement | 3.8% | Services d'hébergement dans l'hôtellerie |

## Assujettissement à la TVA
L'assujettissement à la TVA est obligatoire pour les entreprises dont le chiffre d'affaires annuel dépasse 100'000 CHF. L'assujettissement volontaire est possible pour les entreprises n'atteignant pas ce seuil.

## Les comptes pour la taxe sur la valeur ajoutée

<div class="flex flex-col items-center my-6">
  <img 
    src="/lovable-uploads/daa17bcb-7b58-4fda-9efa-1c9057d8bc7b.png" 
    alt="Les comptes pour la taxe sur la valeur ajoutée" 
    style="width: 100%; max-width: 800px; border: 1px solid #e2e8f0; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);" 
  />
</div>

### Principaux comptes TVA

**2200 - TVA due (impôt indirect général sur la consommation)**
Il s'agit d'un compte de passif qui présente le solde de l'impôt sur les ventes soumises à l'impôt dû à l'AFC. Il découle de la fourniture de prestations selon la classe de comptes 3 «Chiffre d'affaires résultant des ventes et des prestations de services».

**1170 - TVA déductible sur achats de matières et prestations de services**
Dans ce compte, on enregistrera l'impôt préalable versé aux fournisseurs de matières et de marchandises, ainsi qu'aux prestataires de services. Il s'agit donc de l'impôt préalable provenant de la classe de comptes 4 «Charges de matières, de marchandises et de services».

**1171 - TVA déductible sur investissements et autres charges d'exploitation**
On enregistrera dans ce compte l'impôt préalable touchant les investissements en équipements et les autres charges d'exploitation. Il s'agit donc de l'impôt préalable provenant des classes de comptes 1 «Actifs» et 6 «Autres charges d'exploitation».

### Le décompte de la taxe sur la valeur ajoutée
Pour établir le solde de TVA, on compense l'impôt dû avec les créances provenant de l'impôt préalable versé. Dans le décompte, on déduit donc l'impôt préalable de l'impôt dû sur les ventes. Un excédent d'impôt doit être versé à l'AFC; un excédent d'impôt préalable est remboursé ou bonifié par l'AFC.

Les comptes concernant la TVA sont donc des comptes figurant au bilan qui représentent soit la TVA due (compte 2200), soit la créance envers l'AFC (comptes 1170 et 1171).

### La comptabilisation de la taxe sur la valeur ajoutée
C'est la structure de l'entreprise et l'organisation de la comptabilité qui détermineront si c'est la comptabilisation «au net» ou «au brut» qui est la plus avantageuse.

Si la comptabilité est organisée en conséquence, il est également possible d'appliquer les deux méthodes en parallèle, par exemple la comptabilisation «au brut» pour les produits et la comptabilisation «au net» pour les charges et les investissements.

#### Méthode brute
- Chiffre d'affaires comptabilisé TVA incluse
- Charges comptabilisées TVA incluse
- La TVA est ensuite extraite lors du décompte

#### Méthode nette
- Chiffre d'affaires comptabilisé hors TVA
- Charges comptabilisées hors TVA
- La TVA est comptabilisée séparément

## Méthodes de décompte TVA
Il existe deux principales méthodes de décompte TVA en Suisse :

| Méthode | Description | Particularités |
| --- | --- | --- |
| Méthode effective | Basée sur les chiffres d'affaires et les achats réels | Plus complexe mais plus précise |
| Méthode des taux de la dette fiscale nette (TDFN) | Utilisation de taux forfaitaires par branche d'activité | Simplifiée, mais peut être moins avantageuse |

## Exemples de décomptes TVA
Voici deux exemples de formulaires officiels de décompte TVA utilisés en Suisse:

<div class="flex flex-col items-center my-6">
  <img 
    src="/assets/images/Decompte-TVA-modele-methode-des-taux-de-la-dette-fiscale-nette-des-2024.png" 
    alt="Décompte TVA - modèle TDFN" 
    style="width: 100%; max-width: 800px; border: 1px solid #e2e8f0; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);" 
  />
  <p class="text-sm text-gray-600 mt-2 font-medium">Formulaire TVA - Méthode des taux de la dette fiscale nette</p>
</div>

<div class="flex flex-col items-center my-6">
  <img 
    src="/assets/images/Decompte-TVA-modele-methode-effective-des-2024.png" 
    alt="Décompte TVA - modèle effectif" 
    style="width: 100%; max-width: 800px; border: 1px solid #e2e8f0; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);" 
  />
  <p class="text-sm text-gray-600 mt-2 font-medium">Formulaire TVA - Méthode effective</p>
</div>

Ces formulaires comprennent trois sections principales:
1. Le chiffre d'affaires (section I) - déclaration du chiffre d'affaires total et des déductions
2. Le calcul de l'impôt (section II) - calcul par taux d'imposition et impôt préalable
3. Autres mouvements de fonds (section III) - subventions, dons, etc.

## Points importants à retenir
- La TVA collectée (due) correspond à la TVA facturée aux clients
- L'impôt préalable correspond à la TVA payée aux fournisseurs
- Le solde à payer est la différence entre la TVA collectée et l'impôt préalable
- Les décomptes peuvent être trimestriels ou semestriels selon le régime choisi
- Le non-respect des délais de dépôt et de paiement entraîne des intérêts moratoires

## Abréviations importantes liées à la TVA
- TVA: Taxe sur la valeur ajoutée
- AFC: Administration fédérale des contributions
- OTVA: Ordonnance régissant la taxe sur la valeur ajoutée
- LTVA: Loi fédérale régissant la taxe sur la valeur ajoutée
- TDFN: Taux de la dette fiscale nette`
    },
    {
      id: 'tax-deductions',
      title: 'Déductions fiscales',
      content: 'Optimisation fiscale légale pour les entreprises suisses.'
    }
  ]
};
