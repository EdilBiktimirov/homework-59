import React, {Component} from 'react';
import {Film} from "../../types";

interface Props {
  element: Film,
  onInputChange: (n: string, v: string) => void;
}

interface State {
  film: Film;
}

class FilmCard extends Component <Props, State>{

  state: State = {
    film: {
      name: this.props.element.name,
      title: this.props.element.title
    }
  };

  componentDidMount() {
    console.log('didM ', this.props.element.title);
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
    console.log('didU ', this.props.element.title);

  }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): boolean {
    console.log('here');
    return nextProps.element.name !== nextState.film.name;
  }

  render() {
    return (
      <div>
        <input
          defaultValue={this.props.element.title}
          onChange={(e) => this.props.onInputChange(this.props.element.name, e.target.value)}
          name={this.state.film.name
        }/>
      </div>
    );
  }
}

export default FilmCard;