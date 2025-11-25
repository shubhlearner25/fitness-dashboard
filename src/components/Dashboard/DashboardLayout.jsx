import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ScheduleList from "../components/ScheduleList";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 bg-gray-100 min-h-screen">

      {/* LEFT SIDEBAR */}
      <div className="md:w-[250px] w-full">
        <Sidebar />
      </div>

      {/* MAIN SECTION */}
      <div className="flex-1 flex flex-col gap-4 md:gap-6">

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-8">
            {children}
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-4">
            <ScheduleList />
          </div>

        </div>

      </div>

    </div>
  );
}
