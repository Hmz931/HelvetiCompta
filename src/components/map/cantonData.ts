
export interface Canton {
  id: string;
  name: string;
  abbreviation: string;
  capital: string;
  population: string;
  area: string;
  languages: string[];
  fiscalInfo: string;
  taxRate: string;
  website: string;
}

export const cantons: Record<string, Canton> = {
  zh: {
    id: 'zh',
    name: 'Zurich',
    abbreviation: 'ZH',
    capital: 'Zurich',
    population: '1 539 275',
    area: '1 729 km²',
    languages: ['Allemand'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 19.7%',
    taxRate: '19.7%',
    website: 'https://www.zh.ch'
  },
  be: {
    id: 'be',
    name: 'Berne',
    abbreviation: 'BE',
    capital: 'Berne',
    population: '1 039 474',
    area: '5 959 km²',
    languages: ['Allemand', 'Français'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 21.04%',
    taxRate: '21.04%',
    website: 'https://www.be.ch'
  },
  lu: {
    id: 'lu',
    name: 'Lucerne',
    abbreviation: 'LU',
    capital: 'Lucerne',
    population: '413 120',
    area: '1 493 km²',
    languages: ['Allemand'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 12.32%',
    taxRate: '12.32%',
    website: 'https://www.lu.ch'
  },
  ur: {
    id: 'ur',
    name: 'Uri',
    abbreviation: 'UR',
    capital: 'Altdorf',
    population: '36 703',
    area: '1 077 km²',
    languages: ['Allemand'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 14.92%',
    taxRate: '14.92%',
    website: 'https://www.ur.ch'
  },
  sz: {
    id: 'sz',
    name: 'Schwytz',
    abbreviation: 'SZ',
    capital: 'Schwytz',
    population: '160 480',
    area: '908 km²',
    languages: ['Allemand'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 15.19%',
    taxRate: '15.19%',
    website: 'https://www.sz.ch'
  },
  ow: {
    id: 'ow',
    name: 'Obwald',
    abbreviation: 'OW',
    capital: 'Sarnen',
    population: '38 108',
    area: '491 km²',
    languages: ['Allemand'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 12.74%',
    taxRate: '12.74%',
    website: 'https://www.ow.ch'
  },
  nw: {
    id: 'nw',
    name: 'Nidwald',
    abbreviation: 'NW',
    capital: 'Stans',
    population: '43 087',
    area: '276 km²',
    languages: ['Allemand'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 12.66%',
    taxRate: '12.66%',
    website: 'https://www.nw.ch'
  },
  gl: {
    id: 'gl',
    name: 'Glaris',
    abbreviation: 'GL',
    capital: 'Glaris',
    population: '40 590',
    area: '685 km²',
    languages: ['Allemand'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 15.45%',
    taxRate: '15.45%',
    website: 'https://www.gl.ch'
  },
  zg: {
    id: 'zg',
    name: 'Zoug',
    abbreviation: 'ZG',
    capital: 'Zoug',
    population: '127 642',
    area: '239 km²',
    languages: ['Allemand'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 11.91% (l\'un des plus bas de Suisse)',
    taxRate: '11.91%',
    website: 'https://www.zg.ch'
  },
  fr: {
    id: 'fr',
    name: 'Fribourg',
    abbreviation: 'FR',
    capital: 'Fribourg',
    population: '321 783',
    area: '1 671 km²',
    languages: ['Français', 'Allemand'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 19.86%',
    taxRate: '19.86%',
    website: 'https://www.fr.ch'
  },
  so: {
    id: 'so',
    name: 'Soleure',
    abbreviation: 'SO',
    capital: 'Soleure',
    population: '275 247',
    area: '791 km²',
    languages: ['Allemand'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 16.46%',
    taxRate: '16.46%',
    website: 'https://www.so.ch'
  },
  bs: {
    id: 'bs',
    name: 'Bâle-Ville',
    abbreviation: 'BS',
    capital: 'Bâle',
    population: '195 844',
    area: '37 km²',
    languages: ['Allemand'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 13.04%',
    taxRate: '13.04%',
    website: 'https://www.bs.ch'
  },
  bl: {
    id: 'bl',
    name: 'Bâle-Campagne',
    abbreviation: 'BL',
    capital: 'Liestal',
    population: '289 468',
    area: '518 km²',
    languages: ['Allemand'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 13.45%',
    taxRate: '13.45%',
    website: 'https://www.bl.ch'
  },
  sh: {
    id: 'sh',
    name: 'Schaffhouse',
    abbreviation: 'SH',
    capital: 'Schaffhouse',
    population: '82 348',
    area: '298 km²',
    languages: ['Allemand'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 16.5%',
    taxRate: '16.5%',
    website: 'https://www.sh.ch'
  },
  ar: {
    id: 'ar',
    name: 'Appenzell Rhodes-Extérieures',
    abbreviation: 'AR',
    capital: 'Herisau',
    population: '55 234',
    area: '243 km²',
    languages: ['Allemand'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 13.04%',
    taxRate: '13.04%',
    website: 'https://www.ar.ch'
  },
  ai: {
    id: 'ai',
    name: 'Appenzell Rhodes-Intérieures',
    abbreviation: 'AI',
    capital: 'Appenzell',
    population: '16 145',
    area: '173 km²',
    languages: ['Allemand'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 14.16%',
    taxRate: '14.16%',
    website: 'https://www.ai.ch'
  },
  sg: {
    id: 'sg',
    name: 'Saint-Gall',
    abbreviation: 'SG',
    capital: 'Saint-Gall',
    population: '510 734',
    area: '2 031 km²',
    languages: ['Allemand'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 14.5%',
    taxRate: '14.5%',
    website: 'https://www.sg.ch'
  },
  gr: {
    id: 'gr',
    name: 'Grisons',
    abbreviation: 'GR',
    capital: 'Coire',
    population: '199 021',
    area: '7 105 km²',
    languages: ['Allemand', 'Italien', 'Romanche'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 16.12%',
    taxRate: '16.12%',
    website: 'https://www.gr.ch'
  },
  ag: {
    id: 'ag',
    name: 'Argovie',
    abbreviation: 'AG',
    capital: 'Aarau',
    population: '685 424',
    area: '1 404 km²',
    languages: ['Allemand'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 16.98%',
    taxRate: '16.98%',
    website: 'https://www.ag.ch'
  },
  tg: {
    id: 'tg',
    name: 'Thurgovie',
    abbreviation: 'TG',
    capital: 'Frauenfeld',
    population: '279 547',
    area: '991 km²',
    languages: ['Allemand'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 16.43%',
    taxRate: '16.43%',
    website: 'https://www.tg.ch'
  },
  ti: {
    id: 'ti',
    name: 'Tessin',
    abbreviation: 'TI',
    capital: 'Bellinzone',
    population: '353 343',
    area: '2 812 km²',
    languages: ['Italien'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 19.16%',
    taxRate: '19.16%',
    website: 'https://www.ti.ch'
  },
  vd: {
    id: 'vd',
    name: 'Vaud',
    abbreviation: 'VD',
    capital: 'Lausanne',
    population: '805 098',
    area: '3 212 km²',
    languages: ['Français'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 13.87%',
    taxRate: '13.87%',
    website: 'https://www.vd.ch'
  },
  vs: {
    id: 'vs',
    name: 'Valais',
    abbreviation: 'VS',
    capital: 'Sion',
    population: '345 525',
    area: '5 224 km²',
    languages: ['Français', 'Allemand'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 18.01%',
    taxRate: '18.01%',
    website: 'https://www.vs.ch'
  },
  ne: {
    id: 'ne',
    name: 'Neuchâtel',
    abbreviation: 'NE',
    capital: 'Neuchâtel',
    population: '176 850',
    area: '802 km²',
    languages: ['Français'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 13.57%',
    taxRate: '13.57%',
    website: 'https://www.ne.ch'
  },
  ge: {
    id: 'ge',
    name: 'Genève',
    abbreviation: 'GE',
    capital: 'Genève',
    population: '499 480',
    area: '282 km²',
    languages: ['Français'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 13.99%',
    taxRate: '13.99%',
    website: 'https://www.ge.ch'
  },
  ju: {
    id: 'ju',
    name: 'Jura',
    abbreviation: 'JU',
    capital: 'Delémont',
    population: '73 584',
    area: '838 km²',
    languages: ['Français'],
    fiscalInfo: 'Taux d\'imposition cantonal et communal des personnes morales: environ 17.82%',
    taxRate: '17.82%',
    website: 'https://www.jura.ch'
  }
};
