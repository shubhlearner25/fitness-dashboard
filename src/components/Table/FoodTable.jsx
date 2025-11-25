import React from 'react'

const rows = [
  { food: 'Burrito', meal: 'Pizza Burger', calories: 'Receiving', time: '01:00 AM', carbs: '20 gm' },
  { food: 'Burger', meal: 'Pizza Burger', calories: 'Receiving', time: '01:00 AM', carbs: '20 gm' },
]

export default function FoodTable() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm font-[Manrope]">

      {/* Header */}
      <div className="
        hidden sm:grid 
        grid-cols-5 
        gap-6 
        mb-4 
        text-gray-500 
        text-sm 
        font-medium
      ">
        <div>Food</div>
        <div>Meal</div>
        <div>Calories</div>
        <div>Time</div>
        <div>Carbs</div>
      </div>

      {/* Rows */}
      <div className="space-y-3">
        {rows.map((r, i) => (
          <div
            key={i}
            className="
              grid grid-cols-1 sm:grid-cols-5
              gap-4 
              p-3 
              bg-gray-50 
              rounded-xl 
              items-center
            "
          >
            {/* Food + Icon */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                🍽️
              </div>
              <div className="text-sm font-medium">{r.food}</div>
            </div>

            {/* Meal */}
            <div className="text-sm text-gray-600">{r.meal}</div>

            {/* Calories */}
            <div className="text-sm text-gray-600">{r.calories}</div>

            {/* Time */}
            <div className="text-sm text-gray-600">{r.time}</div>

            {/* Carbs */}
            <div className="text-sm font-medium">{r.carbs}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
