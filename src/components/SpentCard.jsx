import React from "react";

import { ICON_MAP } from "../utils/categories";
const SpentCard = ({ item }) => {
  const IconComponent = ICON_MAP[item.icon];
  return (
    <div
      className={`min-w-[130px] rounded-xl p-3 shadow ${item.color} flex flex-col`}
    >
      <div className="mb-2">
        {IconComponent && (
          <IconComponent size={20} className="text-slate-700" />
        )}
      </div>
      <div className="font-medium text-slate-800 text-sm">{item.title}</div>
      <div className="text-[10px] text-slate-500 mb-1">{item.date}</div>
      <div className={`text-base font-bold ${item.textColor}`}>
        {item.amount}
      </div>
    </div>
  );
};

export default SpentCard;
