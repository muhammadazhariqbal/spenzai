import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import { Pencil, X } from "lucide-react";

const ProfileScreen = () => {
  const [firstName, setFirstName] = useState("Ali");
  const [email] = useState("ali@example.com");
  const [editingName, setEditingName] = useState(false);
  const [newName, setNewName] = useState(firstName);

  const [showChangePIN, setShowChangePIN] = useState(false);
  const [showForgotPIN, setShowForgotPIN] = useState(false);
  const [newPIN, setNewPIN] = useState("");

  const handleSaveName = () => {
    setFirstName(newName);
    setEditingName(false);
  };

  const handleBackup = () => {
    alert("Data backed up.");
  };

  const handleLogout = () => {
    alert("Logged out.");
  };

  const handleChangePIN = () => {
    alert(`PIN changed to ${newPIN}`);
    setShowChangePIN(false);
    setNewPIN("");
  };

  const handleForgotPIN = () => {
    alert("Reset link sent to your email.");
    setShowForgotPIN(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white px-4 pt-6 pb-24">
      <div className="flex flex-col items-center">
        {/* Avatar */}
        <div className="mb-4">
          <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-2xl   shadow">
            {firstName.charAt(0)}
          </div>
        </div>

        {/* Name + Edit */}
        <div className="flex items-center mb-1 gap-2 flex-col justify-center">
          {editingName ? (
            <>
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="border border-gray-300 rounded-full px-3 py-1 text-sm focus:outline-none"
              />
              <button
                onClick={handleSaveName}
                className="text-sm text-blue-600 font-medium"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <h2 className="text-xl   text-black">{firstName}</h2>
              <button
                onClick={() => setEditingName(true)}
                className="text-gray-500"
              >
                <Pencil size={16} />
              </button>
            </>
          )}
        </div>

        {/* Email */}
        <p className="text-sm text-gray-500 mb-6">{email}</p>

        {/* Info box */}
        <p className="text-center text-xs text-gray-500 mb-6 max-w-xs">
          Your data is stored only on this device. To access across devices,
          please create a backup.
        </p>

        {/* Backup button */}
        <button
          onClick={handleBackup}
          className="w-full max-w-xs rounded-full bg-black text-white py-3 text-sm   mb-4 shadow hover:bg-opacity-90 transition"
        >
          Backup My Data
        </button>

        {/* PIN Options */}
        <div className="flex flex-col gap-2 w-full max-w-xs">
          <button
            onClick={() => setShowChangePIN(true)}
            className="text-sm text-black   border border-gray-300 py-3 rounded-full hover:bg-gray-100"
          >
            Change PIN
          </button>
          <button
            onClick={handleLogout}
            className="w-full max-w-xs rounded-full border border-gray-300 text-gray-600 py-3 text-sm    hover:bg-gray-100 transition"
          >
            Logout
          </button>
          <button
            onClick={() => setShowForgotPIN(true)}
            className="text-xs text-gray-500 underline"
          >
            Forgot PIN?
          </button>
        </div>

        {/* Logout */}
      </div>

      <Navigation />

      {/* Modal: Change PIN */}
      {showChangePIN && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-sm p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-black"
              onClick={() => setShowChangePIN(false)}
            >
              <X size={20} />
            </button>
            <h3 className="text-lg   text-black mb-4">Change PIN</h3>
            <input
              type="password"
              maxLength={4}
              inputMode="numeric"
              value={newPIN}
              onChange={(e) => setNewPIN(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter new 4-digit PIN"
            />
            <button
              onClick={handleChangePIN}
              className="w-full rounded-full bg-black text-white py-2 text-sm   hover:bg-opacity-90 transition"
            >
              Save PIN
            </button>
          </div>
        </div>
      )}

      {/* Modal: Forgot PIN */}
      {showForgotPIN && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-sm p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-black"
              onClick={() => setShowForgotPIN(false)}
            >
              <X size={20} />
            </button>
            <h3 className="text-lg   text-black mb-4">Forgot PIN?</h3>
            <p className="text-sm text-gray-600 mb-4">
              We'll send a PIN reset link to your registered email.
            </p>
            <button
              onClick={handleForgotPIN}
              className="w-full rounded-full bg-black text-white py-2 text-sm   hover:bg-opacity-90 transition"
            >
              Send Reset Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileScreen;
