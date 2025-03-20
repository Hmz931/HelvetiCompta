
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList
} from "@/components/ui/command";

interface Account {
  number: string;
  title: string;
}

interface SearchInterfaceProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  searchResults: Account[];
  isSearching: boolean;
  onAccountSelect: (accountNumber: string) => void;
}

const SearchInterface = ({
  searchTerm,
  onSearchChange,
  onFocus,
  onBlur,
  searchResults,
  isSearching,
  onAccountSelect
}: SearchInterfaceProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      <Input
        type="text"
        placeholder="Rechercher par numéro ou titre de compte..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 w-full border-gray-300 focus:border-swiss-blue focus:ring-swiss-blue/30"
        onFocus={onFocus}
        onBlur={onBlur}
      />
      
      {isSearching && searchResults.length > 0 && (
        <div className="mt-2 bg-white rounded-md shadow-lg border border-gray-200 absolute z-50 w-full max-w-2xl">
          <Command className="rounded-lg border shadow-md">
            <CommandList>
              <CommandEmpty>Aucun résultat trouvé</CommandEmpty>
              <CommandGroup heading="Résultats de la recherche">
                {searchResults.slice(0, 10).map((account) => (
                  <CommandItem
                    key={account.number}
                    onSelect={() => onAccountSelect(account.number)}
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
    </div>
  );
};

export default SearchInterface;
