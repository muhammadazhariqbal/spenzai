import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// Sample data (you can replace this with dynamic data)
const activityData = {
  "Today": [
    { id: 1, title: "Udemy", type: "Subscription", amount: "-$165.00", icon: "/icons/udemy.png" },
    { id: 2, title: "Amazon", type: "Payment", amount: "-$108.00", icon: "/icons/amazon.png" },
  ],
  "This Week": [
    { id: 3, title: "Netflix", type: "Subscription", amount: "-$12.99", icon: "/icons/netflix.png" },
    { id: 4, title: "Spotify", type: "Payment", amount: "-$9.99", icon: "/icons/spotify.png" },
  ],
  "This Month": [
    { id: 5, title: "Gym", type: "Fitness", amount: "-$50.00", icon: "/icons/gym.png" },
  ],
};

const ActivitiesSection = () => {
  const [selected, setSelected] = useState("Today");
  const [open, setOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-4">
      {/* Header with Dropdown */}
      <div className="relative flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-black">Activities</h2>

        <div className="relative">
          <button
            className="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md"
            onClick={() => setOpen(!open)}
          >
            {selected}
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              {Object.keys(activityData).map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Activities List */}
      <div className="space-y-3">
        {activityData[selected].map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <img
                src={activity.icon}
                alt={activity.title}
                className="w-8 h-8 rounded-md object-contain"
              />
              <div>
                <p className="text-sm font-semibold text-black">{activity.title}</p>
                <p className="text-xs text-gray-500">{activity.type}</p>
              </div>
            </div>
            <p className="text-sm font-semibold text-black">{activity.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesSection;
