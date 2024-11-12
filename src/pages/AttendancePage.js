import React, { useState } from 'react';

const AttendanceTracking = () => {
  const [studentId, setStudentId] = useState('');
  const [date, setDate] = useState('');
  const [timeIn, setTimeIn] = useState('');
  const [timeOut, setTimeOut] = useState('');
  const [mealType, setMealType] = useState('Breakfast');
  const [status, setStatus] = useState('Present');
  const [notes, setNotes] = useState('');
  const [attendanceData, setAttendanceData] = useState([]);

  const handleAttendanceSubmit = (e) => {
    e.preventDefault();
    const newRecord = { studentId, date, timeIn, timeOut, mealType, status, notes };
    setAttendanceData((prevData) => [...prevData, newRecord]);

    // Reset form fields after submission
    setStudentId('');
    setDate('');
    setTimeIn('');
    setTimeOut('');
    setMealType('Breakfast');
    setStatus('Present');
    setNotes('');
  };

  return (
    <div className="mt-8 p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-semibold mb-4">Attendance Tracking</h2>
      <form onSubmit={handleAttendanceSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <input
          type="time"
          value={timeIn}
          onChange={(e) => setTimeIn(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <input
          type="time"
          value={timeOut}
          onChange={(e) => setTimeOut(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <select
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="p-2 border rounded col-span-2"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded col-span-2"
        >
          Add Attendance Record
        </button>
      </form>

      {/* Display Attendance Records */}
      <h3 className="mt-6 text-lg font-semibold">Attendance Records</h3>
      <table className="w-full mt-2 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Student ID</th>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Time In</th>
            <th className="border border-gray-300 p-2">Time Out</th>
            <th className="border border-gray-300 p-2">Meal Type</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{record.studentId}</td>
              <td className="border border-gray-300 p-2">{record.date}</td>
              <td className="border border-gray-300 p-2">{record.timeIn}</td>
              <td className="border border-gray-300 p-2">{record.timeOut}</td>
              <td className="border border-gray-300 p-2">{record.mealType}</td>
              <td className="border border-gray-300 p-2">{record.status}</td>
              <td className="border border-gray-300 p-2">{record.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTracking;
