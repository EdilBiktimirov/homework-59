import React, {Component} from 'react';
import ButtonC from "../Button/ButtonC";
import type {Film} from "../../types";
import "./FilmForm.css";

interface Props {
  onSubmit: (state: Film) => void;
}

class FilmForm extends Component<Props> {
  state: Film = {
    title: '',
    id: '',
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    this.setState((prev) => ({
      ...prev,
      title: value,
    }))
  };

  onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    this.props.onSubmit({
      ...this.state,
      id: Math.random().toString(),
    });
  };

  render() {
    return (
      <form className="FilmForm" onSubmit={this.onFormSubmit}>
        <input className="FormInput" value={this.state.title} name="title" onChange={this.onInputChange} type="text"/>
        <ButtonC name={"Add"}/>
      </form>
    );
  }
}

export default FilmForm;