import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [view, setView] = useState('weekly');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const data = {
    items: {
      vegetables: [
        'Carrots', 'Potatoes', 'Spinach', 'Tomatoes', 'Cucumbers',
        'Onions', 'Bell Peppers', 'Broccoli', 'Eggplants', 'Lemons',
        'Watermelons',
      ],
      fruits: ['Apples', 'Bananas', 'Grapes', 'Oranges', 'Mangoes', 'Strawberries'],
      pulses: ['Lentils', 'Chickpeas', 'Kidney Beans', 'Black Beans', 'Pigeon Peas'],
      grains: ['Rice', 'Wheat', 'Oats', 'Quinoa', 'Barley'],
    },
    expenses: {
      weekly: { vegetables: 50, fruits: 30, pulses: 20, grains: 25 },
      monthly: { vegetables: 200, fruits: 120, pulses: 80, grains: 75 },
      yearly: { vegetables: 2400, fruits: 1440, pulses: 960, grains: 900 },
    },
  };

  const handleViewChange = (selectedView) => {
    setView(selectedView);
    setSelectedCategory(null);
  };

  const totalExpenses = data.expenses[view];
  const doughnutChartData = {
    labels: ['Vegetables', 'Fruits', 'Pulses', 'Grains'],
    datasets: [
      {
        data: [
          totalExpenses.vegetables,
          totalExpenses.fruits,
          totalExpenses.pulses,
          totalExpenses.grains,
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const categoryColors = {
    vegetables: 'bg-green-200',
    fruits: 'bg-red-200',
    pulses: 'bg-purple-200',
    grains: 'bg-yellow-200',
  };

  return (
    <div className="p-4">
      {/* View Selection */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-3 py-2 rounded ${view === 'weekly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => handleViewChange('weekly')}
        >
          Weekly
        </button>
        <button
          className={`px-3 py-2 rounded ${view === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => handleViewChange('monthly')}
        >
          Monthly
        </button>
        <button
          className={`px-3 py-2 rounded ${view === 'yearly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => handleViewChange('yearly')}
        >
          Yearly
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex gap-6">
        {/* Left Side - Category Boxes */}
        <div className="w-1/3 space-y-4">
          {Object.keys(data.items).map((category) => (
            <div
              key={category}
              className={`p-4 ${categoryColors[category]} rounded-lg shadow-lg cursor-pointer`}
              onClick={() => setSelectedCategory(category)}
            >
              <h2 className="text-xl font-semibold mb-2 capitalize">{category}</h2>
              <p>{data.items[category].length} items</p>
            </div>
          ))}
        </div>

        {/* Right Side - Chart and Summary */}
        <div className="w-2/3">
          <div className="bg-gray-100 p-6 rounded">
            {/* Doughnut Chart */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-center mb-4">Total Expenses</h3>
              <div className="w-1/2 mx-auto"> {/* Changed from w-3/4 to w-1/2 for smaller donut */}
                <div className="max-w-xs mx-auto"> {/* Added max-width constraint */}
                  <Doughnut 
                    data={doughnutChartData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: true,
                      plugins: {
                        legend: {
                          position: 'bottom',
                          labels: {
                            boxWidth: 12,
                            padding: 8
                          }
                        }
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Expenses Summary */}
            <div className="mt-6 pt-6 border-t border-gray-300">
              <h2 className="text-xl font-semibold mb-4">Expenses Summary</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded shadow">
                  <h3 className="font-semibold text-green-600">Vegetables</h3>
                  <p className="text-xl">${totalExpenses.vegetables}</p>
                </div>
                <div className="p-3 bg-white rounded shadow">
                  <h3 className="font-semibold text-red-600">Fruits</h3>
                  <p className="text-xl">${totalExpenses.fruits}</p>
                </div>
                <div className="p-3 bg-white rounded shadow">
                  <h3 className="font-semibold text-purple-600">Pulses</h3>
                  <p className="text-xl">${totalExpenses.pulses}</p>
                </div>
                <div className="p-3 bg-white rounded shadow">
                  <h3 className="font-semibold text-yellow-600">Grains</h3>
                  <p className="text-xl">${totalExpenses.grains}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Category Items Display */}
      {selectedCategory && (
        <div className="bg-gray-100 p-4 rounded mt-6">
          <h2 className="text-xl font-semibold">{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {data.items[selectedCategory].map((item, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow text-center">
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;