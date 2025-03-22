
import React from 'react';
import { Search, FileText } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { normalizeAccents } from '@/utils/searchUtils';

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
  // Highlight the matching part of the text, handling accents
  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const normalizedText = text.toLowerCase();
    const normalizedQuery = normalizeAccents(query.toLowerCase());
    
    // Simple implementation for basic highlighting
    try {
      // Find the index in the normalized text
      const index = normalizeAccents(normalizedText).indexOf(normalizedQuery);
      
      if (index === -1) return text;
      
      // Get the actual matched substring from the original text
      const matchedPart = text.substring(index, index + query.length);
      
      // Replace only the first occurrence to avoid multiple replacements
      return text.replace(
        matchedPart, 
        `<span class="bg-yellow-100 text-swiss-dark font-medium">${matchedPart}</span>`
      );
    } catch (e) {
      // Fallback if regex fails
      return text;
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <div className="relative flex-grow">
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
        </div>
      </div>
      
      {isSearching && searchResults.length > 0 && (
        <div className="mt-2 bg-white rounded-md shadow-lg border border-gray-200 absolute z-50 w-full max-h-[400px] overflow-auto">
          <Command className="rounded-lg border shadow-md">
            <CommandList>
              <CommandEmpty>Aucun résultat trouvé</CommandEmpty>
              <CommandGroup heading="Résultats de la recherche">
                {searchResults.slice(0, 20).map((account) => (
                  <CommandItem
                    key={account.number}
                    onSelect={() => onAccountSelect(account.number)}
                    className="cursor-pointer hover:bg-gray-50"
                  >
                    <FileText className="h-4 w-4 mr-2 text-swiss-blue" />
                    <span className="font-mono mr-2 font-medium">{account.number}</span>
                    <span dangerouslySetInnerHTML={{ 
                      __html: highlightMatch(account.title, searchTerm) 
                    }}></span>
                  </CommandItem>
                ))}
                {searchResults.length > 20 && (
                  <div className="px-2 py-1.5 text-xs text-gray-500 text-center border-t">
                    + {searchResults.length - 20} autres résultats
                  </div>
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      )}
      
      <div className="mt-2 text-sm text-gray-500">
        {searchTerm.trim() !== '' && (
          <p>{searchResults.length} compte(s) trouvé(s)</p>
        )}
        {searchTerm.trim() === '' && !isSearching && (
          <p>Saisissez un numéro ou titre de compte pour commencer la recherche</p>
        )}
      </div>
    </div>
  );
};

export default SearchInterface;
