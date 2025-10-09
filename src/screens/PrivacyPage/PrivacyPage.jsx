// PrivacyPolicy.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 text-slate-800">
      <button
        onClick={() => navigate("/about")}
        className="text-sm text-blue-600 underline mb-4"
      >
        ← Back to About
      </button>

      <h1 className="text-2xl   mb-4">Privacy Policy</h1>

      <p className="mb-4">Last Updated: October 10, 2025</p>

      <p className="mb-4">
        Your data stays on your device. I don't collect it, store it, see it, or
        sell it. That's the whole privacy policy.
      </p>

      <h2 className="text-lg   mt-6 mb-2">Questions?</h2>
      <p className="text-center mt-6">
        Need help or want to collaborate?{" "}
        <a
          href="mailto:azhar@spenzai.com"
          data-umami-event="Support Email Click"
          className="text-lg"
        >
          Contact Me
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
