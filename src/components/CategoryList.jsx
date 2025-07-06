import React from "react";
import { ICON_MAP } from "../utils/categories"; // adjust path as needed

const CategoryList = ({ id, name, icon, color, selected, onSelect }) => {
  const IconComponent = ICON_MAP[icon];

  return (
    <div className="flex flex-col items-center space-y-1 w-16 shrink-0">
      <button
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: color }}
        onClick={() => onSelect(id)}
      >
        {IconComponent && (
          <IconComponent size={20} className="text-slate-700" />
        )}
      </button>

      {/* Dot indicator if selected */}
      <div className="h-2">
        {selected && <div className="w-2 h-2 rounded-full bg-black" />}
      </div>
    </div>
  );
};

export default CategoryList;
