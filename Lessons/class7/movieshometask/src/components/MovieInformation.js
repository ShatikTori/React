import React from "react";
import { MovieContext } from "../App";

export const MovieInformation = () => {
  const movie = React.useContext(MovieContext);
  return (
    <div>
      <h4>Name: {movie.name}</h4>
      <h4>Rating: {movie.rating}</h4>
      <h4>Genre: {movie.genre}</h4>
      <h4>Plot: {movie.plot}</h4>
      <h4>Release Date: {movie.releaseDate}</h4>
    </div>
  );
};
