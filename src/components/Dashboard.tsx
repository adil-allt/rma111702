import React from 'react';
import { BarChart, Clock, Users, Briefcase } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    label: 'Heures totales',
    value: '164,5',
    change: '+12,5%',
    changeType: 'positive',
  },
  {
    icon: Briefcase,
    label: 'Projets actifs',
    value: '23',
    change: '+2',
    changeType: 'positive',
  },
  {
    icon: Users,
    label: 'Membres',
    value: '20',
    change: '0',
    changeType: 'neutral',
  },
  {
    icon: BarChart,
    label: "Taux d'efficacité",
    value: '94%',
    change: '+2,3%',
    changeType: 'positive',
  },
];

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-500">Bienvenue ! Voici une vue d'ensemble du bureau d'études.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-50 rounded-lg">
                <stat.icon className="w-6 h-6 text-purple-600" />
              </div>
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' :
                stat.changeType === 'negative' ? 'text-red-600' :
                'text-gray-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Activités récentes</h2>
          {/* Tableau des activités à venir */}
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">État des projets</h2>
          {/* Graphique d'état des projets à venir */}
        </div>
      </div>
    </div>
  );
}