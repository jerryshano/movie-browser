import React, { useContext } from "react";
import { MovieContextObj } from "../context/MovieContextObj.js";
import MovieCard from "./MovieCard.jsx";

const Favorites = () => {
  const { favorites } = useContext(MovieContextObj);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {favorites?.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Favorites;
