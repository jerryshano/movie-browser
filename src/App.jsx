import { useState, useContext } from "react";
import axios from "axios";
import { MovieContextObj } from "./context/MovieContextObj";
import SearchForm from "./components/SearchForm.jsx";
import MovieList from "./components/MovieList.jsx";

export default function App() {
  const { setMovies } = useContext(MovieContextObj);
  const [query, setQuery] = useState("");

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!query) return;
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}`,
    );
    setMovies(res.data.results);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-3xl font-bold mb-5">🎬 Movie Browser</h1>
      <SearchForm
        query={query}
        searchMovies={searchMovies}
        setQuery={setQuery}
      />
      <MovieList />
    </div>
  );
}
