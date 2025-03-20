
import React, { useState, useEffect, useRef } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import { glossaryTerms } from '../data/glossaryTerms';
import { Search, Filter, X } from 'lucide-react';

const Glossary = () => {
  const [filter, setFilter] = useState('');
  const [activeLetterFilter, setActiveLetterFilter] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const clearFilter = () => {
    setFilter('');
    setActiveLetterFilter(null);
  };
  
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filteredTerms = glossaryTerms.filter(term => {
    // Apply text filter
    const matchesText = filter === '' || 
      term.title.toLowerCase().includes(filter.toLowerCase()) ||
      term.definition.toLowerCase().includes(filter.toLowerCase());
    
    // Apply letter filter
    const matchesLetter = !activeLetterFilter || 
      term.title.charAt(0).toUpperCase() === activeLetterFilter;
    
    return matchesText && matchesLetter;
  });
  
  // Sort terms alphabetically
  filteredTerms.sort((a, b) => a.title.localeCompare(b.title));
  
  // Focus on search input when pressing Ctrl+F
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  return (
    <div className="animate-fade-in">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold">Glossaire Comptable Suisse</h1>
        
        <div className="relative flex items-center mt-4 md:mt-0">
          <div className="relative">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Rechercher un terme..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-10 pr-10 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-swiss-blue/20 w-full md:w-64"
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            {filter && (
              <button 
                onClick={clearFilter}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center gap-1 mb-6">
        <span className="text-sm text-swiss-text-secondary mr-2 flex items-center">
          <Filter size={14} className="mr-1" /> Filtrer par initiale:
        </span>
        
        {activeLetterFilter && (
          <button
            onClick={clearFilter}
            className="text-xs px-3 py-1 rounded-md bg-swiss-blue text-white hover:bg-opacity-90 transition-colors mr-2"
          >
            Effacer le filtre <X size={12} className="inline ml-1" />
          </button>
        )}
        
        {alphabet.map(letter => {
          // Check if any terms start with this letter
          const hasTerms = glossaryTerms.some(term => 
            term.title.charAt(0).toUpperCase() === letter
          );
          
          return (
            <button
              key={letter}
              onClick={() => setActiveLetterFilter(activeLetterFilter === letter ? null : letter)}
              className={`w-8 h-8 flex items-center justify-center rounded-md text-sm transition-colors ${
                !hasTerms 
                  ? 'text-gray-300 cursor-not-allowed' 
                  : activeLetterFilter === letter
                    ? 'bg-swiss-blue text-white'
                    : 'hover:bg-swiss-muted'
              }`}
              disabled={!hasTerms}
            >
              {letter}
            </button>
          );
        })}
      </div>
      
      <div className="space-y-6">
        {filteredTerms.map((term) => (
          <div key={term.id} className="glass rounded-xl p-6 shadow-card staggered-item">
            <h3 className="text-xl font-semibold mb-2">{term.title}</h3>
            <p className="text-swiss-text-secondary mb-4">{term.definition}</p>
            {term.example && (
              <div className="bg-swiss-muted p-4 rounded-lg">
                <span className="font-medium text-swiss-blue">Exemple:</span> {term.example}
              </div>
            )}
          </div>
        ))}
        
        {filteredTerms.length === 0 && (
          <div className="text-center py-16">
            <div className="text-swiss-blue mb-4">
              <Search size={48} className="mx-auto mb-4 opacity-50" />
            </div>
            <p className="text-xl font-medium mb-2">Aucun terme trouvé</p>
            <p className="text-swiss-text-secondary">
              Aucun terme ne correspond à votre recherche "{filter}"{activeLetterFilter ? ` avec l'initiale "${activeLetterFilter}"` : ''}.
            </p>
            <button 
              onClick={clearFilter}
              className="mt-4 px-4 py-2 bg-swiss-blue text-white rounded-md hover:bg-opacity-90 transition-colors"
            >
              Effacer les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Glossary;
