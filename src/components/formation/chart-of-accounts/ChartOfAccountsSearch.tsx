
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fullAccountsList } from '@/data/courses/chartOfAccounts';

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
    setCategoryFilter(category === categoryFilter ? null : category);
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
  
  // Categories of the Swiss chart of accounts
  const categories = [
    { id: '1', name: 'Actifs' },
    { id: '2', name: 'Passifs' },
    { id: '3', name: 'Revenus' },
    { id: '4', name: 'Charges de matériel' },
    { id: '5', name: 'Charges de personnel' },
    { id: '6', name: 'Autres charges d\'exploitation' },
    { id: '7', name: 'Résultats des activités annexes' },
    { id: '8', name: 'Résultats hors exploitation' },
    { id: '9', name: 'Clôture' },
  ];
  
  return (
    <div className="space-y-8">
      <Card className="shadow-md border-0 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-swiss-blue/15 to-swiss-blue/5 border-b border-gray-200">
          <CardTitle className="text-2xl font-bold text-swiss-dark">Recherche de comptes</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Rechercher par numéro ou titre de compte..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full border-gray-300 focus:border-swiss-blue focus:ring-swiss-blue/30"
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className={`px-3 py-2 text-sm rounded-md flex items-center gap-1 transition-colors ${
                    categoryFilter === category.id
                      ? 'bg-swiss-blue text-white shadow-sm'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  <span className="font-mono font-medium">{category.id}</span>
                  <span className="hidden sm:inline">- {category.name}</span>
                </button>
              ))}
            </div>
          </div>
        
          {isSearching && searchResults.length > 0 && (
            <div className="mt-2 bg-white rounded-md shadow-lg border border-gray-200 absolute z-50 w-full max-w-2xl">
              <Command className="rounded-lg border shadow-md">
                <CommandList>
                  <CommandEmpty>Aucun résultat trouvé</CommandEmpty>
                  <CommandGroup heading="Résultats de la recherche">
                    {searchResults.slice(0, 10).map((account) => (
                      <CommandItem
                        key={account.number}
                        onSelect={() => handleAccountSelect(account.number)}
                        className="cursor-pointer hover:bg-gray-50"
                      >
                        <span className="font-mono mr-2 font-medium">{account.number}</span>
                        <span>{account.title}</span>
                      </CommandItem>
                    ))}
                    {searchResults.length > 10 && (
                      <div className="px-2 py-1.5 text-xs text-gray-500 text-center border-t">
                        + {searchResults.length - 10} autres résultats
                      </div>
                    )}
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          )}
        </CardContent>
      </Card>
      
      {(searchResults.length > 0 || selectedAccount) && (
        <Card className="shadow-md border-0 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-swiss-blue/15 to-swiss-blue/5 border-b border-gray-200">
            <CardTitle className="text-2xl font-bold text-swiss-dark">Résultats</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 px-0">
            <div className="overflow-hidden rounded-md">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead className="w-24 font-semibold text-swiss-dark">Numéro</TableHead>
                    <TableHead className="font-semibold text-swiss-dark">Titre du compte</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedAccount ? (
                    fullAccountsList
                      .filter(account => account.number === selectedAccount)
                      .map(account => (
                        <TableRow key={account.number} className="bg-blue-50/50">
                          <TableCell className="font-mono font-medium">{account.number}</TableCell>
                          <TableCell>{account.title}</TableCell>
                        </TableRow>
                      ))
                  ) : (
                    searchResults.map((account, index) => (
                      <TableRow 
                        key={account.number} 
                        onClick={() => handleAccountSelect(account.number)} 
                        className={`cursor-pointer hover:bg-gray-50 ${
                          index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                        }`}
                      >
                        <TableCell className="font-mono font-medium">{account.number}</TableCell>
                        <TableCell>{account.title}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}
      
      {categoryFilter && searchResults.length === 0 && searchTerm === '' && (
        <Card className="shadow-md border-0 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-swiss-blue/15 to-swiss-blue/5 border-b border-gray-200">
            <CardTitle className="text-2xl font-bold text-swiss-dark">
              Comptes de la catégorie {categoryFilter}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 px-0">
            <div className="overflow-hidden rounded-md">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead className="w-24 font-semibold text-swiss-dark">Numéro</TableHead>
                    <TableHead className="font-semibold text-swiss-dark">Titre du compte</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fullAccountsList
                    .filter(account => account.number.startsWith(categoryFilter))
                    .slice(0, 20)
                    .map((account, index) => (
                      <TableRow 
                        key={account.number} 
                        onClick={() => handleAccountSelect(account.number)} 
                        className={`cursor-pointer hover:bg-gray-50 ${
                          index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                        }`}
                      >
                        <TableCell className="font-mono font-medium">{account.number}</TableCell>
                        <TableCell>{account.title}</TableCell>
                      </TableRow>
                    ))}
                  {fullAccountsList.filter(account => account.number.startsWith(categoryFilter)).length > 20 && (
                    <TableRow>
                      <TableCell colSpan={2} className="text-center text-sm text-gray-500 py-2">
                        Affichage des 20 premiers résultats. Utilisez la recherche pour affiner les résultats.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}
      
      {searchTerm === '' && !categoryFilter && !selectedAccount && (
        <Card className="shadow-md border-0 overflow-hidden text-center">
          <CardContent className="py-10">
            <div className="w-16 h-16 mx-auto mb-4 text-swiss-blue flex items-center justify-center rounded-full bg-swiss-blue/10">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-medium text-swiss-dark mb-2">Recherchez dans le plan comptable</h3>
            <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
              Saisissez un numéro de compte ou une description pour commencer votre recherche, 
              ou filtrez par catégorie à l'aide des boutons ci-dessus.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ChartOfAccountsSearch;
