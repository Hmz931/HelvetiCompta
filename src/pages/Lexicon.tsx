
import React, { useState, useEffect, useCallback } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import { Search, BookOpen, ChevronDown, ChevronUp, Tag, Filter, Hash, Book } from 'lucide-react';
import { lexiconTerms, lexiconAbbreviations } from '../data/lexiconTerms';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const Lexicon = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTerms, setExpandedTerms] = useState<Record<string, boolean>>({});
  const [expandedAbbreviations, setExpandedAbbreviations] = useState<Record<string, boolean>>({});
  const [filteredTerms, setFilteredTerms] = useState(lexiconTerms);
  const [filteredAbbreviations, setFilteredAbbreviations] = useState(lexiconAbbreviations);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('terms');

  // Get all categories and tags
  const termCategories = Array.from(new Set(lexiconTerms.map(term => term.category)));
  const abbrevCategories = Array.from(new Set(lexiconAbbreviations.map(abbr => abbr.category)));
  const allCategories = Array.from(new Set([...termCategories, ...abbrevCategories]));
  
  const allTags = Array.from(new Set(lexiconTerms.flatMap(term => 
    term.example ? [term.category] : [term.category]
  )));

  // Filter content based on search and filters
  const filterContent = useCallback(() => {
    // Filter terms
    let termsResult = lexiconTerms;
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      termsResult = termsResult.filter(term => 
        term.title.toLowerCase().includes(searchLower) || 
        term.definition.toLowerCase().includes(searchLower)
      );
    }
    
    if (selectedCategory) {
      termsResult = termsResult.filter(term => term.category === selectedCategory);
    }
    
    setFilteredTerms(termsResult);

    // Filter abbreviations
    let abbrevResults = lexiconAbbreviations;
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      abbrevResults = abbrevResults.filter(abbr => 
        abbr.abbreviation.toLowerCase().includes(searchLower) || 
        abbr.fullName.toLowerCase().includes(searchLower)
      );
    }
    
    if (selectedCategory) {
      abbrevResults = abbrevResults.filter(abbr => abbr.category === selectedCategory);
    }
    
    setFilteredAbbreviations(abbrevResults);
  }, [searchTerm, selectedCategory, selectedTags]);

  // Apply filters whenever search or filter options change
  useEffect(() => {
    filterContent();
  }, [filterContent, searchTerm, selectedCategory, selectedTags]);

  const toggleTermExpansion = (id: number) => {
    setExpandedTerms(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleAbbreviationExpansion = (id: number) => {
    setExpandedAbbreviations(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTags([]);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const getCategoryLabel = (category: string) => {
    const categoryMap: Record<string, string> = {
      'general': 'Général',
      'fiscal': 'Fiscalité',
      'accounting': 'Comptabilité',
      'legal': 'Juridique'
    };
    return categoryMap[category] || category;
  };

  const noResultsFound = 
    (activeTab === 'terms' && filteredTerms.length === 0) || 
    (activeTab === 'abbreviations' && filteredAbbreviations.length === 0);

  return (
    <div className="animate-fade-in">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mb-6">Lexique Comptable Suisse</h1>
      
      <div className="glass rounded-xl p-6 shadow-card mb-10">
        <div className="flex items-start">
          <div className="mr-4 bg-swiss-blue/10 p-2 rounded-md text-swiss-blue mt-1">
            <BookOpen size={24} />
          </div>
          <div>
            <p className="text-lg mb-2">
              Définitions des termes spécifiques à la comptabilité suisse
            </p>
            <p className="text-swiss-text-secondary">
              Ce lexique présente les définitions des termes, concepts et abréviations essentiels de la comptabilité en Suisse.
              Utilisez la recherche ou les filtres pour trouver rapidement les informations dont vous avez besoin.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full py-2 px-4 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-swiss-blue/30"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 py-2 px-4 bg-swiss-blue/10 rounded-lg hover:bg-swiss-blue/20 transition-colors"
          >
            <Filter size={18} />
            <span>Filtres</span>
            {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
        
        {showFilters && (
          <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="font-semibold mb-2 md:mb-0">Filtrer par catégorie</h3>
              <button 
                onClick={clearFilters}
                className="text-sm text-swiss-blue hover:underline"
              >
                Effacer les filtres
              </button>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Catégories</h4>
              <div className="flex flex-wrap gap-2">
                {allCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category === selectedCategory ? '' : category)}
                    className={`text-sm py-1 px-3 rounded-full flex items-center ${
                      selectedCategory === category 
                        ? 'bg-swiss-blue text-white' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <Tag size={12} className="mr-1" />
                    {getCategoryLabel(category)}
                  </button>
                ))}
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`text-sm py-1 px-3 rounded-full flex items-center ${
                    selectedCategory === '' 
                      ? 'bg-swiss-blue text-white' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <Tag size={12} className="mr-1" />
                  Toutes les catégories
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="terms" className="flex items-center gap-2">
            <Book className="h-4 w-4" />
            <span>Termes ({filteredTerms.length})</span>
          </TabsTrigger>
          <TabsTrigger value="abbreviations" className="flex items-center gap-2">
            <Hash className="h-4 w-4" />
            <span>Abréviations ({filteredAbbreviations.length})</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="terms" className="mt-0">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">Aucun terme ne correspond à votre recherche</p>
              <button 
                onClick={clearFilters}
                className="mt-4 text-swiss-blue hover:underline"
              >
                Effacer les filtres
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTerms.map(term => (
                <div key={term.id} className="glass rounded-xl p-5 shadow-card">
                  <div 
                    className="flex justify-between items-start cursor-pointer"
                    onClick={() => toggleTermExpansion(term.id)}
                  >
                    <div>
                      <h2 className="text-xl font-semibold text-swiss-blue">{term.title}</h2>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <span className={cn(
                          "rounded-full px-2 py-0.5",
                          term.category === 'general' && "bg-gray-100",
                          term.category === 'fiscal' && "bg-blue-100 text-blue-700",
                          term.category === 'accounting' && "bg-green-100 text-green-700",
                          term.category === 'legal' && "bg-purple-100 text-purple-700"
                        )}>
                          {getCategoryLabel(term.category)}
                        </span>
                      </div>
                    </div>
                    <button 
                      className="text-gray-400 hover:text-swiss-blue mt-1"
                      aria-label={expandedTerms[term.id] ? "Réduire" : "Développer"}
                    >
                      {expandedTerms[term.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                  
                  {expandedTerms[term.id] && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-swiss-text-secondary">{term.definition}</p>
                      {term.example && (
                        <div className="mt-3 bg-gray-50 p-3 rounded-md">
                          <span className="font-medium">Exemple:</span> {term.example}
                        </div>
                      )}
                      {term.links && term.links.length > 0 && (
                        <div className="mt-3">
                          <span className="font-medium">Références:</span>
                          <ul className="mt-1 space-y-1">
                            {term.links.map((link, index) => (
                              <li key={index}>
                                <a 
                                  href={link.url} 
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-swiss-blue hover:underline flex items-center"
                                >
                                  {link.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="abbreviations" className="mt-0">
          {filteredAbbreviations.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">Aucune abréviation ne correspond à votre recherche</p>
              <button 
                onClick={clearFilters}
                className="mt-4 text-swiss-blue hover:underline"
              >
                Effacer les filtres
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredAbbreviations.map(abbr => (
                <div key={abbr.id} className="glass rounded-xl p-5 shadow-card">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xl font-semibold text-swiss-blue">{abbr.abbreviation}</span>
                      <span className="hidden md:inline text-gray-400">•</span>
                      <span className="text-swiss-text-secondary">{abbr.fullName}</span>
                    </div>
                    <span className={cn(
                      "text-xs rounded-full px-2 py-1",
                      abbr.category === 'general' && "bg-gray-100",
                      abbr.category === 'fiscal' && "bg-blue-100 text-blue-700",
                      abbr.category === 'accounting' && "bg-green-100 text-green-700",
                      abbr.category === 'legal' && "bg-purple-100 text-purple-700"
                    )}>
                      {getCategoryLabel(abbr.category)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Lexicon;
