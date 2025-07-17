import React from "react";

const WisdomPreferenceModal = ({ onSelect }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-sm shadow-xl text-center">
        <h2 className="text-lg  mb-2">💬 Show Financial Wisdom?</h2>
        <p className="text-sm text-slate-600 mb-4">
          Would you like to see daily quotes related to ethical money, saving,
          and mindful spending?
        </p>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => onSelect("all")}
            className="bg-black text-white py-2 rounded-full text-sm"
          >
            Yes – Show All Wisdom
          </button>
          <button
            onClick={() => onSelect("islamic")}
            className="bg-green-600 text-white py-2 rounded-full text-sm"
          >
            Only Islamic Quotes
          </button>
          <button
            onClick={() => onSelect("general")}
            className="bg-blue-600 text-white py-2 rounded-full text-sm"
          >
            Only General Quotes
          </button>
          <button
            onClick={() => onSelect("none")}
            className="text-slate-500 text-sm mt-2"
          >
            No Thanks
          </button>
        </div>
      </div>
    </div>
  );
};

export default WisdomPreferenceModal;
