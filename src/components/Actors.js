import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>{/*{codes here}*/}</div>;

  const displayActorsList = actors.map((actor) => (
    <div key={actor.name}>
      <h1>{actor.name}</h1>
      <ul>
        {actor.movies.map((movies) => (
          <li key={movies}>{movies}</li>
        ))}
      </ul>
    </div>
  ));

  return(
    <div>
      <h1>Actors Page</h1>
      {displayActorsList}
    </div>
  )}