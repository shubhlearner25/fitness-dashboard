import React from "react";
import { Search, Bell } from "lucide-react";
import { CiSettings } from "react-icons/ci";
import profileImg from "../../assets/profile.jpg"; // imported image

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm mb-6">
      <div>
        <p className="text-sm text-gray-500">Good Morning</p>
        <h2 className="text-xl font-semibold">Welcome Back!</h2>
      </div>

      <div className="flex items-center gap-4">
        {/* Search Box */}
        <div className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2 w-80">
          <Search size={18} className="text-gray-400" />
          <input
            className="bg-transparent w-full outline-none"
            placeholder="Search"
          />
        </div>

        <Bell size={22} className="text-gray-500 cursor-pointer" />
        <CiSettings size={24} className="text-gray-500 cursor-pointer" />

        <img
          src={profileImg}
          className="w-10 h-10 rounded-full object-cover"
          alt="Profile"
        />
      </div>
    </div>
  );
}
