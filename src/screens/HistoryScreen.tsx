import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { ChevronDown, ShoppingBag, CreditCard } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const spentHistoryData = [
  {
    icon: <ShoppingBag size={20} className="text-slate-700" />,
    title: "Shoe Bag",
    date: "June 28, 2020",
    amount: "-$526",
    color: "bg-green-100",
    textColor: "text-green-600",
  },
  {
    icon: <CreditCard size={20} className="text-slate-700" />,
    title: "Purchase",
    date: "June 8, 2022",
    amount: "-$256",
    color: "bg-purple-100",
    textColor: "text-purple-600",
  },
   {
    icon: <CreditCard size={20} className="text-slate-700" />,
    title: "Purchase",
    date: "June 8, 2022",
    amount: "-$256",
    color: "bg-purple-100",
    textColor: "text-purple-600",
  },
];

const chartData = [
  { name: "Jan", amount: 50000 },
  { name: "Feb", amount: 40000 },
  { name: "Mar", amount: 35000 },
  { name: "Apr", amount: 30000 },
  { name: "May", amount: 25000 },
  { name: "Jun", amount: 15000 },
  { name: "Jul", amount: 10000 },
];

const filterOptions = [
  { value: "today", label: "Today" },
  { value: "week", label: "This Week" },
  { value: "month", label: "This Month" },
  { value: "year", label: "This Year" },
];

const HistoryScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleSelect = (option: any) => {
    setSelectedFilter(option);
    setDropdownOpen(false);
    // Add filter logic here
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white pb-20">
      <Header title="Spent History" showBackButton />

      <main className="flex-1 px-4 pt-4">
        {/* Custom Dropdown Filter */}
        <div className="flex justify-center mb-4 relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between w-48 rounded-lg bg-[#f5f6fa] px-4 py-2 text-slate-800 font-medium shadow-sm cursor-pointer"
          >
            {selectedFilter.label}
            <ChevronDown
              size={18}
              className={`ml-2 transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute z-10 mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              {filterOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option)}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-sm text-slate-700"
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Save This Month */}
        <div className="text-center mb-4">
          <div className="text-slate-500 text-sm mb-1">Save This Month</div>
          <div className="text-2xl font-bold text-slate-900 mb-1">
            $1852.00 <span className="text-base font-medium">USD</span>
          </div>
          <div className="text-slate-500 text-sm">
            Increase of{" "}
            <span className="font-semibold text-slate-800">12%</span> from last
            month
          </div>
        </div>

        {/* Chart */}
        <div className="relative mb-6 h-40 rounded-xl bg-white shadow p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Spent History Cards */}
        <div className="mb-4">
          <div className="text-lg font-semibold text-slate-900 mb-3">
            Spent History
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {spentHistoryData.map((item, idx) => (
              <div
                key={idx}
                className={`min-w-[160px] rounded-xl p-4 shadow ${item.color} flex flex-col hide-scrollbar`}
              >
                <div className="mb-2">{item.icon}</div>
                <div className="font-medium text-slate-800">{item.title}</div>
                <div className="text-xs text-slate-500 mb-2">{item.date}</div>
                <div className={`text-lg font-bold ${item.textColor}`}>
                  {item.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Navigation />
    </div>
  );
};

export default HistoryScreen;
