
import { Course } from './types';

export const chartOfAccountsCourse: Course = {
  id: 'chart-of-accounts',
  title: 'Plan Comptable Suisse',
  description: 'Structure normalisée des comptes pour la comptabilité suisse conforme aux exigences légales.',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction au plan comptable suisse',
      content: `Le plan comptable suisse est un référentiel standardisé de numérotation et d'organisation des comptes utilisés par les entreprises en Suisse. Il est structuré selon les classes 1 à 9, chacune représentant un type spécifique d'actifs, passifs, produits ou charges. Ce plan facilite l'harmonisation des pratiques comptables et permet une meilleure comparabilité des états financiers entre les entreprises suisses.`
    },
    {
      id: 'structure',
      title: 'Structure du plan comptable',
      content: `## Les catégories du plan comptable

| Catégorie | Intitulé | Plage de comptes |
| --- | --- | --- |
| 1 | Actifs | 1000-1999 |
| 2 | Passifs | 2000-2999 |
| 3 | Revenus | 3000-3999 |
| 4 | Charges de matériel et de marchandises | 4000-4999 |
| 5 | Charges de personnel | 5000-5999 |
| 6 | Autres charges d'exploitation | 6000-6999 |
| 7 | Résultats des activités annexes d'exploitation | 7000-7999 |
| 8 | Résultats hors exploitation | 8000-8999 |
| 9 | Clôture | 9000-9999 |`
    },
    {
      id: 'full-chart',
      title: 'Plan Comptable Complet',
      content: `## Plan comptable détaillé

| Numéro | Libellé du compte | Explication |
| --- | --- | --- |
| 1000 | Caisse | Le compte 'Caisse' enregistre toutes les entrées et sorties d'argent liquide (billets et pièces). Ce compte est débité lors d'encaissements et crédité lors de décaissements. Il fait partie des actifs circulants et son solde représente le montant d'espèces détenu par l'entreprise à un moment donné. |
| 1003 | Caisse EUR | Le compte 'Caisse EUR' fonctionne comme le compte de caisse principal, mais est spécifiquement dédié à l'enregistrement des mouvements d'espèces en euros. Ce compte permet de suivre séparément les liquidités en euros pour faciliter la gestion des devises. |
| 1004 | Caisse en devise étrangère A | Ce compte sert à enregistrer les mouvements d'espèces dans une devise étrangère spécifique (autre que l'euro). Les entreprises ayant des activités internationales utilisent ce compte pour suivre leurs liquidités dans différentes devises. |
| 1010 | Compte postal | Le compte 'Compte postal' enregistre tous les mouvements relatifs au compte courant postal de l'entreprise. Il est utilisé pour suivre les versements et prélèvements effectués par le biais de PostFinance. |
| 1020 | Compte courant CHF | Ce compte enregistre les opérations effectuées sur le compte bancaire principal de l'entreprise en francs suisses. Il permet de suivre toutes les entrées et sorties d'argent transitant par ce compte bancaire. |
| 1022 | Compte courant EUR | Similaire au compte courant en CHF, ce compte est dédié aux opérations en euros. Il est utilisé par les entreprises qui effectuent régulièrement des transactions en euros avec des partenaires de la zone euro. |
| 1023 | Compte courant USD | Ce compte bancaire spécifique enregistre les transactions en dollars américains. Il est particulièrement utile pour les entreprises ayant des relations commerciales avec les États-Unis ou d'autres pays utilisant le dollar. |
| 1100 | Créances suisses en CHF | Ce compte enregistre les créances résultant des ventes à crédit à des clients suisses en francs suisses. Il représente les montants dus à l'entreprise par ses clients suisses et fait partie des actifs circulants. |
| 1200 | Stocks de marchandises commerciales A | Ce compte enregistre la valeur des marchandises détenues pour la revente. Il fait partie des actifs circulants et sa valeur est généralement ajustée lors des inventaires périodiques ou en fin d'exercice. |
| 2000 | Dettes résultant d'achats de matières et de marchandises | Ce compte enregistre les dettes de l'entreprise envers ses fournisseurs pour l'achat de matières et de marchandises. Il fait partie des passifs à court terme et représente les factures fournisseurs non encore réglées. |
| 2001 | Dettes résultant de prestations de services de tiers | Ce compte enregistre les dettes de l'entreprise envers ses fournisseurs pour des prestations de services (contrairement aux achats de biens matériels). Il s'agit par exemple de factures de consultants, d'avocats, ou de prestataires de services divers. |
| 2800 | Capital-actions / parts sociales / capital de fondation / capital-participation | Ce compte représente le capital de base de l'entreprise apporté par les actionnaires ou associés. Sa nature dépend de la forme juridique de l'entreprise (SA, Sàrl, etc.). Il fait partie des fonds propres et reste généralement stable sauf en cas d'augmentation ou de réduction de capital. |
| 3000 | Ventes de produits fabriqués A | Ce compte enregistre le chiffre d'affaires résultant de la vente des produits fabriqués par l'entreprise. Il s'agit d'un compte de produits qui influence directement le résultat de l'exercice. |
| 4000 | Charges de matériel produit A | Ce compte enregistre les coûts des matières premières et composants utilisés dans la fabrication des produits. Il s'agit d'un compte de charges qui diminue le résultat de l'exercice. |
| 5200 | Salaires de base | Ce compte enregistre les salaires bruts versés aux employés, hors primes, commissions ou indemnités spéciales. Il s'agit d'un compte de charges qui impacte directement le résultat de l'exercice. |
| 6000 | Loyer des usines | Ce compte enregistre les charges locatives pour les bâtiments industriels utilisés par l'entreprise. Il s'agit d'une charge d'exploitation qui diminue le résultat de l'exercice. |
| 7000 | Produits bruts | Ce compte est utilisé pour enregistrer les produits bruts des activités annexes d'exploitation, c'est-à-dire les revenus qui ne proviennent pas de l'activité principale de l'entreprise. |
| 8000 | Charges hors exploitation | Ce compte enregistre les charges qui ne sont pas liées à l'activité d'exploitation normale de l'entreprise. Il peut s'agir de charges exceptionnelles ou d'éléments sans rapport avec l'activité principale. |
| 9000 | Produits nets des ventes de biens et de prestations de services | Ce compte est utilisé pour la clôture des comptes et le transfert des produits nets (chiffre d'affaires net) vers le compte de résultat. Il fait partie des comptes de clôture qui permettent d'établir les états financiers. |`
    }
  ]
};
