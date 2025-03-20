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

// Helper functions to work with the accounts list
export const getFullAccountsList = (): AccountItem[] => {
  return fullAccountsList;
};

export const getAccountsByCategory = (category: string): AccountItem[] => {
  return fullAccountsList.filter(account => account.category === category);
};

export const searchAccounts = (searchTerm: string): AccountItem[] => {
  const term = searchTerm.toLowerCase();
  return fullAccountsList.filter(account => 
    account.number.toLowerCase().includes(term) || 
    account.title.toLowerCase().includes(term)
  );
};

// Plan comptable complet
export const fullAccountsList: AccountItem[] = [
  // Catégorie 1 - Actifs
  { number: '1000', title: 'Caisse', category: '1', description: 'Argent liquide disponible immédiatement' },
  { number: '1020', title: 'Banque - Compte courant', category: '1', description: 'Fonds déposés sur le compte bancaire principal de l\'entreprise' },
  { number: '1100', title: 'Créances clients', category: '1', description: 'Montants dus par les clients pour des biens ou services vendus à crédit' },
  { number: '1170', title: 'TVA due', category: '1', description: 'Montant de la TVA que l\'entreprise doit collecter et verser aux autorités fiscales' },
  { number: '1200', title: 'Stocks de marchandises', category: '1', description: 'Valeur des marchandises détenues par l\'entreprise et destinées à la vente' },
  { number: '1300', title: 'Immobilisations corporelles', category: '1', description: 'Biens physiques durables utilisés dans l\'exploitation de l\'entreprise (machines, véhicules, etc.)' },
  { number: '1340', title: 'Amortissements cumulés sur immobilisations corporelles', category: '1', description: 'Montant total des amortissements effectués sur les immobilisations corporelles depuis leur acquisition' },
  { number: '1400', title: 'Immobilisations financières', category: '1', description: 'Investissements à long terme dans d\'autres entreprises (actions, participations, etc.)' },
  { number: '1500', title: 'Actifs transitoires', category: '1', description: 'Dépenses payées d\'avance ou revenus à recevoir qui concernent une période future' },
  
  // Catégorie 2 - Passifs
  { number: '2000', title: 'Fournisseurs', category: '2', description: 'Montants dus aux fournisseurs pour des biens ou services achetés à crédit' },
  { number: '2080', title: 'TVA à payer', category: '2', description: 'Montant de la TVA que l\'entreprise doit verser aux autorités fiscales sur ses achats' },
  { number: '2100', title: 'Emprunts bancaires', category: '2', description: 'Montant des prêts contractés auprès des banques' },
  { number: '2200', title: 'Dettes hypothécaires', category: '2', description: 'Montant des prêts garantis par des biens immobiliers' },
  { number: '2300', title: 'Salaires à payer', category: '2', description: 'Salaires dus aux employés qui n\'ont pas encore été versés' },
  { number: '2400', title: 'Charges sociales à payer', category: '2', description: 'Montant des charges sociales dues aux organismes sociaux' },
  { number: '2500', title: 'Impôts à payer', category: '2', description: 'Montant des impôts dus aux autorités fiscales' },
  { number: '2600', title: 'Passifs transitoires', category: '2', description: 'Revenus perçus d\'avance ou dépenses à payer qui concernent une période future' },
  { number: '2700', title: 'Autres dettes à court terme', category: '2' },
  { number: '2710', title: 'Dettes envers les actionnaires', category: '2' },
  { number: '2720', title: 'Prêts postposés de participations', category: '2' },
  { number: '2730', title: 'Prêts postposés des parties prenantes et des organes', category: '2' },
  { number: '2800', title: 'Capital-actions / parts sociales / capital de fondation / capital-participation', category: '2', description: 'Capital de base de l\'entreprise apporté par les actionnaires ou associés. Sa nature dépend de la forme juridique de l\'entreprise (SA, Sàrl, etc.).' },
  { number: '2900', title: 'Agio à la fondation ou lors d\'augmentation de capital', category: '2' },
  
  // Catégorie 3 - Revenus
  { number: '3000', title: 'Ventes de produits fabriqués', category: '3' },
  { number: '3100', title: 'Ventes de marchandises', category: '3' },
  { number: '3200', title: 'Prestations de services', category: '3' },
  { number: '3400', title: 'Rabais et réductions de prix', category: '3' },
  { number: '3500', title: 'Pertes sur clients', category: '3' },
  
  // Catégorie 4 - Charges de matériel
  { number: '4000', title: 'Charges de matériel', category: '4' },
  { number: '4200', title: 'Achats de marchandises destinées à la revente', category: '4' },
  { number: '4400', title: 'Prestations / travaux de tiers', category: '4' },
  
  // Catégorie 5 - Charges de personnel
  { number: '5000', title: 'Salaires', category: '5' },
  { number: '5700', title: 'Charges sociales', category: '5' },
  { number: '5800', title: 'Autres charges de personnel', category: '5' },
  
  // Catégorie 6 - Autres charges d'exploitation
  { number: '6000', title: 'Charges de locaux', category: '6' },
  { number: '6100', title: 'Entretien, réparations et remplacement des installations', category: '6' },
  { number: '6200', title: 'Charges de véhicules', category: '6' },
  { number: '6300', title: 'Assurances-choses, droits, taxes, autorisations', category: '6' },
  { number: '6400', title: 'Charges d\'énergie et évacuation des déchets', category: '6' },
  { number: '6500', title: 'Charges d\'administration', category: '6' },
  { number: '6600', title: 'Charges de publicité', category: '6' },
  { number: '6700', title: 'Autres charges d\'exploitation', category: '6' },
  { number: '6800', title: 'Amortissements', category: '6' },
  { number: '6900', title: 'Charges et produits financiers', category: '6' },
  
  // Catégorie 7 - Résultats des activités annexes
  { number: '7000', title: 'Produits accessoires', category: '7' },
  { number: '7500', title: 'Charges accessoires', category: '7' },
  
  // Catégorie 8 - Résultats hors exploitation
  { number: '8000', title: 'Produits hors exploitation', category: '8' },
  { number: '8500', title: 'Charges hors exploitation', category: '8' },
  { number: '8900', title: 'Impôts directs', category: '8' },
  
  // Catégorie 9 - Clôture
  { number: '9000', title: 'Compte de résultat', category: '9' },
  { number: '9075', title: 'Report du bénéfice ou de la perte de l\'exercice précédent', category: '9', description: 'Compte utilisé pour le report du résultat de l\'exercice précédent' },
  { number: '9100', title: 'Clôture', category: '9' },
];
