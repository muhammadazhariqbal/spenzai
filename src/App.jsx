import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import HistoryScreen from "./screens/HistoryScreen";
import CameraScreen from "./screens/CameraScreen";
import AddExpenseScreen from "./screens/AddExpenseScreen";
import ProfileScreen from "./screens/Profile";
import AuthScreen from "./screens/Auth";
import InstallPrompt from "./components/InstallPrompt";
import UnderConstruction from "./components/UnderConstruction";
import LandingPage from "./screens/LandingPage/LandingPage";
import PrivacyPolicy from "./screens/PrivacyPage/PrivacyPage";

function App() {
  return (
    <>
      <InstallPrompt />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />

          <Route path="/home" element={<HomeScreen />} />
          <Route path="/about" element={<LandingPage />} />
          <Route path="/history" element={<HistoryScreen />} />
          <Route path="/camera" element={<CameraScreen />} />
          <Route path="/add" element={<AddExpenseScreen />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* Auth-required route */}
          <Route path="/profile" element={<UnderConstruction />} />

          {/* Auth Screen */}
          <Route path="/authUser" element={<AuthScreen />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
