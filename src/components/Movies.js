import React from 'react';
import { movies } from '../data';

const Movies = () => {

  
  const renderMovies = () => {
    return movies.map(movieObj => {
      return <div>
        <h4>{movieObj.title}</h4>
        <p>runtime: {movieObj.time} minutes</p>
        <ul>Genres:</ul>
        {movieObj.genres.map(genre => <li>{genre}</li>)}

      </div>
    })
  }


  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}

    </div>
  );
};

export default Movies;
