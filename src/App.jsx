import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Splash from "./components/Splash";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
