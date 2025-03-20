
import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import SwissMap from '../components/map/SwissMap';
import { Map, Info } from 'lucide-react';

const SwissMapPage = () => {
  return (
    <div className="animate-fade-in">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mb-6">Carte Interactive de la Suisse</h1>
      
      <div className="glass rounded-xl p-6 shadow-card mb-10">
        <div className="flex items-start">
          <div className="mr-4 bg-swiss-blue/10 p-2 rounded-md text-swiss-blue mt-1">
            <Info size={24} />
          </div>
          <div>
            <p className="text-lg mb-2">
              Explorez les différents cantons suisses et découvrez leurs particularités fiscales et administratives.
            </p>
            <p className="text-swiss-text-secondary">
              La Suisse est composée de 26 cantons, chacun avec ses propres lois fiscales et règlements. Cette carte interactive vous permet de visualiser rapidement les informations pertinentes pour chaque canton.
            </p>
          </div>
        </div>
      </div>
      
      <SwissMap />
      
      <div className="mt-12 mb-10">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Map size={24} className="mr-3 text-swiss-blue" />
          En savoir plus sur le système fiscal suisse
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass rounded-xl p-6 shadow-card">
            <h3 className="text-xl font-semibold mb-4">Fédéralisme fiscal</h3>
            <p className="text-swiss-text-secondary mb-4">
              Le système fiscal suisse est caractérisé par son fédéralisme, ce qui signifie que la Confédération, les cantons et les communes ont chacun le droit de prélever des impôts.
            </p>
            <p className="text-swiss-text-secondary">
              Cette structure à trois niveaux crée une diversité considérable dans les taux d'imposition selon les cantons et les communes, ce qui peut influencer les choix d'implantation des entreprises et des particuliers.
            </p>
          </div>
          
          <div className="glass rounded-xl p-6 shadow-card">
            <h3 className="text-xl font-semibold mb-4">Concurrence fiscale</h3>
            <p className="text-swiss-text-secondary mb-4">
              La concurrence fiscale entre cantons est une caractéristique importante du système suisse. Les cantons peuvent définir leurs propres taux d'imposition pour attirer les entreprises et les contribuables fortunés.
            </p>
            <p className="text-swiss-text-secondary">
              Cette concurrence a conduit certains cantons à proposer des taux d'imposition très attractifs, notamment Zoug, Schwyz et Nidwald, qui figurent parmi les plus avantageux de Suisse.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-swiss-muted rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold mb-3">Ressources complémentaires</h3>
        <ul className="space-y-2">
          <li>
            <a 
              href="https://www.efd.admin.ch/efd/fr/home/impots/steuersystem-schweiz.html" 
              className="text-swiss-blue hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowRight size={16} className="mr-2" />
              Système fiscal suisse (Administration fédérale)
            </a>
          </li>
          <li>
            <a 
              href="https://www.estv.admin.ch/estv/fr/home.html" 
              className="text-swiss-blue hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowRight size={16} className="mr-2" />
              Administration fédérale des contributions
            </a>
          </li>
          <li>
            <a 
              href="/ressources/administrations" 
              className="text-swiss-blue hover:underline flex items-center"
            >
              <ArrowRight size={16} className="mr-2" />
              Liste des administrations fiscales cantonales
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Add missing ArrowRight component
const ArrowRight = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default SwissMapPage;
