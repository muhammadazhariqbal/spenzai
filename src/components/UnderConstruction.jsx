import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import { resetAllData } from "../utils/localStorage";
import { AppContext } from "../utils/AppContext";

const UnderConstruction = () => {
  const [showBackupModal, setShowBackupModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const navigate = useNavigate();
  const { checkExistingUser, getAllExpenses } = useContext(AppContext);

  const handleReset = async () => {
    await resetAllData();
    setShowResetModal(false);
    checkExistingUser();
    getAllExpenses();
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-6 text-center relative">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 mt-6">
          <button
            onClick={() => setShowBackupModal(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-md font-semibold hover:scale-105 transition"
          >
            Backup Data
          </button>

          <button
            onClick={() => setShowResetModal(true)}
            className="bg-red-600 text-white px-6 py-3 rounded-full text-md font-semibold hover:scale-105 transition"
          >
            Reset All Data
          </button>
        </div>
      </div>

      {/* Backup Modal */}
      {showBackupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
            <h2 className="text-xl font-bold mb-4">📦 Backup Feature</h2>
            <p className="text-gray-700 mb-4">
              We are currently working on this feature. Stay tuned!
            </p>
            <button
              onClick={() => setShowBackupModal(false)}
              className="bg-gray-800 text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-red-600">
              ⚠️ Confirm Reset
            </h2>
            <p className="text-gray-700 mb-6">
              Are you sure you want to <strong>reset all data</strong>? This
              cannot be undone.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleReset}
                className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-500 transition"
              >
                Yes, Reset
              </button>
              <button
                onClick={() => setShowResetModal(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Bottom Navigation */}
      <Navigation />
    </div>
  );
};

export default UnderConstruction;
