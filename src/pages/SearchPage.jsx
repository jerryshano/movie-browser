import React, { useContext, useState } from "react";
import MovieList from "../components/MovieList.jsx";
import SearchForm from "../components/SearchForm.jsx";
import axios from "axios";
import { MovieContextObj } from "../context/MovieContextObj.js";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const { setMovies } = useContext(MovieContextObj);

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!query) return;
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}`,
    );
    setMovies(res.data.results);
  };

  return (
    <div>
      <SearchForm
        query={query}
        searchMovies={searchMovies}
        setQuery={setQuery}
      />
      <MovieList />
    </div>
  );
};

export default SearchPage;
