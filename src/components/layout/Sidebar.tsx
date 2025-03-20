
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, FileText, BarChart, Calculator, FileQuestion, Files, List, Info, MapPin } from 'lucide-react';

function Sidebar() {
  const location = useLocation();
  const path = location.pathname;
  
  const renderMenu = () => {
    if (path.includes('/formation')) {
      return (
        <>
          <h3 className="text-lg font-semibold mb-3">Formation Comptable</h3>
          <ul className="space-y-1">
            <li><Link to="/formation/overview" className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors ${path === '/formation/overview' ? 'bg-gray-100' : ''}`}><Book size={16} /> Vue d'ensemble</Link></li>
            <li><Link to="/formation/financial" className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors ${path === '/formation/financial' ? 'bg-gray-100' : ''}`}><Calculator size={16} /> Comptabilité Financière</Link></li>
            <li><Link to="/formation/salary" className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors ${path === '/formation/salary' ? 'bg-gray-100' : ''}`}><BarChart size={16} /> Gestion des Salaires</Link></li>
            <li><Link to="/formation/analytics" className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors ${path === '/formation/analytics' ? 'bg-gray-100' : ''}`}><BarChart size={16} /> Comptabilité Analytique</Link></li>
            <li><Link to="/formation/tax" className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors ${path === '/formation/tax' ? 'bg-gray-100' : ''}`}><FileQuestion size={16} /> TVA et Fiscalité</Link></li>
            <li><Link to="/formation/closing" className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors ${path === '/formation/closing' ? 'bg-gray-100' : ''}`}><Files size={16} /> Clôtures</Link></li>
            <li><Link to="/formation/exercises" className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors ${path === '/formation/exercises' ? 'bg-gray-100' : ''}`}><FileText size={16} /> Exercices Pratiques</Link></li>
            <li><Link to="/formation/quiz" className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors ${path === '/formation/quiz' ? 'bg-gray-100' : ''}`}><FileQuestion size={16} /> Quiz et Tests</Link></li>
          </ul>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Link to="/plan-comptable" className="flex items-center gap-2 p-2 text-swiss-blue font-medium rounded-md hover:bg-blue-50 transition-colors">
              <List size={16} /> Plan Comptable Suisse
            </Link>
          </div>
        </>
      );
    } else if (path.includes('/abacus')) {
      return (
        <>
          <h3 className="text-lg font-semibold mb-3">Documentation Abacus</h3>
          <ul className="space-y-1">
            <li><Link to="/abacus/general" className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors ${path === '/abacus/general' ? 'bg-gray-100' : ''}`}><FileText size={16} /> Généralités</Link></li>
            <li><Link to="/abacus/modules" className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors ${path === '/abacus/modules' ? 'bg-gray-100' : ''}`}><FileText size={16} /> Modules</Link></li>
            <li><Link to="/abacus/tips" className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors ${path === '/abacus/tips' ? 'bg-gray-100' : ''}`}><FileText size={16} /> Astuces</Link></li>
            <li><Link to="/abacus/excel-converter" className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors ${path === '/abacus/excel-converter' ? 'bg-gray-100' : ''}`}><FileText size={16} /> Convertisseur Excel</Link></li>
          </ul>
        </>
      );
    } else if (path.includes('/yooz')) {
      return (
        <>
          <h3 className="text-lg font-semibold mb-3">Documentation Yooz</h3>
          <ul className="space-y-1">
            <li><Link to="/yooz/introduction" className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors ${path === '/yooz/introduction' ? 'bg-gray-100' : ''}`}><FileText size={16} /> Introduction</Link></li>
          </ul>
        </>
      );
    } else if (path.includes('/templates')) {
      return (
        <>
          <h3 className="text-lg font-semibold mb-3">Templates</h3>
          <ul className="space-y-1">
            <li><Link to="/templates/invoice" className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors ${path === '/templates/invoice' ? 'bg-gray-100' : ''}`}><FileText size={16} /> Factures</Link></li>
          </ul>
        </>
      );
    } else if (path.includes('/plan-comptable')) {
      return (
        <>
          <h3 className="text-lg font-semibold mb-3">Plan Comptable</h3>
          <ul className="space-y-1">
            <li><Link to="/plan-comptable" className="flex items-center gap-2 p-2 bg-gray-100 rounded-md"><List size={16} /> Plan Comptable Suisse</Link></li>
          </ul>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Link to="/formation/financial" className="flex items-center gap-2 p-2 text-swiss-blue font-medium rounded-md hover:bg-blue-50 transition-colors">
              <Calculator size={16} /> Comptabilité Financière
            </Link>
          </div>
        </>
      );
    } else if (path.includes('/lexique')) {
      return (
        <>
          <h3 className="text-lg font-semibold mb-3">Lexique Comptable</h3>
          <ul className="space-y-1">
            <li><Link to="/lexique" className="flex items-center gap-2 p-2 bg-gray-100 rounded-md"><FileQuestion size={16} /> Lexique Comptable Suisse</Link></li>
          </ul>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Link to="/ressources" className="flex items-center gap-2 p-2 text-swiss-blue font-medium rounded-md hover:bg-blue-50 transition-colors">
              <Info size={16} /> Ressources Utiles
            </Link>
          </div>
        </>
      );
    } else if (path.includes('/ressources')) {
      return (
        <>
          <h3 className="text-lg font-semibold mb-3">Ressources</h3>
          <ul className="space-y-1">
            <li><Link to="/ressources" className="flex items-center gap-2 p-2 bg-gray-100 rounded-md"><Info size={16} /> Ressources Générales</Link></li>
            <li><Link to="/ressources/administrations" className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors ${path === '/ressources/administrations' ? 'bg-gray-100' : ''}`}><Info size={16} /> Administrations Cantonales</Link></li>
            <li><Link to="/ressources/carte" className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors ${path === '/ressources/carte' ? 'bg-gray-100' : ''}`}><MapPin size={16} /> Carte Interactive</Link></li>
          </ul>
        </>
      );
    } else {
      return (
        <>
          <h3 className="text-lg font-semibold mb-3">Ressources</h3>
          <ul className="space-y-1">
            <li><Link to="/formation" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"><Book size={16} /> Formation Comptable</Link></li>
            <li><Link to="/plan-comptable" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"><List size={16} /> Plan Comptable Suisse</Link></li>
            <li><Link to="/lexique" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"><FileQuestion size={16} /> Lexique Comptable</Link></li>
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
