
import React from 'react';
import { Search, FileText, BookOpen, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

type NoResultsProps = {
  searchQuery: string;
};

const NoResults = ({ searchQuery }: NoResultsProps) => {
  // Check if the search query might be related to an account number
  const isLikelyAccountNumber = /^\d{2,5}$/.test(searchQuery.trim());
  
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
        <p className="text-gray-500 mb-8">
          Essayez d'autres termes ou consultez nos ressources ci-dessous.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {isLikelyAccountNumber && (
              <Link to="/formation/chart-of-accounts" className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-swiss-blue/50 hover:shadow-md transition-all">
                <BookOpen size={24} className="text-swiss-blue mb-2" />
                <h3 className="font-medium mb-1">Plan comptable</h3>
                <p className="text-sm text-gray-500 text-center">
                  Consultez notre plan comptable pour trouver le compte {searchQuery}
                </p>
              </Link>
            )}
            
            <Link to="/glossary" className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-swiss-blue/50 hover:shadow-md transition-all">
              <FileText size={24} className="text-swiss-blue mb-2" />
              <h3 className="font-medium mb-1">Glossaire</h3>
              <p className="text-sm text-gray-500 text-center">
                Consultez notre glossaire de termes comptables
              </p>
            </Link>
            
            <Link to="/formation" className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-swiss-blue/50 hover:shadow-md transition-all">
              <BookOpen size={24} className="text-swiss-blue mb-2" />
              <h3 className="font-medium mb-1">Formations</h3>
              <p className="text-sm text-gray-500 text-center">
                Explorez nos modules de formation en comptabilité
              </p>
            </Link>
            
            <Link to="/quiz" className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-swiss-blue/50 hover:shadow-md transition-all">
              <HelpCircle size={24} className="text-swiss-blue mb-2" />
              <h3 className="font-medium mb-1">Quiz</h3>
              <p className="text-sm text-gray-500 text-center">
                Testez vos connaissances en comptabilité
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoResults;
