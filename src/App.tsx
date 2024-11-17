import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import TimeEntryPage from './components/TimeEntry';
import TeamPage from './components/Team';
import RMAPage from './components/RMA';

function App() {
  const [currentPage, setCurrentPage] = useState('timeEntry');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar onPageChange={setCurrentPage} currentPage={currentPage} />
      <main className="flex-1 overflow-y-auto">
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'timeEntry' && <TimeEntryPage />}
        {currentPage === 'team' && <TeamPage />}
        {currentPage === 'rma' && <RMAPage />}
      </main>
    </div>
  );
}

export default App;