export interface User {
  id: string;
  name: string;
  role: 'admin' | 'pilot' | 'designer' | 'intern';
  email: string;
}

export interface TimeEntry {
  id: string;
  userId: string;
  projectId: string;
  taskId: string;
  startTime: string;
  endTime: string;
  totalHours: number;
  description: string;
  date: string;
}

export interface Project {
  id: string;
  code: string;
  name: string;
  client: string;
  status: 'active' | 'completed' | 'on-hold';
}

export interface Task {
  id: string;
  projectId: string;
  name: string;
  type: 'design' | 'review' | 'meeting' | 'other';
  plannedHours: number;
}