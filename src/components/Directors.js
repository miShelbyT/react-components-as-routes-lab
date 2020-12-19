import React from 'react';
import { directors } from '../data';

const Directors = () => {


  const renderDirectors = () => {
    return directors.map(dirObj => {
      return <div>
        <h4>{dirObj.name}</h4>
        <ul>Movies:</ul>
        {dirObj.movies.map(movie => <li>{movie}</li>)}

      </div>
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
