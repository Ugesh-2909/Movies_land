import "./App.css";
import { useState, useEffect } from "react";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=279cc0c1";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <>
      <div className="app">
        <h1>Movie Land</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search for movies"
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
          <img src={searchIcon} onClick={() => searchMovies(searchItem)} />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
