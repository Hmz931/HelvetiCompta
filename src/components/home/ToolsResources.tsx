
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, BookOpen, List } from 'lucide-react';

const ToolsResources = () => {
  return (
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

        <Link to="/lexique" className="glass rounded-xl p-6 shadow-card transition-all hover:shadow-lg group">
          <div className="flex items-center mb-4">
            <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg mr-4 group-hover:bg-swiss-blue group-hover:text-white transition-colors">
              <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-semibold">Lexique Comptable</h3>
          </div>
          <p className="text-swiss-text-secondary">
            Définitions des termes spécifiques à la comptabilité suisse.
          </p>
        </Link>

        <Link to="/formation/chart-of-accounts" className="glass rounded-xl p-6 shadow-card transition-all hover:shadow-lg group">
          <div className="flex items-center mb-4">
            <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg mr-4 group-hover:bg-swiss-blue group-hover:text-white transition-colors">
              <List size={24} />
            </div>
            <h3 className="text-xl font-semibold">Plan Comptable Suisse</h3>
          </div>
          <p className="text-swiss-text-secondary">
            Structure normalisée des comptes pour la comptabilité suisse.
          </p>
        </Link>
      </div>
    </section>
  );
};

export default ToolsResources;
