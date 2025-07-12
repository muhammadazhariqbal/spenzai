import React, { useContext, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import sideIcon from "../assets/side-icon.png";
import { AppContext } from "../utils/AppContext";
import { capitalizeFirst, isDateMatchFilter } from "../utils/helpers";
import HoldableItem from "./HoldableItem";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal.jsx";
import { deleteExpenseLocal } from "../utils/localStorage.js";

const ActivitiesSection = ({ selectedCategory }) => {
  const [selected, setSelected] = useState("today");
  const [open, setOpen] = useState(false);
  const { expenses, deleteExpense } = useContext(AppContext);
  const [activities, setActivities] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };
  const handleDelete = async () => {
    console.log(itemToDelete, "itemToDelete.id");
    deleteExpense(itemToDelete);
    setShowConfirm(false);
  };

  useEffect(() => {
    setActivities(expenses);
  }, [expenses]);

  return (
    <div className="w-full max-w-md mx-auto px-4 py-4">
      <ConfirmDeleteModal
        visible={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleDelete}
      />
      {/* Header with Dropdown */}
      <div className="relative flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-black">Activities</h2>

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
        {activities
          .filter((expense) =>
            selectedCategory === "all"
              ? true
              : expense.category === selectedCategory
          )
          .filter((expense) => isDateMatchFilter(expense.date, selected))
          .map((activity) => (
            <HoldableItem
              key={activity.id}
              onHold={() => {
                console.log(activity.id, "activity.id");
                setItemToDelete(activity.id);
                setShowConfirm(true);
              }}
            >
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
                      {capitalizeFirst(activity.note)}
                    </p>
                    <p className="text-xs text-gray-500">{activity.category}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-black">
                  - {activity.currency} {activity.amount}
                </p>
              </div>
            </HoldableItem>
          ))}
      </div>
    </div>
  );
};

export default ActivitiesSection;
