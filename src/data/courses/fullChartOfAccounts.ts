
// Plan comptable suisse complet
export interface AccountItem {
  number: string;
  title: string;
  category: string;
  description?: string;
}

// Définition des catégories de comptes
export const accountCategories = {
  '1': { id: '1', name: 'Actifs', description: 'Tout ce que l\'entreprise possède et qui a une valeur financière' },
  '2': { id: '2', name: 'Passifs', description: 'Les dettes de l\'entreprise et ses fonds propres' },
  '3': { id: '3', name: 'Revenus', description: 'Sommes gagnées par l\'entreprise via ses activités' },
  '4': { id: '4', name: 'Charges de matériel', description: 'Coûts directs liés aux matières et marchandises' },
  '5': { id: '5', name: 'Charges de personnel', description: 'Salaires et autres dépenses liées aux employés' },
  '6': { id: '6', name: 'Autres charges d\'exploitation', description: 'Frais généraux et dépenses de fonctionnement' },
  '7': { id: '7', name: 'Résultats des activités annexes', description: 'Résultats provenant d\'activités secondaires' },
  '8': { id: '8', name: 'Résultats hors exploitation', description: 'Opérations non liées à l\'activité principale' },
  '9': { id: '9', name: 'Clôture', description: 'Comptes utilisés pour la clôture des exercices comptables' },
};

// Plan comptable complet
export const fullAccountsList: AccountItem[] = [
  { number: '1000', title: 'Caisse', category: '1', description: 'Enregistre toutes les entrées et sorties d\'argent liquide (billets et pièces).' },
  { number: '1003', title: 'Caisse EUR', category: '1' },
  { number: '1004', title: 'Caisse en devise étrangère A', category: '1' },
  { number: '1010', title: 'Compte postal', category: '1', description: 'Transactions via le compte postal de l\'entreprise.' },
  { number: '1020', title: 'Compte courant CHF', category: '1', description: 'Opérations effectuées sur le compte bancaire principal en francs suisses.' },
  { number: '1022', title: 'Compte courant EUR', category: '1' },
  { number: '1023', title: 'Compte courant USD', category: '1' },
  { number: '1024', title: 'Compte courant devise étrangère A', category: '1' },
  { number: '1040', title: 'Chèques', category: '1' },
  { number: '1041', title: 'Lettres de change (pouvant être remis à l\'escompte)', category: '1' },
  { number: '1050', title: 'Placements à terme', category: '1' },
  { number: '1051', title: 'Placements fiduciaires', category: '1' },
  { number: '1060', title: 'Actions', category: '1' },
  { number: '1061', title: 'Bons de participation', category: '1' },
  { number: '1062', title: 'Parts de fonds de placement', category: '1' },
  { number: '1063', title: 'Obligations', category: '1' },
  { number: '1068', title: 'Réserves de fluctuation de valeur sur titres à court terme', category: '1' },
  { number: '1069', title: 'Correction de la valeur des titres', category: '1' },
  { number: '1070', title: 'Autres placements à court terme', category: '1' },
  { number: '1078', title: 'Réserves de fluctuation de valeur sur autres placements à court terme', category: '1' },
  { number: '1079', title: 'Correction de la valeur des autres placements à court terme', category: '1' },
  { number: '1090', title: 'Comptes de transfert', category: '1' },
  { number: '1091', title: 'Compte d\'attente pour salaires', category: '1' },
  { number: '1099', title: 'Compte d\'attente pour des montants à clarifier', category: '1' },
  { number: '1100', title: 'Créances suisses en CHF', category: '1', description: 'Montants dus à l\'entreprise par ses clients suisses en francs suisses.' },
  { number: '1101', title: 'Créances étrangères en CHF', category: '1' },
  { number: '1102', title: 'Créances en EUR', category: '1' },
  { number: '1103', title: 'Créances en USD', category: '1' },
  { number: '1105', title: 'Note de crédit reçues', category: '1' },
  { number: '1109', title: 'Corrections de la valeur des ventes de bien et de prestations de services (incl. ducroire)', category: '1' },
  { number: '1110', title: 'Créances envers la participation A', category: '1' },
  
  // J'inclus seulement quelques comptes de chaque catégorie pour garder le fichier lisible
  // Les comptes sont regroupés par catégorie pour faciliter la lecture

  // Catégorie 2 - Passifs
  { number: '2000', title: 'Dettes résultant d\'achats de matières et de marchandises', category: '2', description: 'Dettes envers les fournisseurs pour l\'achat de matières et marchandises.' },
  { number: '2001', title: 'Dettes résultant de prestations de services de tiers', category: '2' },
  { number: '2002', title: 'Dettes résultant de charges de personnel', category: '2' },
  { number: '2004', title: 'Dettes résultant d\'autres charges d\'exploitation', category: '2' },
  { number: '2005', title: 'Notes de crédit reçues', category: '2' },
  
  // Catégorie 3 - Revenus
  { number: '3000', title: 'Ventes de produits fabriqués A', category: '3', description: 'Chiffre d\'affaires résultant de la vente des produits fabriqués par l\'entreprise.' },
  { number: '3000.1', title: 'Ventes de produits fabriqués au comptant', category: '3' },
  { number: '3001.1', title: 'Ventes de produits fabriqués au détail à crédit', category: '3' },
  
  // Catégorie 4 - Charges de matériel
  { number: '4000', title: 'Charges de matériel produit A', category: '4', description: 'Coûts des matières premières et composants utilisés dans la fabrication.' },
  { number: '4000.1', title: 'Achats d\'appareils', category: '4' },
  { number: '4001.1', title: 'Achats de composants', category: '4' },
  
  // Catégorie 5 - Charges de personnel
  { number: '5200', title: 'Salaires de base', category: '5', description: 'Salaires bruts versés aux employés, hors primes et commissions.' },
  { number: '5201', title: 'Salaires variables, commissions et primes régulières', category: '5' },
  { number: '5202', title: 'Primes occasionnelles et participations au bénéfice', category: '5' },
  
  // Catégorie 6 - Autres charges d'exploitation
  { number: '6000', title: 'Loyer des usines', category: '6', description: 'Charges locatives pour les bâtiments industriels utilisés par l\'entreprise.' },
  { number: '6001', title: 'Loyer des ateliers', category: '6' },
  { number: '6002', title: 'Loyer des entrepôts', category: '6' },
  
  // Catégorie 7 - Résultats des activités annexes
  { number: '7000', title: 'Produits bruts', category: '7', description: 'Produits bruts des activités annexes d\'exploitation.' },
  { number: '7009', title: 'Diminutions de produits', category: '7' },
  { number: '7010', title: 'Charges de matières', category: '7' },
  
  // Catégorie 8 - Résultats hors exploitation
  { number: '8000', title: 'Charges hors exploitation', category: '8', description: 'Charges non liées à l\'activité d\'exploitation normale de l\'entreprise.' },
  { number: '8100', title: 'Produits hors exploitation', category: '8' },
  { number: '8500', title: 'Dotations exceptionnelles aux réserves', category: '8' },
  
  // Catégorie 9 - Clôture
  { number: '9000', title: 'Produits nets des ventes de biens et de prestations de services', category: '9', description: 'Compte de clôture pour le transfert des produits nets vers le compte de résultat.' },
  { number: '9005', title: 'Variation des stocks de produits fini et semi-finis et variation des prestations de services non facturés', category: '9' },
  { number: '9010', title: 'Chiffre d\'affaires résultant des ventes et des prestations de services', category: '9' }
];

// Fonction pour obtenir la liste complète des comptes (pourrait être étendue avec des données réelles)
export const getFullAccountsList = () => {
  return fullAccountsList;
};

// Fonction pour obtenir les comptes par catégorie
export const getAccountsByCategory = (categoryId: string) => {
  return fullAccountsList.filter(account => account.category === categoryId);
};

// Fonction pour rechercher des comptes
export const searchAccounts = (searchTerm: string) => {
  if (!searchTerm.trim()) return [];
  const lowercaseTerm = searchTerm.toLowerCase();
  
  return fullAccountsList.filter(account => 
    account.number.toLowerCase().includes(lowercaseTerm) || 
    account.title.toLowerCase().includes(lowercaseTerm)
  );
};
