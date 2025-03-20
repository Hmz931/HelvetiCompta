import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Book, FileText, Database, Laptop, BookOpen, Award, List, Map, Search, X } from 'lucide-react';
import { lexiconTerms } from '@/data/lexiconTerms';
import { glossaryTerms } from '@/data/glossaryTerms';
import SearchBar from '@/components/common/SearchBar';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{ title: string; path: string; excerpt: string; source: string }>>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }
    
    setIsSearching(true);
    
    const query = searchQuery.toLowerCase();
    const results = [];
    
    for (const term of lexiconTerms) {
      if (
        term.title.toLowerCase().includes(query) ||
        term.definition.toLowerCase().includes(query) ||
        (term.example && term.example.toLowerCase().includes(query))
      ) {
        results.push({
          title: term.title,
          path: `/lexique?term=${encodeURIComponent(term.title)}`,
          excerpt: highlightText(term.definition, query, 150),
          source: 'Lexique'
        });
      }
    }
    
    for (const term of glossaryTerms) {
      if (
        term.title.toLowerCase().includes(query) ||
        term.definition.toLowerCase().includes(query) ||
        (term.example && term.example.toLowerCase().includes(query))
      ) {
        results.push({
          title: term.title,
          path: `/lexique?term=${encodeURIComponent(term.title)}`,
          excerpt: highlightText(term.definition, query, 150),
          source: 'Lexique'
        });
      }
    }
    
    setSearchResults(results);
  }, [searchQuery]);
  
  const highlightText = (text: string, query: string, maxLength: number): string => {
    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) {
      return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    }
    
    const start = Math.max(0, index - 50);
    const end = Math.min(text.length, index + query.length + 50);
    
    let excerpt = '';
    if (start > 0) {
      excerpt += '...';
    }
    
    excerpt += text.substring(start, end);
    
    if (end < text.length) {
      excerpt += '...';
    }
    
    return excerpt;
  };
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };
  
  return (
    <div className="animate-fade-in">
      <section className="mb-16">
        <div className="glass rounded-xl p-10 text-center relative overflow-hidden shadow-card">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-swiss-blue">HelvetiCompta</h1>
            <p className="text-xl text-swiss-text-secondary max-w-3xl mx-auto mb-8">
              Ressources complètes pour maîtriser la comptabilité suisse et les logiciels associés
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="relative">
                <SearchBar 
                  value={searchQuery}
                  onChange={setSearchQuery}
                  onSearch={handleSearch}
                  placeholder="Rechercher dans HelvetiCompta..."
                  className="w-full py-1 px-0"
                />
                {searchQuery && (
                  <button 
                    onClick={clearSearch}
                    className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {isSearching && searchResults.length > 0 ? (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 border-b pb-2">Résultats de recherche pour "{searchQuery}"</h2>
          <div className="space-y-6">
            {searchResults.map((result, index) => (
              <Link 
                to={result.path} 
                key={`${result.title}-${index}`}
                className="block glass rounded-xl p-5 shadow-card hover:shadow-lg transition-all"
              >
                <div className="flex items-start">
                  <div className="bg-swiss-blue/10 text-swiss-blue p-2 rounded-lg mr-4 mt-1">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{result.title}</h3>
                    <p className="text-swiss-text-secondary mt-1" 
                       dangerouslySetInnerHTML={{ 
                         __html: result.excerpt.replace(
                           new RegExp(searchQuery, 'gi'), 
                           match => `<span class="bg-yellow-100 text-swiss-dark font-medium">${match}</span>`
                         ) 
                       }} 
                    />
                    <div className="mt-2 text-sm text-gray-500">
                      Source: {result.source}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : isSearching && searchResults.length === 0 ? (
        <section className="mb-16">
          <div className="text-center py-8">
            <h2 className="text-lg font-medium text-gray-500 mb-2">
              Aucun résultat trouvé pour "{searchQuery}"
            </h2>
            <p className="text-gray-500">
              Essayez d'autres termes ou consultez nos ressources ci-dessous.
            </p>
          </div>
        </section>
      ) : (
        <>
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 border-b pb-2">Ressources Principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/formation" className="glass rounded-xl p-6 shadow-card transition-all hover:shadow-lg group">
                <div className="flex items-center mb-4">
                  <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg mr-4 group-hover:bg-swiss-blue group-hover:text-white transition-colors">
                    <Book size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Formation Comptable</h3>
                </div>
                <p className="text-swiss-text-secondary">
                  Cours détaillés sur la comptabilité suisse, les normes et les pratiques.
                </p>
              </Link>

              <Link to="/abacus" className="glass rounded-xl p-6 shadow-card transition-all hover:shadow-lg group">
                <div className="flex items-center mb-4">
                  <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg mr-4 group-hover:bg-swiss-blue group-hover:text-white transition-colors">
                    <Database size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Documentation Abacus</h3>
                </div>
                <p className="text-swiss-text-secondary">
                  Guides et tutoriels pour utiliser efficacement le logiciel Abacus.
                </p>
              </Link>

              <Link to="/yooz" className="glass rounded-xl p-6 shadow-card transition-all hover:shadow-lg group">
                <div className="flex items-center mb-4">
                  <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg mr-4 group-hover:bg-swiss-blue group-hover:text-white transition-colors">
                    <Laptop size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Documentation Yooz</h3>
                </div>
                <p className="text-swiss-text-secondary">
                  Tout ce qu'il faut savoir sur la solution de dématérialisation Yooz.
                </p>
              </Link>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 border-b pb-2">Outils et Ressources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/templates" className="glass rounded-xl p-6 shadow-card transition-all hover:shadow-lg group">
                <div className="flex items-center mb-4">
                  <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg mr-4 group-hover:bg-swiss-blue group-hover:text-white transition-colors">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Templates et Documents</h3>
                </div>
                <p className="text-swiss-text-secondary">
                  Modèles de documents comptables prêts à l'emploi.
                </p>
              </Link>

              <Link to="/lexique" className="glass rounded-xl p-6 shadow-card transition-all hover:shadow-lg group">
                <div className="flex items-center mb-4">
                  <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg mr-4 group-hover:bg-swiss-blue group-hover:text-white transition-colors">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Lexique Comptable</h3>
                </div>
                <p className="text-swiss-text-secondary">
                  Définitions des termes spécifiques à la comptabilité suisse.
                </p>
              </Link>

              <Link to="/formation/chart-of-accounts" className="glass rounded-xl p-6 shadow-card transition-all hover:shadow-lg group">
                <div className="flex items-center mb-4">
                  <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg mr-4 group-hover:bg-swiss-blue group-hover:text-white transition-colors">
                    <List size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Plan Comptable Suisse</h3>
                </div>
                <p className="text-swiss-text-secondary">
                  Structure normalisée des comptes pour la comptabilité suisse.
                </p>
              </Link>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 border-b pb-2">Ressources Spéciales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/ressources/carte" className="glass rounded-xl p-6 shadow-card transition-all hover:shadow-lg group">
                <div className="flex items-center mb-4">
                  <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg mr-4 group-hover:bg-swiss-blue group-hover:text-white transition-colors">
                    <Map size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Carte Interactive</h3>
                </div>
                <p className="text-swiss-text-secondary">
                  Explorez les cantons suisses et leurs spécificités comptables et fiscales.
                </p>
              </Link>
              
              <Link to="/formation/quiz" className="glass rounded-xl p-6 shadow-card transition-all hover:shadow-lg group">
                <div className="flex items-center mb-4">
                  <div className="bg-swiss-blue/10 text-swiss-blue p-3 rounded-lg mr-4 group-hover:bg-swiss-blue group-hover:text-white transition-colors">
                    <Award size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Quiz et Tests</h3>
                </div>
                <p className="text-swiss-text-secondary">
                  Testez vos connaissances en comptabilité suisse avec nos quiz interactifs.
                </p>
              </Link>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 border-b pb-2">Nos Partenaires</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="flex flex-col items-center">
                <img 
                  src="/assets/images/abacus-logo.png" 
                  alt="Abacus Software" 
                  className="h-16 w-auto object-contain mb-2" 
                />
                <span className="text-sm text-swiss-text-secondary">Solutions ERP</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/assets/images/yooz-logo.png" 
                  alt="Yooz" 
                  className="h-16 w-auto object-contain mb-2" 
                />
                <span className="text-sm text-swiss-text-secondary">Dématérialisation</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/assets/images/uneo-logo.png" 
                  alt="Cabinet Fiduciaire" 
                  className="h-16 w-auto object-contain mb-2" 
                />
                <span className="text-sm text-swiss-text-secondary">Expertise Comptable</span>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Index;
