import React from "react";
import { XCircle, CheckCircle2, Info, AlertTriangle, X } from "lucide-react";

const ICONS = {
  success: <CheckCircle2 size={20} />,
  error: <XCircle size={20} />,
  info: <Info size={20} />,
  warning: <AlertTriangle size={20} />,
};

const BORDERS = {
  success: "border-green-500",
  error: "border-red-500",
  info: "border-blue-500",
  warning: "border-yellow-500",
};

export const Alert = ({ type = "info", message, onClose }) => {
  return (
    <div
      className={`
        fixed top-15 left-1/2 transform -translate-x-1/2
        flex items-start space-x-3
        p-4 bg-white text-black rounded-2xl shadow-lg
        border-l-4 ${BORDERS[type]}
        max-w-md w-full mx-4 z-50
      `}
    >
      <div className="mt-0.5">{ICONS[type]}</div>
      <div className="flex-1">
        <p className="text-sm">{message}</p>
      </div>
      {onClose && (
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X size={16} />
        </button>
      )}
    </div>
  );
};
