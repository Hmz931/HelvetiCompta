
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(path => path);
  
  const getTitle = (path: string) => {
    const titles: {[key: string]: string} = {
      'formation': 'Formation',
      'abacus': 'Abacus',
      'yooz': 'Yooz',
      'glossaire': 'Glossaire',
      'ressources': 'Ressources',
      'templates': 'Templates',
      'closing': 'Dossiers de Clôture',
      'reporting': 'Rapports Financiers',
      'overview': 'Vue d\'ensemble',
      'financial': 'Comptabilité Financière',
      'salary': 'Gestion des Salaires',
      'analytics': 'Comptabilité Analytique',
      'tax': 'TVA et Fiscalité',
      'exercises': 'Exercices Pratiques',
      'intro': 'Introduction',
      'modules': 'Modules',
      'guides': 'Guides',
      'tips': 'Astuces',
      'faq': 'FAQ',
      'integration': 'Intégration',
      'accounting': 'Documents Comptables',
    };
    
    return titles[path] || path.charAt(0).toUpperCase() + path.slice(1);
  };
  
  return (
    <nav className="flex items-center space-x-1 text-sm py-4 animate-fade-in mb-4">
      <Link 
        to="/" 
        className="text-swiss-blue hover:underline transition-colors duration-200"
      >
        Accueil
      </Link>
      
      {paths.map((path, index) => {
        const routeTo = `/${paths.slice(0, index + 1).join('/')}`;
        const isLast = index === paths.length - 1;
        
        return (
          <React.Fragment key={path}>
            <ChevronRight size={14} className="text-gray-400" />
            <Link
              to={routeTo}
              className={`transition-colors duration-200 ${
                isLast 
                  ? 'font-medium text-swiss-text-primary' 
                  : 'text-swiss-text-secondary hover:text-swiss-blue hover:underline'
              }`}
            >
              {getTitle(path)}
            </Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
