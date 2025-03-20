
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

type SearchResultItem = {
  title: string;
  path: string;
  excerpt: string;
  source: string;
};

type SearchResultsProps = {
  searchQuery: string;
  searchResults: SearchResultItem[];
};

const SearchResults = ({ searchQuery, searchResults }: SearchResultsProps) => {
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    return text.replace(
      new RegExp(query, 'gi'), 
      match => `<span class="bg-yellow-100 text-swiss-dark font-medium">${match}</span>`
    );
  };

  return (
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
                    __html: highlightText(result.excerpt, searchQuery) 
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
  );
};

export default SearchResults;
