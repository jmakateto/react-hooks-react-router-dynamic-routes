import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
 
  const { movieId } = useParams();
 
  const selectedMovie = movies.find((movie) => movie.id === parseInt(movieId));

  if (!selectedMovie) {
    
    return <div>Movie not found</div>;
  }

  
  return (
    <div>
      <h3>{selectedMovie.title}</h3>
      <p>Movie ID: {selectedMovie.id}</p>
      {}
    </div>
  );
}

export default MovieShow;
