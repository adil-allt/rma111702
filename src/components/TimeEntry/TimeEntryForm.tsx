import React, { useState } from 'react';
import { Clock, Calendar, Briefcase, FileText, AlertCircle } from 'lucide-react';

const activitesInternes = [
  { id: 'conges', label: 'Congés' },
  { id: 'maladie', label: 'Maladie' },
  { id: 'inter-contrat', label: 'Inter contrat' },
  { id: 'reunion', label: 'Réunion' },
  { id: 'formation', label: 'Formation' },
  { id: 'informatique', label: 'Problèmes informatiques' }
];

const projetsActifs = [
  { id: '10258', code: 'DES-ABS-24-11-0557', client: 'DESCARTES' },
  { id: '10220', code: 'Tapis habitacle', client: 'DESCARTES' },
  { id: '10221', code: 'Wheel Arch B1322', client: 'DESCARTES' },
  { id: '10246', code: 'Wheel Arch SE38x-S16', client: 'SEAT' }
];

export default function TimeEntryForm() {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    type: '',
    project: '',
    activity: '',
    hours: '',
    description: '',
    mode: 'Plateau'
  });

  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.hours || Number(formData.hours) <= 0) {
      setError('Veuillez saisir un nombre d\'heures valide');
      return;
    }

    if (!formData.type) {
      setError('Veuillez sélectionner un type d\'activité');
      return;
    }

    setError('');
    // Traitement de la soumission
    console.log('Données soumises:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Saisie des heures</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-600">
          <AlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Date
              </div>
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Heures
              </div>
            </label>
            <input
              type="number"
              step="0.5"
              min="0"
              max="24"
              value={formData.hours}
              onChange={(e) => setFormData(prev => ({ ...prev, hours: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Nombre d'heures"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Type d'activité
            </div>
          </label>
          <select
            value={formData.type}
            onChange={(e) => {
              const type = e.target.value;
              setFormData(prev => ({
                ...prev,
                type,
                project: type === 'projet' ? prev.project : '',
                activity: type === 'interne' ? prev.activity : ''
              }));
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-2"
            required
          >
            <option value="">Sélectionner un type</option>
            <option value="projet">Projet</option>
            <option value="interne">Activité interne</option>
          </select>

          {formData.type === 'projet' && (
            <select
              value={formData.project}
              onChange={(e) => setFormData(prev => ({ ...prev, project: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            >
              <option value="">Sélectionner un projet</option>
              {projetsActifs.map(projet => (
                <option key={projet.id} value={projet.id}>
                  {projet.id} - {projet.code} ({projet.client})
                </option>
              ))}
            </select>
          )}

          {formData.type === 'interne' && (
            <select
              value={formData.activity}
              onChange={(e) => setFormData(prev => ({ ...prev, activity: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            >
              <option value="">Sélectionner une activité</option>
              {activitesInternes.map(activite => (
                <option key={activite.id} value={activite.id}>
                  {activite.label}
                </option>
              ))}
            </select>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Mode de travail
            </div>
          </label>
          <select
            value={formData.mode}
            onChange={(e) => setFormData(prev => ({ ...prev, mode: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          >
            <option value="Plateau">Plateau</option>
            <option value="Remote">Remote</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Observations
            </div>
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            rows={3}
            placeholder="Commentaires ou observations"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Enregistrer
        </button>
      </div>
    </form>
  );
}