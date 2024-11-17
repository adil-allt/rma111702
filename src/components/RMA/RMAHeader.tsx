import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface RMAHeaderProps {
  currentMonth: string;
  currentYear: number;
  onMonthChange: (direction: 'prev' | 'next') => void;
  onYearChange: (direction: 'prev' | 'next') => void;
}

export default function RMAHeader({ currentMonth, currentYear, onMonthChange, onYearChange }: RMAHeaderProps) {
  return (
    <div className="bg-white p-4">
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16">
            <svg viewBox="0 0 24 24" className="w-full h-full text-purple-600 fill-current">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-purple-600">DESCARTES</h1>
            <p className="text-gray-600">Ingénierie</p>
          </div>
        </div>

        <div className="justify-self-center">
          <div className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2">
            <span className="font-medium">Collaborateur :</span>
            <span className="bg-white text-black px-3 py-1">Bouchra CHOUKRI</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 justify-self-end">
          <div className="flex items-center gap-2">
            <div className="bg-purple-600 text-white px-3 py-1">
              <span className="font-medium">ANNÉE :</span>
            </div>
            <div className="flex items-center border border-gray-300">
              <button 
                onClick={() => onYearChange('prev')}
                className="px-2 py-1 hover:bg-gray-100"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-medium px-3 py-1">{currentYear}</span>
              <button 
                onClick={() => onYearChange('next')}
                className="px-2 py-1 hover:bg-gray-100"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="bg-purple-600 text-white px-3 py-1">
              <span className="font-medium">MOIS :</span>
            </div>
            <div className="flex items-center border border-gray-300">
              <button 
                onClick={() => onMonthChange('prev')}
                className="px-2 py-1 hover:bg-gray-100"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-medium px-3 py-1 capitalize">{currentMonth}</span>
              <button 
                onClick={() => onMonthChange('next')}
                className="px-2 py-1 hover:bg-gray-100"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}