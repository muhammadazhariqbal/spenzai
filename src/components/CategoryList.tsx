import React from "react";

interface CategoryListProps {
  id: number;
  name: string;
  icon: React.ReactNode;
  bgColor?: string; // pass bg color for icon circle
}

const CategoryList = ({
  id,
  name,
  icon,
  bgColor = "bg-gray-100",
}: CategoryListProps) => {
  return (
    <div key={id} className="flex flex-col items-center space-y-2 w-20">
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center ${bgColor}`}
      >
        {icon}
      </div>
      <span className="text-sm text-gray-600 text-center">{name}</span>
    </div>
  );
};

export default CategoryList;
