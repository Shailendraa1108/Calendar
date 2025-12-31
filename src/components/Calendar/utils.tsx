export interface CalendarLayer {
  day: number | null;
  isSelected: boolean;
}

export const WEEK_DAYS: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
};

export const produceCalendar = (date: Date): CalendarLayer[] => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const selectedDay = date.getDate();

  const totalDays = getDaysInMonth(year, month);
  const firstDayIndex = getFirstDayOfMonth(year, month);

  const calendar: CalendarLayer[] = [];

  
  for (let i = 0; i < firstDayIndex; i++) {
    calendar.push({ day: null, isSelected: false });
  }

  for (let day = 1; day <= totalDays; day++) {
    calendar.push({ day, isSelected: day === selectedDay });
  }

  return calendar;
};
