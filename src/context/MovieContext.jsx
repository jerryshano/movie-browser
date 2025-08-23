import { useCallback, useState } from "react";
import { MovieContextObj } from "./MovieContextObj.js";

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    // Load from localStorage initially
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  // Memoized addFavorite
  const addFavorite = useCallback(
    (movie) => {
      setFavorites((prevFavorites) => {
        if (!prevFavorites.find((fav) => fav.id === movie.id)) {
          const updated = [...prevFavorites, movie];
          localStorage.setItem("favorites", JSON.stringify(updated));
          return updated;
        }
        return prevFavorites;
      });
    },
    [], // No dependencies because setFavorites is stable
  );

  return (
    <MovieContextObj.Provider
      value={{ movies, setMovies, favorites, addFavorite }}
    >
      {children}
    </MovieContextObj.Provider>
  );
};
