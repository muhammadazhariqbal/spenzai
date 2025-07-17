import React, { useState } from "react";
import { countries } from "../utils/countries";

const DEFAULT_COUNT = 5;

const CountrySelectModal = ({ visible, onSelect, onClose, isLoading }) => {
  const [search, setSearch] = useState("");

  if (!visible) return null;

  // When search is empty, show only first DEFAULT_COUNT
  // Otherwise show full filter
  const listToShow = search.trim()
    ? countries.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      )
    : countries.slice(0, DEFAULT_COUNT);

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 text-black">
        <h2 className="text-xl mb-4">🌍 What's your country?</h2>

        <input
          type="text"
          placeholder="Search country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none mb-4"
        />

        <div className="max-h-60 overflow-y-auto space-y-2">
          {listToShow.map((country) => (
            <div
              key={country.code}
              onClick={() => {
                onSelect(country);
                onClose();
              }}
              className="p-3 rounded hover:bg-gray-100 cursor-pointer flex justify-between items-center"
            >
              <span className="flex items-center gap-2">
                <span>{country.flag}</span>
                <span>{country.name}</span>
              </span>
              <span className="text-gray-500">{country.currency}</span>
            </div>
          ))}

          {/* If searching and nothing matches */}
          {search.trim() && listToShow.length === 0 && (
            <p className="text-center text-gray-400">No country found.</p>
          )}
        </div>

        {!isLoading && (
          <button
            disabled={isLoading}
            className="mt-6 w-full bg-black text-white py-2 rounded-full"
            onClick={onClose}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default CountrySelectModal;
