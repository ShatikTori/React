import React from "react";
import { MovieContext } from "../App";

export const MovieVisual = () => {
  const movie = React.useContext(MovieContext);
  return (
    <div>
      <h3>
        <a href={movie.link}>Link to movie</a>
      </h3>
      <div>
        {movie.pictures.map((image, i) => {
          return (
            <img
              src={image}
              key={i}
              alt="Where the Crawdads Sing"
              style={{ width: 450, height: 310 }}
            />
          );
        })}
      </div>
    </div>
  );
};
