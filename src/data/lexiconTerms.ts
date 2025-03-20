
export type LexiconLink = {
  text: string;
  url: string;
};

export type LexiconTerm = {
  id: number;
  title: string;
  definition: string;
  example?: string;
  category: 'general' | 'fiscal' | 'accounting';
  links?: LexiconLink[];
};

export const lexiconTerms: LexiconTerm[] = [
  {
    id: 1,
    title: 'Actifs circulants',
    definition: 'Éléments de l\'actif qui sont détenus à court terme, généralement convertibles en liquidités dans un délai d\'un an.',
    example: 'Liquidités, créances clients, stocks',
    category: 'accounting',
    links: [
      {
        text: 'Code des obligations - Art. 959',
        url: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_959'
      }
    ]
  },
  {
    id: 2,
    title: 'Actifs immobilisés',
    definition: 'Biens durables destinés à servir de façon permanente à l\'activité de l\'entreprise.',
    example: 'Immeubles, machines, participations',
    category: 'accounting'
  },
  {
    id: 3,
    title: 'AVS',
    definition: 'Assurance-vieillesse et survivants, pilier principal du système de sécurité sociale suisse pour la retraite.',
    example: 'Les cotisations AVS s\'élèvent à 8,7% du salaire brut, partagées à parts égales entre employeur et employé.',
    category: 'fiscal',
    links: [
      {
        text: 'Site officiel de l\'AVS',
        url: 'https://www.ahv-iv.ch/fr/'
      }
    ]
  },
  {
    id: 4,
    title: 'Bilan',
    definition: 'État de la situation financière d\'une entreprise à une date donnée, présentant l\'actif (avoirs) et le passif (dettes et fonds propres).',
    example: 'Le bilan montre un total d\'actifs de CHF 500\'000, composé à 60% d\'actifs circulants et 40% d\'actifs immobilisés.',
    category: 'accounting'
  },
  {
    id: 5,
    title: 'Compte de résultat',
    definition: 'Document comptable présentant l\'ensemble des charges et des produits d\'une entreprise pour une période donnée.',
    example: 'Le compte de résultat indique un bénéfice net de CHF 120\'000 après déduction de toutes les charges d\'exploitation et financières.',
    category: 'accounting'
  },
  {
    id: 6,
    title: 'Débiteur',
    definition: 'Personne physique ou morale qui doit de l\'argent à l\'entreprise.',
    example: 'Les débiteurs représentent CHF 200\'000 dans les actifs circulants du bilan.',
    category: 'accounting'
  },
  {
    id: 7,
    title: 'Impôt anticipé',
    definition: 'Impôt prélevé à la source par la Confédération sur les rendements de capitaux mobiliers, notamment les dividendes et intérêts.',
    example: 'L\'impôt anticipé est perçu au taux de 35% sur les dividendes versés par les sociétés suisses.',
    category: 'fiscal',
    links: [
      {
        text: 'Administration fédérale des contributions - Impôt anticipé',
        url: 'https://www.estv.admin.ch/estv/fr/home/verrechnungssteuer/verrechnungssteuer.html'
      }
    ]
  },
  {
    id: 8,
    title: 'Plan comptable suisse PME',
    definition: 'Référentiel de numérotation des comptes adapté aux petites et moyennes entreprises suisses.',
    example: 'Selon le plan comptable suisse PME, les liquidités sont enregistrées dans les comptes 10XX.',
    category: 'accounting',
    links: [
      {
        text: 'Plan comptable PME',
        url: '/plan-comptable'
      }
    ]
  },
  {
    id: 9,
    title: 'Provision',
    definition: 'Charge comptabilisée pour faire face à une dépense ou une perte probable dont le montant ou la date de réalisation est incertain.',
    example: 'Une provision pour créances douteuses de CHF 15\'000 a été constituée pour couvrir le risque de non-paiement de certains clients.',
    category: 'accounting'
  },
  {
    id: 10,
    title: 'TVA',
    definition: 'Taxe sur la valeur ajoutée, impôt indirect sur la consommation collecté par les entreprises.',
    example: 'En Suisse, le taux normal de TVA est de 8.1%, avec des taux réduits de 2.6% pour les biens de première nécessité et 3.8% pour l\'hébergement.',
    category: 'fiscal',
    links: [
      {
        text: 'Administration fédérale des contributions - TVA',
        url: 'https://www.estv.admin.ch/estv/fr/home/mehrwertsteuer/mwst.html'
      }
    ]
  },
  {
    id: 11,
    title: 'LPP',
    definition: 'Loi sur la prévoyance professionnelle, constituant le deuxième pilier du système de retraite suisse.',
    example: 'Les cotisations LPP permettent de constituer un capital retraite complémentaire à l\'AVS.',
    category: 'fiscal',
    links: [
      {
        text: 'Office fédéral des assurances sociales - Prévoyance professionnelle',
        url: 'https://www.bsv.admin.ch/bsv/fr/home/assurances-sociales/bv.html'
      }
    ]
  },
  {
    id: 12,
    title: 'Créancier',
    definition: 'Personne physique ou morale à qui l\'entreprise doit de l\'argent.',
    example: 'Les créanciers fournisseurs représentent CHF 150\'000 dans les passifs à court terme du bilan.',
    category: 'accounting'
  },
  {
    id: 13,
    title: 'Amortissement',
    definition: 'Constatation comptable de la dépréciation d\'un actif immobilisé au fil du temps.',
    example: 'L\'amortissement annuel de 10% sur les équipements informatiques représente une charge de CHF 8\'000.',
    category: 'accounting',
    links: [
      {
        text: 'Code des obligations - Art. 960a',
        url: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_960a'
      }
    ]
  },
  {
    id: 14,
    title: 'Réserves légales',
    definition: 'Part des bénéfices mise en réserve conformément aux exigences légales du Code des Obligations.',
    example: 'L\'entreprise a affecté 5% de son bénéfice net aux réserves légales, conformément à l\'article 671 CO.',
    category: 'accounting',
    links: [
      {
        text: 'Code des obligations - Art. 671',
        url: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_671'
      }
    ]
  },
  {
    id: 15,
    title: 'Passifs transitoires',
    definition: 'Charges concernant l\'exercice clos mais qui seront payées lors de l\'exercice suivant.',
    example: 'Les factures d\'électricité de décembre reçues en janvier sont comptabilisées en passifs transitoires.',
    category: 'accounting'
  },
  {
    id: 16,
    title: 'Raison individuelle',
    definition: 'Forme juridique d\'entreprise la plus simple en Suisse, où l\'entrepreneur exerce son activité en son propre nom et sous sa propre responsabilité.',
    example: 'Jean Dupont, architecte, a créé sa raison individuelle "Jean Dupont Architecture" avec un capital de départ de CHF 10\'000.',
    category: 'general',
    links: [
      {
        text: 'Portail PME - Raison individuelle',
        url: 'https://www.kmu.admin.ch/kmu/fr/home/savoir-pratique/creation-pme/differentes-formes-juridiques/raison-individuelle.html'
      }
    ]
  },
  {
    id: 17,
    title: 'Société anonyme (SA)',
    definition: 'Forme juridique d\'entreprise dont le capital est divisé en actions et où la responsabilité est limitée au capital social.',
    example: 'Une SA doit avoir un capital-actions minimum de CHF 100\'000, dont au moins CHF 50\'000 doivent être libérés.',
    category: 'general',
    links: [
      {
        text: 'Portail PME - Société anonyme',
        url: 'https://www.kmu.admin.ch/kmu/fr/home/savoir-pratique/creation-pme/differentes-formes-juridiques/societe-anonyme.html'
      }
    ]
  },
  {
    id: 18,
    title: 'Société à responsabilité limitée (Sàrl)',
    definition: 'Forme juridique d\'entreprise où le capital est divisé en parts sociales et où la responsabilité est limitée au capital social.',
    example: 'Une Sàrl doit avoir un capital social minimum de CHF 20\'000, entièrement libéré.',
    category: 'general',
    links: [
      {
        text: 'Portail PME - Société à responsabilité limitée',
        url: 'https://www.kmu.admin.ch/kmu/fr/home/savoir-pratique/creation-pme/differentes-formes-juridiques/societe-a-responsabilite-limitee.html'
      }
    ]
  },
  {
    id: 19,
    title: 'Annexe aux comptes annuels',
    definition: 'Document complémentaire aux états financiers qui fournit des informations supplémentaires nécessaires à la compréhension de la situation financière de l\'entreprise.',
    example: 'L\'annexe aux comptes annuels détaille les méthodes d\'évaluation des actifs et précise le montant des engagements conditionnels.',
    category: 'accounting',
    links: [
      {
        text: 'Code des obligations - Art. 959c',
        url: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_959c'
      }
    ]
  },
  {
    id: 20,
    title: 'Bouclements intermédiaires',
    definition: 'États financiers préparés pour une période inférieure à un exercice comptable complet.',
    example: 'La société établit des bouclements intermédiaires trimestriels pour suivre l\'évolution de ses activités en cours d\'année.',
    category: 'accounting'
  },
  {
    id: 21,
    title: 'Réviseur',
    definition: 'Personne ou entité chargée de contrôler la conformité des comptes annuels aux dispositions légales et statutaires.',
    example: 'Le réviseur a certifié sans réserve les comptes annuels après avoir effectué un contrôle ordinaire.',
    category: 'general',
    links: [
      {
        text: 'Autorité fédérale de surveillance en matière de révision',
        url: 'https://www.rab-asr.ch/fr/'
      }
    ]
  },
  {
    id: 22,
    title: 'Contrôle ordinaire',
    definition: 'Type de révision approfondi obligatoire pour les grandes entreprises et les sociétés cotées en bourse en Suisse.',
    example: 'La SA ayant dépassé deux des trois seuils (total du bilan de CHF 20 millions, chiffre d\'affaires de CHF 40 millions, 250 employés) est soumise au contrôle ordinaire.',
    category: 'general',
    links: [
      {
        text: 'Code des obligations - Art. 727',
        url: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_727'
      }
    ]
  },
  {
    id: 23,
    title: 'Contrôle restreint',
    definition: 'Type de révision moins approfondi que le contrôle ordinaire, applicable à la plupart des PME en Suisse.',
    example: 'La Sàrl avec 15 employés et un chiffre d\'affaires de CHF 8 millions est soumise au contrôle restreint pour ses comptes annuels.',
    category: 'general',
    links: [
      {
        text: 'Code des obligations - Art. 727a',
        url: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_727a'
      }
    ]
  },
  {
    id: 24,
    title: 'Opting-out',
    definition: 'Possibilité pour une entreprise de renoncer au contrôle restreint de ses comptes sous certaines conditions.',
    example: 'La micro-entreprise comptant 3 employés a procédé à un opting-out avec l\'accord unanime de ses actionnaires.',
    category: 'general'
  },
  {
    id: 25,
    title: 'ICC',
    definition: 'Impôt sur le capital et complémentaire sur les bénéfices, prélevé par les cantons.',
    example: 'La société a payé CHF 5\'000 d\'ICC au canton de Genève sur la base de son bénéfice net et de son capital propre.',
    category: 'fiscal'
  },
  {
    id: 26,
    title: 'IFD',
    definition: 'Impôt fédéral direct, prélevé par la Confédération suisse sur le revenu des personnes physiques et le bénéfice des personnes morales.',
    example: 'Le taux d\'IFD appliqué au bénéfice net de la société est de 8.5%, ce qui représente une charge fiscale de CHF 17\'000.',
    category: 'fiscal',
    links: [
      {
        text: 'Administration fédérale des contributions - IFD',
        url: 'https://www.estv.admin.ch/estv/fr/home/direkte-bundessteuer/direkte-bundessteuer.html'
      }
    ]
  },
  {
    id: 27,
    title: 'Swiss GAAP RPC',
    definition: 'Normes comptables suisses visant à présenter les comptes de manière fidèle à la réalité économique de l\'entreprise.',
    example: 'En appliquant les Swiss GAAP RPC, l\'entreprise a dû réévaluer ses immobilisations à leur juste valeur.',
    category: 'accounting',
    links: [
      {
        text: 'Site officiel Swiss GAAP RPC',
        url: 'https://www.fer.ch/fr/'
      }
    ]
  },
  {
    id: 28,
    title: 'Actifs de régularisation',
    definition: 'Produits acquis pendant l\'exercice mais qui ne seront encaissés que lors de l\'exercice suivant, ainsi que les charges payées d\'avance.',
    example: 'Les intérêts courus non échus sur les placements sont comptabilisés comme actifs de régularisation à la clôture.',
    category: 'accounting'
  },
  {
    id: 29,
    title: 'Passifs de régularisation',
    definition: 'Charges engagées pendant l\'exercice mais qui ne seront payées que lors de l\'exercice suivant, ainsi que les produits encaissés d\'avance.',
    example: 'Les commissions dues aux agents commerciaux pour le dernier trimestre sont inscrites en passifs de régularisation.',
    category: 'accounting'
  },
  {
    id: 30,
    title: 'Décompte TVA',
    definition: 'Document périodique transmis à l\'Administration fédérale des contributions qui permet de déterminer le montant de TVA à verser ou à récupérer.',
    example: 'Le décompte TVA trimestriel montre une TVA à payer de CHF 22\'500 après déduction de l\'impôt préalable.',
    category: 'fiscal',
    links: [
      {
        text: 'AFC - Décompte TVA',
        url: 'https://www.estv.admin.ch/estv/fr/home/mehrwertsteuer/dienstleistungen/formulare-online/anmeldung-mwst.html'
      }
    ]
  }
];
