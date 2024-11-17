import React from 'react';
import { Users, Clock, Briefcase, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Users,
    label: 'Effectif total',
    value: '20',
    detail: '4 pilotes, 13 concepteurs, 2 stagiaires'
  },
  {
    icon: Clock,
    label: 'Heures ce mois',
    value: '3290',
    detail: 'Moyenne : 164,5h/personne'
  },
  {
    icon: Briefcase,
    label: 'Projets actifs',
    value: '23',
    detail: '15 en plateau, 8 en remote'
  },
  {
    icon: TrendingUp,
    label: 'Taux occupation',
    value: '94%',
    detail: '+2,3% vs mois dernier'
  }
];

export default function TeamStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <stat.icon className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-gray-900 font-medium">{stat.label}</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
          <p className="text-sm text-gray-500">{stat.detail}</p>
        </div>
      ))}
    </div>
  );
}