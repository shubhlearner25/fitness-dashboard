import React from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

const data = [
  { name: 'Mon', workout: 30, calories: 50, steps: 70 },
  { name: 'Tue', workout: 40, calories: 30, steps: 50 },
  { name: 'Wed', workout: 70, calories: 60, steps: 80 },
  { name: 'Thu', workout: 60, calories: 70, steps: 65 },
  { name: 'Fri', workout: 40, calories: 50, steps: 60 },
  { name: 'Sat', workout: 50, calories: 45, steps: 55 },
  { name: 'Sun', workout: 60, calories: 65, steps: 70 },
]

export default function GoalProgressChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#f0f3f7] font-[Manrope]">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-[18px] text-gray-800">Goal Progress</h3>
        <div className="text-sm text-gray-500 cursor-pointer">
          Weekly ▾
        </div>
      </div>

      {/* CHART BOX */}
      <div className="w-full h-[260px] sm:h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barGap={5}                // spacing between workout / calories / steps
            barCategoryGap="50%"     // spacing between day groups
          >

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5EAF2"
            />

            <XAxis
              dataKey="name"
              tick={{ fill: "#9CA3AF", fontSize: 13 }}
              axisLine={false}
            />

            <YAxis
              tick={{ fill: "#9CA3AF", fontSize: 13 }}
              tickFormatter={(v) => `${v}%`}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip cursor={{ fill: "transparent" }} />

            <Bar dataKey="workout" fill="#0ea5e9" radius={[8, 8, 0, 0]} barSize={14} />
            <Bar dataKey="calories" fill="#f97316" radius={[8, 8, 0, 0]} barSize={14} />
            <Bar dataKey="steps" fill="#8b5cf6" radius={[8, 8, 0, 0]} barSize={14} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* LEGENDS */}
      <div className="mt-4 flex items-center gap-6 text-sm text-gray-600 flex-wrap">

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full inline-block bg-[#0ea5e9]"></span>
          Workout
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full inline-block bg-[#f97316]"></span>
          Calories
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full inline-block bg-[#8b5cf6]"></span>
          Steps
        </div>

      </div>

    </div>
  )
}
