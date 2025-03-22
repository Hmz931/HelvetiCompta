
import React from 'react';
import { Search, FileText, BookOpen, HelpCircle, Hash, BookMarked } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

type NoResultsProps = {
  searchQuery: string;
};

const NoResults = ({ searchQuery }: NoResultsProps) => {
  const navigate = useNavigate();
  
  // Check if the search query might be related to an account number
  const isLikelyAccountNumber = /^\d{2,5}$/.test(searchQuery.trim());
  
  // Check if query might be related to financial statements or tax
  const isLikelyFinancial = /bilan|états financiers|compte de résultat|trésorerie/i.test(searchQuery);
  const isLikelyTax = /tva|taxe|impôt|fiscal/i.test(searchQuery);
  
  // Get individual search terms for suggestions
  const searchTerms = searchQuery.split(/\s+/).filter(term => term.length > 2);
  
  // Handle navigation with a function to ensure proper routing
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  
  return (
    <section className="mb-16">
      <div className="text-center py-8">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-gray-100 p-3">
            <Search size={24} className="text-gray-400" />
          </div>
        </div>
        <h2 className="text-lg font-medium text-gray-500 mb-2">
          Aucun résultat trouvé pour "{searchQuery}"
        </h2>
        
        {searchTerms.length > 1 && (
          <div className="mb-6">
            <p className="text-gray-500 mb-2">
              Essayez de rechercher individuellement avec ces termes :
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {searchTerms.map(term => (
                <Link 
                  key={term}
                  to={`/?search=${encodeURIComponent(term)}`}
                  className="px-3 py-1 bg-swiss-muted text-swiss-blue rounded-full text-sm hover:bg-swiss-blue/10"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        )}
        
        <p className="text-gray-500 mb-8">
          Essayez d'autres termes ou consultez nos ressources ci-dessous.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {isLikelyAccountNumber && (
              <div 
                onClick={() => handleNavigate("/formation/chart-of-accounts")}
                className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-swiss-blue/50 hover:shadow-md transition-all cursor-pointer"
              >
                <Hash size={24} className="text-indigo-600 mb-2" />
                <h3 className="font-medium mb-1">Plan comptable</h3>
                <p className="text-sm text-gray-500 text-center">
                  Consultez notre plan comptable pour trouver le compte {searchQuery}
                </p>
              </div>
            )}
            
            {isLikelyFinancial && (
              <div 
                onClick={() => handleNavigate("/formation?course=financial-statements")}
                className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-swiss-blue/50 hover:shadow-md transition-all cursor-pointer"
              >
                <BookMarked size={24} className="text-swiss-blue mb-2" />
                <h3 className="font-medium mb-1">États financiers</h3>
                <p className="text-sm text-gray-500 text-center">
                  Consultez notre module sur les états financiers
                </p>
              </div>
            )}
            
            {isLikelyTax && (
              <div 
                onClick={() => handleNavigate("/formation?course=tax")}
                className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-swiss-blue/50 hover:shadow-md transition-all cursor-pointer"
              >
                <BookMarked size={24} className="text-swiss-blue mb-2" />
                <h3 className="font-medium mb-1">TVA et fiscalité</h3>
                <p className="text-sm text-gray-500 text-center">
                  Consultez notre module sur la TVA et la fiscalité
                </p>
              </div>
            )}
            
            <div 
              onClick={() => handleNavigate("/lexique")}
              className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-swiss-blue/50 hover:shadow-md transition-all cursor-pointer"
            >
              <FileText size={24} className="text-teal-600 mb-2" />
              <h3 className="font-medium mb-1">Glossaire</h3>
              <p className="text-sm text-gray-500 text-center">
                Consultez notre glossaire de termes comptables
              </p>
            </div>
            
            <div 
              onClick={() => handleNavigate("/formation")}
              className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-swiss-blue/50 hover:shadow-md transition-all cursor-pointer"
            >
              <BookOpen size={24} className="text-swiss-blue mb-2" />
              <h3 className="font-medium mb-1">Formations</h3>
              <p className="text-sm text-gray-500 text-center">
                Explorez nos modules de formation en comptabilité
              </p>
            </div>
            
            <div 
              onClick={() => handleNavigate("/formation/quiz")}
              className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-swiss-blue/50 hover:shadow-md transition-all cursor-pointer"
            >
              <HelpCircle size={24} className="text-swiss-blue mb-2" />
              <h3 className="font-medium mb-1">Quiz</h3>
              <p className="text-sm text-gray-500 text-center">
                Testez vos connaissances en comptabilité
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoResults;
