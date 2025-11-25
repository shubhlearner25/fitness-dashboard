import React from "react";

const items = [
  {
    day: "Monday",
    title: "Stretch",
    time: "08:00 AM",
    badge: "20 Sets",
    img: "/src/assets/stretch.png",
  },
  {
    day: "Tuesday",
    title: "Back Stretch",
    time: "08:00 AM",
    badge: "10 Round",
    img: "/src/assets/back.png",
  },
  {
    day: "Wednesday",
    title: "Yoga",
    time: "08:00 AM",
    badge: "20 min",
    img: "/src/assets/yoga.png",
  },
];

export default function ScheduleList() {
  return (
    <div
      className="
        bg-white 
        p-4 
        rounded-2xl 
        shadow-sm 
        font-[Manrope]

        w-full          /* Full width on all screens */
        sm:w-auto       /* Auto width on larger screens */
      "
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">My Schedule</h3>
        <a className="text-sm text-orange-500 cursor-pointer">View All</a>
      </div>

      <div className="space-y-3">
        {items.map((i) => (
          <div
            key={i.day}
            className="
              flex items-center justify-between 
              p-4 bg-gray-50 rounded-xl

              gap-4       /* Better spacing on mobile */
            "
          >
            <div className="flex-1 min-w-0">
              <div className="font-semibold mb-1">{i.day}</div>

              <div className="flex items-center gap-3">
                <img
                  src={i.img}
                  alt={i.title}
                  className="w-10 h-10 rounded-lg"
                />

                <div className="min-w-0">
                  <div className="font-medium">{i.title}</div>
                  <div className="text-sm text-gray-500">{i.time}</div>
                </div>
              </div>
            </div>

            <div
              className="
                bg-orange-100 
                px-3 py-1 
                rounded-full 
                text-orange-600 
                text-sm 
                font-medium
                whitespace-nowrap    /* Keeps badge in one line */
              "
            >
              {i.badge}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
