import React, { useState } from 'react';
import filmsProp from '../MoviePage/movie-page.prop'
import SmallFilmCard from '../SmallFilmCard/small-film-card';

function MovieList({ films }) {
  const [activeFilm, setActiveFilm] = useState(null);

  const handleMouseActive = (id) => setActiveFilm(id);
  const handleMouseLeave = () => setActiveFilm(null);
  return (
    <div className='catalog__films-list'>
      {films.map((film) =>
        <SmallFilmCard
          key={film.id}
          onMouseEnter={handleMouseActive}
          onMouseLeave={handleMouseLeave}
          {...film} />
      )}
  </div>
  );
}

MovieList.propTypes = {
  films: filmsProp,
}

export default MovieList;
