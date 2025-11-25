import React from "react";
import { Dumbbell, Flame, Footprints } from "lucide-react";

export default function StatCard({ type, title, value, color }) {
  const icon = {
    workout: <Dumbbell className="text-white w-7 h-7" />,
    calories: <Flame className="text-white w-7 h-7" />,
    steps: <Footprints className="text-white w-7 h-7" />,
  }[type];

  const gradient = {
    teal: "bg-gradient-to-br from-cyan-500 to-teal-500",
    orange: "bg-gradient-to-br from-orange-400 to-orange-600",
    purple: "bg-gradient-to-br from-purple-400 to-purple-600",
  }[color];

  return (
    <div
      className={`${gradient} text-white rounded-xl p-5 relative overflow-hidden font-[Manrope] 
        flex flex-col justify-between min-h-[130px] sm:min-h-[150px]`}
    >
      {/* ICON */}
      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
        {icon}
      </div>

      {/* TEXT */}
      <div className="mt-4">
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
        <p className="opacity-90 text-sm sm:text-base">{value}</p>
      </div>

      {/* DECORATIVE LINES */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <svg width="140" height="90">
          <path
            d="M0 30 C30 10, 60 50, 140 20"
            stroke="white"
            strokeWidth="5"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
