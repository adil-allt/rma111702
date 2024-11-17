import React, { useState } from 'react';
import RMAHeader from './RMAHeader';
import RMATable from './RMATable';

const months = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
];

export default function RMAPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleMonthChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const handleYearChange = (direction: 'prev' | 'next') => {
    setCurrentYear(currentYear + (direction === 'prev' ? -1 : 1));
  };

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow">
        <RMAHeader
          currentMonth={months[currentMonth]}
          currentYear={currentYear}
          onMonthChange={handleMonthChange}
          onYearChange={handleYearChange}
        />
        <RMATable
          month={currentMonth + 1}
          year={currentYear}
        />
      </div>
    </div>
  );
}