import React from 'react'

const goals = [
  { title: 'ABS & Stretch', meta: 'Saturday, April 14 | 08:00 AM', badge: '30 Min/day' },
  { title: 'Push Up', meta: 'Sunday, April 15 | 08:00 AM', badge: '50 Sets/day' },
]

export default function GoalList() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 font-[Manrope]">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-[18px]">Goals</h3>
        <button className="text-sm text-orange-500 hover:text-orange-600">
          View All
        </button>
      </div>

      {/* Goals List */}
      <div className="space-y-4">
        {goals.map((g) => (
          <div
            key={g.title}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-gray-50 rounded-xl"
          >
            <div className="flex-1">
              <div className="font-medium text-[15px]">{g.title}</div>
              <div className="text-xs text-gray-500 mt-1">{g.meta}</div>
            </div>

            <div className="self-start sm:self-auto bg-orange-100 px-3 py-1.5 rounded-full text-orange-600 text-xs font-semibold">
              {g.badge}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
