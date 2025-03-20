
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-swiss-blue/5 border-t border-swiss-blue/10 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">HelvetiCompta</h3>
            <p className="text-swiss-text-secondary text-sm">
              Ressources complètes pour maîtriser la comptabilité suisse et 
              les logiciels associés.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://github.com/Hmz931" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-swiss-text-secondary hover:text-swiss-blue transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/hamza-bouguerra-a09788106" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-swiss-text-secondary hover:text-swiss-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:hamza93bouguerra@gmail.com" 
                className="text-swiss-text-secondary hover:text-swiss-blue transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+41000000000" 
                className="text-swiss-text-secondary hover:text-swiss-blue transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-swiss-text-secondary hover:text-swiss-blue transition-colors">Accueil</Link></li>
              <li><Link to="/formation" className="text-swiss-text-secondary hover:text-swiss-blue transition-colors">Formation</Link></li>
              <li><Link to="/abacus" className="text-swiss-text-secondary hover:text-swiss-blue transition-colors">Abacus</Link></li>
              <li><Link to="/yooz" className="text-swiss-text-secondary hover:text-swiss-blue transition-colors">Yooz</Link></li>
              <li><Link to="/lexique" className="text-swiss-text-secondary hover:text-swiss-blue transition-colors">Lexique</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Ressources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ressources" className="text-swiss-text-secondary hover:text-swiss-blue transition-colors">Documentation</Link></li>
              <li><Link to="/templates" className="text-swiss-text-secondary hover:text-swiss-blue transition-colors">Templates</Link></li>
              <li><Link to="/plan-comptable" className="text-swiss-text-secondary hover:text-swiss-blue transition-colors">Plan Comptable</Link></li>
              <li><Link to="/ressources/administrations" className="text-swiss-text-secondary hover:text-swiss-blue transition-colors">Administrations</Link></li>
              <li><Link to="/ressources/carte" className="text-swiss-text-secondary hover:text-swiss-blue transition-colors">Carte Suisse</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="text-swiss-text-secondary text-sm not-italic">
              <p>HelvetiCompta</p>
              <p className="mt-2">hamza93bouguerra@gmail.com</p>
              <p>+41 00 000 00 00</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-swiss-blue/10 mt-8 pt-6 text-center text-swiss-text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} HelvetiCompta. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
