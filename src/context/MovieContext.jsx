import {useState} from "react";
import {MovieContextObj} from "./MovieContextObj.js";

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (movie) => {
    if (!favorites.find((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
      localStorage.setItem("favorites", JSON.stringify([...favorites, movie]));
    }
  };

  return (
    <MovieContextObj.Provider value={{ movies, setMovies, favorites, addFavorite }}>
      {children}
    </MovieContextObj.Provider>
  );
};
