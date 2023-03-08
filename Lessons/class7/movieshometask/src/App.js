import "./App.css";
import React from "react";
import { Movie } from "./components/Movie";
export const MovieContext = React.createContext();

function App() {
  const movie = {
    name: "Where the Crawdads Sing",
    rating: 7,
    genre: "thriller",
    plot: "A woman who raised herself in the marshes of the Deep South becomes a suspect in the murder of a man with whom she was once involved.",
    releaseDate: "26-06-2022",
    link: "https://www.youtube.com/watch?v=PY3808Iq0Tg",
    pictures: [
      "https://www.kino-teatr.ru/acter/album/474830/1243378.jpg",
      "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/f02f4e89-6c58-4c44-8f40-bd70076c9b2d/3840x",
      "https://i.imgur.com/wSXcuWw.jpg",
    ],
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies Page</h1>
      </header>
      <MovieContext.Provider value={{ movie }}>
        <Movie />
      </MovieContext.Provider>
      ;
    </div>
  );
}

export default App;
