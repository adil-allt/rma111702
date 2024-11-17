import React from 'react';
import { Settings, Users, Calendar, PieChart, Clock, FolderKanban, FileSpreadsheet } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const menuItems = [
  { icon: PieChart, label: 'Tableau de bord', id: 'dashboard' },
  { icon: Clock, label: 'Saisie des heures', id: 'timeEntry' },
  { icon: FileSpreadsheet, label: 'RMA', id: 'rma' },
  { icon: FolderKanban, label: 'Projets', id: 'projects' },
  { icon: Calendar, label: 'Planning', id: 'planning' },
  { icon: Users, label: 'Équipe', id: 'team' },
  { icon: Settings, label: 'Paramètres', id: 'settings' },
];

export default function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  return (
    <div className="w-64 bg-purple-700 text-white p-4">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8">
          <svg viewBox="0 0 24 24" className="fill-current">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <span className="text-xl font-bold">DESCARTES</span>
      </div>
      
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={`flex items-center gap-3 w-full px-4 py-3 text-gray-100 rounded-lg transition-colors ${
              currentPage === item.id ? 'bg-purple-600' : 'hover:bg-purple-600'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}