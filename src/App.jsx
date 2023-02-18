import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Splash from "./components/Splash";
import Matches from "./components/Matches";
import SwipeDragons from "./components/SwipeDragons";
import SwipeDungeons from "./components/SwipeDungeons";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/swipe/dragons" element={<SwipeDragons />} />
      <Route path="/swipe/dungeons" element={<SwipeDungeons />} />
      <Route path="/matches" element={<Matches />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
