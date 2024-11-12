// src/components/MealForm.js
import React, { useState } from 'react';

const MealForm = ({ onSubmit }) => {
  const [mealName, setMealName] = useState('');
  const [mealType, setMealType] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ mealName, mealType, date });
    setMealName('');
    setMealType('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
      <h3 className="text-xl font-semibold mb-4">Add New Meal</h3>
      <label className="block mb-2">
        Meal Name
        <input
          type="text"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </label>
      <label className="block mb-2">
        Meal Type
        <select
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          className="border p-2 w-full rounded"
        >
          <option value="">Select Type</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
      </label>
      <label className="block mb-2">
        Date
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </label>
      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
        Add Meal
      </button>
    </form>
  );
};

export default MealForm;
