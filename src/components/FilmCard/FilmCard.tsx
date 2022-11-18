import React, {Component} from 'react';
import {Film} from "../../types";
import "./FilmCard.css";
import Button from "../Button/Button";

interface Props {
  element: Film,
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  onBtnClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface State {
  film: Film;
}

class FilmCard extends Component <Props, State> {
  state: State = {
    film: this.props.element,
  };

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): boolean {
    return nextState.film.title !== nextProps.element.title;
  };

  render() {
    return (
      <div>
        <input
          className="Film"
          type="text"
          defaultValue={this.props.element.title}
          onChange={this.props.onInputChange}
          name="title"
        />
        <Button name={"Delete"} onBtnClick={this.props.onBtnClick}/>
      </div>
    );
  }
}

export default FilmCard;