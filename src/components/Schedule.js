import React, { useState } from 'react';
import "./Schedule.css";
const Schedule = () => {
  const [date, setDate] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const baseData = [
    { day: 'Monday', hours: '1 - 2', subject: 'DAA', room: 'C101' },
    { day: 'Monday', hours: '2 - 3', subject: 'MSWD', room: 'C111' },
    { day: 'Monday', hours: '3 - 4', subject: 'MP', room: 'C017' },
    { day: 'Tuesday', hours: '3 - 4', subject: 'MP', room: 'C017' },
    { day: 'Wednesday', hours: '5 - 6', subject: 'AIML', room: 'R106' },
    { day: 'Thursday', hours: '7 - 8', subject: 'OS', room: 'C422' },
    { day: 'Friday', hours: '9 - 10', subject: 'MSWD', room: '105' },
    { day: 'Saturday', hours: '11 - 12', subject: 'YOGA', room: '106' },
    
  ];


  const hoursList = ['1 - 2', '3 - 4', '5 - 6', '7 - 8', '9 - 10', '11 - 12'];
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const data = daysOfWeek.map(day => {
    return hoursList.map(hours => {
      
      const entry = baseData.find(item => item.day === day && item.hours === hours);

      return entry || { day, hours, subject: 'Free', room: 'N/A' };
    });
  }).flat(); 

  const handleDateChange = (event) => {
    const inputDate = event.target.value.toLowerCase();
    setDate(inputDate);

    
    const filtered = data.filter(item => item.day.toLowerCase().includes(inputDate));
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>Schedule</h1>
      <input
        type="text"
        placeholder=" "
        value={date}
        onChange={handleDateChange}
      />
      <table border="1">
        <thead>
          <tr>
            <th>Day</th>
            <th>Hours</th>
            <th>Subject</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.hours}</td>
              <td>{item.subject}</td>
              <td>{item.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
