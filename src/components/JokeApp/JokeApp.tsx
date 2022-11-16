import React, {useEffect, useState} from 'react';
import type {Joke} from "../../types";
import Button from "../Button/Button";
import "./JokeApp.css";


const urlChuck = "https://api.chucknorris.io/jokes/random";

const JokeApp: React.FC = () => {

  const [joke, setJoke] = useState<Joke>(
      {value: '', id: ''},
    );

  const request= async () => {
    const response = await fetch(urlChuck);
    if (response.ok) {
      const jokeObj: Joke = await response.json();
      setJoke(prev => ({
        ...prev,
        value: jokeObj.value,
        id: jokeObj.id,
      }))
    }
  }

  useEffect(() => {
    request().catch(console.error);
  }, [])

  return (
    <div className="JokeApp">
      <h3>Chuck Norris jokes</h3>
      <div className="JokeAppBox">
        {joke.value}
      </div>
        <Button name={'New joke'} onBtnClick={() => request().catch(console.error)}/>
    </div>
  );
};

export default JokeApp;