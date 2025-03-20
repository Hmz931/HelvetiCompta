
import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import ExcelConverter from '../components/abacus/ExcelConverter';
import { FileSpreadsheet, Check, Database, Info } from 'lucide-react';

const ExcelConverterPage = () => {
  return (
    <div className="animate-fade-in">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mb-6">Convertisseur Excel vers Abacus</h1>
      
      <div className="glass rounded-xl p-6 shadow-card mb-10">
        <div className="flex items-start">
          <div className="mr-4 bg-swiss-blue/10 p-2 rounded-md text-swiss-blue mt-1">
            <Info size={24} />
          </div>
          <div>
            <p className="text-lg mb-2">
              Convertissez facilement vos données Excel en un format compatible avec Abacus.
            </p>
            <p className="text-swiss-text-secondary">
              Notre outil de conversion transforme vos fichiers Excel en fichiers Excel prêts à être importés dans Abacus, 
              vous permettant de gagner du temps et d'éviter les erreurs de saisie manuelle.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="glass rounded-xl p-6 shadow-card">
          <div className="bg-blue-100 text-blue-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <FileSpreadsheet size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">1. Téléchargez votre fichier</h3>
          <p className="text-swiss-text-secondary">
            Importez votre fichier Excel contenant vos écritures comptables. Compatible avec les formats .xlsx et .xls.
          </p>
        </div>
        
        <div className="glass rounded-xl p-6 shadow-card">
          <div className="bg-blue-100 text-blue-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Database size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">2. Conversion automatique</h3>
          <p className="text-swiss-text-secondary">
            Notre outil analyse et convertit automatiquement vos données en format Excel compatible avec Abacus.
          </p>
        </div>
        
        <div className="glass rounded-xl p-6 shadow-card">
          <div className="bg-blue-100 text-blue-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Check size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">3. Importez dans Abacus</h3>
          <p className="text-swiss-text-secondary">
            Téléchargez le fichier Excel généré et importez-le directement dans Abacus pour finaliser le processus.
          </p>
        </div>
      </div>
      
      <ExcelConverter />
      
      <div className="mt-10 mb-8 bg-swiss-muted rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Conseils pour une conversion réussie</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center bg-swiss-blue text-white rounded-full w-5 h-5 mr-3 mt-0.5 text-xs">1</span>
            <span>Structurez votre fichier Excel avec des en-têtes clairs pour les comptes, montants, dates et libellés.</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center bg-swiss-blue text-white rounded-full w-5 h-5 mr-3 mt-0.5 text-xs">2</span>
            <span>Vérifiez que les numéros de compte correspondent au plan comptable configuré dans votre Abacus.</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center bg-swiss-blue text-white rounded-full w-5 h-5 mr-3 mt-0.5 text-xs">3</span>
            <span>Assurez-vous que le total des débits correspond au total des crédits pour chaque écriture.</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center bg-swiss-blue text-white rounded-full w-5 h-5 mr-3 mt-0.5 text-xs">4</span>
            <span>Utilisez le format de date JJ.MM-AAAA pour une meilleure compatibilité.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExcelConverterPage;
