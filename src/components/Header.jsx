import React from "react";
import { ChevronLeft, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = ({
  title,
  showBackButton = false,
  showMenuButton = false,
  onMenuClick,
}) => {
  const navigate = useNavigate();

  return (
    <header className="relative flex items-center h-16 bg-white px-4">
      {showBackButton && (
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 rounded-full p-1 text-slate-700 hover:bg-slate-100"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      <h1 className="mx-auto text-xl  text-slate-800">{title}</h1>

      {showMenuButton && (
        <button
          onClick={onMenuClick}
          className="absolute right-4 rounded-full p-1 text-slate-700 hover:bg-slate-100"
        >
          <MoreVertical size={24} />
        </button>
      )}
    </header>
  );
};

export default Header;
