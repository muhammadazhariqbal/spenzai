import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import sideIcon from "../assets/side-icon.png";
const activityData = {
  Today: [
    {
      id: 1,
      title: "Udemy",
      type: "Subscription",
      amount: "-$165.00",
      icon: "/icons/udemy.png",
    },
    {
      id: 2,
      title: "Amazon",
      type: "Payment",
      amount: "-$108.00",
      icon: "/icons/amazon.png",
    },
    {
      id: 6,
      title: "Starbucks",
      type: "Food & Drinks",
      amount: "-$12.00",
      icon: "/icons/starbucks.png",
    },
    {
      id: 7,
      title: "Uber",
      type: "Transportation",
      amount: "-$24.50",
      icon: "/icons/uber.png",
    },
    {
      id: 8,
      title: "Apple Music",
      type: "Subscription",
      amount: "-$10.99",
      icon: "/icons/applemusic.png",
    },
  ],
  "This Week": [
    {
      id: 3,
      title: "Netflix",
      type: "Subscription",
      amount: "-$12.99",
      icon: "/icons/netflix.png",
    },
    {
      id: 4,
      title: "Spotify",
      type: "Payment",
      amount: "-$9.99",
      icon: "/icons/spotify.png",
    },
    {
      id: 9,
      title: "McDonald's",
      type: "Food & Drinks",
      amount: "-$18.00",
      icon: "/icons/mcdonalds.png",
    },
    {
      id: 10,
      title: "Zara",
      type: "Shopping",
      amount: "-$89.00",
      icon: "/icons/zara.png",
    },
    {
      id: 11,
      title: "PayPal",
      type: "Transfer",
      amount: "-$200.00",
      icon: "/icons/paypal.png",
    },
  ],
  "This Month": [
    {
      id: 5,
      title: "Gym",
      type: "Fitness",
      amount: "-$50.00",
      icon: "/icons/gym.png",
    },
    {
      id: 12,
      title: "Electric Bill",
      type: "Utilities",
      amount: "-$72.00",
      icon: "/icons/electricity.png",
    },
    {
      id: 13,
      title: "Bookstore",
      type: "Education",
      amount: "-$40.00",
      icon: "/icons/bookstore.png",
    },
    {
      id: 14,
      title: "Flight Ticket",
      type: "Travel",
      amount: "-$320.00",
      icon: "/icons/plane.png",
    },
    {
      id: 15,
      title: "Pharmacy",
      type: "Health",
      amount: "-$28.00",
      icon: "/icons/pharmacy.png",
    },
  ],
};

const ActivitiesSection = () => {
  const [selected, setSelected] = useState("Today");
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
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
                src={sideIcon}
                alt={activity.title}
                className="w-8 h-8 rounded-md object-contain"
              />
              <div>
                <p className="text-sm font-semibold text-black">
                  {activity.title}
                </p>
                <p className="text-xs text-gray-500">{activity.type}</p>
              </div>
            </div>
            <p className="text-sm font-semibold text-black">
              {activity.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesSection;
