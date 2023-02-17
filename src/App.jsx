import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Splash from "./components/Splash";
import Swipe from "./components/Swipe";
import Matches from "./components/Matches";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/swipe/:interestedIn" element={<Swipe />} />
      <Route path="/matches" element={<Matches />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
