import React from "react";
import {
  FiGrid,
  FiActivity,
  FiClock,
  FiHeart,
  FiCalendar,
  FiBarChart2,
} from "react-icons/fi";
import { CiDumbbell } from "react-icons/ci";
import { GrSchedules } from "react-icons/gr";
import { LuGoal } from "react-icons/lu";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoIosHelp } from "react-icons/io";

import { CiLogout } from "react-icons/ci";

const items = [
  { icon: <FiGrid />, label: "Overview", active: true },
  { icon: <CiDumbbell />, label: "Workout" },
  { icon: <GrSchedules />, label: "Diet Plan" },
  { icon: <LuGoal />, label: "Goals" },
  { icon: <FiCalendar />, label: "My Schedule" },
  { icon: <IoStatsChartOutline />, label: "Progress" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white p-4 shadow-sm h-screen flex flex-col justify-between font-[Manrope]">
      {/* Logo */}
      <div>
        <div className="flex items-center gap-3 mb-10 pl-1">
          <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center text-orange-500 text-xl">
            🏋️
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Fitness</h1>
        </div>

        {/* Menu */}
        <nav className="space-y-2">
          {items.map((it) => (
            <div
              key={it.label}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition 
              ${
                it.active
                  ? "bg-orange-500 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              } font-medium`}
            >
              <div className="text-xl">{it.icon}</div>
              <span>{it.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Links */}
      <div className="text-sm text-gray-600 space-y-3 pl-1">
        <div className="cursor-pointer hover:text-gray-800 flex items-center gap-2">
          <IoIosHelp className="text-lg" />
          Help
        </div>
        <div className="cursor-pointer hover:text-gray-800 flex items-center gap-2">
          <CiLogout className="text-lg" />
          Logout
        </div>
      </div>
    </aside>
  );
}
