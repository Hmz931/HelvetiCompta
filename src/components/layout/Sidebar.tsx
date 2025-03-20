import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, FileText, BarChart, Calculator, FileQuestion, Files, FileUp } from 'lucide-react';

function Sidebar() {
  const location = useLocation();
  const path = location.pathname;
  
  const renderMenu = () => {
    if (path.includes('/formation')) {
      return (
        <>
          <h3 className="text-lg font-semibold mb-3">Formation Comptable</h3>
          <ul className="space-y-1">
            <li><Link to="/formation/overview" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"><Book size={16} /> Vue d'ensemble</Link></li>
            <li><Link to="/formation/financial" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"><Calculator size={16} /> Comptabilité Financière</Link></li>
            <li><Link to="/formation/salary" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"><BarChart size={16} /> Gestion des Salaires</Link></li>
            <li><Link to="/formation/analytics" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"><BarChart size={16} /> Comptabilité Analytique</Link></li>
            <li><Link to="/formation/tax" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"><FileQuestion size={16} /> TVA et Fiscalité</Link></li>
            <li><Link to="/formation/closing" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"><Files size={16} /> Clôtures</Link></li>
            <li><Link to="/formation/exercises" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"><FileText size={16} /> Exercices Pratiques</Link></li>
          </ul>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Link to="/analyse-texte" className="flex items-center gap-2 p-2 text-swiss-blue font-medium rounded-md hover:bg-blue-50 transition-colors">
              <FileUp size={16} /> Analyser du texte
            </Link>
          </div>
        </>
      );
    } else if (path.includes('/abacus')) {
      return (
        <>
          <h3 className="text-lg font-semibold mb-3">Documentation Abacus</h3>
          <ul className="space-y-1">
            <li><Link to="/abacus/general" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"><FileText size={16} /> Généralités</Link></li>
            <li><Link to="/abacus/modules" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"><FileText size={16} /> Modules</Link></li>
            <li><Link to="/abacus/tips" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"><FileText size={16} /> Astuces</Link></li>
          </ul>
        </>
      );
    } else if (path.includes('/yooz')) {
      return (
        <>
          <h3 className="text-lg font-semibold mb-3">Documentation Yooz</h3>
          <ul className="space-y-1">
            <li><Link to="/yooz/introduction" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"><FileText size={16} /> Introduction</Link></li>
          </ul>
        </>
      );
    } else if (path.includes('/templates')) {
      return (
        <>
          <h3 className="text-lg font-semibold mb-3">Templates</h3>
          <ul className="space-y-1">
            <li><Link to="/templates/invoice" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"><FileText size={16} /> Factures</Link></li>
          </ul>
        </>
      );
    } else if (path.includes('/analyse-texte')) {
      return (
        <>
          <h3 className="text-lg font-semibold mb-3">Outils d'analyse</h3>
          <ul className="space-y-1">
            <li><Link to="/analyse-texte" className="flex items-center gap-2 p-2 bg-gray-100 rounded-md"><FileUp size={16} /> Analyser du texte</Link></li>
          </ul>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Link to="/formation" className="flex items-center gap-2 p-2 text-swiss-blue font-medium rounded-md hover:bg-blue-50 transition-colors">
              <Book size={16} /> Retour à la formation
            </Link>
          </div>
        </>
      );
    } else {
      return (
        <>
          <h3 className="text-lg font-semibold mb-3">Ressources</h3>
          <ul className="space-y-1">
            <li><Link to="/formation" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"><Book size={16} /> Formation Comptable</Link></li>
            <li><Link to="/analyse-texte" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"><FileUp size={16} /> Analyser du texte</Link></li>
            <li><Link to="/glossaire" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"><FileQuestion size={16} /> Glossaire</Link></li>
          </ul>
        </>
      );
    }
  };
  
  if (path === '/') {
    return null;
  }
  
  return (
    <div className="w-64 flex-shrink-0 mr-6 glass rounded-xl shadow-card p-4 sticky top-24">
      {renderMenu()}
    </div>
  );
}

export default Sidebar;
