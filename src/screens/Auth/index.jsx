import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import headerimg from "../../assets/main-logo.png";
import { X } from "lucide-react"; // Or use any icon set you prefer

const AuthScreen = () => {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Activation link sent to ${email}`);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-white px-4 py-6">
      {/* Close Button */}
      <button
        onClick={() => navigate("/home")} // Change route if needed
        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black"
      >
        <X size={24} />
      </button>

      <img src={headerimg} alt="logo" className="w-40 h-40 mb-4" />

      <h2 className="text-2xl  text-black mb-6">
        {mode === "login" ? "Login to Continue" : "Register Your Account"}
      </h2>

      {/* Toggle Tabs */}
      <div className="mb-6 flex w-full max-w-xs rounded-full bg-gray-200 p-1">
        <button
          className={`w-1/2 py-2 rounded-full text-sm   transition ${
            mode === "login" ? "bg-black text-white" : "text-gray-600"
          }`}
          onClick={() => setMode("login")}
        >
          Login
        </button>
        <button
          className={`w-1/2 py-2 rounded-full text-sm   transition ${
            mode === "register" ? "bg-black text-white" : "text-gray-600"
          }`}
          onClick={() => setMode("register")}
        >
          Register
        </button>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xs flex flex-col gap-4"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-full border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="password"
          maxLength={4}
          inputMode="numeric"
          required
          placeholder="Enter 4-digit PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="w-full rounded-full border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button
          type="submit"
          className="w-full rounded-full bg-black text-white py-3   text-sm hover:bg-opacity-90 transition"
        >
          {mode === "login" ? "Login" : "Register"}
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-4 text-center px-2">
        You'll receive an activation link on your email after submission.
      </p>
    </div>
  );
};

export default AuthScreen;
