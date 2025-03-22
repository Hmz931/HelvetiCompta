
import React from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface AccountsSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
}

const AccountsSearch = ({
  searchTerm,
  onSearchChange,
  placeholder = "Rechercher par numéro ou titre de compte..."
}: AccountsSearchProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 w-full border-gray-300 focus:border-swiss-blue focus:ring-swiss-blue/30"
      />
      <div className="text-xs text-gray-500 mt-1">
        Conseil: La recherche fonctionne avec ou sans accents (ex: "Genève" ou "Geneve") et pour les numéros de compte (ex: "100", "280")
      </div>
    </div>
  );
};

export default AccountsSearch;
