import React, { useState } from "react";
import MovieDetails from "./MovieDetails";
import { Routes, Route, useNavigate } from "react-router-dom";

const MovieList = ({ movie }) => {
  const [imdb, setImdb] = useState("");
  const navigate = useNavigate();

  const redirect = (id) => {
    console.log(id);
    setImdb(id);

    // need to use react routing to redirect to new page;
    // <MovieDetails id={imdb} />;
    navigate("/movieDetails");
  };
  return (
    <>
      <div className="movie-container">
        {movie.length > 0 &&
          movie.map((movie) => (
            <div>
              <Routes>
                <Route
                  path="/movieDetails"
                  element={<MovieDetails id={imdb} />}
                ></Route>
              </Routes>
              <img
                className="img"
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/400"
                }
                onClick={() => {
                  // console.log(movie.imdbID);
                  redirect(movie.imdbID);
                }}
                alt={`${movie.Title} ${movie.Year}`}
              />
              <h4 className="movie-title">{movie.Title}</h4>
            </div>
          ))}
      </div>
    </>
  );
};

export default MovieList;
