import React from "react";

import { useNavigate } from "react-router-dom";
const UnderConstruction = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-6 text-center">
      <h1 className="text-3xl font-bold mb-4">
        🚧 This Screen is Under Development
      </h1>
      <p className="text-gray-700 text-md max-w-md mb-6">
        We’re working on this feature! It will help you store or back up your
        data securely.
      </p>
      <button
        onClick={() => {
          navigate("/home");
        }}
        className="bg-black text-white px-6 py-3 rounded-full text-md font-semibold transition duration-300 hover:scale-105"
      >
        Go Back
      </button>
    </div>
  );
};

export default UnderConstruction;
