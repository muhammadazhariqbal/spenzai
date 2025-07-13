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

      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        Your privacy matters to me. Spenzai is built to respect your data —
        simple, clear, and secure.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">What I Collect</h2>
      <p className="mb-4">
        By default, <strong>I collect nothing</strong>. All your expense data
        stays <strong>on your device</strong>.
      </p>
      <p className="mb-4">
        If you enable features like quote preferences or monthly email reports,
        I may store only what’s necessary — such as your email or quote type.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">I Don’t:</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Track you</li>
        <li>Sell your data</li>
        <li>Share anything with third parties</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">Offline First</h2>
      <p className="mb-4">
        Spenzai works offline. Your data is saved locally using your browser’s
        storage. No internet required.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">Backup (Coming Soon)</h2>
      <p className="mb-4">
        When backup is available, you’ll control everything. Nothing will be
        backed up unless you choose to.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">
        Monthly Reports (Coming Soon)
      </h2>
      <p className="mb-4">
        If you subscribe, I’ll only use your email to send your reports. No
        spam. Ever.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">Questions?</h2>
      <p>
        Email me at{" "}
        <a
          href="mailto:azhar@spenzai.com"
          data-umami-event="Support Email Click"
          className="text-blue-600 underline"
        >
          azhar@spenzai.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
