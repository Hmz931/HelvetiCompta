
import React from 'react';

type NoResultsProps = {
  searchQuery: string;
};

const NoResults = ({ searchQuery }: NoResultsProps) => {
  return (
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
  );
};

export default NoResults;
