
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
| Taux normal | 8.1% | Majorité des biens et services |
| Taux réduit | 2.6% | Produits alimentaires, médicaments, livres, journaux |
| Taux spécial hébergement | 3.8% | Services d'hébergement dans l'hôtellerie |

## Assujettissement à la TVA
L'assujettissement à la TVA est obligatoire pour les entreprises dont le chiffre d'affaires annuel dépasse 100'000 CHF. L'assujettissement volontaire est possible pour les entreprises n'atteignant pas ce seuil.

## Méthodes de décompte TVA
Il existe deux principales méthodes de décompte TVA en Suisse :

| Méthode | Description | Particularités |
| --- | --- | --- |
| Méthode effective | Basée sur les chiffres d'affaires et les achats réels | Plus complexe mais plus précise |
| Méthode des taux de la dette fiscale nette (TDFN) | Utilisation de taux forfaitaires par branche d'activité | Simplifiée, mais peut être moins avantageuse |

## Exemples de décomptes TVA
Voici deux exemples de formulaires officiels de décompte TVA utilisés en Suisse:

![Exemple de décompte TVA 1](/assets/images/Décompte%20TVA%20-%20modèle%20méthode%20effective%20dès%202024.jpg)

![Exemple de décompte TVA 2](/assets/images/Décompte%20TVA%20-%20modèle%20méthode%20des%20taux%20de%20la%20dette%20fiscale%20nette%20dès%202024.jpg)

Ces formulaires comprennent trois sections principales:
1. Le chiffre d'affaires (section I) - déclaration du chiffre d'affaires total et des déductions
2. Le calcul de l'impôt (section II) - calcul par taux d'imposition et impôt préalable
3. Autres mouvements de fonds (section III) - subventions, dons, etc.

## Points importants à retenir
- La TVA collectée (due) correspond à la TVA facturée aux clients
- L'impôt préalable correspond à la TVA payée aux fournisseurs
- Le solde à payer est la différence entre la TVA collectée et l'impôt préalable
- Les décomptes peuvent être trimestriels ou semestriels selon le régime choisi
- Le non-respect des délais de dépôt et de paiement entraîne des intérêts moratoires`
    },
    {
      id: 'tax-deductions',
      title: 'Déductions fiscales',
      content: 'Optimisation fiscale légale pour les entreprises suisses.'
    }
  ]
};
