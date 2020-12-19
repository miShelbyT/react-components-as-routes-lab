import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActors = () => {
    return actors.map(actorObj => {
      return <div>
        <h4>{actorObj.name}</h4>
        <ul>Movies:</ul>
        {actorObj.movies.map(movie => <li>{movie}</li>)}

      </div>
    })
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
