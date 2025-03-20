
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

type SidebarLinkProps = {
  to: string;
  children: React.ReactNode;
  active?: boolean;
};

const SidebarLink = ({ to, children, active }: SidebarLinkProps) => (
  <li className="mb-1">
    <Link
      to={to}
      className={`flex items-center px-4 py-2 rounded-md text-sm transition-all duration-200 ${
        active 
          ? 'bg-swiss-blue/10 text-swiss-blue font-medium' 
          : 'text-swiss-text-secondary hover:bg-swiss-muted hover:text-swiss-blue'
      }`}
    >
      <ChevronRight size={16} className={`mr-1 ${active ? 'text-swiss-blue' : 'text-gray-400'}`} />
      {children}
    </Link>
  </li>
);

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  
  if (path === '/') return null;
  
  const renderMenu = () => {
    if (path.includes('/formation')) {
      return (
        <>
          <h3 className="text-lg font-semibold mb-3 px-4">Formation Comptable</h3>
          <ul>
            <SidebarLink to="/formation/overview" active={path.includes('/formation/overview')}>Vue d'ensemble</SidebarLink>
            <SidebarLink to="/formation/financial" active={path.includes('/formation/financial')}>Comptabilité Financière</SidebarLink>
            <SidebarLink to="/formation/salary" active={path.includes('/formation/salary')}>Gestion des Salaires</SidebarLink>
            <SidebarLink to="/formation/analytics" active={path.includes('/formation/analytics')}>Comptabilité Analytique</SidebarLink>
            <SidebarLink to="/formation/tax" active={path.includes('/formation/tax')}>TVA et Fiscalité</SidebarLink>
            <SidebarLink to="/formation/closing" active={path.includes('/formation/closing')}>Clôtures</SidebarLink>
            <SidebarLink to="/formation/exercises" active={path.includes('/formation/exercises')}>Exercices Pratiques</SidebarLink>
          </ul>
        </>
      );
    }
    
    if (path.includes('/abacus')) {
      return (
        <>
          <h3 className="text-lg font-semibold mb-3 px-4">Abacus</h3>
          <ul>
            <SidebarLink to="/abacus/intro" active={path.includes('/abacus/intro')}>Introduction</SidebarLink>
            <SidebarLink to="/abacus/modules" active={path.includes('/abacus/modules')}>Modules</SidebarLink>
            <SidebarLink to="/abacus/guides" active={path.includes('/abacus/guides')}>Guides Pas-à-Pas</SidebarLink>
            <SidebarLink to="/abacus/tips" active={path.includes('/abacus/tips')}>Astuces</SidebarLink>
            <SidebarLink to="/abacus/faq" active={path.includes('/abacus/faq')}>FAQ</SidebarLink>
          </ul>
        </>
      );
    }
    
    if (path.includes('/yooz')) {
      return (
        <>
          <h3 className="text-lg font-semibold mb-3 px-4">Yooz</h3>
          <ul>
            <SidebarLink to="/yooz/intro" active={path.includes('/yooz/intro')}>Introduction</SidebarLink>
            <SidebarLink to="/yooz/guides" active={path.includes('/yooz/guides')}>Guides d'utilisation</SidebarLink>
            <SidebarLink to="/yooz/integration" active={path.includes('/yooz/integration')}>Intégration Abacus</SidebarLink>
            <SidebarLink to="/yooz/faq" active={path.includes('/yooz/faq')}>FAQ</SidebarLink>
          </ul>
        </>
      );
    }
    
    if (path.includes('/templates')) {
      return (
        <>
          <h3 className="text-lg font-semibold mb-3 px-4">Templates</h3>
          <ul>
            <SidebarLink to="/templates/closing" active={path.includes('/templates/closing')}>Dossiers de Clôture</SidebarLink>
            <SidebarLink to="/templates/reporting" active={path.includes('/templates/reporting')}>Rapports Financiers</SidebarLink>
            <SidebarLink to="/templates/tax" active={path.includes('/templates/tax')}>Déclarations Fiscales</SidebarLink>
            <SidebarLink to="/templates/accounting" active={path.includes('/templates/accounting')}>Documents Comptables</SidebarLink>
          </ul>
        </>
      );
    }
    
    return null;
  };
  
  return (
    <div className="w-64 bg-white shadow-card rounded-lg h-auto mr-6 sticky top-28 self-start animate-fade-in overflow-hidden">
      <div className="py-6">
        {renderMenu()}
      </div>
    </div>
  );
};

export default Sidebar;
