
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, BookMarked, Hash } from 'lucide-react';

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
  // Fonction pour déterminer l'icône en fonction de la source
  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'Lexique':
        return <FileText size={20} />;
      case 'Plan Comptable':
        return <Hash size={20} />;
      case 'Formation':
        return <BookMarked size={20} />;
      default:
        return <BookOpen size={20} />;
    }
  };

  // Fonction pour déterminer la couleur de l'icône en fonction de la source
  const getSourceColor = (source: string) => {
    switch (source) {
      case 'Lexique':
        return 'bg-teal-100 text-teal-600';
      case 'Plan Comptable':
        return 'bg-indigo-100 text-indigo-600';
      case 'Formation':
        return 'bg-swiss-blue/10 text-swiss-blue';
      default:
        return 'bg-swiss-blue/10 text-swiss-blue';
    }
  };

  // Regrouper les résultats par source
  const groupedResults: { [key: string]: SearchResultItem[] } = {};
  searchResults.forEach(result => {
    if (!groupedResults[result.source]) {
      groupedResults[result.source] = [];
    }
    groupedResults[result.source].push(result);
  });

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Résultats de recherche pour "{searchQuery}"</h2>
      <p className="text-gray-500 mb-6">{searchResults.length} résultat(s) trouvé(s)</p>
      
      {Object.keys(groupedResults).map(source => (
        <div key={source} className="mb-8">
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <span className={`${getSourceColor(source)} p-1.5 rounded-md mr-2`}>
              {getSourceIcon(source)}
            </span>
            {source}
            <span className="text-sm text-gray-500 ml-2">({groupedResults[source].length})</span>
          </h3>
          
          <div className="space-y-4">
            {groupedResults[source].map((result, index) => (
              <Link 
                to={result.path} 
                key={`${result.title}-${index}`}
                className="block glass rounded-xl p-5 shadow-card hover:shadow-lg transition-all"
              >
                <div className="flex items-start">
                  <div className={`${getSourceColor(source)} p-2 rounded-lg mr-4 mt-1 hidden sm:block`}>
                    {getSourceIcon(source)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{result.title}</h3>
                    <p className="text-swiss-text-secondary mt-1" 
                      dangerouslySetInnerHTML={{ 
                        __html: result.excerpt
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
        </div>
      ))}
    </section>
  );
};

export default SearchResults;
