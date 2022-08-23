import React from "react";
import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";
const App = () => {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("thor");
  const getMovies = async () => {
    // const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.API_KEY}&s=${search}`;
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=3e0bb2ac&s=${search}`;

    const res = await fetch(url);
    const data = await res.json();
    if (data.Search) {
      console.log(data.Search);
      setMovie(data.Search);
    }
  };
  useEffect(() => {
    getMovies();
  }, [search]);
  return (
    <>
      <div>
        <SearchBox search={search} setSearch={setSearch} />
        <MovieList movie={movie} />
      </div>
    </>
  );
};

export default App;
