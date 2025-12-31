import React from "react";
import CalendarCustom from "./components/Calendar/Calendarcustom";


function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <CalendarCustom initialDate={new Date("2022-10-03")} />
    </div>
    </div>
  );
}

export default App;
