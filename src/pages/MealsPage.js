import React, { useState } from 'react';
import MealForm from '../components/Mealform';

const MealsPage = () => {
  const [studentCount, setStudentCount] = useState(100); // Default student count
  const [meals, setMeals] = useState([]);

  // Helper function to format date as 'YYYY-MM-DD' for consistency
  const getFormattedDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  // Get today's date in the formatted style
  const today = getFormattedDate(new Date());

  // Filter meals by type (Breakfast, Lunch, Dinner)
  const todaysMeals = meals.filter((meal) => meal.date === today);
  const breakfastMeals = todaysMeals.filter((meal) => meal.mealType === 'Breakfast');
  const lunchMeals = todaysMeals.filter((meal) => meal.mealType === 'Lunch');
  const dinnerMeals = todaysMeals.filter((meal) => meal.mealType === 'Dinner');

  // Handler to update the student count dynamically
  const handleStudentCountChange = (event) => {
    const newCount = parseInt(event.target.value, 10);
    if (!isNaN(newCount) && newCount >= 0) {
      setStudentCount(newCount);
    }
  };

  // Function to add a new meal
  const addMeal = (meal) => {
    setMeals([...meals, meal]);
  };

  return (
    <div className="p-6">
      {/* Total Student Count Section */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Total Student Count</h2>
        <div className="flex items-center">
          <span className="mr-2">Current Count:</span>
          <input
            type="number"
            value={studentCount}
            onChange={handleStudentCountChange}
            className="border p-2 rounded w-24"
          />
        </div>
      </div>

      {/* Today's Menu Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Today's Menu</h2>
        
        {/* Flex Container for Meal Boxes */}
        <div className="flex space-x-4">
          {/* Breakfast Box */}
          <div className="bg-yellow-100 p-4 rounded shadow-md flex-1">
            <h3 className="text-lg font-semibold mb-2">Breakfast</h3>
            {breakfastMeals.length > 0 ? (
              <ul>
                {breakfastMeals.map((meal, index) => (
                  <li key={index} className="py-1 border-b last:border-none">
                    <strong>Food List:</strong> {meal.mealName}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No breakfast scheduled for today.</p>
            )}
          </div>

          {/* Lunch Box */}
          <div className="bg-green-100 p-4 rounded shadow-md flex-1">
            <h3 className="text-lg font-semibold mb-2">Lunch</h3>
            {lunchMeals.length > 0 ? (
              <ul>
                {lunchMeals.map((meal, index) => (
                  <li key={index} className="py-1 border-b last:border-none">
                    <strong>Food List:</strong> {meal.mealName}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No lunch scheduled for today.</p>
            )}
          </div>

          {/* Dinner Box */}
          <div className="bg-blue-100 p-4 rounded shadow-md flex-1">
            <h3 className="text-lg font-semibold mb-2">Dinner</h3>
            {dinnerMeals.length > 0 ? (
              <ul>
                {dinnerMeals.map((meal, index) => (
                  <li key={index} className="py-1 border-b last:border-none">
                    <strong>Food List:{meal.mealName}</strong> 
                  </li>
                ))}
              </ul>
            ) : (
              <p>No dinner scheduled for today.</p>
            )}
          </div>
        </div>
      </div>

      {/* Meals Management Section */}
      <h1 className="text-2xl font-bold mb-4">Meals Management</h1>
      <MealForm onSubmit={addMeal} />

      {/* Display List of All Meals */}
      <ul className="mt-6">
        {meals.map((meal, index) => (
          <li key={index} className="p-4 bg-gray-100 my-2 rounded shadow-md">
            <strong>{meal.mealName}</strong> - {meal.mealType} on {meal.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealsPage;