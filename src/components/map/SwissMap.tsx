
import React, { useState } from 'react';
import { ArrowRight, MapPin, Info } from 'lucide-react';

interface Canton {
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

const cantons: Record<string, Canton> = {
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

const SwissMap = () => {
  const [selectedCanton, setSelectedCanton] = useState<Canton | null>(null);
  const [hoveredCanton, setHoveredCanton] = useState<string | null>(null);

  const handleCantonClick = (cantonId: string) => {
    setSelectedCanton(cantons[cantonId]);
  };

  const handleCantonHover = (cantonId: string | null) => {
    setHoveredCanton(cantonId);
  };

  // Fonction pour déterminer la couleur d'un canton
  const getCantonFill = (cantonId: string) => {
    if (selectedCanton?.id === cantonId) {
      return '#0056b3'; // Bleu foncé pour le canton sélectionné
    } else if (hoveredCanton === cantonId) {
      return '#4285F4'; // Bleu clair pour le canton survolé
    }

    // Couleurs par défaut pour chaque canton
    const cantonColors: Record<string, string> = {
      zh: '#e6f2ff', // Zurich - bleu très clair
      be: '#c2e0c2', // Berne - vert clair
      lu: '#ffe6b3', // Lucerne - jaune clair
      ur: '#ffcccc', // Uri - rouge clair
      sz: '#f2d9f2', // Schwytz - violet clair
      ow: '#d9f2e6', // Obwald - turquoise clair
      nw: '#d9e6f2', // Nidwald - bleu grisé
      gl: '#e6f2d9', // Glaris - vert-jaune clair
      zg: '#ffe6cc', // Zoug - orange clair
      fr: '#ffe6e6', // Fribourg - rose très clair
      so: '#f2f2d9', // Soleure - beige
      bs: '#ffccb3', // Bâle-Ville - saumon clair
      bl: '#f2d9e6', // Bâle-Campagne - rose pâle
      sh: '#d9d9f2', // Schaffhouse - bleu-violet clair
      ar: '#e6e6f2', // Appenzell Rhodes-Extérieures - gris bleuté
      ai: '#f2e6ff', // Appenzell Rhodes-Intérieures - violet très clair
      sg: '#ffe6d9', // Saint-Gall - pêche clair
      gr: '#f2e6d9', // Grisons - beige rosé
      ag: '#ffcccc', // Argovie - rouge clair
      tg: '#d9f2f2', // Thurgovie - bleu-vert clair
      ti: '#f2d9cc', // Tessin - taupe clair
      vd: '#ffffb3', // Vaud - jaune pâle
      vs: '#d9e6ff', // Valais - bleu ciel clair
      ne: '#ffccb3', // Neuchâtel - saumon clair
      ge: '#f2d9d9', // Genève - rose grisé
      ju: '#ffe6cc'  // Jura - orange clair
    };

    return cantonColors[cantonId] || '#e8e8e8'; // Couleur par défaut gris très clair
  };

  return (
    <div className="glass rounded-xl p-6 shadow-card overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          <h3 className="text-xl font-semibold mb-4">Carte des Cantons Suisses</h3>
          <p className="text-swiss-text-secondary mb-6">
            Explorez la carte interactive des cantons suisses. Cliquez sur un canton pour afficher ses informations fiscales et administratives.
          </p>
          
          <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
            <svg 
              viewBox="0 0 1200 800" 
              className="w-full h-full" 
              style={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))' }}
            >
              {/* Carte de la Suisse avec tous les cantons */}
              <g className="cantons">
                {/* Zurich (ZH) */}
                <path
                  id="zh"
                  d="M800 170 L830 150 L870 170 L900 185 L920 200 L930 220 L920 240 L890 260 L860 250 L850 230 L830 220 L780 200 L770 180 Z"
                  fill={getCantonFill('zh')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('zh')}
                  onMouseEnter={() => handleCantonHover('zh')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="820" y="210" textAnchor="middle" fontSize="14" fontWeight="bold" pointerEvents="none">ZH</text>

                {/* Berne (BE) */}
                <path
                  id="be"
                  d="M430 380 L450 300 L480 280 L540 350 L560 390 L530 420 L510 450 L470 480 L420 520 L380 470 L410 430 Z"
                  fill={getCantonFill('be')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('be')}
                  onMouseEnter={() => handleCantonHover('be')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="470" y="400" textAnchor="middle" fontSize="14" fontWeight="bold" pointerEvents="none">BE</text>

                {/* Lucerne (LU) */}
                <path
                  id="lu"
                  d="M650 350 L680 320 L710 340 L700 380 L670 400 L630 390 L620 370 Z"
                  fill={getCantonFill('lu')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('lu')}
                  onMouseEnter={() => handleCantonHover('lu')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="670" y="365" textAnchor="middle" fontSize="14" fontWeight="bold" pointerEvents="none">LU</text>

                {/* Uri (UR) */}
                <path
                  id="ur"
                  d="M790 420 L810 390 L830 410 L820 450 L790 470 L770 460 L760 430 Z"
                  fill={getCantonFill('ur')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('ur')}
                  onMouseEnter={() => handleCantonHover('ur')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="790" y="430" textAnchor="middle" fontSize="14" fontWeight="bold" pointerEvents="none">UR</text>

                {/* Schwytz (SZ) */}
                <path
                  id="sz"
                  d="M850 360 L880 340 L900 360 L890 380 L860 390 L830 380 L840 360 Z"
                  fill={getCantonFill('sz')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('sz')}
                  onMouseEnter={() => handleCantonHover('sz')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="865" y="365" textAnchor="middle" fontSize="14" fontWeight="bold" pointerEvents="none">SZ</text>

                {/* Obwald (OW) */}
                <path
                  id="ow"
                  d="M720 420 L750 400 L770 420 L760 440 L730 450 L710 440 Z"
                  fill={getCantonFill('ow')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('ow')}
                  onMouseEnter={() => handleCantonHover('ow')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="740" y="425" textAnchor="middle" fontSize="14" fontWeight="bold" pointerEvents="none">OW</text>

                {/* Nidwald (NW) */}
                <path
                  id="nw"
                  d="M765 425 L785 405 L800 420 L790 440 L770 450 Z"
                  fill={getCantonFill('nw')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('nw')}
                  onMouseEnter={() => handleCantonHover('nw')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="780" y="430" textAnchor="middle" fontSize="12" fontWeight="bold" pointerEvents="none">NW</text>

                {/* Glaris (GL) */}
                <path
                  id="gl"
                  d="M960 380 L980 360 L995 380 L985 400 L960 410 L950 390 Z"
                  fill={getCantonFill('gl')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('gl')}
                  onMouseEnter={() => handleCantonHover('gl')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="970" y="385" textAnchor="middle" fontSize="12" fontWeight="bold" pointerEvents="none">GL</text>

                {/* Zoug (ZG) */}
                <path
                  id="zg"
                  d="M800 330 L820 310 L840 325 L830 345 L810 350 Z"
                  fill={getCantonFill('zg')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('zg')}
                  onMouseEnter={() => handleCantonHover('zg')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="820" y="330" textAnchor="middle" fontSize="12" fontWeight="bold" pointerEvents="none">ZG</text>

                {/* Fribourg (FR) */}
                <path
                  id="fr"
                  d="M390 470 L420 440 L450 450 L470 480 L450 510 L420 520 L400 500 Z"
                  fill={getCantonFill('fr')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('fr')}
                  onMouseEnter={() => handleCantonHover('fr')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="430" y="480" textAnchor="middle" fontSize="14" fontWeight="bold" pointerEvents="none">FR</text>

                {/* Soleure (SO) */}
                <path
                  id="so"
                  d="M540 230 L570 210 L590 225 L580 245 L550 255 Z"
                  fill={getCantonFill('so')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('so')}
                  onMouseEnter={() => handleCantonHover('so')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="565" y="235" textAnchor="middle" fontSize="12" fontWeight="bold" pointerEvents="none">SO</text>

                {/* Bâle-Ville (BS) */}
                <path
                  id="bs"
                  d="M540 140 L555 130 L570 140 L565 150 L545 155 Z"
                  fill={getCantonFill('bs')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('bs')}
                  onMouseEnter={() => handleCantonHover('bs')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="555" y="145" textAnchor="middle" fontSize="10" fontWeight="bold" pointerEvents="none">BS</text>

                {/* Bâle-Campagne (BL) */}
                <path
                  id="bl"
                  d="M550 155 L570 140 L590 150 L600 170 L590 185 L570 180 L555 165 Z"
                  fill={getCantonFill('bl')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('bl')}
                  onMouseEnter={() => handleCantonHover('bl')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="575" y="165" textAnchor="middle" fontSize="12" fontWeight="bold" pointerEvents="none">BL</text>

                {/* Schaffhouse (SH) */}
                <path
                  id="sh"
                  d="M760 100 L790 80 L810 95 L800 115 L770 120 Z"
                  fill={getCantonFill('sh')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('sh')}
                  onMouseEnter={() => handleCantonHover('sh')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="785" y="100" textAnchor="middle" fontSize="12" fontWeight="bold" pointerEvents="none">SH</text>

                {/* Appenzell Rhodes-Extérieures (AR) */}
                <path
                  id="ar"
                  d="M1000 230 L1020 210 L1040 225 L1030 245 L1010 250 Z"
                  fill={getCantonFill('ar')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('ar')}
                  onMouseEnter={() => handleCantonHover('ar')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="1020" y="230" textAnchor="middle" fontSize="12" fontWeight="bold" pointerEvents="none">AR</text>

                {/* Appenzell Rhodes-Intérieures (AI) */}
                <path
                  id="ai"
                  d="M1035 235 L1050 225 L1060 235 L1055 250 L1040 255 Z"
                  fill={getCantonFill('ai')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('ai')}
                  onMouseEnter={() => handleCantonHover('ai')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="1045" y="240" textAnchor="middle" fontSize="10" fontWeight="bold" pointerEvents="none">AI</text>

                {/* Saint-Gall (SG) */}
                <path
                  id="sg"
                  d="M950 200 L980 180 L1020 190 L1040 220 L1030 250 L990 260 L965 240 Z"
                  fill={getCantonFill('sg')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('sg')}
                  onMouseEnter={() => handleCantonHover('sg')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="995" y="220" textAnchor="middle" fontSize="14" fontWeight="bold" pointerEvents="none">SG</text>

                {/* Grisons (GR) */}
                <path
                  id="gr"
                  d="M1000 380 L1040 360 L1100 380 L1120 420 L1090 470 L1040 480 L980 450 L970 410 Z"
                  fill={getCantonFill('gr')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('gr')}
                  onMouseEnter={() => handleCantonHover('gr')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="1050" y="420" textAnchor="middle" fontSize="14" fontWeight="bold" pointerEvents="none">GR</text>

                {/* Argovie (AG) */}
                <path
                  id="ag"
                  d="M670 200 L700 180 L730 200 L720 230 L690 240 L670 230 Z"
                  fill={getCantonFill('ag')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('ag')}
                  onMouseEnter={() => handleCantonHover('ag')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="700" y="210" textAnchor="middle" fontSize="14" fontWeight="bold" pointerEvents="none">AG</text>

                {/* Thurgovie (TG) */}
                <path
                  id="tg"
                  d="M920 140 L950 120 L980 130 L1000 155 L980 180 L930 170 Z"
                  fill={getCantonFill('tg')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('tg')}
                  onMouseEnter={() => handleCantonHover('tg')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="960" y="150" textAnchor="middle" fontSize="14" fontWeight="bold" pointerEvents="none">TG</text>

                {/* Tessin (TI) */}
                <path
                  id="ti"
                  d="M850 550 L880 530 L920 550 L910 590 L870 610 L840 600 L830 570 Z"
                  fill={getCantonFill('ti')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('ti')}
                  onMouseEnter={() => handleCantonHover('ti')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="875" y="570" textAnchor="middle" fontSize="14" fontWeight="bold" pointerEvents="none">TI</text>

                {/* Vaud (VD) */}
                <path
                  id="vd"
                  d="M270 480 L320 450 L380 470 L350 520 L300 550 L260 540 L250 510 Z"
                  fill={getCantonFill('vd')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('vd')}
                  onMouseEnter={() => handleCantonHover('vd')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="320" y="500" textAnchor="middle" fontSize="14" fontWeight="bold" pointerEvents="none">VD</text>

                {/* Valais (VS) */}
                <path
                  id="vs"
                  d="M450 550 L500 520 L570 540 L590 580 L550 620 L480 630 L430 610 L420 570 Z"
                  fill={getCantonFill('vs')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('vs')}
                  onMouseEnter={() => handleCantonHover('vs')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="510" y="580" textAnchor="middle" fontSize="14" fontWeight="bold" pointerEvents="none">VS</text>

                {/* Neuchâtel (NE) */}
                <path
                  id="ne"
                  d="M300 380 L330 360 L360 380 L350 400 L320 410 L300 400 Z"
                  fill={getCantonFill('ne')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('ne')}
                  onMouseEnter={() => handleCantonHover('ne')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="330" y="385" textAnchor="middle" fontSize="14" fontWeight="bold" pointerEvents="none">NE</text>

                {/* Genève (GE) */}
                <path
                  id="ge"
                  d="M140 680 L160 660 L190 670 L195 690 L175 700 L150 695 Z"
                  fill={getCantonFill('ge')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('ge')}
                  onMouseEnter={() => handleCantonHover('ge')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="170" y="680" textAnchor="middle" fontSize="14" fontWeight="bold" pointerEvents="none">GE</text>

                {/* Jura (JU) */}
                <path
                  id="ju"
                  d="M350 250 L380 230 L410 250 L400 270 L370 280 L350 270 Z"
                  fill={getCantonFill('ju')}
                  stroke="#333"
                  strokeWidth="2"
                  onClick={() => handleCantonClick('ju')}
                  onMouseEnter={() => handleCantonHover('ju')}
                  onMouseLeave={() => handleCantonHover(null)}
                  style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
                />
                <text x="380" y="255" textAnchor="middle" fontSize="14" fontWeight="bold" pointerEvents="none">JU</text>
              </g>

              {/* Ajout des lacs principaux pour plus de réalisme */}
              <path
                d="M350 370 L380 350 L410 370 L400 390 L370 400 L350 390 Z"
                fill="#a6cff7"
                stroke="#666"
                strokeWidth="1"
                pointerEvents="none"
              />
              <text x="375" y="375" textAnchor="middle" fontSize="10" fill="#333" pointerEvents="none">Lac de Neuchâtel</text>

              <path
                d="M280 520 L300 510 L320 520 L310 535 L290 540 Z"
                fill="#a6cff7"
                stroke="#666"
                strokeWidth="1"
                pointerEvents="none"
              />
              <text x="300" y="525" textAnchor="middle" fontSize="8" fill="#333" pointerEvents="none">Lac Léman</text>

              <path
                d="M680 350 L700 340 L720 350 L710 360 L690 365 Z"
                fill="#a6cff7"
                stroke="#666"
                strokeWidth="1"
                pointerEvents="none"
              />
              <text x="700" y="353" textAnchor="middle" fontSize="8" fill="#333" pointerEvents="none">Lac des 4 Cantons</text>
            </svg>
            
            <div className="mt-4 text-sm text-swiss-text-secondary text-center">
              <Info size={14} className="inline mr-1" /> Cliquez sur un canton pour afficher ses informations fiscales et comptables.
            </div>
          </div>
        </div>
        
        <div className="lg:w-2/5 flex flex-col">
          <div className="bg-gray-50 rounded-xl p-6 flex-grow">
            {selectedCanton ? (
              <div id="canton-info">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-swiss-blue">{selectedCanton.name}</h3>
                  <div className="bg-swiss-blue text-white text-xs font-bold px-2 py-1 rounded">
                    {selectedCanton.abbreviation}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Capitale:</p>
                    <p className="text-swiss-text-secondary">{selectedCanton.capital}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Population:</p>
                      <p className="text-swiss-text-secondary">{selectedCanton.population}</p>
                    </div>
                    <div>
                      <p className="font-medium">Superficie:</p>
                      <p className="text-swiss-text-secondary">{selectedCanton.area}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-medium">Langues:</p>
                    <p className="text-swiss-text-secondary">{selectedCanton.languages.join(', ')}</p>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-200">
                    <p className="font-medium text-swiss-blue">Information fiscale:</p>
                    <p className="text-swiss-text-secondary">{selectedCanton.fiscalInfo}</p>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-200 flex justify-between items-center">
                    <span className="font-medium">Taux d'imposition:</span>
                    <span className="bg-swiss-muted px-3 py-1 rounded-full font-bold text-swiss-blue">
                      {selectedCanton.taxRate}
                    </span>
                  </div>
                  
                  <a 
                    href={selectedCanton.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center mt-2 text-swiss-blue hover:underline"
                  >
                    Visiter le site officiel <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="bg-swiss-blue/10 rounded-full p-4 mb-4">
                  <MapPin className="w-10 h-10 text-swiss-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Sélectionnez un canton</h3>
                <p className="text-swiss-text-secondary">
                  Cliquez sur un canton sur la carte pour afficher ses informations détaillées et fiscales.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwissMap;

