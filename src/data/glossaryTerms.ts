
export type GlossaryTerm = {
  id: number;
  title: string;
  definition: string;
  example?: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 1,
    title: 'Actifs circulants',
    definition: 'Éléments de l\'actif qui sont détenus à court terme, généralement convertibles en liquidités dans un délai d\'un an.',
    example: 'Liquidités, créances clients, stocks'
  },
  {
    id: 2,
    title: 'Actifs immobilisés',
    definition: 'Biens durables destinés à servir de façon permanente à l\'activité de l\'entreprise.',
    example: 'Immeubles, machines, participations'
  },
  {
    id: 3,
    title: 'AVS',
    definition: 'Assurance-vieillesse et survivants, pilier principal du système de sécurité sociale suisse pour la retraite.',
    example: 'Les cotisations AVS s\'élèvent à 8,7% du salaire brut, partagées à parts égales entre employeur et employé.'
  },
  {
    id: 4,
    title: 'Bilan',
    definition: 'État de la situation financière d\'une entreprise à une date donnée, présentant l\'actif (avoirs) et le passif (dettes et fonds propres).',
    example: 'Le bilan montre un total d\'actifs de CHF 500\'000, composé à 60% d\'actifs circulants et 40% d\'actifs immobilisés.'
  },
  {
    id: 5,
    title: 'Compte de résultat',
    definition: 'Document comptable présentant l\'ensemble des charges et des produits d\'une entreprise pour une période donnée.',
    example: 'Le compte de résultat indique un bénéfice net de CHF 120\'000 après déduction de toutes les charges d\'exploitation et financières.'
  },
  {
    id: 6,
    title: 'Débiteur',
    definition: 'Personne physique ou morale qui doit de l\'argent à l\'entreprise.',
    example: 'Les débiteurs représentent CHF 200\'000 dans les actifs circulants du bilan.'
  },
  {
    id: 7,
    title: 'Impôt anticipé',
    definition: 'Impôt prélevé à la source par la Confédération sur les rendements de capitaux mobiliers, notamment les dividendes et intérêts.',
    example: 'L\'impôt anticipé est perçu au taux de 35% sur les dividendes versés par les sociétés suisses.'
  },
  {
    id: 8,
    title: 'Plan comptable suisse PME',
    definition: 'Référentiel de numérotation des comptes adapté aux petites et moyennes entreprises suisses.',
    example: 'Selon le plan comptable suisse PME, les liquidités sont enregistrées dans les comptes 10XX.'
  },
  {
    id: 9,
    title: 'Provision',
    definition: 'Charge comptabilisée pour faire face à une dépense ou une perte probable dont le montant ou la date de réalisation est incertain.',
    example: 'Une provision pour créances douteuses de CHF 15\'000 a été constituée pour couvrir le risque de non-paiement de certains clients.'
  },
  {
    id: 10,
    title: 'TVA',
    definition: 'Taxe sur la valeur ajoutée, impôt indirect sur la consommation collecté par les entreprises.',
    example: 'En Suisse, le taux normal de TVA est de 8.1%, avec des taux réduits de 2.6% pour les biens de première nécessité et 3.8% pour l\'hébergement.'
  },
  {
    id: 11,
    title: 'LPP',
    definition: 'Loi sur la prévoyance professionnelle, constituant le deuxième pilier du système de retraite suisse.',
    example: 'Les cotisations LPP permettent de constituer un capital retraite complémentaire à l\'AVS.'
  },
  {
    id: 12,
    title: 'Créancier',
    definition: 'Personne physique ou morale à qui l\'entreprise doit de l\'argent.',
    example: 'Les créanciers fournisseurs représentent CHF 150\'000 dans les passifs à court terme du bilan.'
  },
  {
    id: 13,
    title: 'Amortissement',
    definition: 'Constatation comptable de la dépréciation d\'un actif immobilisé au fil du temps.',
    example: 'L\'amortissement annuel de 10% sur les équipements informatiques représente une charge de CHF 8\'000.'
  },
  {
    id: 14,
    title: 'Réserves légales',
    definition: 'Part des bénéfices mise en réserve conformément aux exigences légales du Code des Obligations.',
    example: 'L\'entreprise a affecté 5% de son bénéfice net aux réserves légales, conformément à l\'article 671 CO.'
  },
  {
    id: 15,
    title: 'Passifs transitoires',
    definition: 'Charges concernant l\'exercice clos mais qui seront payées lors de l\'exercice suivant.',
    example: 'Les factures d\'électricité de décembre reçues en janvier sont comptabilisées en passifs transitoires.'
  }
];
