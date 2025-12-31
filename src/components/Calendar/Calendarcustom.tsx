import React, { useState } from "react";
import { CalendarLayer, produceCalendar, WEEK_DAYS } from "./utils";
import "./style.css";

interface CalendarProps {
  initialDate?: Date;
}

const CalendarCustom: React.FC<CalendarProps> = ({ initialDate = new Date() }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate);

  const calendarCells: CalendarLayer[] = produceCalendar(selectedDate);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const month = parseInt(e.target.value);
    setSelectedDate(new Date(selectedDate.getFullYear(), month, 1));
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = parseInt(e.target.value);
    setSelectedDate(new Date(year, selectedDate.getMonth(), 1));
  };

  const handleDaySelect = (day: number | null) => {
    if (!day) return;
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day));
  };


  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);

  return (
  <div className="parent">
    <div className="calendar">
  <div className="month-label" data-testid="month-label">
    {selectedDate.toLocaleString("default", { month: "long", year: "numeric" })}
  </div>

  <div className="month-year-select">
    <select 
     data-testid="selectimonthData_date"
      className="selectData_date"
      value={selectedDate.getMonth()} 
      onChange={handleMonthChange}
    >
      {months.map((m, i) => (
        <option key={i} value={i}>{m}</option>
      ))}
     
    </select>

    <select 
      data-testid="selectimonthData_date"
      className="selectData_date" 
      value={selectedDate.getFullYear()} 
      onChange={handleYearChange}
    >
      {years.map((itemyears) => (
        <option key={itemyears} value={itemyears}>{itemyears}</option>
      ))}
    </select>
  </div>

  <div className="week-days">
    {WEEK_DAYS.map((daybyday) => (
      <div key={daybyday} className="week-day">{daybyday}</div>
    ))}
  </div>

  <div className="calendar-cells">
    {calendarCells.map((cell, index) => (
      <div
        key={index}
        className={`calendar-cell ${cell.isSelected ? "selected" : ""} ${cell.day ? "" : "empty"}`}
        onClick={() => handleDaySelect(cell.day)}
      >
        {cell.day || ""}
      </div>
    ))}
  </div>
</div>
  </div>
  );
};

export default CalendarCustom;
