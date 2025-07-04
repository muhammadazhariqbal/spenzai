import React from "react";
import headerimg from "../assets/main-logo.png";
import topUpper from "../assets/splash-top.png";
import sideIcon from "../assets/side-icon.png";

const SplashScreen = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFFFFF] from-primary to-secondary p-4 text-white">
      <div className="splash-animation flex flex-col items-center justify-center">
        <img
          src={topUpper}
          height="120px"
          width="120px"
          style={{ position: "absolute", top: 0, right: 0 }}
        />
        <img src={headerimg} height="250" width="250px" className="mt-5" />
        <h1 className="mb-2 text-4xl font-bold text-left mt-10 text-black">
          Easy ways to manage your expenses
        </h1>
        <button className="w-[98%] mt-6 flex items-center justify-center space-x-2 bg-black text-white px-8 py-4 rounded-full transition-all duration-300">
          <span className="text-lg font-semibold">Get Started</span>
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
