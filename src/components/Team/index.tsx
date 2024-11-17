import React, { useState } from 'react';
import TeamMemberCard from './TeamMemberCard';
import TeamFilters from './TeamFilters';
import TeamStats from './TeamStats';
import type { User } from '../../types';

const mockTeamMembers: User[] = [
  {
    id: '1',
    name: 'Bouchra CHOUKRI',
    role: 'designer',
    email: 'b.choukri@descartes.fr'
  },
  {
    id: '2',
    name: 'Hassan SOUFI',
    role: 'pilot',
    email: 'h.soufi@descartes.fr'
  },
  {
    id: '3',
    name: 'Kenza ZIZAH',
    role: 'designer',
    email: 'k.zizah@descartes.fr'
  },
  {
    id: '4',
    name: 'Mohamed CHAIDMY',
    role: 'pilot',
    email: 'm.chaidmy@descartes.fr'
  }
];

const mockMemberHours = {
  '1': { weekly: 35, monthly: 140, project: '10258 - DES-ABS-24-11-0557' },
  '2': { weekly: 38, monthly: 152, project: '10221 - Wheel Arch B1322' },
  '3': { weekly: 32, monthly: 128, project: '10248 - Flexvan' },
  '4': { weekly: 40, monthly: 160, project: '10246 - Wheel Arch SE38x-S16' }
};

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('');

  const filteredMembers = mockTeamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = !roleFilter || member.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Gestion de l'équipe</h1>
        <p className="text-gray-500">Suivi des heures et de l'activité de l'équipe</p>
      </div>

      <TeamStats />

      <TeamFilters
        onSearch={setSearchQuery}
        onFilterRole={setRoleFilter}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMembers.map(member => (
          <TeamMemberCard
            key={member.id}
            member={member}
            weeklyHours={mockMemberHours[member.id].weekly}
            monthlyHours={mockMemberHours[member.id].monthly}
            currentProject={mockMemberHours[member.id].project}
          />
        ))}
      </div>
    </div>
  );
}