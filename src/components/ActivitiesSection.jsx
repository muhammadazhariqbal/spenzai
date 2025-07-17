import React, { useContext, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import sideIcon from "../assets/side-icon.png";
import { AppContext } from "../utils/AppContext";
import { capitalizeFirst, isDateMatchFilter } from "../utils/helpers";
import HoldableItem from "./HoldableItem";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal.jsx";
import { deleteExpenseLocal } from "../utils/localStorage.js";
import { formatCurrency } from "../utils/categories.js";

const ActivitiesSection = ({ selectedCategory }) => {
  const { expenses, deleteExpense, handleDurationContext, duration } =
    useContext(AppContext);

  const [selected, setSelected] = useState(duration);
  const [open, setOpen] = useState(false);
  const [activities, setActivities] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleSelect = (option) => {
    handleDurationContext(option);
    setSelected(option);
    setOpen(false);
  };

  const handleDelete = async () => {
    deleteExpense(itemToDelete);
    setShowConfirm(false);
  };

  useEffect(() => {
    setActivities(expenses);
  }, [expenses]);

  const filteredByTime = activities.filter((expense) =>
    isDateMatchFilter(expense.date, selected)
  );

  const filteredByCategory = filteredByTime.filter((expense) =>
    selectedCategory === "all" ? true : expense.category === selectedCategory
  );

  return (
    <div className="w-full max-w-md mx-auto px-4 py-4">
      <ConfirmDeleteModal
        visible={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleDelete}
      />

      {/* Header with Dropdown */}
      <div className="relative flex items-center justify-between mb-4">
        <h2 className="text-lg  text-black">Activities</h2>

        <div className="relative">
          <button
            className="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md"
            onClick={() => setOpen(!open)}
          >
            {capitalizeFirst(selected)}
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              {["today", "month", "week"].map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {capitalizeFirst(option)}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Activities List */}
      <div className="space-y-3">
        {filteredByCategory.map((activity) => (
          <HoldableItem
            key={activity.id}
            onHold={() => {
              setItemToDelete(activity.id);
              setShowConfirm(true);
            }}
          >
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3">
                <img
                  src={sideIcon}
                  alt={activity.title}
                  className="w-8 h-8 rounded-md object-contain"
                />
                <div>
                  <p className="text-sm  text-black">
                    {capitalizeFirst(activity.note)}
                  </p>
                  <p className="text-xs text-gray-500">{activity.category}</p>
                </div>
              </div>
              <p className="text-sm  text-black">
                - {formatCurrency(activity.amount, activity.currency)}
              </p>
            </div>
          </HoldableItem>
        ))}

        {/* No Data Handling */}
        {filteredByCategory.length === 0 && (
          <div className="text-center text-sm text-gray-500 mt-10">
            {filteredByTime.length === 0
              ? "🕊️ Nothing here yet..."
              : "🧐 No expenses in this category for this duration."}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivitiesSection;
