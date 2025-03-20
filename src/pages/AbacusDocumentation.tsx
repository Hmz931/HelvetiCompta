
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import { Database, PieChart, BookOpen, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModuleCard = ({ icon, title, description, link }: { icon: React.ReactNode, title: string, description: string, link: string }) => (
  <div className="glass rounded-xl p-6 shadow-card card-hover staggered-item">
    <div className="flex items-center mb-4">
      <div className="bg-swiss-blue/10 text-swiss-blue p-2 rounded-lg mr-3">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-swiss-text-secondary mb-4">
      {description}
    </p>
    <Link 
      to={link} 
      className="inline-flex items-center text-swiss-blue hover:underline"
    >
      En savoir plus <span className="ml-1">→</span>
    </Link>
  </div>
);

const AbacusOverview = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Documentation Abacus</h1>
      
      <div className="glass rounded-xl p-6 shadow-card mb-10">
        <p className="text-lg">
          Bienvenue dans la section de documentation dédiée à Abacus, l'ERP suisse de référence. 
          Vous trouverez ici des guides complets pour utiliser efficacement ce logiciel dans votre 
          comptabilité quotidienne.
        </p>
      </div>
      
      <h2 className="text-2xl font-bold mb-6">Modules Principaux</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <ModuleCard 
          icon={<Database size={20} />}
          title="Comptabilité générale"
          description="Gestion des écritures et du plan comptable, paramétrage et rapports financiers."
          link="/abacus/modules#general"
        />
        
        <ModuleCard 
          icon={<PieChart size={20} />}
          title="Débiteurs/Créanciers"
          description="Suivi des factures clients et fournisseurs, gestion des paiements et relances."
          link="/abacus/modules#debiteurs"
        />
        
        <ModuleCard 
          icon={<BookOpen size={20} />}
          title="Salaires"
          description="Calcul et gestion des salaires, certificats de salaire et décomptes sociaux."
          link="/abacus/modules#salaires"
        />
        
        <ModuleCard 
          icon={<HelpCircle size={20} />}
          title="Immobilisations"
          description="Gestion des actifs et amortissements, suivi des investissements."
          link="/abacus/modules#immobilisations"
        />
      </div>
      
      <h2 className="text-2xl font-bold mb-6">Ressources Populaires</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass rounded-xl p-6 shadow-card staggered-item">
          <h3 className="text-xl font-semibold mb-4">Guides Pas à Pas</h3>
          <ul className="space-y-2">
            <li className="hover:text-swiss-blue">
              <Link to="/abacus/guides#saisie-ecritures" className="flex items-center py-2">
                <span className="bg-swiss-blue/10 text-swiss-blue px-2 py-1 rounded text-xs mr-2">Guide</span>
                Saisie des écritures comptables
              </Link>
            </li>
            <li className="hover:text-swiss-blue">
              <Link to="/abacus/guides#gestion-tva" className="flex items-center py-2">
                <span className="bg-swiss-blue/10 text-swiss-blue px-2 py-1 rounded text-xs mr-2">Guide</span>
                Gestion de la TVA dans Abacus
              </Link>
            </li>
            <li className="hover:text-swiss-blue">
              <Link to="/abacus/guides#bouclement" className="flex items-center py-2">
                <span className="bg-swiss-blue/10 text-swiss-blue px-2 py-1 rounded text-xs mr-2">Guide</span>
                Procédure de bouclement annuel
              </Link>
            </li>
            <li className="hover:text-swiss-blue">
              <Link to="/abacus/guides#reporting" className="flex items-center py-2">
                <span className="bg-swiss-blue/10 text-swiss-blue px-2 py-1 rounded text-xs mr-2">Guide</span>
                Création de rapports personnalisés
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="glass rounded-xl p-6 shadow-card staggered-item">
          <h3 className="text-xl font-semibold mb-4">FAQ</h3>
          <ul className="space-y-2">
            <li className="hover:text-swiss-blue">
              <Link to="/abacus/faq#import-donnees" className="flex items-center py-2">
                <span className="bg-swiss-blue/10 text-swiss-blue px-2 py-1 rounded text-xs mr-2">FAQ</span>
                Comment importer des données externes?
              </Link>
            </li>
            <li className="hover:text-swiss-blue">
              <Link to="/abacus/faq#droits-utilisateurs" className="flex items-center py-2">
                <span className="bg-swiss-blue/10 text-swiss-blue px-2 py-1 rounded text-xs mr-2">FAQ</span>
                Gestion des droits utilisateurs
              </Link>
            </li>
            <li className="hover:text-swiss-blue">
              <Link to="/abacus/faq#erreurs-frequentes" className="flex items-center py-2">
                <span className="bg-swiss-blue/10 text-swiss-blue px-2 py-1 rounded text-xs mr-2">FAQ</span>
                Résolution des erreurs fréquentes
              </Link>
            </li>
            <li className="hover:text-swiss-blue">
              <Link to="/abacus/faq#mises-a-jour" className="flex items-center py-2">
                <span className="bg-swiss-blue/10 text-swiss-blue px-2 py-1 rounded text-xs mr-2">FAQ</span>
                Procédure de mise à jour du logiciel
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const AbacusIntro = () => (
  <div className="animate-fade-in">
    <h1 className="text-3xl font-bold mb-6">Introduction à Abacus</h1>
    <div className="glass rounded-xl p-6 shadow-card mb-6">
      <p className="text-lg">
        Abacus est l'un des logiciels de gestion d'entreprise les plus utilisés en Suisse. 
        Développé spécifiquement pour le marché suisse, il intègre toutes les particularités 
        fiscales, légales et comptables propres au pays.
      </p>
    </div>
    <p className="text-swiss-text-secondary">Contenu détaillé à venir...</p>
  </div>
);

const AbacusModules = () => (
  <div className="animate-fade-in">
    <h1 className="text-3xl font-bold mb-6">Modules Abacus</h1>
    <div className="glass rounded-xl p-6 shadow-card mb-6">
      <p className="text-lg">
        Découvrez en détail les différents modules disponibles dans Abacus et 
        leurs fonctionnalités spécifiques.
      </p>
    </div>
    <p className="text-swiss-text-secondary">Contenu détaillé à venir...</p>
  </div>
);

const AbacusGuides = () => (
  <div className="animate-fade-in">
    <h1 className="text-3xl font-bold mb-6">Guides Pas à Pas</h1>
    <div className="glass rounded-xl p-6 shadow-card mb-6">
      <p className="text-lg">
        Suivez nos guides détaillés qui vous accompagnent étape par étape dans 
        l'utilisation des fonctionnalités d'Abacus.
      </p>
    </div>
    <p className="text-swiss-text-secondary">Contenu détaillé à venir...</p>
  </div>
);

const AbacusDocumentation = () => {
  return (
    <div>
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<AbacusOverview />} />
        <Route path="/intro" element={<AbacusIntro />} />
        <Route path="/modules" element={<AbacusModules />} />
        <Route path="/guides" element={<AbacusGuides />} />
        <Route path="/tips" element={<div className="animate-fade-in"><h1 className="text-3xl font-bold mb-6">Astuces Abacus</h1><p>Contenu à venir...</p></div>} />
        <Route path="/faq" element={<div className="animate-fade-in"><h1 className="text-3xl font-bold mb-6">FAQ Abacus</h1><p>Contenu à venir...</p></div>} />
      </Routes>
    </div>
  );
};

export default AbacusDocumentation;
