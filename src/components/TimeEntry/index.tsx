import React from 'react';
import TimeEntryForm from './TimeEntryForm';
import WeeklyCalendar from './WeeklyCalendar';
import TimeEntryList from './TimeEntryList';

export default function TimeEntryPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Suivi des heures</h1>
        <p className="text-gray-500">Enregistrez et gérez vos heures de travail</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TimeEntryForm />
        <div className="space-y-6">
          <WeeklyCalendar />
          <TimeEntryList />
        </div>
      </div>
    </div>
  );
}