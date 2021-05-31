import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";


// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Calendar = ( props) => {
  const [startDate, setStartDate] = useState(new Date());
  
  return (
    <DatePicker 
      selected={startDate} 
      onChange={date => {setStartDate(date)
      props.changeDateInput(date)
       
      }}  />
  );
};
export default Calendar;

