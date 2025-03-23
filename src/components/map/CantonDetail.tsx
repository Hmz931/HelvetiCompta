
import React from 'react';
import { ArrowRight, Info, ExternalLink } from 'lucide-react';
import { Canton } from './cantonData';

interface CantonDetailProps {
  canton: Canton;
}

const CantonDetail: React.FC<CantonDetailProps> = ({ canton }) => {
  return (
    <div id="canton-info">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-swiss-blue">{canton.name}</h3>
        <div className="bg-swiss-blue text-white text-xs font-bold px-2 py-1 rounded">
          {canton.abbreviation}
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="font-medium">Capitale:</p>
          <p className="text-swiss-text-secondary">{canton.capital}</p>
          <p className="text-xs text-gray-500 mt-1">
            Source: Office fédéral de la statistique (OFS)
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-medium">Population:</p>
            <p className="text-swiss-text-secondary">{canton.population}</p>
            <p className="text-xs text-gray-500 mt-1">
              Source: OFS, 2022
            </p>
          </div>
          <div>
            <p className="font-medium">Superficie:</p>
            <p className="text-swiss-text-secondary">{canton.area}</p>
            <p className="text-xs text-gray-500 mt-1">
              Source: OFS, 2022
            </p>
          </div>
        </div>
        
        <div>
          <p className="font-medium">Langues:</p>
          <p className="text-swiss-text-secondary">{canton.languages.join(', ')}</p>
          <p className="text-xs text-gray-500 mt-1">
            Source: Office fédéral de la statistique
          </p>
        </div>
        
        <div className="pt-2 border-t border-gray-200">
          <p className="font-medium text-swiss-blue">Information fiscale:</p>
          <p className="text-swiss-text-secondary">{canton.fiscalInfo}</p>
          <p className="text-xs text-gray-500 mt-1">
            Source: Administration fédérale des contributions (AFC), 2023
          </p>
        </div>
        
        <div className="pt-2 border-t border-gray-200 flex justify-between items-center">
          <span className="font-medium">Taux d'imposition:</span>
          <span className="bg-swiss-muted px-3 py-1 rounded-full font-bold text-swiss-blue">
            {canton.taxRate}
          </span>
        </div>
        
        <a 
          href={canton.website} 
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
  );
};

export default CantonDetail;
