import React from "react";
import * as Icons from "lucide-react";
import { CATEGORIES } from "../utils/categories"; // adjust path if needed

const CategoryScroller = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="overflow-x-auto hide-scrollbar px-1">
      <div className="flex gap-3 py-2">
        {CATEGORIES.filter((cat) => cat.id !== "all").map((cat) => {
          const LucideIcon = Icons[cat.icon] || Icons.Circle;
          const isSelected = selectedCategory?.id === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                isSelected ? "ring-2 ring-black bg-slate-100" : ""
              }`}
              style={{ backgroundColor: isSelected ? "" : `${cat.color}33` }}
            >
              <LucideIcon className="w-4 h-4" color={cat.color} />
              <span className="text-sm text-slate-800 font-medium">
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryScroller;
