
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fullAccountsList } from '@/data/courses/chartOfAccounts';
import SearchInterface from './SearchInterface';
import CategoryFilters from './CategoryFilters';
import ResultsDisplay from './ResultsDisplay';
import { normalizeAccents } from '@/utils/searchUtils';

interface Account {
  number: string;
  title: string;
}

const ChartOfAccountsSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Account[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  
  // Effectuer la recherche dès que le terme de recherche ou le filtre de catégorie change
  useEffect(() => {
    // Retourner tous les comptes si aucun terme de recherche n'est spécifié mais qu'une catégorie est sélectionnée
    if (searchTerm.trim() === '' && categoryFilter) {
      const filteredByCategory = fullAccountsList.filter(account => 
        account.number.startsWith(categoryFilter)
      );
      setSearchResults(filteredByCategory);
      return;
    }
    
    // Aucun résultat si aucun terme de recherche et aucune catégorie
    if (searchTerm.trim() === '' && !categoryFilter) {
      setSearchResults([]);
      return;
    }
    
    const normalizedSearchTerm = normalizeAccents(searchTerm.toLowerCase());
    
    const filteredAccounts = fullAccountsList.filter(account => {
      // Normalize account title for accent-insensitive comparison
      const normalizedTitle = normalizeAccents(account.title.toLowerCase());
      
      // Filtre par terme de recherche
      const matchesSearch = 
        account.number.toLowerCase().includes(normalizedSearchTerm) || 
        normalizedTitle.includes(normalizedSearchTerm);
      
      // Filtre par catégorie si une est sélectionnée
      const matchesCategory = categoryFilter 
        ? account.number.startsWith(categoryFilter) 
        : true;
      
      return matchesSearch && matchesCategory;
    });
    
    setSearchResults(filteredAccounts);
  }, [searchTerm, categoryFilter]);
  
  const handleCategorySelect = (category: string) => {
    // Si l'utilisateur clique sur le filtre actuellement actif, le désactiver
    if (category === categoryFilter) {
      setCategoryFilter(null);
    } else {
      setCategoryFilter(category);
      // Réinitialiser le compte sélectionné lors du changement de catégorie
      setSelectedAccount(null);
    }
    
    // Montrer automatiquement tous les comptes de la catégorie sélectionnée
    if (searchTerm.trim() === '') {
      setIsSearching(true);
    }
  };
  
  const handleSearchFocus = () => {
    setIsSearching(true);
  };
  
  const handleSearchBlur = () => {
    // Ajouter un délai pour permettre de cliquer sur les résultats de recherche
    setTimeout(() => {
      if (document.activeElement?.tagName !== 'BUTTON' && searchTerm.trim() === '' && !categoryFilter) {
        setIsSearching(false);
      }
    }, 200);
  };
  
  const handleAccountSelect = (accountNumber: string) => {
    setSelectedAccount(accountNumber);
    setIsSearching(false);
    setSearchTerm('');
  };
  
  return (
    <div className="space-y-8">
      <Card className="shadow-md border-0 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-swiss-blue/15 to-swiss-blue/5 border-b border-gray-200">
          <CardTitle className="text-2xl font-bold text-swiss-dark">Recherche de comptes</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col space-y-4">
            <SearchInterface
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              searchResults={searchResults}
              isSearching={isSearching}
              onAccountSelect={handleAccountSelect}
            />
            
            <CategoryFilters
              selectedCategory={categoryFilter}
              onSelectCategory={handleCategorySelect}
            />
          </div>
        </CardContent>
      </Card>
      
      <ResultsDisplay
        searchResults={searchResults}
        selectedAccount={selectedAccount}
        categoryFilter={categoryFilter}
        onAccountSelect={handleAccountSelect}
        searchTerm={searchTerm}
        accounts={fullAccountsList}
      />
    </div>
  );
};

export default ChartOfAccountsSearch;
