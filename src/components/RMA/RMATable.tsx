import React, { useState } from 'react';
import { getDaysInMonth, getWeeksInMonth, isWeekend } from './utils';

interface Entry {
  codeClient: string;
  intituleProjet: string;
  codeProjet: string;
  numeroLot: string;
  etat: string;
  mode: string;
  observations: string;
  heures: Record<string, number>;
}

export default function RMATable({ month, year }: { month: number; year: number }) {
  const [entries, setEntries] = useState<Entry[]>([
    {
      codeClient: 'MEB21',
      intituleProjet: 'DES-ABS-24-11-0557',
      codeProjet: '10258',
      numeroLot: '',
      etat: '',
      mode: 'Plateau',
      observations: 'W0557_05-11-2024',
      heures: {}
    }
  ]);
  const days = getDaysInMonth(year, month);
  const weeks = getWeeksInMonth(year, month);

  const handleValueChange = (rowIndex: number, day: number, value: string) => {
    const numValue = parseFloat(value) || 0;
    setEntries(prev => {
      const newEntries = [...prev];
      if (!newEntries[rowIndex]) {
        newEntries[rowIndex] = {
          codeClient: '',
          intituleProjet: '',
          codeProjet: '',
          numeroLot: '',
          etat: '',
          mode: '',
          observations: '',
          heures: {}
        };
      }
      newEntries[rowIndex].heures[day] = numValue;
      return newEntries;
    });
  };

  const calculateRowTotal = (heures: Record<string, number>) => {
    return Object.values(heures).reduce((sum, val) => sum + val, 0);
  };

  const calculateColumnTotal = (day: number) => {
    return entries.reduce((sum, entry) => sum + (entry.heures[day] || 0), 0);
  };

  const calculateGrandTotal = () => {
    return entries.reduce((sum, entry) => sum + calculateRowTotal(entry.heures), 0);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            <th colSpan={7} className="bg-purple-600 text-white border border-gray-300 p-2 text-left">
              ACTIVITES
            </th>
            {weeks.map(week => (
              <th key={week} colSpan={7} className="bg-purple-600 text-white border border-gray-300 p-2 text-center">
                {week}
              </th>
            ))}
            <th rowSpan={2} className="bg-purple-600 text-white border border-gray-300 p-2 text-center w-20">
              TOTAL
            </th>
          </tr>
          <tr className="bg-purple-600 text-white">
            <th className="border border-gray-300 p-2">Code Client</th>
            <th className="border border-gray-300 p-2">Intitulé projet</th>
            <th className="border border-gray-300 p-2">Code projet</th>
            <th className="border border-gray-300 p-2">N° lot</th>
            <th className="border border-gray-300 p-2">État</th>
            <th className="border border-gray-300 p-2">Mode</th>
            <th className="border border-gray-300 p-2">Observations</th>
            {Array.from({ length: days }, (_, i) => {
              const date = new Date(year, month - 1, i + 1);
              const isWeekendDay = isWeekend(date);
              return (
                <th
                  key={i + 1}
                  className={`border border-gray-300 p-1 text-center ${
                    isWeekendDay ? 'bg-gray-200' : ''
                  }`}
                >
                  {i + 1}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td colSpan={7} className="border border-gray-300 p-2 font-bold">ABSENCES</td>
            {Array.from({ length: days }, (_, i) => {
              const date = new Date(year, month - 1, i + 1);
              return (
                <td
                  key={i}
                  className={`border border-gray-300 p-1 ${isWeekend(date) ? 'bg-gray-200' : ''}`}
                ></td>
              );
            })}
            <td className="border border-gray-300 p-2 text-center font-bold">0</td>
          </tr>

          {['Congés', 'Maladie'].map((type) => (
            <tr key={type}>
              <td colSpan={7} className="border border-gray-300 p-2 pl-8">{type}</td>
              {Array.from({ length: days }, (_, i) => {
                const date = new Date(year, month - 1, i + 1);
                const isWeekendDay = isWeekend(date);
                return (
                  <td key={i} className={`border border-gray-300 p-1 ${isWeekendDay ? 'bg-gray-200' : ''}`}>
                    <input
                      type="number"
                      className={`w-full text-center ${isWeekendDay ? 'bg-gray-200' : 'bg-white'}`}
                      min="0"
                      max="24"
                      step="0.5"
                      onChange={(e) => handleValueChange(0, i + 1, e.target.value)}
                    />
                  </td>
                );
              })}
              <td className="border border-gray-300 p-2 text-center font-bold">0</td>
            </tr>
          ))}

          <tr className="bg-gray-100">
            <td colSpan={7} className="border border-gray-300 p-2 font-bold">ACTIVITES INTERNES</td>
            {Array.from({ length: days }, (_, i) => {
              const date = new Date(year, month - 1, i + 1);
              return (
                <td
                  key={i}
                  className={`border border-gray-300 p-1 ${isWeekend(date) ? 'bg-gray-200' : ''}`}
                ></td>
              );
            })}
            <td className="border border-gray-300 p-2 text-center font-bold">0</td>
          </tr>

          {entries.map((entry, rowIndex) => (
            <tr key={rowIndex}>
              <td className="border border-gray-300 p-1">
                <input
                  type="text"
                  className="w-full px-1"
                  value={entry.codeClient}
                  onChange={(e) => {
                    const newEntries = [...entries];
                    newEntries[rowIndex].codeClient = e.target.value;
                    setEntries(newEntries);
                  }}
                />
              </td>
              <td className="border border-gray-300 p-1">
                <input
                  type="text"
                  className="w-full px-1"
                  value={entry.intituleProjet}
                  onChange={(e) => {
                    const newEntries = [...entries];
                    newEntries[rowIndex].intituleProjet = e.target.value;
                    setEntries(newEntries);
                  }}
                />
              </td>
              <td className="border border-gray-300 p-1">
                <input
                  type="text"
                  className="w-full px-1"
                  value={entry.codeProjet}
                  onChange={(e) => {
                    const newEntries = [...entries];
                    newEntries[rowIndex].codeProjet = e.target.value;
                    setEntries(newEntries);
                  }}
                />
              </td>
              <td className="border border-gray-300 p-1">
                <input
                  type="text"
                  className="w-full px-1"
                  value={entry.numeroLot}
                  onChange={(e) => {
                    const newEntries = [...entries];
                    newEntries[rowIndex].numeroLot = e.target.value;
                    setEntries(newEntries);
                  }}
                />
              </td>
              <td className="border border-gray-300 p-1">
                <input
                  type="text"
                  className="w-full px-1"
                  value={entry.etat}
                  onChange={(e) => {
                    const newEntries = [...entries];
                    newEntries[rowIndex].etat = e.target.value;
                    setEntries(newEntries);
                  }}
                />
              </td>
              <td className="border border-gray-300 p-1">
                <select
                  className="w-full px-1"
                  value={entry.mode}
                  onChange={(e) => {
                    const newEntries = [...entries];
                    newEntries[rowIndex].mode = e.target.value;
                    setEntries(newEntries);
                  }}
                >
                  <option value="Plateau">Plateau</option>
                  <option value="Remote">Remote</option>
                </select>
              </td>
              <td className="border border-gray-300 p-1">
                <input
                  type="text"
                  className="w-full px-1"
                  value={entry.observations}
                  onChange={(e) => {
                    const newEntries = [...entries];
                    newEntries[rowIndex].observations = e.target.value;
                    setEntries(newEntries);
                  }}
                />
              </td>
              {Array.from({ length: days }, (_, i) => {
                const date = new Date(year, month - 1, i + 1);
                const isWeekendDay = isWeekend(date);
                return (
                  <td key={i} className={`border border-gray-300 p-1 ${isWeekendDay ? 'bg-gray-200' : ''}`}>
                    <input
                      type="number"
                      className={`w-full text-center ${isWeekendDay ? 'bg-gray-200' : 'bg-white'}`}
                      min="0"
                      max="24"
                      step="0.5"
                      value={entry.heures[i + 1] || ''}
                      onChange={(e) => handleValueChange(rowIndex, i + 1, e.target.value)}
                    />
                  </td>
                );
              })}
              <td className="border border-gray-300 p-2 text-center font-bold">
                {calculateRowTotal(entry.heures).toFixed(1)}
              </td>
            </tr>
          ))}

          <tr className="bg-purple-600 text-white font-bold">
            <td colSpan={7} className="border border-gray-300 p-2">TOTAL</td>
            {Array.from({ length: days }, (_, i) => (
              <td key={i} className="border border-gray-300 p-2 text-center">
                {calculateColumnTotal(i + 1).toFixed(1)}
              </td>
            ))}
            <td className="border border-gray-300 p-2 text-center">
              {calculateGrandTotal().toFixed(1)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}