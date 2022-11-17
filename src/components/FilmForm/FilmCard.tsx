import React, {Component} from 'react';
import {Film} from "../../types";
import Button from "../Button/Button";

interface Props {
  element: Film,
  onInputChange: (n: string, v: string) => void;
  // children: React.PropsWithChildren;
  onBtnClick: () => void;

}

interface State {
  film: Film;
}

class FilmCard extends Component <Props, State>{

  state: State = {
    film: {
      id: this.props.element.id,
      title: this.props.element.title
    }
  };

  // componentDidMount() {
  //   console.log('didM ', this.props.element.title);
  // }
  //
  // componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
  //   console.log('didU ', this.props.element.title);
  //
  // }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): boolean {
    console.log('here');
    return nextProps.element.id !== nextState.film.id;
  }

  render() {
    return (
      <div>
        <input
          type="text"
          defaultValue={this.props.element.title}
          onChange={(e) => this.props.onInputChange(this.props.element.id, e.target.value)}
          name="title"
        />
        <button onClick={this.props.onBtnClick}>Delete</button>

      </div>
    );
  }
}

export default FilmCard;