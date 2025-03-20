
import React from 'react';
import { X } from 'lucide-react';
import SearchBar from '@/components/common/SearchBar';

type HomeHeaderProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (query: string) => void;
  clearSearch: () => void;
};

const HomeHeader = ({ searchQuery, setSearchQuery, handleSearch, clearSearch }: HomeHeaderProps) => {
  return (
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
  );
};

export default HomeHeader;
