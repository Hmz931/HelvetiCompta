
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
              viewBox="0 0 800 600" 
              className="w-full h-full" 
              style={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))' }}
            >
              {/* Canton outlines - this is a simplified representation */}
              {/* You would replace these paths with actual SVG paths for Swiss cantons */}
              <g>
                {Object.entries(cantons).map(([id, canton]) => {
                  // These are placeholder coordinates - in a real implementation you'd use actual SVG paths
                  // This is just to demonstrate the concept
                  const randomX = Math.floor(Math.random() * 700) + 50;
                  const randomY = Math.floor(Math.random() * 500) + 50;
                  const randomSize = Math.floor(Math.random() * 20) + 30;
                  
                  return (
                    <g key={id}>
                      <circle
                        cx={randomX}
                        cy={randomY}
                        r={randomSize}
                        fill={selectedCanton?.id === id ? '#0056b3' : hoveredCanton === id ? '#4285F4' : '#90cdf4'}
                        stroke="#ffffff"
                        strokeWidth="2"
                        onClick={() => handleCantonClick(id)}
                        onMouseEnter={() => handleCantonHover(id)}
                        onMouseLeave={() => handleCantonHover(null)}
                        style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                      />
                      <text
                        x={randomX}
                        y={randomY}
                        textAnchor="middle"
                        dy=".3em"
                        fontSize="12"
                        fontWeight="bold"
                        fill="#ffffff"
                        pointerEvents="none"
                      >
                        {canton.abbreviation}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>
            
            <div className="mt-4 text-center text-sm text-swiss-text-secondary">
              Note: Ceci est une représentation simplifiée à des fins de démonstration. Une carte SVG précise serait utilisée en production.
            </div>
          </div>
        </div>
        
        <div className="lg:w-2/5 flex flex-col">
          <div className="bg-gray-50 rounded-xl p-6 flex-grow">
            {selectedCanton ? (
              <div>
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
                  <svg className="w-10 h-10 text-swiss-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                  </svg>
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
