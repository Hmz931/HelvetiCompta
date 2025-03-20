
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, FileText, FileUp, Database, Laptop, BookOpen, Award } from 'lucide-react';

const Index = () => {
  return (
    <div className="animate-fade-in">
      <section className="mb-16">
        <div className="glass rounded-xl p-10 text-center relative overflow-hidden shadow-card">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-swiss-blue">Swiss Accounting Hub</h1>
            <p className="text-xl text-swiss-text-secondary max-w-3xl mx-auto">
              Ressources complètes pour maîtriser la comptabilité suisse et les logiciels associés
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 border-b pb-2">Ressources Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/formation" className="glass rounded-xl p-6 shadow-card transition-all hover:shadow-lg group">
            <div className="flex items-center mb-4">
              <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg mr-4 group-hover:bg-swiss-blue group-hover:text-white transition-colors">
                <Book size={24} />
              </div>
              <h3 className="text-xl font-semibold">Formation Comptable</h3>
            </div>
            <p className="text-swiss-text-secondary">
              Cours détaillés sur la comptabilité suisse, les normes et les pratiques.
            </p>
          </Link>

          <Link to="/abacus" className="glass rounded-xl p-6 shadow-card transition-all hover:shadow-lg group">
            <div className="flex items-center mb-4">
              <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg mr-4 group-hover:bg-swiss-blue group-hover:text-white transition-colors">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-semibold">Documentation Abacus</h3>
            </div>
            <p className="text-swiss-text-secondary">
              Guides et tutoriels pour utiliser efficacement le logiciel Abacus.
            </p>
          </Link>

          <Link to="/yooz" className="glass rounded-xl p-6 shadow-card transition-all hover:shadow-lg group">
            <div className="flex items-center mb-4">
              <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg mr-4 group-hover:bg-swiss-blue group-hover:text-white transition-colors">
                <Laptop size={24} />
              </div>
              <h3 className="text-xl font-semibold">Documentation Yooz</h3>
            </div>
            <p className="text-swiss-text-secondary">
              Tout ce qu'il faut savoir sur la solution de dématérialisation Yooz.
            </p>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 border-b pb-2">Outils et Ressources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/templates" className="glass rounded-xl p-6 shadow-card transition-all hover:shadow-lg group">
            <div className="flex items-center mb-4">
              <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg mr-4 group-hover:bg-swiss-blue group-hover:text-white transition-colors">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-semibold">Templates et Documents</h3>
            </div>
            <p className="text-swiss-text-secondary">
              Modèles de documents comptables prêts à l'emploi.
            </p>
          </Link>

          <Link to="/glossaire" className="glass rounded-xl p-6 shadow-card transition-all hover:shadow-lg group">
            <div className="flex items-center mb-4">
              <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg mr-4 group-hover:bg-swiss-blue group-hover:text-white transition-colors">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-semibold">Glossaire Comptable</h3>
            </div>
            <p className="text-swiss-text-secondary">
              Définitions des termes spécifiques à la comptabilité suisse.
            </p>
          </Link>

          <Link to="/analyse-texte" className="glass rounded-xl p-6 shadow-card transition-all hover:shadow-lg group">
            <div className="flex items-center mb-4">
              <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg mr-4 group-hover:bg-swiss-blue group-hover:text-white transition-colors">
                <FileUp size={24} />
              </div>
              <h3 className="text-xl font-semibold">Analyseur de Texte</h3>
            </div>
            <p className="text-swiss-text-secondary">
              Outil pour analyser vos documents texte et extraire les informations importantes.
            </p>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 border-b pb-2">Nos Partenaires</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="flex flex-col items-center">
            <img src="/abacus-logo.png" alt="Abacus Software" className="h-12 md:h-16 mb-2" />
            <span className="text-sm text-swiss-text-secondary">Solutions ERP</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/yooz-logo.png" alt="Yooz" className="h-12 md:h-16 mb-2" />
            <span className="text-sm text-swiss-text-secondary">Dématérialisation</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/uneo-logo.png" alt="Cabinet Fiduciaire" className="h-12 md:h-16 mb-2" />
            <span className="text-sm text-swiss-text-secondary">Expertise Comptable</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
