import React, { useState, useContext } from "react";
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>Movie List</h3>
      {
        //movie = { name: "KGF2", price: "120rs", id: "001" }

        movies.map((movie) => (
          // <Movie name={movie.name} price={movie.price} key={movie.id} />
          <Movie key={movie.id} {...movie} />
          // <h2>Movie Id:{movie.id},  Movie Name: {movie.name}, Price: {movie.price}</h2>
        ))
      }
    </div>
  );
};

export default MovieList;
