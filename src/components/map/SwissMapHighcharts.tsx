
import React, { useState, useRef, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import 'highcharts/modules/map';
import { Info } from 'lucide-react';
import { Canton, cantons } from './cantonData';
import CantonDetail from './CantonDetail';
import CantonSelector from './CantonSelector';
import { createChartOptions, swissTopoJSON } from './HighchartsMapConfig';

const SwissMapHighcharts: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedCanton, setSelectedCanton] = useState<Canton | null>(null);
  const chartRef = useRef<HighchartsReact.RefObject>(null);

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

  useEffect(() => {
    if (chartRef.current && chartRef.current.chart) {
      Highcharts.maps['countries/ch/ch-all'] = swissTopoJSON;
      
      chartRef.current.chart.update({
        series: [{
          type: 'map',
          data: getMapData()
        }]
      });
      
      setMapLoaded(true);
    }
  }, [chartRef.current]);

  // Get map data function to ensure it's available in the component
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

  const chartOptions = createChartOptions(handleCantonSelect);

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
              <CantonDetail canton={selectedCanton} />
            ) : (
              <CantonSelector />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwissMapHighcharts;
