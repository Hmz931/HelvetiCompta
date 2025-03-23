
import Highcharts from 'highcharts';
import { cantons } from './cantonData';

// Helper function to get map data from canton data
export const getMapData = () => {
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

// Simple placeholder for Switzerland map topology
export const swissTopoJSON = {
  "type": "Topology",
  "objects": {
    "countries": {
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Polygon",
          "properties": { "name": "Switzerland", "id": "CH" },
          "arcs": [[0]]
        }
      ]
    }
  },
  "arcs": [[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]],
  "transform": {
    "scale": [1, 1],
    "translate": [0, 0]
  }
};

// Create chart options
export const createChartOptions = (handleCantonSelect: (e: Highcharts.PointClickEventObject) => void): Highcharts.Options => {
  return {
    chart: {
      height: 500,
      map: 'countries/ch/ch-all',
      backgroundColor: 'transparent',
      style: {
        fontFamily: 'Inter, sans-serif'
      },
      events: {
        load: function() {
          // Map is loaded
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
      data: getMapData(),
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
};
