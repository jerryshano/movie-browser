import React from "react";

const SearchForm = ({ query, setQuery, searchMovies }) => {
  return (
    <form onSubmit={searchMovies} className="flex gap-2 mb-5">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 rounded w-full text-blue-300"
      />
      <button
        type="submit"
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
