import React, { useContext, useEffect, useState } from "react";
import headerimg from "../../assets/main-logo.png";
import topUpper from "../../assets/splash-top.png";
import { useNavigate } from "react-router-dom";
import {
  generateId,
  initUserLocal,
  getUserLocal,
} from "../../utils/localStorage.js";
import { Settings } from "lucide-react";
import CountrySelectModal from "../../components/CountrySelectModal.jsx";
import { Alert } from "../../components/Alert.jsx";
import { AppContext } from "../../utils/AppContext.jsx";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const [showAskCountryPrompt, setShowAskCountryPrompt] = useState(false);
  const [showError, setShowError] = useState(false);
  const { saveUser, user, isLoading } = useContext(AppContext);

  // Check for existing user on component mount
  useEffect(() => {
    const checkExistingUser = async () => {
      try {
        console.log(user, "user on check");
        if (!isLoading && user.settings?.country) {
          // User exists and has completed setup, redirect to /add
          navigate("/add");
        }
      } catch (error) {
        console.error("Error checking existing user:", error);
      }
    };

    checkExistingUser();
  }, [navigate, user]);

  const handleSelect = async (country) => {
    // Prepare the updated user object once
    const updatedUser = {
      name: "",
      email: "",
      isSync: false,
      createdAt: new Date(),
      id: generateId(),
      browser: navigator.userAgent,
      device: /Mobi|Android/i.test(navigator.userAgent) ? "Mobile" : "Desktop",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      settings: {
        currency: country.currency,
        country: country.name,
      },
    };

    try {
      await saveUser(updatedUser);
      navigate("/add");
    } catch (error) {
      console.error("handleSelect → initUserLocal failed:", error);

      alert("Something went wrong saving your profile. Please try again.");
    } finally {
      // Always turn off loading
    }
  };

  // Show creative loading screen while checking user
  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFFFFF] p-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <img
            src={headerimg}
            height="200"
            width="200px"
            className="animate-pulse"
          />

          {/* Creative loading animation */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-1">
              <div
                className="w-2 h-2 bg-black rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-black rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-black rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>

            <p className="text-lg text-black font-medium animate-pulse">
              Just a moment...
            </p>

            {/* Creative progress bar */}
            <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-black rounded-full animate-pulse"
                style={{
                  width: "60%",
                  animation: "pulse 1.5s ease-in-out infinite",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4 p-6">
        {showError && (
          <Alert
            type="error"
            message="Something went wrong. Please try again."
            onClose={() => setShowError(false)}
          />
        )}
      </div>
      <CountrySelectModal
        visible={showAskCountryPrompt}
        onSelect={handleSelect}
        onClose={() => setShowAskCountryPrompt(false)}
      />
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFFFFF] from-primary to-secondary p-4 text-white">
        <div className="flex flex-col items-center justify-center">
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
          <button
            className="w-[98%] mt-6 flex items-center justify-center space-x-2 bg-black text-white px-8 py-4 rounded-full transition-all duration-300"
            onClick={() => {
              setShowAskCountryPrompt(true);
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span className="text-lg font-semibold">Setting up...</span>
              </>
            ) : (
              <span className="text-lg font-semibold">Get Started</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default WelcomeScreen;
