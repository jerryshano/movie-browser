import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage.jsx";
import Favorites from "./components/Favorites.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-5 shadow-md">
      <nav className="sticky top-0 z-50 bg-gray-900 mb-5 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-3xl font-bold mb-5">🎬 Movie Browser</h1>
        </Link>
        <div className="flex gap-4">
          <Link
            to="/"
            className="text-lg font-medium text-gray-400 hover:underline hover:text-white transition-colors duration-200"
          >
            Search
          </Link>
          <Link
            to="/favorites"
            className="text-lg font-medium text-gray-400 hover:underline hover:text-white transition-colors duration-200"
          >
            Favorites
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}
