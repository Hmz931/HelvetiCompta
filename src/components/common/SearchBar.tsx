
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch?: (term: string) => void;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  autoSearch?: boolean;
}

const SearchBar = ({ 
  onSearch, 
  value, 
  onChange, 
  placeholder = "Rechercher...",
  className = "",
  autoSearch = false
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  
  const isControlled = value !== undefined && onChange !== undefined;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    if (isControlled) {
      onChange(newValue);
    } else {
      setSearchTerm(newValue);
    }
    
    // Auto search after typing (for more responsive search)
    if (autoSearch && onSearch && newValue.trim().length >= 2) {
      const timer = setTimeout(() => {
        onSearch(newValue);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const term = isControlled ? value : searchTerm;
    console.log('Searching for:', term);
    
    if (onSearch) {
      onSearch(term);
    }
  };
  
  return (
    <form 
      onSubmit={handleSearch} 
      className={`relative flex items-center transition-all duration-300 ${
        isFocused 
          ? 'bg-white shadow-subtle ring-2 ring-swiss-blue/20' 
          : 'bg-swiss-muted'
      } rounded-full overflow-hidden max-w-xs w-full ${className}`}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={isControlled ? value : searchTerm}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="py-2 px-4 pr-10 w-full bg-transparent border-none focus:ring-0 focus:outline-none text-sm"
      />
      <button
        type="submit"
        className="absolute right-2 p-1 text-gray-500 hover:text-swiss-blue transition-colors"
      >
        <Search size={18} />
      </button>
    </form>
  );
};

export default SearchBar;
