
import { Course } from './types';

export const salaryCourse: Course = {
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
};
