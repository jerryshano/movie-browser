import React, { useContext } from "react";
import MovieCard from "./MovieCard.jsx";
import { MovieContextObj } from "../context/MovieContextObj.js";

const MovieList = () => {
  const { movies } = useContext(MovieContextObj);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies?.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
