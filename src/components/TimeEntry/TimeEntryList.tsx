import React from 'react';
import { Clock, Briefcase } from 'lucide-react';

const mockEntries = [
  {
    id: '1',
    project: '10258',
    description: 'DES-ABS-24-11-0557',
    hours: 9.0,
    mode: 'Plateau',
    date: '2024-01-25'
  },
  {
    id: '2',
    activity: 'Formation',
    hours: 7.0,
    date: '2024-01-25'
  }
];

export default function TimeEntryList() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900">Activités récentes</h2>
      </div>
      
      <div className="divide-y divide-gray-100">
        {mockEntries.map(entry => (
          <div key={entry.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <Briefcase className="w-4 h-4" />
                  <span>
                    {entry.project ? `Projet ${entry.project}` : entry.activity}
                  </span>
                </div>
                <p className="text-gray-900">{entry.description}</p>
                {entry.mode && (
                  <p className="text-sm text-gray-500 mt-1">Mode: {entry.mode}</p>
                )}
              </div>
              <div className="flex items-center gap-1 text-purple-600">
                <Clock className="w-4 h-4" />
                <span>{entry.hours}h</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}