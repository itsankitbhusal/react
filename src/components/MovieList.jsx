import React from "react";

const MovieList = ({ movie }) => {
  return (
    <>
      <div className="movie-container">
        {movie.length > 0 &&
          movie.map((movie) => (
            <div>
              <img
                className="img"
                src={movie.Poster}
                alt={`${movie.Title} ${movie.Year}`}
              />
              <br />
              <h4>{movie.Title}</h4>
            </div>
          ))}
      </div>
    </>
  );
};

export default MovieList;
