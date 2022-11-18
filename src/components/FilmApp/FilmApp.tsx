import React, {Component} from 'react';
import FilmForm from "../FilmForm/FilmForm";
import {Film} from "../../types";
import FilmCard from "../FilmForm/FilmCard";

interface State {
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

  onInputEdit = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const copyFilms = [...this.state.films];
    const index = copyFilms.findIndex(film => film.id === id);
    const copyFilm = {...this.state.films[index]};
    copyFilm.title = e.target.value;
    copyFilms[index] = copyFilm;

    this.setState({films: copyFilms});
  };

  deleteFilm = (id: string) => {
    const copyFilms = [...this.state.films];
    const index = copyFilms.findIndex(film => film.id === id);
    copyFilms.splice(index, 1);
    this.setState({films: copyFilms});
  }


  render() {

    return (
      <div>
        <FilmForm onSubmit={this.addFilm}/>
        <div>
          {this.state.films.map(element => (
            <FilmCard
              key={element.id}
              element={element}
              onInputChange={(e) => this.onInputEdit(element.id, e)}
              onBtnClick={() => this.deleteFilm(element.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default FilmApp;