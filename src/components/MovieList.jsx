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
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/400"
                }
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
