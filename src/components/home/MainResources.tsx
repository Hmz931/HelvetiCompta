
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Database, Laptop } from 'lucide-react';

const MainResources = () => {
  return (
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
  );
};

export default MainResources;
