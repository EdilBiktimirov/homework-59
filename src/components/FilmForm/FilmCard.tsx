import React, {Component} from 'react';
import {Film} from "../../types";

interface Props {
  element: Film,
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  onBtnClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface State {
  film: Film;
}

class FilmCard extends Component <Props, State>{

  state: State = {
    film: this.props.element,
  };


  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): boolean {
    console.log('here shouldUpdate');
    return nextState.film.title !== nextProps.element.title;
  }

  render() {
    return (
      <div>
        <input
          type="text"
          defaultValue={this.props.element.title}
          onChange={this.props.onInputChange}
          name="title"
        />
        <button onClick={this.props.onBtnClick}>Delete</button>

      </div>
    );
  }
}

export default FilmCard;