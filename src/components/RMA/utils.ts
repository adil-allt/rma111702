export function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

export function getWeeksInMonth(year: number, month: number) {
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);
  const firstWeek = getWeekNumber(firstDay);
  const lastWeek = getWeekNumber(lastDay);
  return Array.from(
    { length: lastWeek - firstWeek + 1 },
    (_, i) => `S${(firstWeek + i).toString().padStart(2, '0')}`
  );
}

export function getWeekNumber(date: Date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

export function isWeekend(date: Date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: '2-digit' });
}