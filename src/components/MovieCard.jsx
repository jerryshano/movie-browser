import React, { useContext } from "react";
import { MovieContextObj } from "../context/MovieContextObj.js";

const MovieCard = ({ movie }) => {
  const { addFavorite } = useContext(MovieContextObj);

  return (
    <div
      key={movie.id}
      className="bg-gray-800 p-3 rounded flex flex-col h-full"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded mb-2 w-full h-64 object-cover"
      />
      <h2 className="text-lg font-semibold line-clamp-2 mb-2">{movie.title}</h2>
      <button
        onClick={() => addFavorite(movie)}
        className="mt-auto bg-yellow-500 px-2 py-1 rounded hover:bg-yellow-600"
      >
        ⭐ Add to Favorites
      </button>
    </div>
  );
};

export default MovieCard;
