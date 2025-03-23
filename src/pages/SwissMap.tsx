
import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import SwissMapComponent from '../components/map/SwissMap';
import { Map, Info, BookOpen, CreditCard, Building2 } from 'lucide-react';

const SwissMap = () => {
  return (
    <div className="animate-fade-in">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mb-6">Carte Interactive de la Suisse</h1>
      
      <div className="glass rounded-xl p-6 shadow-card mb-10">
        <div className="flex items-start">
          <div className="mr-4 bg-swiss-blue/10 p-2 rounded-md text-swiss-blue mt-1">
            <Map size={24} />
          </div>
          <div>
            <p className="text-lg mb-2">
              Explorez les spécificités cantonales en matière de comptabilité et fiscalité
            </p>
            <p className="text-swiss-text-secondary">
              Cette carte interactive vous permet de découvrir les particularités comptables et fiscales 
              des différents cantons suisses. Cliquez sur un canton pour afficher ses informations.
            </p>
          </div>
        </div>
      </div>
      
      <SwissMapComponent />
      
      <section className="mb-10 mt-10">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Info size={24} className="mr-3 text-swiss-blue" />
          Particularités cantonales
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass rounded-xl p-6 shadow-card">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-swiss-blue/10 p-2 mr-3">
                <CreditCard size={20} className="text-swiss-blue" />
              </div>
              <h3 className="text-xl font-semibold">Fiscalité</h3>
            </div>
            <p className="text-swiss-text-secondary mb-4">
              La Suisse est caractérisée par son système fiscal fédéraliste où chaque canton dispose 
              d'une large autonomie pour fixer ses propres taux d'imposition.
            </p>
            <ul className="space-y-2 text-swiss-text-secondary">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-swiss-blue text-white rounded-full w-5 h-5 mr-3 mt-0.5 text-xs">•</span>
                <span>Les taux d'imposition des bénéfices des entreprises varient significativement entre les cantons</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-swiss-blue text-white rounded-full w-5 h-5 mr-3 mt-0.5 text-xs">•</span>
                <span>Certains cantons offrent des statuts fiscaux privilégiés pour certains types d'entreprises</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-swiss-blue text-white rounded-full w-5 h-5 mr-3 mt-0.5 text-xs">•</span>
                <span>Les délais de dépôt des déclarations fiscales peuvent varier d'un canton à l'autre</span>
              </li>
            </ul>
          </div>
          
          <div className="glass rounded-xl p-6 shadow-card">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-swiss-blue/10 p-2 mr-3">
                <BookOpen size={20} className="text-swiss-blue" />
              </div>
              <h3 className="text-xl font-semibold">Réglementations</h3>
            </div>
            <p className="text-swiss-text-secondary mb-4">
              Bien que le droit comptable suisse soit largement unifié au niveau fédéral, certaines spécificités 
              cantonales peuvent exister, notamment en matière de:
            </p>
            <ul className="space-y-2 text-swiss-text-secondary">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-swiss-blue text-white rounded-full w-5 h-5 mr-3 mt-0.5 text-xs">•</span>
                <span>Procédures administratives liées au Registre du Commerce</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-swiss-blue text-white rounded-full w-5 h-5 mr-3 mt-0.5 text-xs">•</span>
                <span>Obligations de révision et critères d'exemption</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-swiss-blue text-white rounded-full w-5 h-5 mr-3 mt-0.5 text-xs">•</span>
                <span>Impôts spécifiques cantonaux et communaux</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Building2 size={24} className="mr-3 text-swiss-blue" />
          Ressources administratives par canton
        </h2>
        
        <div className="glass rounded-xl p-6 shadow-card">
          <p className="text-swiss-text-secondary mb-6">
            Retrouvez ci-dessous les liens vers les administrations fiscales cantonales et autres ressources utiles par canton.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <a 
              href="https://www.ge.ch/impots" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 border border-gray-200 rounded hover:border-swiss-blue/50 hover:bg-swiss-blue/5 transition-colors flex items-center"
            >
              <span className="font-semibold min-w-20">Genève</span>
              <span className="text-swiss-text-secondary">Administration fiscale</span>
            </a>
            
            <a 
              href="https://www.vd.ch/themes/etat-droit-finances/impots/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 border border-gray-200 rounded hover:border-swiss-blue/50 hover:bg-swiss-blue/5 transition-colors flex items-center"
            >
              <span className="font-semibold min-w-20">Vaud</span>
              <span className="text-swiss-text-secondary">Administration fiscale</span>
            </a>
            
            <a 
              href="https://www.fr.ch/dfin/scc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 border border-gray-200 rounded hover:border-swiss-blue/50 hover:bg-swiss-blue/5 transition-colors flex items-center"
            >
              <span className="font-semibold min-w-20">Fribourg</span>
              <span className="text-swiss-text-secondary">Administration fiscale</span>
            </a>
            
            <a 
              href="https://www.vs.ch/web/scc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 border border-gray-200 rounded hover:border-swiss-blue/50 hover:bg-swiss-blue/5 transition-colors flex items-center"
            >
              <span className="font-semibold min-w-20">Valais</span>
              <span className="text-swiss-text-secondary">Administration fiscale</span>
            </a>
            
            <a 
              href="https://www.ne.ch/autorites/DFS/SCCO/Pages/accueil.aspx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 border border-gray-200 rounded hover:border-swiss-blue/50 hover:bg-swiss-blue/5 transition-colors flex items-center"
            >
              <span className="font-semibold min-w-20">Neuchâtel</span>
              <span className="text-swiss-text-secondary">Administration fiscale</span>
            </a>
            
            <a 
              href="https://www.jura.ch/DFI/CTR.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 border border-gray-200 rounded hover:border-swiss-blue/50 hover:bg-swiss-blue/5 transition-colors flex items-center"
            >
              <span className="font-semibold min-w-20">Jura</span>
              <span className="text-swiss-text-secondary">Administration fiscale</span>
            </a>
            
            <a 
              href="https://www.be.ch/oic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 border border-gray-200 rounded hover:border-swiss-blue/50 hover:bg-swiss-blue/5 transition-colors flex items-center"
            >
              <span className="font-semibold min-w-20">Berne</span>
              <span className="text-swiss-text-secondary">Administration fiscale</span>
            </a>
            
            <a 
              href="https://www.zh.ch/de/finanzdirektion/steueramt.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 border border-gray-200 rounded hover:border-swiss-blue/50 hover:bg-swiss-blue/5 transition-colors flex items-center"
            >
              <span className="font-semibold min-w-20">Zurich</span>
              <span className="text-swiss-text-secondary">Administration fiscale</span>
            </a>
            
            <a 
              href="https://www.steuern.lu.ch/index" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 border border-gray-200 rounded hover:border-swiss-blue/50 hover:bg-swiss-blue/5 transition-colors flex items-center"
            >
              <span className="font-semibold min-w-20">Lucerne</span>
              <span className="text-swiss-text-secondary">Administration fiscale</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SwissMap;
