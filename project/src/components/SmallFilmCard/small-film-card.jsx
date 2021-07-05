import React from 'react';
import {Link} from 'react-router-dom';
import filmsProp from '../MoviePage/movie-page.prop';

function SmallFilmCard({ onMouseEnter, onMouseLeave, id, name, preview_image }) {
  const handleOnMouseEnter = () => onMouseEnter(id);
  const handleOnMouseLeave = () => onMouseLeave(null);
  return (
    <article
      className='small-film-card catalog__films-card'
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <div className='small-film-card__image'>
        <img
          src={preview_image}
          alt={name}
          width='280'
          height='175'
        />
      </div>
      <h3 className='small-film-card__title'>
        <Link
          className='small-film-card__link'
          to={`/films/${id}`}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
}

SmallFilmCard.propTypes = {
  films: filmsProp,
};

export default SmallFilmCard;
