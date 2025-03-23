import React, { useState, useRef, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import mapModule from 'highcharts/modules/map';
import { MapPin, Info, ExternalLink, ArrowRight } from 'lucide-react';

// Initialize the map module
if (typeof Highcharts === 'object') {
  mapModule(Highcharts);
}

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

// Canton data
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

const SwissMapHighcharts: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedCanton, setSelectedCanton] = useState<Canton | null>(null);
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  const getMapData = () => {
    return Object.entries(cantons).map(([key, canton]) => {
      const taxRate = parseFloat(canton.taxRate.replace('%', ''));
      return {
        'hc-key': `ch-${key}`,
        value: taxRate,
        name: canton.name,
        id: key,
        abbreviation: canton.abbreviation
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://code.highcharts.com/mapdata/countries/ch/ch-all.topo.json'
        );
        const topology = await response.json();
        
        if (chartRef.current && chartRef.current.chart) {
          Highcharts.maps['countries/ch/ch-all'] = topology;
          chartRef.current.chart.update({
            series: [{
              type: 'map',
              data: getMapData(),
              mapData: topology
            }]
          });
          setMapLoaded(true);
        }
      } catch (error) {
        console.error('Error loading map data:', error);
      }
    };

    if (chartRef.current && chartRef.current.chart) {
      fetchData();
    }
  }, [chartRef.current]);

  const handleCantonSelect = (e: Highcharts.PointClickEventObject) => {
    if (e.point) {
      const point = e.point as any;
      if (point.id) {
        const cantonId = point.id.toString();
        setSelectedCanton(cantons[cantonId]);
        
        if (chartRef.current && chartRef.current.chart) {
          chartRef.current.chart.update({
            tooltip: {
              enabled: true
            }
          });
        }
      }
    }
  };

  const chartOptions: Highcharts.Options = {
    chart: {
      height: 500,
      map: 'countries/ch/ch-all',
      backgroundColor: 'transparent',
      style: {
        fontFamily: 'Inter, sans-serif'
      },
      events: {
        load: function() {
          setMapLoaded(true);
        }
      }
    },
    title: {
      text: undefined
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom',
        theme: {
          fill: 'white',
          'stroke-width': 1,
          stroke: '#0056b3',
          r: 4,
          states: {
            hover: {
              fill: '#e6f0ff'
            },
            select: {
              stroke: '#0056b3',
              fill: '#e6f0ff'
            }
          }
        }
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'bottom',
      title: {
        text: 'Taux d\'imposition (en %)'
      }
    },
    colorAxis: {
      min: 11,
      max: 22,
      minColor: '#e5fcff',
      maxColor: '#0056b3',
      labels: {
        format: '{value}%'
      }
    },
    tooltip: {
      useHTML: true,
      headerFormat: '',
      pointFormat: '<b>{point.name}</b><br>Taux d\'imposition: <b>{point.value}%</b><br>Cliquez pour plus de détails'
    },
    series: [{
      type: 'map',
      name: 'Taux d\'imposition',
      states: {
        hover: {
          color: '#4285F4',
          borderColor: '#333',
          borderWidth: 1
        },
        select: {
          color: '#0056b3',
          borderColor: '#333',
          borderWidth: 1
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.abbreviation}',
        style: {
          fontSize: '8px',
          fontWeight: 'bold',
          textOutline: '1px white'
        }
      },
      allAreas: false,
      data: [],
      point: {
        events: {
          click: handleCantonSelect
        }
      }
    } as Highcharts.SeriesMapOptions],
    credits: {
      enabled: false
    }
  };

  return (
    <div className="glass rounded-xl p-6 shadow-card overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          <h3 className="text-xl font-semibold mb-4">Carte des Cantons Suisses</h3>
          <p className="text-swiss-text-secondary mb-6">
            Explorez la carte interactive des cantons suisses. Cliquez sur un canton pour afficher ses informations fiscales et administratives.
          </p>
          
          <div className="relative w-full">
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75 rounded-md">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-swiss-blue mx-auto mb-2"></div>
                  <p className="text-swiss-text-secondary">Chargement de la carte...</p>
                </div>
              </div>
            )}
            
            <HighchartsReact
              highcharts={Highcharts}
              options={chartOptions}
              constructorType={'mapChart'}
              ref={chartRef}
            />
            
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
                    <p className="text-xs text-gray-500 mt-1">
                      Source: Office fédéral de la statistique (OFS)
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Population:</p>
                      <p className="text-swiss-text-secondary">{selectedCanton.population}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Source: OFS, 2022
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Superficie:</p>
                      <p className="text-swiss-text-secondary">{selectedCanton.area}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Source: OFS, 2022
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-medium">Langues:</p>
                    <p className="text-swiss-text-secondary">{selectedCanton.languages.join(', ')}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Source: Office fédéral de la statistique
                    </p>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-200">
                    <p className="font-medium text-swiss-blue">Information fiscale:</p>
                    <p className="text-swiss-text-secondary">{selectedCanton.fiscalInfo}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Source: Administration fédérale des contributions (AFC), 2023
                    </p>
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

                  <div className="pt-3 mt-3 border-t border-gray-200 text-xs text-swiss-text-secondary">
                    <p className="flex items-center">
                      <Info size={12} className="mr-1" /> 
                      Sources des données:
                    </p>
                    <ul className="mt-1 space-y-1">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-swiss-blue/60 mt-1.5 mr-1.5"></span>
                        <span>Démographie: Office fédéral de la statistique (OFS)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-swiss-blue/60 mt-1.5 mr-1.5"></span>
                        <span>Fiscalité: Administration fédérale des contributions (AFC)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-swiss-blue/60 mt-1.5 mr-1.5"></span>
                        <a 
                          href="https://www.estv.admin.ch" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-swiss-blue hover:underline inline-flex items-center"
                        >
                          Voir les références complètes
                          <ExternalLink size={10} className="ml-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
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

export default SwissMapHighcharts;
