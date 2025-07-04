import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import HistoryScreen from "./screens/HistoryScreen";
import CameraScreen from "./screens/CameraScreen";
import AddExpenseScreen from "./screens/AddExpenseScreen";
import ProfileScreen from "./screens/Profile";
import AuthScreen from "./screens/Auth";

function App() {
  const [isUser, setIsUser] = useState(true); // You can update this from AuthScreen when login/register succeeds

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/history" element={<HistoryScreen />} />
        <Route path="/camera" element={<CameraScreen />} />
        <Route path="/add" element={<AddExpenseScreen />} />

        {/* Auth-required route */}
        <Route
          path="/profile"
          element={
            isUser ? <ProfileScreen /> : <Navigate to="/authUser" replace />
          }
        />

        {/* Auth Screen */}
        <Route path="/authUser" element={<AuthScreen />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
