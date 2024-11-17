import React from 'react';
import { Clock, Calendar, Briefcase } from 'lucide-react';
import type { User } from '../../types';

interface TeamMemberCardProps {
  member: User;
  weeklyHours: number;
  monthlyHours: number;
  currentProject?: string;
}

const roleLabels = {
  admin: 'Chef Administratif',
  pilot: 'Pilote',
  designer: 'Concepteur',
  intern: 'Stagiaire'
};

export default function TeamMemberCard({ member, weeklyHours, monthlyHours, currentProject }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-900">{member.name}</h3>
          <span className="text-sm text-purple-600">{roleLabels[member.role]}</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>Cette semaine</span>
          </div>
          <span className="font-medium text-gray-900">{weeklyHours}h</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>Ce mois</span>
          </div>
          <span className="font-medium text-gray-900">{monthlyHours}h</span>
        </div>

        {currentProject && (
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Briefcase className="w-4 h-4" />
              <span>Projet en cours</span>
            </div>
            <span className="font-medium text-gray-900">{currentProject}</span>
          </div>
        )}
      </div>
    </div>
  );
}