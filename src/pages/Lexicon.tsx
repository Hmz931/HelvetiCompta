
import React, { useState, useEffect, useRef } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import { lexiconTerms } from '../data/lexiconTerms';
import { Search, Filter, X, BookOpen, BookmarkIcon, CheckCircle, HelpCircle } from 'lucide-react';

const Lexicon = () => {
  const [filter, setFilter] = useState('');
  const [activeLetterFilter, setActiveLetterFilter] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const clearFilter = () => {
    setFilter('');
    setActiveLetterFilter(null);
    setActiveCategory(null);
  };
  
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  const categories = [
    { id: 'general', name: 'Général', icon: <BookOpen size={16} /> },
    { id: 'fiscal', name: 'Fiscal', icon: <BookmarkIcon size={16} /> },
    { id: 'accounting', name: 'Comptabilité', icon: <CheckCircle size={16} /> },
    { id: 'all', name: 'Tous', icon: <HelpCircle size={16} /> }
  ];

  const filteredTerms = lexiconTerms.filter(term => {
    // Apply text filter
    const matchesText = filter === '' || 
      term.title.toLowerCase().includes(filter.toLowerCase()) ||
      term.definition.toLowerCase().includes(filter.toLowerCase());
    
    // Apply letter filter
    const matchesLetter = !activeLetterFilter || 
      term.title.charAt(0).toUpperCase() === activeLetterFilter;
    
    // Apply category filter
    const matchesCategory = !activeCategory || activeCategory === 'all' || 
      term.category === activeCategory;
    
    return matchesText && matchesLetter && matchesCategory;
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
        <h1 className="text-3xl font-bold">Lexique Comptable Suisse</h1>
        
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
      
      <div className="bg-swiss-muted p-4 rounded-xl mb-8 glass shadow-sm">
        <p className="text-swiss-text-secondary">
          Ce lexique regroupe les termes essentiels de la comptabilité suisse. Utilisez les filtres pour trouver rapidement la définition recherchée.
        </p>
      </div>
      
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-sm text-swiss-text-secondary flex items-center">
          <Filter size={14} className="mr-1" /> Catégories:
        </span>
        
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
            className={`flex items-center px-3 py-1 rounded-md text-sm transition-colors ${
              activeCategory === category.id
                ? 'bg-swiss-blue text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category.icon} 
            <span className="ml-1">{category.name}</span>
          </button>
        ))}
      </div>
      
      <div className="flex flex-wrap items-center gap-1 mb-6">
        <span className="text-sm text-swiss-text-secondary mr-2 flex items-center">
          <Filter size={14} className="mr-1" /> Filtrer par initiale:
        </span>
        
        {activeLetterFilter && (
          <button
            onClick={() => setActiveLetterFilter(null)}
            className="text-xs px-3 py-1 rounded-md bg-swiss-blue text-white hover:bg-opacity-90 transition-colors mr-2"
          >
            Effacer le filtre <X size={12} className="inline ml-1" />
          </button>
        )}
        
        {alphabet.map(letter => {
          // Check if any terms start with this letter
          const hasTerms = lexiconTerms.some(term => 
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
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-semibold">{term.title}</h3>
              <span className={`ml-3 text-xs px-2 py-1 rounded-full ${
                term.category === 'fiscal' ? 'bg-yellow-100 text-yellow-800' :
                term.category === 'accounting' ? 'bg-blue-100 text-blue-800' :
                'bg-green-100 text-green-800'
              }`}>
                {term.category === 'fiscal' ? 'Fiscal' :
                 term.category === 'accounting' ? 'Comptabilité' :
                 'Général'}
              </span>
            </div>
            <p className="text-swiss-text-secondary mb-4">{term.definition}</p>
            {term.example && (
              <div className="bg-swiss-muted p-4 rounded-lg">
                <span className="font-medium text-swiss-blue">Exemple:</span> {term.example}
              </div>
            )}
            {term.links && term.links.length > 0 && (
              <div className="mt-4 pt-3 border-t border-gray-100">
                <p className="text-sm font-medium text-swiss-blue mb-2">Références:</p>
                <ul className="space-y-1">
                  {term.links.map((link, index) => (
                    <li key={index} className="text-sm">
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-swiss-blue hover:underline flex items-center"
                      >
                        {link.text} <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </a>
                    </li>
                  ))}
                </ul>
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

export default Lexicon;
