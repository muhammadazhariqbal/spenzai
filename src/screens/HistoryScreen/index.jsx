import React, { useState, useRef, useEffect, useContext } from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
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

import SpentCard from "../../components/SpentCard.jsx";
import { AppContext } from "../../utils/AppContext.jsx";
import { CATEGORIES } from "../../utils/categories.js";
import QuoteBox from "../../components/QuoteBox.jsx";
import WisdomPreferenceModal from "../../components/WisdomPreferenceModal.jsx";
const spentHistoryData = [
  {
    icon: "Utensils",
    title: "Shoe Bag",
    date: "June 28, 2020",
    amount: "-$526",
    color: "bg-green-100",
    textColor: "text-green-600",
  },
  {
    icon: "Utensils",
    title: "Purchase",
    date: "June 8, 2022",
    amount: "-$256",
    color: "bg-purple-100",
    textColor: "text-purple-600",
  },
  {
    icon: "Utensils",
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
  const {
    totalsByCategory,
    totalsByType,
    percentByType,
    grandTotal,
    user,
    handleQuoteType,
    quoteType,
  } = useContext(AppContext);
  const [showWisdom, setShowWisdom] = useState(quoteType !== "none"); // show or hide box
  const [wisdomType, setWisdomType] = useState(quoteType || "all"); // default
  const [showModal, setShowModal] = useState(!quoteType); // show at first load
  const handleWisdomChoice = async (type) => {
    await handleQuoteType(type);

    setWisdomType(type);
    setShowModal(false);
    setShowWisdom(type !== "none");
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleSelect = (option) => {
    setSelectedFilter(option);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const spentHistoryData = CATEGORIES.filter((cat) => cat.id !== "all")
    .map((cat) => {
      return {
        icon: cat.icon,
        title: cat.name,
        color: cat.color,
        value: totalsByCategory[cat.id],
        amount: new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: user?.settings?.currency || "PKR",
          maximumFractionDigits: 0,
        }).format(totalsByCategory[cat.id] || 0),
      };
    })
    .filter((item) => item.value > 0);

  return (
    <div className="flex min-h-screen flex-col items-center bg-white">
      <div className="w-full max-w-md bg-white flex flex-col pb-16 min-h-screen">
        {/* Fixed Header */}
        <div className="sticky top-0 z-20 bg-white">
          <Header title="Spent History" showBackButton />

          {/* Dropdown Filter */}
          {/* <div
            className="flex justify-center px-4 py-2 relative"
            ref={dropdownRef}
          >
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
          </div> */}
        </div>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto px-4 pt-4">
          {/* Save This Month */}
          {/* <div className="text-center mb-4">
            <div className="text-slate-500 text-sm mb-1">Save This Month</div>
            <div className="text-2xl   text-slate-900 mb-1">
              $1852.00 <span className="text-base font-medium">USD</span>
            </div>
            <div className="text-slate-500 text-sm">
              Increase of{" "}
              <span className="  text-slate-800">12%</span> from
              last month
            </div>
          </div> */}

          {/* Chart */}
          {/* <div className="relative mb-6 h-40 rounded-xl bg-white shadow p-4">
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
          </div> */}

          {/* Spent History Cards */}
          <div className="mb-4">
            <div className="text-lg text-slate-900 mb-3">
              Total Spent by Category 💸
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {/* Spent History Cards */}
              <div className="mb-6">
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {spentHistoryData.map((item, idx) => (
                    <SpentCard key={idx} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            {/* Title */}
            <h3 className="text-lg  text-slate-900 mb-3">
              📊 Where Your Money Went
            </h3>

            {/* Legend Row */}
            <div className="flex justify-between mb-2 text-sm text-slate-700">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                🧾 Needs ({percentByType.needs}%)
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                🎉 Wants ({percentByType.wants}%)
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                💰 Save ({percentByType.save}%)
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-4 rounded-full bg-slate-200 overflow-hidden flex">
              <div
                className="bg-blue-500 h-full transition-all duration-700"
                style={{ width: `${percentByType.needs}%` }}
              />
              <div
                className="bg-yellow-400 h-full transition-all duration-700"
                style={{ width: `${percentByType.wants}%` }}
              />
              <div
                className="bg-green-500 h-full transition-all duration-700"
                style={{ width: `${percentByType.save}%` }}
              />
            </div>
          </div>
          {showModal && <WisdomPreferenceModal onSelect={handleWisdomChoice} />}
          {showWisdom && <QuoteBox showType={wisdomType} />}
        </main>

        <Navigation />
      </div>
    </div>
  );
};

export default HistoryScreen;
