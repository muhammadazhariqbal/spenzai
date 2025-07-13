import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import { resetAllData, resetUserQuoteType } from "../utils/localStorage";
import { AppContext } from "../utils/AppContext";

const UnderConstruction = () => {
  const [showBackupModal, setShowBackupModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetAlert, setResetAlert] = useState(false);
  const navigate = useNavigate();
  const { checkExistingUser, getAllExpenses } = useContext(AppContext);

  const handleReset = async () => {
    await resetAllData();
    setShowResetModal(false);
    checkExistingUser();
    getAllExpenses();
    navigate("/");
  };

  const handleResetQuoteType = async () => {
    await resetUserQuoteType();
    checkExistingUser();
    setResetAlert(true);
    setTimeout(() => setResetAlert(false), 2500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-6 text-center relative">
      {/* Success Alert */}
      {resetAlert && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-100 text-green-700 text-sm px-4 py-2 rounded shadow">
          🎉 Preference reset successfully.
        </div>
      )}

      <div className="w-full max-w-sm space-y-6 mt-10">
        {/* Page Title */}
        <h1 className="text-2xl font-semibold text-slate-900">
          🚧 Profile Under Construction
        </h1>
        <p className="text-sm text-slate-500">
          We're working on some cool features for you. Meanwhile, you can manage
          your data below:
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4">
          <button
            onClick={() => setShowBackupModal(true)}
            className="px-4 py-2 bg-black text-white rounded-full text-sm hover:scale-105 transition"
          >
            📩 Subscribe for Monthly Report
          </button>
          <button
            onClick={() => setShowBackupModal(true)}
            className="bg-slate-900 text-white px-6 py-3 rounded-full text-md font-semibold hover:scale-105 transition"
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

        {/* Reset Quote Button */}
        <button
          onClick={handleResetQuoteType}
          className="text-sm text-red-500 underline mt-2"
        >
          Reset Quote Preference
        </button>
      </div>

      {/* Backup Modal */}
      {showBackupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
            <h3 className="text-lg font-semibold mb-3 text-slate-900">
              🚧 Coming Soon
            </h3>
            <p className="text-gray-600 mb-4">
              We’re currently working on this feature. Stay tuned!
            </p>
            <button
              onClick={() => setShowBackupModal(false)}
              className="bg-black text-white px-4 py-2 rounded-full text-sm"
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
                className="bg-gray-200 text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
};

export default UnderConstruction;
