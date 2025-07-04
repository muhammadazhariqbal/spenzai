import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, PlusCircle, Clock, User } from "lucide-react"; // Lucide icons

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/home", icon: <Home size={24} />, label: "Home" },
    { path: "/add", icon: <PlusCircle size={24} />, label: "Add" },
    { path: "/history", icon: <Clock size={24} />, label: "History" },
    { path: "/profile", icon: <User size={24} />, label: "Profile" },
  ];

  return (
    <div className="fixed bottom-3 left-0 right-0 flex justify-center">
      <nav className="w-full max-w-md flex h-16 items-center justify-around bg-white border-t border-slate-200 shadow-md px-8 mx-5 rounded-lg">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center justify-center px-2 py-1"
          >
            <div
              className={`rounded-full p-2 ${
                isActive(item.path) ? "bg-[#F8F8F8]" : ""
              }`}
            >
              {item.icon}
            </div>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
