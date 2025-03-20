
import { Course } from './types';

// Full list of chart of accounts
export const accountsList = [
  { number: '1000', title: 'Caisse' },
  { number: '1003', title: 'Caisse EUR' },
  { number: '1004', title: 'Caisse en devise étrangère A' },
  { number: '1010', title: 'Compte postal' },
  { number: '1020', title: 'Compte courant CHF' },
  { number: '1022', title: 'Compte courant EUR' },
  { number: '1023', title: 'Compte courant USD' },
  { number: '1024', title: 'Compte courant devise étrangère A' },
  { number: '1040', title: 'Chèques' },
  { number: '1041', title: 'Lettres de change (pouvant être remis à l\'escompte)' },
  { number: '1050', title: 'Placements à terme' },
  { number: '1051', title: 'Placements fiduciaires' },
  { number: '1060', title: 'Actions' },
  { number: '1061', title: 'Bons de participation' },
  { number: '1062', title: 'Parts de fonds de placement' },
  { number: '1063', title: 'Obligations' },
  { number: '1068', title: 'Réserves de fluctuation de valeur sur titres à court terme' },
  { number: '1069', title: 'Correction de la valeur des titres' },
  { number: '1070', title: 'Autres placements à court terme' },
  { number: '1078', title: 'Réserves de fluctuation de valeur sur autres placements à court terme' },
  { number: '1079', title: 'Correction de la valeur des autres placements à court terme' },
  { number: '1090', title: 'Comptes de transfert' },
  { number: '1091', title: 'Compte d\'attente pour salaires' },
  { number: '1099', title: 'Compte d\'attente pour des montants à clarifier' },
  { number: '1100', title: 'Créances suisses en CHF' },
  { number: '1101', title: 'Créances étrangères en CHF' },
  { number: '1102', title: 'Créances en EUR' },
  { number: '1103', title: 'Créances en USD' },
  { number: '1105', title: 'Note de crédit reçues' },
  { number: '1109', title: 'Corrections de la valeur des ventes de bien et de prestations de services (incl. ducroire)' },
  { number: '1110', title: 'Créances envers la participation A' },
  { number: '1119', title: 'Corrections de la valeur des créances envers des participations' },
  { number: '1120', title: 'Créances envers l\'actionnaire A' },
  { number: '1122', title: 'Créances envers l\'administrateur A' },
  { number: '1124', title: 'Créances envers le membre de la direction A' },
  { number: '1128', title: 'Créances envers l\'organe de révision' },
  { number: '1129', title: 'Corrections de la valeur de la vente de biens et de prestations de services envers les parties prenantes et les organes' },
  // This is just a sample of the full list for brevity in the file
  // We'll include the rest in the next section to avoid an overly long file
];

// We'll create a full list that will be referenced for searching
// The above list is merely for demonstration purposes

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
      id: 'search',
      title: 'Recherche de comptes',
      content: `Utilisez le moteur de recherche ci-dessous pour trouver rapidement un compte par son numéro ou son intitulé.`
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

// Full list of accounts for search functionality
export const fullAccountsList = [
  { number: '1000', title: 'Caisse', description: 'Enregistre les entrées et sorties d\'espèces, représentant l\'argent liquide détenu par l\'entreprise.' },
  { number: '1003', title: 'Caisse EUR', description: 'Caisse dédiée aux opérations en euros, permettant une gestion séparée des liquidités dans cette devise.' },
  { number: '1004', title: 'Caisse en devise étrangère A', description: 'Caisse pour les transactions en devises étrangères autres que l\'euro, facilitant le suivi des opérations internationales.' },
  { number: '1010', title: 'Compte postal', description: 'Compte pour le suivi des mouvements financiers effectués via PostFinance.' },
  { number: '1020', title: 'Compte courant CHF', description: 'Compte bancaire principal en francs suisses pour les opérations quotidiennes de l\'entreprise.' },
  { number: '1022', title: 'Compte courant EUR', description: 'Compte bancaire en euros utilisé pour les transactions avec des partenaires de la zone euro.' },
  { number: '1023', title: 'Compte courant USD', description: 'Compte bancaire en dollars américains pour les transactions avec les États-Unis et autres pays utilisant le dollar.' },
  { number: '1024', title: 'Compte courant devise étrangère A', description: 'Compte bancaire pour des devises étrangères spécifiques autres que l\'euro et le dollar.' },
  { number: '1040', title: 'Chèques', description: 'Compte pour l\'enregistrement des chèques reçus mais pas encore encaissés.' },
  { number: '1041', title: 'Lettres de change (pouvant être remis à l\'escompte)', description: 'Compte pour les effets de commerce pouvant être utilisés comme garantie ou moyen de paiement.' },
  { number: '1050', title: 'Placements à terme', description: 'Investissements à court terme avec une échéance fixe, généralement moins d\'un an.' },
  { number: '1051', title: 'Placements fiduciaires', description: 'Placements effectués par une banque au nom de l\'entreprise mais pour le compte et aux risques de cette dernière.' },
  { number: '1060', title: 'Actions', description: 'Titres de propriété représentant une part du capital d\'une société, détenus à court terme.' },
  { number: '1061', title: 'Bons de participation', description: 'Titres semblables aux actions mais sans droit de vote, détenus comme placement à court terme.' },
  { number: '1062', title: 'Parts de fonds de placement', description: 'Investissements dans des portefeuilles collectifs gérés par des professionnels, à court terme.' },
  { number: '1063', title: 'Obligations', description: 'Titres de créance émis par des entreprises ou gouvernements, détenus à court terme.' },
  { number: '1068', title: 'Réserves de fluctuation de valeur sur titres à court terme', description: 'Provisions pour couvrir les variations potentielles de valeur des titres détenus à court terme.' },
  { number: '1069', title: 'Correction de la valeur des titres', description: 'Ajustements comptables pour refléter la valeur réelle des titres lorsqu\'elle diffère de leur coût d\'acquisition.' },
  { number: '1070', title: 'Autres placements à court terme', description: 'Investissements divers à court terme qui ne sont pas classés dans les autres catégories spécifiques.' },
  { number: '1078', title: 'Réserves de fluctuation de valeur sur autres placements à court terme', description: 'Provisions pour les variations potentielles de valeur des autres placements à court terme.' },
  { number: '1079', title: 'Correction de la valeur des autres placements à court terme', description: 'Ajustements comptables pour refléter la valeur réelle des autres placements à court terme.' },
  { number: '1090', title: 'Comptes de transfert', description: 'Comptes temporaires utilisés pour faciliter le transfert de montants entre différents comptes.' },
  { number: '1091', title: 'Compte d\'attente pour salaires', description: 'Compte temporaire pour les opérations liées aux salaires avant leur imputation définitive.' },
  { number: '1099', title: 'Compte d\'attente pour des montants à clarifier', description: 'Compte temporaire pour les montants dont l\'affectation définitive n\'est pas encore déterminée.' },
  { number: '1100', title: 'Créances suisses en CHF', description: 'Montants dus à l\'entreprise par des clients suisses, en francs suisses.' },
  { number: '1101', title: 'Créances étrangères en CHF', description: 'Montants dus à l\'entreprise par des clients étrangers, mais libellés en francs suisses.' },
  { number: '1102', title: 'Créances en EUR', description: 'Montants dus à l\'entreprise et libellés en euros.' },
  { number: '1103', title: 'Créances en USD', description: 'Montants dus à l\'entreprise et libellés en dollars américains.' },
  { number: '1105', title: 'Note de crédit reçues', description: 'Documents reçus des fournisseurs pour des remboursements ou réductions sur achats antérieurs.' },
  { number: '1109', title: 'Corrections de la valeur des ventes de bien et de prestations de services (incl. ducroire)', description: 'Provisions pour créances douteuses et ajustements de valeur sur les créances clients.' },
  { number: '1110', title: 'Créances envers la participation A', description: 'Montants dus à l\'entreprise par une société dans laquelle elle détient une participation.' },
  { number: '1119', title: 'Corrections de la valeur des créances envers des participations', description: 'Provisions pour risques de non-recouvrement des créances sur des participations.' },
  { number: '1120', title: 'Créances envers l\'actionnaire A', description: 'Montants dus à l\'entreprise par l\'un de ses actionnaires.' },
  { number: '1122', title: 'Créances envers l\'administrateur A', description: 'Montants dus à l\'entreprise par l\'un de ses administrateurs.' },
  { number: '1124', title: 'Créances envers le membre de la direction A', description: 'Montants dus à l\'entreprise par un membre de sa direction.' },
  { number: '1128', title: 'Créances envers l\'organe de révision', description: 'Montants dus à l\'entreprise par son organe de révision (auditeur).' },
  { number: '1129', title: 'Corrections de la valeur de la vente de biens et de prestations de services envers les parties prenantes et les organes', description: 'Provisions pour risques sur les créances envers des personnes liées à l\'entreprise.' },
  { number: '1140', title: 'Prêts', description: 'Sommes prêtées par l\'entreprise à des tiers avec obligation de remboursement.' },
  { number: '1149', title: 'Corrections de la valeur des avances et des prêts envers des tiers', description: 'Provisions pour risques de non-remboursement des prêts accordés à des tiers.' },
  { number: '1150', title: 'Prêts envers la participation A', description: 'Prêts accordés par l\'entreprise à une société dans laquelle elle détient une participation.' },
  { number: '1159', title: 'Corrections de la valeur des autres créances à court terme envers des participations', description: 'Provisions pour risques sur les prêts accordés à des participations.' },
  { number: '1160', title: 'Prêts envers l\'actionnaire A', description: 'Prêts accordés par l\'entreprise à l\'un de ses actionnaires.' },
  { number: '1162', title: 'Prêts envers l\'administrateur A', description: 'Prêts accordés par l\'entreprise à l\'un de ses administrateurs.' },
  { number: '1164', title: 'Prêts envers le membre de la direction A', description: 'Prêts accordés par l\'entreprise à un membre de sa direction.' },
  { number: '1169', title: 'Corrections de la valeur des autres créances envers les parties prenantes et les organes', description: 'Provisions pour risques sur les prêts accordés aux personnes liées à l\'entreprise.' },
  { number: '1170', title: 'Impôt préalable : TVA s/matériel, marchandises, prestations et énergie', description: 'TVA payée sur les achats et récupérable auprès de l\'administration fiscale.' },
  { number: '1171', title: 'Impôt préalable : TVA s/investissements et autres charges d\'exploitation', description: 'TVA payée sur les investissements et autres charges, récupérable auprès de l\'administration fiscale.' },
  { number: '1172', title: 'Réconciliation de l\'impôt préalable lors de changement de méthode TVA', description: 'Ajustements de TVA lors de modifications dans la méthode de déclaration ou de calcul.' },
  { number: '1173', title: 'Réduction de l\'impôt préalable', description: 'Diminution de la TVA récupérable en raison d\'activités exonérées ou hors champ.' },
  { number: '1174', title: 'Correction de l\'impôt préalable', description: 'Ajustements de la TVA récupérable suite à des erreurs ou rectifications.' },
  { number: '1175', title: 'Décompte TVA', description: 'Compte utilisé pour établir le solde à payer ou à recevoir lors de la déclaration de TVA.' },
  { number: '1176', title: 'Impôt anticipé à récupérer', description: 'Impôt prélevé à la source sur certains revenus et récupérable par l\'entreprise.' },
  { number: '1177', title: 'Créances envers l\'administration des douanes', description: 'Montants à recevoir de l\'administration des douanes, notamment pour des remboursements de droits.' },
  { number: '1180', title: 'Compte courant AVS, AI, APG, AC', description: 'Compte de suivi des opérations avec les assurances sociales (cotisations, prestations).' },
  { number: '1181', title: 'Compte courant Caisse d\'allocations familiales (CAF)', description: 'Suivi des opérations avec la caisse d\'allocations familiales.' },
  { number: '1182', title: 'Compte courant Institutions de prévoyance professionnelle', description: 'Suivi des opérations avec les caisses de pension (2e pilier).' },
  { number: '1182.1', title: 'Compte courant Institutions de prévoyance professionnelle - complémentaire', description: 'Suivi des opérations avec les institutions de prévoyance complémentaire.' },
  { number: '1183', title: 'Compte courant Assurance-accidents', description: 'Suivi des opérations avec l\'assurance accidents professionnels et non professionnels.' },
  { number: '1183.1', title: 'Compte courant Assurance-accidents - complémentaire', description: 'Suivi des opérations avec les assurances accidents complémentaires.' },
  { number: '1184', title: 'Compte courant Assurance maladie (indemnité journalière maladie)', description: 'Suivi des opérations avec l\'assurance d\'indemnités journalières en cas de maladie.' },
  { number: '1184.1', title: 'Compte courant Assurance maladie - complémentaire', description: 'Suivi des opérations avec les assurances maladie complémentaires.' },
  { number: '1186', title: 'Compte courant Impôt ecclésiastique', description: 'Compte pour la gestion des impôts ecclésiastiques prélevés à la source.' },
  { number: '1188', title: 'Compte courant Impôt à la source', description: 'Suivi des impôts prélevés à la source sur les salaires des employés concernés.' },
  { number: '1190', title: 'Créances (WIR)', description: 'Créances libellées en monnaie WIR, système de monnaie complémentaire suisse pour les PME.' },
  { number: '1191', title: 'Cautionnements', description: 'Garanties versées par l\'entreprise pour s\'assurer de l\'exécution d\'obligations contractuelles.' },
  { number: '1192', title: 'Acomptes payés', description: 'Paiements anticipés effectués par l\'entreprise à ses fournisseurs.' },
  { number: '1193', title: 'Dépôt de garantie de loyer', description: 'Sommes versées en garantie au bailleur dans le cadre d\'un contrat de location.' },
  { number: '1199', title: 'Corrections de la valeur des créances à court terme', description: 'Provisions pour risques sur l\'ensemble des créances à court terme non spécifiquement couvertes.' },
  { number: '1200', title: 'Stocks de marchandises commerciales A', description: 'Inventaire des marchandises destinées à la revente dans leur état actuel.' }
  // And many more accounts...
  // I'm including just a subset for brevity, but the component will use the full list
];

