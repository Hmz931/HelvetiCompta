
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import { ScanLine, FileText, RefreshCw, Archive } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="glass rounded-xl p-6 shadow-card staggered-item">
    <div className="flex items-center mb-4">
      <div className="bg-swiss-blue/10 text-swiss-blue p-2 rounded-lg mr-3">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-swiss-text-secondary">
      {description}
    </p>
  </div>
);

const YoozOverview = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Documentation Yooz</h1>
      
      <div className="glass rounded-xl p-6 shadow-card mb-10">
        <p className="text-lg">
          Bienvenue dans la section de documentation dédiée à Yooz, la solution GED (Gestion Électronique des Documents) 
          qui simplifie la numérisation et le traitement de vos documents comptables.
        </p>
      </div>
      
      <h2 className="text-2xl font-bold mb-6">Fonctionnalités Principales</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <FeatureCard 
          icon={<ScanLine size={20} />}
          title="Capture de documents"
          description="Numérisation et reconnaissance automatique des données grâce à l'OCR avancé, avec des taux de reconnaissance exceptionnels."
        />
        
        <FeatureCard 
          icon={<FileText size={20} />}
          title="Workflow d'approbation"
          description="Circuit de validation des factures entièrement personnalisable selon votre organisation et vos besoins."
        />
        
        <FeatureCard 
          icon={<RefreshCw size={20} />}
          title="Intégration comptable"
          description="Export vers Abacus et autres logiciels de comptabilité pour un traitement fluide et sans erreur de ressaisie."
        />
        
        <FeatureCard 
          icon={<Archive size={20} />}
          title="Archivage"
          description="Conservation sécurisée des documents dans le respect des normes légales suisses, avec recherche instantanée."
        />
      </div>
      
      <h2 className="text-2xl font-bold mb-6">Ressources Disponibles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass rounded-xl p-6 shadow-card card-hover staggered-item">
          <h3 className="text-xl font-semibold mb-4">Guides d'utilisation</h3>
          <p className="text-swiss-text-secondary mb-4">
            Tutoriels détaillés pour maîtriser toutes les fonctionnalités de Yooz dans votre quotidien.
          </p>
          <Link 
            to="/yooz/guides" 
            className="inline-flex items-center text-swiss-blue hover:underline"
          >
            Consulter les guides <span className="ml-1">→</span>
          </Link>
        </div>
        
        <div className="glass rounded-xl p-6 shadow-card card-hover staggered-item">
          <h3 className="text-xl font-semibold mb-4">Intégration Abacus</h3>
          <p className="text-swiss-text-secondary mb-4">
            Procédures et paramètres pour une synchronisation optimale entre Yooz et Abacus.
          </p>
          <Link 
            to="/yooz/integration" 
            className="inline-flex items-center text-swiss-blue hover:underline"
          >
            En savoir plus <span className="ml-1">→</span>
          </Link>
        </div>
        
        <div className="glass rounded-xl p-6 shadow-card card-hover staggered-item">
          <h3 className="text-xl font-semibold mb-4">FAQ</h3>
          <p className="text-swiss-text-secondary mb-4">
            Réponses aux questions fréquemment posées par les utilisateurs de Yooz.
          </p>
          <Link 
            to="/yooz/faq" 
            className="inline-flex items-center text-swiss-blue hover:underline"
          >
            Consulter la FAQ <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const YoozIntro = () => (
  <div className="animate-fade-in">
    <h1 className="text-3xl font-bold mb-6">Introduction à Yooz</h1>
    <div className="glass rounded-xl p-6 shadow-card mb-6">
      <p className="text-lg">
        Yooz est une solution cloud de dématérialisation et d'automatisation du traitement des 
        factures fournisseurs, qui répond aux besoins spécifiques des entreprises suisses.
      </p>
    </div>
    <p className="text-swiss-text-secondary">Contenu détaillé à venir...</p>
  </div>
);

const YoozGuides = () => (
  <div className="animate-fade-in">
    <h1 className="text-3xl font-bold mb-6">Guides d'utilisation Yooz</h1>
    <div className="glass rounded-xl p-6 shadow-card mb-6">
      <p className="text-lg">
        Tutoriels et explications détaillées pour utiliser efficacement Yooz au quotidien.
      </p>
    </div>
    <p className="text-swiss-text-secondary">Contenu détaillé à venir...</p>
  </div>
);

const YoozIntegration = () => (
  <div className="animate-fade-in">
    <h1 className="text-3xl font-bold mb-6">Intégration de Yooz avec Abacus</h1>
    <div className="glass rounded-xl p-6 shadow-card mb-6">
      <p className="text-lg">
        Guides et paramètres pour configurer et optimiser l'intégration entre Yooz et Abacus.
      </p>
    </div>
    <p className="text-swiss-text-secondary">Contenu détaillé à venir...</p>
  </div>
);

const YoozDocumentation = () => {
  return (
    <div>
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<YoozOverview />} />
        <Route path="/intro" element={<YoozIntro />} />
        <Route path="/guides" element={<YoozGuides />} />
        <Route path="/integration" element={<YoozIntegration />} />
        <Route path="/faq" element={<div className="animate-fade-in"><h1 className="text-3xl font-bold mb-6">FAQ Yooz</h1><p>Contenu à venir...</p></div>} />
      </Routes>
    </div>
  );
};

export default YoozDocumentation;
