import React, {Component} from 'react';
import FilmForm from "../FilmForm/FilmForm";
import {Film} from "../../types";
import FilmCard from "../FilmForm/FilmCard";

interface State {
  // name?: string;
  films: Film [];
}

class FilmApp extends Component {
  state: State = {
    films: [],
  };

  addFilm = (newFilm: Film) => {
    this.setState({
      films: [
        ...this.state.films,
        newFilm
      ]
    });
  }

  onInputEdit = (n: string, v: string) => {
    const copyFilms = [...this.state.films];
    const index = copyFilms.findIndex(film => film.name === n);
    const copyFilm = {...this.state.films[index]};
    copyFilm.title = v;
    copyFilms[index] = copyFilm;

    this.setState({films: copyFilms})
  };


  render() {

    return (
      <>
        <FilmForm onSubmit={this.addFilm}/>

        {this.state.films.map(element => {
          return <FilmCard key={Math.random()} element={element} onInputChange={this.onInputEdit}/>
        })
        }
      </>
    );
  }
}

export default FilmApp;