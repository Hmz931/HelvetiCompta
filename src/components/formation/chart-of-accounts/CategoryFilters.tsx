
import React from 'react';

interface CategoryFiltersProps {
  categoryFilter: string | null;
  onCategorySelect: (category: string) => void;
}

const CategoryFilters = ({ categoryFilter, onCategorySelect }: CategoryFiltersProps) => {
  // Categories of the Swiss chart of accounts
  const categories = [
    { id: '1', name: 'Actifs' },
    { id: '2', name: 'Passifs' },
    { id: '3', name: 'Revenus' },
    { id: '4', name: 'Charges de matériel' },
    { id: '5', name: 'Charges de personnel' },
    { id: '6', name: 'Autres charges d\'exploitation' },
    { id: '7', name: 'Résultats des activités annexes' },
    { id: '8', name: 'Résultats hors exploitation' },
    { id: '9', name: 'Clôture' },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategorySelect(category.id)}
          className={`px-3 py-2 text-sm rounded-md flex items-center gap-1 transition-colors ${
            categoryFilter === category.id
              ? 'bg-swiss-blue text-white shadow-sm'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          <span className="font-mono font-medium">{category.id}</span>
          <span className="hidden sm:inline">- {category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
