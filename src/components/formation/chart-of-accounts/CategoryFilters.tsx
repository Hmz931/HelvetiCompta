
import React from 'react';
import { accountCategories } from '@/data/courses/fullChartOfAccounts';
import { Button } from '@/components/ui/button';

interface CategoryFiltersProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string) => void;
}

const CategoryFilters = ({ selectedCategory, onSelectCategory }: CategoryFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {Object.values(accountCategories).map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          className={`text-sm h-9 ${
            selectedCategory === category.id 
              ? 'bg-swiss-blue text-white' 
              : 'bg-white hover:bg-gray-50'
          }`}
          onClick={() => onSelectCategory(category.id)}
        >
          <span className="font-mono font-medium mr-1">{category.id}</span>
          <span className="hidden sm:inline">- {category.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilters;
