
export interface NavItem {
  name: string;
  path: string;
  icon: string;
  subitems?: NavSubItem[];
}

export interface NavSubItem {
  name: string;
  path: string;
  icon?: string;
}

export const navItems: NavItem[] = [
  { name: 'Formation', path: '/formation', icon: 'formation', 
    subitems: [
      { name: 'Aperçu', path: '/formation' },
      { name: 'Introduction à la comptabilité', path: '/formation/intro', icon: 'formation' },
      { name: 'Les comptes et leur classification', path: '/formation/chart-of-accounts', icon: 'plan-comptable' },
      { name: 'Les écritures comptables et le journal', path: '/formation/journal', icon: 'formation' },
      { name: 'Les charges, produits et le résultat', path: '/formation/income-expenses', icon: 'formation' },
      { name: 'Le calcul des intérêts', path: '/formation/interests', icon: 'formation' },
      { name: 'Les actifs et passifs transitoires', path: '/formation/transitional', icon: 'formation' },
      { name: 'Pertes sur créances et provisions', path: '/formation/provisions', icon: 'formation' },
      { name: 'Balance et clôture', path: '/formation/closing', icon: 'formation' },
      { name: 'La TVA', path: '/formation/tax', icon: 'formation' },
      { name: 'Les formes juridiques', path: '/formation/legal-forms', icon: 'formation' },
      { name: 'Sociétés de personnes', path: '/formation/partnerships', icon: 'formation' },
      { name: 'Sociétés anonymes (SA)', path: '/formation/corporations', icon: 'formation' },
      { name: 'Sociétés à responsabilité limitée (Sàrl)', path: '/formation/llc', icon: 'formation' },
      { name: 'Les amortissements', path: '/formation/depreciation', icon: 'formation' },
      { name: 'Ratios et indicateurs financiers', path: '/formation/financial-ratios', icon: 'financial-ratios' },
      { name: 'Quiz', path: '/formation/quiz', icon: 'quiz' }
    ]
  },
  { name: 'Abacus', path: '/abacus', icon: 'abacus', 
    subitems: [
      { name: 'Documentation', path: '/abacus' },
      { name: 'Excel Converter', path: '/abacus/excel-converter', icon: 'excel-converter' }
    ] 
  },
  { name: 'Yooz', path: '/yooz', icon: 'yooz' },
  { name: 'Lexique', path: '/lexique', icon: 'lexique' },
  { name: 'Ressources', path: '/ressources', icon: 'ressources',
    subitems: [
      { name: 'Templates', path: '/templates', icon: 'templates' },
      { name: 'Administrations', path: '/ressources/administrations', icon: 'administrations' },
      { name: 'Carte Suisse', path: '/ressources/carte', icon: 'carte' }
    ]
  },
];
