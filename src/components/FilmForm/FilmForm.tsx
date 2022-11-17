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
    id: '',
    // id: ''
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    this.setState((prev) => ({
      ...prev,
      title: value,
    }))
  }

  onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    this.props.onSubmit({
      ...this.state,
      id: Math.random().toString(),
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input value={this.state.title} name="title" onChange={this.onInputChange} type="text"/>
        <Button name={"Add"}/>
      </form>
    );
  }
}

export default FilmForm;