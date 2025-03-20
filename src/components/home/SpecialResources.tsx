
import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Award } from 'lucide-react';

const SpecialResources = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8 border-b pb-2">Ressources Spéciales</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/ressources/carte" className="glass rounded-xl p-6 shadow-card transition-all hover:shadow-lg group">
          <div className="flex items-center mb-4">
            <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg mr-4 group-hover:bg-swiss-blue group-hover:text-white transition-colors">
              <Map size={24} />
            </div>
            <h3 className="text-xl font-semibold">Carte Interactive</h3>
          </div>
          <p className="text-swiss-text-secondary">
            Explorez les cantons suisses et leurs spécificités comptables et fiscales.
          </p>
        </Link>
        
        <Link to="/formation/quiz" className="glass rounded-xl p-6 shadow-card transition-all hover:shadow-lg group">
          <div className="flex items-center mb-4">
            <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg mr-4 group-hover:bg-swiss-blue group-hover:text-white transition-colors">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-semibold">Quiz et Tests</h3>
          </div>
          <p className="text-swiss-text-secondary">
            Testez vos connaissances en comptabilité suisse avec nos quiz interactifs.
          </p>
        </Link>
      </div>
    </section>
  );
};

export default SpecialResources;
