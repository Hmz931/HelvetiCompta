
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fullAccountsList } from '@/data/courses/chartOfAccounts';
import SearchInterface from './SearchInterface';
import CategoryFilters from './CategoryFilters';
import ResultsDisplay from './ResultsDisplay';

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
  
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const filteredAccounts = fullAccountsList.filter(account => {
      // Filter by search term
      const matchesSearch = 
        account.number.toLowerCase().includes(searchTerm.toLowerCase()) || 
        account.title.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filter by category if one is selected
      const matchesCategory = categoryFilter 
        ? account.number.startsWith(categoryFilter) 
        : true;
      
      return matchesSearch && matchesCategory;
    });
    
    setSearchResults(filteredAccounts);
  }, [searchTerm, categoryFilter]);
  
  const handleCategorySelect = (category: string) => {
    // If user clicks the currently active filter, disable it
    if (category === categoryFilter) {
      setCategoryFilter(null);
    } else {
      setCategoryFilter(category);
      // Reset selected account when changing category
      setSelectedAccount(null);
    }
  };
  
  const handleSearchFocus = () => {
    setIsSearching(true);
  };
  
  const handleSearchBlur = () => {
    // Add a delay to allow clicking on search results
    setTimeout(() => {
      if (document.activeElement?.tagName !== 'BUTTON') {
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
              categoryFilter={categoryFilter}
              onCategorySelect={handleCategorySelect}
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
