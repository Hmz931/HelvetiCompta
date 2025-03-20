
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { 
  getFullAccountsList, 
  getAccountsByCategory, 
  searchAccounts, 
  AccountItem,
  accountCategories
} from '@/data/courses/fullChartOfAccounts';
import AccountsSearch from './AccountsSearch';
import CategoryFilters from './CategoryFilters';
import AccountsList from './AccountsList';
import AccountsPagination from './AccountsPagination';
import AccountDetailCard from './AccountDetailCard';

const ChartOfAccounts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredAccounts, setFilteredAccounts] = useState<AccountItem[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<AccountItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [isLoading, setIsLoading] = useState(false);

  // Filtrer les comptes en fonction du terme de recherche et de la catégorie sélectionnée
  useEffect(() => {
    setIsLoading(true);
    setCurrentPage(1); // Réinitialiser la page lorsque les filtres changent

    // Simuler un léger délai pour montrer le chargement (facultatif)
    const timer = setTimeout(() => {
      let results: AccountItem[] = [];

      if (searchTerm.trim()) {
        // Si un terme de recherche est spécifié, filtrer les résultats
        results = searchAccounts(searchTerm);
        
        // Si une catégorie est également sélectionnée, filtrer davantage
        if (selectedCategory) {
          results = results.filter(account => account.category === selectedCategory);
        }
      } else if (selectedCategory) {
        // Si seule une catégorie est sélectionnée, obtenir tous les comptes de cette catégorie
        results = getAccountsByCategory(selectedCategory);
      } else {
        // Si aucun filtre n'est appliqué, la liste est vide (pour éviter d'afficher trop de résultats)
        results = [];
      }

      setFilteredAccounts(results);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory]);

  // Gérer la sélection d'une catégorie
  const handleCategorySelect = (category: string) => {
    // Si la catégorie déjà sélectionnée est cliquée à nouveau, la désélectionner
    if (category === selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
    setSelectedAccount(null); // Réinitialiser le compte sélectionné
  };

  // Gérer la sélection d'un compte
  const handleAccountSelect = (account: AccountItem) => {
    setSelectedAccount(account);
  };

  // Calculer les données paginées
  const getPaginatedAccounts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAccounts.slice(startIndex, startIndex + itemsPerPage);
  };

  // Calculer le nombre total de pages
  const totalPages = Math.max(1, Math.ceil(filteredAccounts.length / itemsPerPage));

  // Afficher les détails d'un compte sélectionné
  if (selectedAccount) {
    return (
      <AccountDetailCard 
        account={selectedAccount} 
        onBack={() => setSelectedAccount(null)} 
      />
    );
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-md border-0 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-swiss-blue/15 to-swiss-blue/5 border-b border-gray-200">
          <CardTitle className="text-2xl font-bold text-swiss-dark">
            Plan Comptable Suisse
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col space-y-6">
            <p className="text-gray-600">
              Le plan comptable suisse est structuré en 9 classes. Utilisez les filtres ci-dessous pour rechercher un compte par son numéro ou son titre.
            </p>
            
            <AccountsSearch 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Filtrer par classe de compte</h3>
              <CategoryFilters 
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategorySelect}
              />
            </div>
            
            <div className="mt-4">
              {searchTerm || selectedCategory ? (
                <div className="text-sm text-gray-600 mb-2">
                  {filteredAccounts.length} compte(s) trouvé(s)
                </div>
              ) : (
                <div className="text-sm text-gray-600 mb-2">
                  Saisissez un terme de recherche ou sélectionnez une classe pour afficher les comptes
                </div>
              )}
              
              <AccountsList 
                accounts={getPaginatedAccounts()}
                onAccountSelect={handleAccountSelect}
                isLoading={isLoading}
              />
              
              {filteredAccounts.length > itemsPerPage && (
                <AccountsPagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  itemsPerPage={itemsPerPage}
                  totalItems={filteredAccounts.length}
                  onPageChange={setCurrentPage}
                  onItemsPerPageChange={setItemsPerPage}
                />
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {!searchTerm && !selectedCategory && (
        <Card className="shadow-md border-0 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-swiss-blue/15 to-swiss-blue/5 border-b border-gray-200">
            <CardTitle className="text-xl font-bold text-swiss-dark">
              Structure du plan comptable suisse
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.values(accountCategories).map((category) => (
                <div 
                  key={category.id} 
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleCategorySelect(category.id)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-swiss-blue/10 flex items-center justify-center text-swiss-blue font-bold">
                      {category.id}
                    </div>
                    <h3 className="font-medium">{category.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ChartOfAccounts;
