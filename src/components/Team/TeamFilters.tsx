import React from 'react';
import { Search, Filter } from 'lucide-react';

interface TeamFiltersProps {
  onSearch: (query: string) => void;
  onFilterRole: (role: string) => void;
}

export default function TeamFilters({ onSearch, onFilterRole }: TeamFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Rechercher un membre..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      
      <select
        onChange={(e) => onFilterRole(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      >
        <option value="">Tous les rôles</option>
        <option value="pilot">Pilotes</option>
        <option value="designer">Concepteurs</option>
        <option value="intern">Stagiaires</option>
      </select>
    </div>
  );
}