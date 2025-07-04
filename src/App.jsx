import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import HistoryScreen from "./screens/HistoryScreen/HistoryScreen";
import CameraScreen from "./screens/CameraScreen";
import AddExpenseScreen from "./screens/AddExpenseScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/history" element={<HistoryScreen />} />
        <Route path="/camera" element={<CameraScreen />} />
        <Route path="/add" element={<AddExpenseScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
