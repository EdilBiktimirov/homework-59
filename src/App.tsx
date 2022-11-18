import React from 'react';
import './App.css';
import FilmApp from "./containers/FilmApp/FilmApp";
import JokeApp from "./containers/JokeApp/JokeApp";

function App() {
  return (
    <div className="App">
      <FilmApp/>
      <JokeApp/>
    </div>
  );
}

export default App;
