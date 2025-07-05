import React from "react";
import { ICON_MAP } from "../utils/categories"; // adjust path as needed

const CategoryList = ({ id, name, icon, color }) => {
  const IconComponent = ICON_MAP[icon];

  return (
    <div
      key={id}
      className="flex flex-col items-center space-y-1 w-16 shrink-0"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        {IconComponent && (
          <IconComponent size={20} className="text-slate-700" />
        )}
      </div>
    </div>
  );
};

export default CategoryList;
