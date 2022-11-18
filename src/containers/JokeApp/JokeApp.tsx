import React, {useEffect, useState} from 'react';
import type {Joke} from "../../types";
import Button from "../../components/Button/Button";
import "./JokeApp.css";

const urlChuck = "https://api.chucknorris.io/jokes/random";

const JokeApp: React.FC = () => {
  const [jokes, setJoke] = useState<Joke[]>([]);

  const jokesAmount: number [] = [1, 2, 3, 4, 5];

  const request = async () => {
    const copyJokes = [...jokes];
    setJoke(copyJokes);

    const promises = jokesAmount.map(async () => {
      const response = await fetch(urlChuck);
      return await response.json();
    });

    const fiveJokes = await Promise.all(promises);
    fiveJokes.map((element) => {
      return setJoke((prev) => ([...prev, element]));
    })
  };

  useEffect(() => {
    request().catch(console.error);
  },[]);

  return (
    <div className="JokeApp">
      <h3>Chuck Norris jokes</h3>
      {jokes.map(elem => {
        return <div className="JokeAppBox" key={Math.random()}>
          {elem.value}
        </div>
      })}
      <Button name={'New joke'} onBtnClick={() => request().catch(console.error)}/>
    </div>
  );
};

export default JokeApp;