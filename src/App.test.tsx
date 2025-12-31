import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders CalendarCustom component', () => {
  render(<App />);
  const monthLabel = screen.getByTestId("month-label");
  expect(monthLabel).toHaveTextContent("October 2022");
});

test('i am selecting the day from the calendar custom component', () => {
  render(<App />);
  const dayCell = screen.getByText("15");
  fireEvent.click(dayCell);
  expect(dayCell).toHaveClass("selected");
});

test('i have changed the month in data as well as my with dynamic without api', async () => {
  render(<App />);
  const monthSelect = screen.getByDisplayValue("October");
  fireEvent.change(monthSelect, { target: { value: "11" } }); 

  const newMonthLabel = await screen.findByTestId("month-label");
  expect(newMonthLabel).toHaveTextContent("December 2022");
});

test('i have changed the year in data as well as my with dynamic without api', async () => {
  render(<App />);
  const yearSelect = screen.getByDisplayValue("2022");
  fireEvent.change(yearSelect, { target: { value: "2025" } });

  const updatedMonthLabel = await screen.findByTestId("month-label");
  expect(updatedMonthLabel).toHaveTextContent("October 2025");
});
