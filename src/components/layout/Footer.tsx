
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-swiss-dark text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">
              Swiss<span className="text-swiss-blue">Accounting</span>Hub
            </h3>
            <p className="text-gray-300 max-w-xs">
              Un site dédié à la formation en comptabilité suisse et à la documentation 
              des logiciels Abacus et Yooz.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ChevronRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  to="/formation" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ChevronRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  Formation
                </Link>
              </li>
              <li>
                <Link 
                  to="/glossaire" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ChevronRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  Glossaire
                </Link>
              </li>
              <li>
                <Link 
                  to="/ressources" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ChevronRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  Ressources
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Documentation</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/abacus" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ChevronRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  Abacus
                </Link>
              </li>
              <li>
                <Link 
                  to="/yooz" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ChevronRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  Yooz
                </Link>
              </li>
              <li>
                <Link 
                  to="/templates" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ChevronRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  Templates
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-gray-300">
              Vous avez des questions ou besoin d'assistance?
            </p>
            <a 
              href="mailto:contact@swiss-accounting-hub.ch" 
              className="inline-block bg-swiss-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all duration-200"
            >
              Contactez-nous
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Swiss Accounting Hub. Développé par Hamza Bouguerra. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
