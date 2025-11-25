import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Overview from "./pages/Overview";
import RightPanel from "./components/RightPanel/RightPanel";

export default function App() {
  return (
    <div className="min-h-screen p-6 bg-[color:var(--bg)]">

      {/* Responsive Grid */}
      <div
        className="
          grid 
          grid-cols-1 
          gap-6

          md:grid-cols-[220px_1fr] 
          lg:grid-cols-[260px_1fr_360px]
        "
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Middle Content */}
        <Overview />

        {/* RightPanel (only visible when large screen) */}
        <div className="hidden lg:block">
          <RightPanel />
        </div>
      </div>

      {/* Right panel for tablet & mobile */}
      <div className="lg:hidden mt-6">
        <RightPanel />
      </div>
    </div>
  );
}
