import React from "react";
import { ICON_MAP } from "../utils/categories";

const SpentCard = ({ item }) => {
  const IconComponent = ICON_MAP[item.icon];
  console.log(item.icon, "IconComponent");
  return (
    <div className="min-w-[140px] rounded-2xl p-4 bg-white shadow-sm border border-slate-200 flex flex-col items-start gap-3">
      <div
        className="p-2 rounded-full"
        style={{ backgroundColor: item.color + "20" }}
      >
        {IconComponent && (
          <IconComponent size={22} style={{ color: item.color }} />
        )}
      </div>

      <div className="text-sm font-medium text-slate-700">{item.title}</div>

      <div className="text-base  text-slate-900">{item.amount}</div>
    </div>
  );
};

export default SpentCard;
