
import React from 'react';
import { Search } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  // If we have a selected account or search results, show them
  if (searchResults.length > 0 || selectedAccount) {
    return (
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
                  accounts
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
                      onClick={() => onAccountSelect(account.number)} 
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
    );
  }
  
  // If we have a category filter but no search term, show accounts in that category
  if (categoryFilter && searchTerm === '') {
    return (
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
                {accounts
                  .filter(account => account.number.startsWith(categoryFilter))
                  .slice(0, 20)
                  .map((account, index) => (
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
                  ))}
                {accounts.filter(account => account.number.startsWith(categoryFilter)).length > 20 && (
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
    );
  }
  
  // If no search is being done, show the empty state
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
      </CardContent>
    </Card>
  );
};

export default ResultsDisplay;
