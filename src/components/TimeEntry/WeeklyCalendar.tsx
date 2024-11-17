import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

interface DayData {
  date: number;
  hours: number;
  isToday: boolean;
  isWeekend: boolean;
}

function generateWeekDays(): DayData[] {
  const today = new Date();
  const currentDay = today.getDay();
  const monday = new Date(today);
  monday.setDate(today.getDate() - (currentDay === 0 ? 6 : currentDay - 1));

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    
    return {
      date: date.getDate(),
      hours: Math.floor(Math.random() * 4) + 6, // Simulation d'heures
      isToday: date.toDateString() === today.toDateString(),
      isWeekend: index >= 5
    };
  });
}

export default function WeeklyCalendar() {
  const weekDays = generateWeekDays();
  const currentDate = new Date();
  const currentWeek = Math.ceil((currentDate.getDate() + currentDate.getDay()) / 7);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Planning hebdomadaire</h2>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-medium">Janvier 2024 - S{currentWeek.toString().padStart(2, '0')}</span>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center font-medium text-gray-600 py-2">
            {day}
          </div>
        ))}
        
        {weekDays.map((day, index) => (
          <div
            key={index}
            className={`
              aspect-square border rounded-lg p-2 cursor-pointer
              ${day.isToday ? 'border-purple-500 bg-purple-50' : 'border-gray-200'}
              ${day.isWeekend ? 'bg-gray-50' : 'hover:bg-purple-50'}
            `}
          >
            <div className={`font-medium ${day.isToday ? 'text-purple-600' : 'text-gray-900'}`}>
              {day.date}
            </div>
            <div className={`mt-1 text-xs ${day.isToday ? 'text-purple-600' : 'text-gray-600'}`}>
              {day.hours}h
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}