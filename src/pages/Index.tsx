
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, FileText, Database, Laptop, BookOpen, Award, FileCode, List } from 'lucide-react';

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

          <Link to="/plan-comptable" className="glass rounded-xl p-6 shadow-card transition-all hover:shadow-lg group">
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

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 border-b pb-2">Plan Comptable Suisse</h2>
        <div className="glass rounded-xl p-6 shadow-card">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">À propos du plan comptable suisse</h3>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
              <p className="text-gray-600 italic">
                Espace réservé pour la description du plan comptable suisse. Cette section sera complétée ultérieurement.
              </p>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <h4 className="font-semibold mb-3 text-swiss-blue">Extrait du plan comptable</h4>
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b text-left">Numéro</th>
                  <th className="py-2 px-4 border-b text-left">Titre du compte</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 font-medium">1000</td>
                  <td className="py-2 px-4">Caisse</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 font-medium">1010</td>
                  <td className="py-2 px-4">Compte postal</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 font-medium">1020</td>
                  <td className="py-2 px-4">Compte courant CHF</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 font-medium">1022</td>
                  <td className="py-2 px-4">Compte courant EUR</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 font-medium">1100</td>
                  <td className="py-2 px-4">Créances suisses en CHF</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 font-medium">1200</td>
                  <td className="py-2 px-4">Stocks de marchandises commerciales A</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 font-medium">2000</td>
                  <td className="py-2 px-4">Dettes résultant d'achats de matières et de marchandises</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 font-medium">2800</td>
                  <td className="py-2 px-4">Capital-actions / parts sociales / capital de fondation</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 font-medium">3000</td>
                  <td className="py-2 px-4">Ventes de produits fabriqués A</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 font-medium">4000</td>
                  <td className="py-2 px-4">Charges de matériel produit A</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 text-right">
              <Link to="/plan-comptable" className="text-swiss-blue hover:underline flex items-center justify-end gap-1 text-sm">
                Voir le plan comptable complet <FileCode size={16} />
              </Link>
            </div>
          </div>
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
