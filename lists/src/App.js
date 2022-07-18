import React, { useState } from 'react';
import UserForm from './components/UserForm';
import MoviesList from './components/MoviesList';
// why do we need an id?
function App() {
  const [movies, setMovies] = useState([]);

  const addMovieHandler = (newMovie) => {
    setMovies((movies) => {
      return [newMovie, ...movies];
    });
  }

  return (
    <React.Fragment>
      <h2>Create Movie Database</h2>
      <UserForm onAddMovie={addMovieHandler} />
      <MoviesList items={movies} />
    </React.Fragment>
  );
}

export default App;
