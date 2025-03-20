
import React, { useState } from 'react';
import { Search, FileText } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Account {
  number: string;
  title: string;
}

interface ResultsDisplayProps {
  searchResults: Account[];
  selectedAccount: string | null;
  categoryFilter: string | null;
  onAccountSelect: (accountNumber: string) => void;
  searchTerm: string;
  accounts: Account[];
}

const ResultsDisplay = ({
  searchResults,
  selectedAccount,
  categoryFilter,
  onAccountSelect,
  searchTerm,
  accounts
}: ResultsDisplayProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryFilter);
  const [tableSearchTerm, setTableSearchTerm] = useState('');
  
  // Catégories de comptes regroupées par leur premier chiffre
  const accountCategories = React.useMemo(() => {
    const categories: Record<string, string> = {
      '1': 'Actifs',
      '2': 'Passifs',
      '3': 'Revenus',
      '4': 'Charges de matériel',
      '5': 'Charges de personnel',
      '6': 'Autres charges d\'exploitation',
      '7': 'Résultats des activités annexes',
      '8': 'Résultats hors exploitation',
      '9': 'Clôture',
    };
    
    return categories;
  }, []);
  
  // Filtrer les comptes en fonction de la catégorie active et du terme de recherche dans le tableau
  const filteredAccounts = React.useMemo(() => {
    // Si un compte est sélectionné, ne montrer que celui-là
    if (selectedAccount) {
      return accounts.filter(account => account.number === selectedAccount);
    }
    
    // Si la recherche principale a des résultats, les utiliser
    let baseAccounts = searchResults.length > 0 ? searchResults : [];
    
    // Si pas de résultats principaux mais une catégorie active, filtrer par catégorie
    if (baseAccounts.length === 0 && activeCategory) {
      baseAccounts = accounts.filter(account => account.number.startsWith(activeCategory));
    }
    
    // Si recherche dans le tableau, filtrer davantage
    if (tableSearchTerm) {
      return baseAccounts.filter(
        account => 
          account.number.toLowerCase().includes(tableSearchTerm.toLowerCase()) || 
          account.title.toLowerCase().includes(tableSearchTerm.toLowerCase())
      );
    }
    
    return baseAccounts;
  }, [selectedAccount, searchResults, activeCategory, accounts, tableSearchTerm]);
  
  // Calculer la pagination
  const totalPages = Math.ceil(filteredAccounts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedAccounts = filteredAccounts.slice(startIndex, startIndex + itemsPerPage);
  
  // Gérer le changement de page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  // Gérer le changement de catégorie
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1); // Retourner à la première page lors du changement de catégorie
    setTableSearchTerm(''); // Réinitialiser la recherche dans le tableau
  };
  
  // Si nous avons un compte sélectionné, des résultats de recherche ou un filtre de catégorie
  if (searchResults.length > 0 || selectedAccount || activeCategory) {
    return (
      <Card className="shadow-md border-0 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-swiss-blue/15 to-swiss-blue/5 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <CardTitle className="text-2xl font-bold text-swiss-dark">
              {selectedAccount 
                ? 'Compte sélectionné' 
                : searchResults.length > 0 
                  ? 'Résultats de recherche' 
                  : `Comptes de la catégorie ${activeCategory} - ${accountCategories[activeCategory || '']}`}
            </CardTitle>
            
            {!selectedAccount && (
              <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input
                    placeholder="Filtrer les résultats..."
                    value={tableSearchTerm}
                    onChange={(e) => {
                      setTableSearchTerm(e.target.value);
                      setCurrentPage(1); // Réinitialiser la page lors d'une nouvelle recherche
                    }}
                    className="pl-9 pr-4 w-full"
                  />
                </div>
                
                <Select value={activeCategory || '0'} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(accountCategories).map(([key, value]) => (
                      <SelectItem key={key} value={key}>
                        {key} - {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
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
                  accounts
                    .filter(account => account.number === selectedAccount)
                    .map(account => (
                      <TableRow key={account.number} className="bg-blue-50/50">
                        <TableCell className="font-mono font-medium">{account.number}</TableCell>
                        <TableCell>{account.title}</TableCell>
                      </TableRow>
                    ))
                ) : paginatedAccounts.length > 0 ? (
                  paginatedAccounts.map((account, index) => (
                    <TableRow 
                      key={account.number} 
                      onClick={() => onAccountSelect(account.number)} 
                      className={`cursor-pointer hover:bg-gray-50 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                      }`}
                    >
                      <TableCell className="font-mono font-medium">{account.number}</TableCell>
                      <TableCell>{account.title}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={2} className="text-center py-8 text-gray-500">
                      Aucun compte trouvé
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          
          {/* Contrôles de pagination */}
          {!selectedAccount && filteredAccounts.length > itemsPerPage && (
            <div className="mt-4 flex justify-between items-center px-4">
              <div className="text-sm text-gray-500">
                Affichage de {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredAccounts.length)} sur {filteredAccounts.length} comptes
              </div>
              
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                    />
                  </PaginationItem>
                  
                  {[...Array(Math.min(5, totalPages))].map((_, index) => {
                    let pageNumber: number;
                    
                    // Logique pour déterminer quels numéros de page afficher
                    if (totalPages <= 5) {
                      pageNumber = index + 1;
                    } else if (currentPage <= 3) {
                      pageNumber = index + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNumber = totalPages - 4 + index;
                    } else {
                      pageNumber = currentPage - 2 + index;
                    }
                    
                    if (pageNumber <= totalPages) {
                      return (
                        <PaginationItem key={pageNumber}>
                          <PaginationLink 
                            isActive={currentPage === pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                          >
                            {pageNumber}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    }
                    return null;
                  })}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              
              <Select value={itemsPerPage.toString()} onValueChange={(value) => {
                setItemsPerPage(Number(value));
                setCurrentPage(1);
              }}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Par page" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }
  
  // Si aucune recherche ou sélection de catégorie n'est effectuée, afficher l'état vide
  return (
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
        
        <div className="mt-6 flex flex-col items-center">
          <h4 className="font-medium mb-2">Ou sélectionnez une catégorie de comptes</h4>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
            {Object.entries(accountCategories).map(([key, value]) => (
              <button
                key={key}
                onClick={() => handleCategoryChange(key)}
                className="px-3 py-2 text-sm rounded-md flex items-center gap-1 transition-colors bg-gray-100 hover:bg-gray-200 text-gray-700"
              >
                <span className="font-mono font-medium">{key}</span>
                <span>- {value}</span>
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsDisplay;
