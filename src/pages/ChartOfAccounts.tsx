
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import { Search } from 'lucide-react';

const accountCategories = [
  { id: '1', name: 'Actifs', range: '1000-1999' },
  { id: '2', name: 'Passifs', range: '2000-2999' },
  { id: '3', name: 'Revenus', range: '3000-3999' },
  { id: '4', name: 'Charges de matériel et de marchandises', range: '4000-4999' },
  { id: '5', name: 'Charges de personnel', range: '5000-5999' },
  { id: '6', name: 'Autres charges d\'exploitation', range: '6000-6999' },
  { id: '7', name: 'Résultats des activités annexes d\'exploitation', range: '7000-7999' },
  { id: '8', name: 'Résultats hors exploitation', range: '8000-8999' },
  { id: '9', name: 'Clôture', range: '9000-9999' }
];

// Échantillon des comptes du plan comptable suisse
const accounts = [
  { number: '1000', title: 'Caisse' },
  { number: '1003', title: 'Caisse EUR' },
  { number: '1004', title: 'Caisse en devise étrangère A' },
  { number: '1010', title: 'Compte postal' },
  { number: '1020', title: 'Compte courant CHF' },
  { number: '1022', title: 'Compte courant EUR' },
  { number: '1023', title: 'Compte courant USD' },
  { number: '1100', title: 'Créances suisses en CHF' },
  { number: '1200', title: 'Stocks de marchandises commerciales A' },
  { number: '2000', title: 'Dettes résultant d\'achats de matières et de marchandises' },
  { number: '2001', title: 'Dettes résultant de prestations de services de tiers' },
  { number: '2800', title: 'Capital-actions / parts sociales / capital de fondation / capital-participation' },
  { number: '3000', title: 'Ventes de produits fabriqués A' },
  { number: '4000', title: 'Charges de matériel produit A' },
  { number: '5200', title: 'Salaires de base' },
  { number: '6000', title: 'Loyer des usines' },
  { number: '7000', title: 'Produits bruts' },
  { number: '8000', title: 'Charges hors exploitation' },
  { number: '9000', title: 'Produits nets des ventes de biens et de prestations de services' }
];

const ChartOfAccounts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredAccounts = accounts.filter(account => {
    const matchesSearch = 
      account.number.includes(searchTerm) || 
      account.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      activeCategory === 'all' || 
      (activeCategory === '1' && account.number.startsWith('1')) ||
      (activeCategory === '2' && account.number.startsWith('2')) ||
      (activeCategory === '3' && account.number.startsWith('3')) ||
      (activeCategory === '4' && account.number.startsWith('4')) ||
      (activeCategory === '5' && account.number.startsWith('5')) ||
      (activeCategory === '6' && account.number.startsWith('6')) ||
      (activeCategory === '7' && account.number.startsWith('7')) ||
      (activeCategory === '8' && account.number.startsWith('8')) ||
      (activeCategory === '9' && account.number.startsWith('9'));
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="animate-fade-in space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Plan Comptable Suisse</h1>
        <p className="text-swiss-text-secondary">
          Structure normalisée des comptes pour la comptabilité suisse conforme aux exigences légales.
        </p>
      </div>
      
      <div className="glass rounded-xl p-6 shadow-card">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">À propos du plan comptable suisse</h2>
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <p className="text-gray-600 italic">
              Espace réservé pour la description du plan comptable suisse. Cette section sera complétée ultérieurement.
            </p>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Structure du plan comptable</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {accountCategories.map(category => (
              <div 
                key={category.id}
                className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                  activeCategory === category.id ? 'bg-swiss-blue text-white border-swiss-blue' : 'bg-white hover:bg-gray-50 border-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="font-semibold">{category.name}</div>
                <div className={`text-sm ${activeCategory === category.id ? 'text-blue-100' : 'text-gray-500'}`}>
                  {category.range}
                </div>
              </div>
            ))}
            <div 
              className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                activeCategory === 'all' ? 'bg-swiss-blue text-white border-swiss-blue' : 'bg-white hover:bg-gray-50 border-gray-200'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              <div className="font-semibold">Tous les comptes</div>
              <div className={`text-sm ${activeCategory === 'all' ? 'text-blue-100' : 'text-gray-500'}`}>
                Afficher l'ensemble du plan
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Rechercher par numéro ou libellé..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 border-b text-left font-semibold">Numéro</th>
                  <th className="py-3 px-4 border-b text-left font-semibold">Libellé du compte</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredAccounts.length > 0 ? (
                  filteredAccounts.map((account, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{account.number}</td>
                      <td className="py-3 px-4">{account.title}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2} className="py-4 px-4 text-center text-gray-500">
                      Aucun compte ne correspond à votre recherche
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-sm text-gray-500 text-center">
            Affichage d'un échantillon du plan comptable. Le plan complet sera disponible prochainement.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartOfAccounts;
