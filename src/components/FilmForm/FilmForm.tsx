import React, {Component} from 'react';
import Button from "../Button/Button";
import type {Film, StateMutation} from "../../types";

interface Props {
  // name?: string,
  onSubmit: (state: Film) => void;
}

// interface StateMutation {
//   // name?: string;
//   value: string;
// }


class FilmForm extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  state: Film = {
    title: '',
    name: '',
    // id: ''
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    this.setState((prev) => ({
      ...prev,
      title: value,
      name: name,

    }))
  }

  onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    this.props.onSubmit({
      // id: Math.random().toString(),
      ...this.state,
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input value={this.state.title} name={Math.random().toString()} onChange={this.onInputChange}/>
        <Button name={"Add"}/>
      </form>
    );
  }
}

export default FilmForm;