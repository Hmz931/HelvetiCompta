
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // Implement search functionality in the future
  };
  
  return (
    <form 
      onSubmit={handleSearch} 
      className={`relative flex items-center transition-all duration-300 ${
        isFocused 
          ? 'bg-white shadow-subtle ring-2 ring-swiss-blue/20' 
          : 'bg-swiss-muted'
      } rounded-full overflow-hidden max-w-xs w-full`}
    >
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
