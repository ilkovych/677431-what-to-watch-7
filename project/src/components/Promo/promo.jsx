import React from 'react';
import filmsProp from '../MoviePage/movie-page.prop';
import Logo from '../Logo/logo'
import { Link, useHistory } from 'react-router-dom';

function Promo({ films, numberPosterFilm }) {
  const { name, genre, released, poster_image, background_image } = films[numberPosterFilm];
  let history = useHistory();

  function handleClickPlay() {
    history.push('/player/' + [numberPosterFilm + 1]);
  }
  function handleClickMyList() {
    history.push('/mylist');
  }
  return (
    <section className='film-card'>
        <div className='film-card__bg'>
          <img
            src={background_image}
            alt={name}
          />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header film-card__head'>
          <div className='logo'>
            <Logo/>
          </div>

          <ul className='user-block'>
            <li className='user-block__item'>
              <div className='user-block__avatar'>
                <img
                  src='img/avatar.jpg'
                  alt='User avatar'
                  width='63'
                  height='63'
                />
              </div>
            </li>
            <li className='user-block__item'>
              <Link className='user-block__link' to='/login'>
                Sign out
              </Link>
            </li>
          </ul>
        </header>

        <div className='film-card__wrap'>
          <div className='film-card__info'>
            <div className='film-card__poster'>
              <img
                src={poster_image}
                alt={name}
                width='218'
                height='327'
              />
            </div>

            <div className='film-card__desc'>
              <h2 className='film-card__title'>{name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{genre}</span>
                <span className='film-card__year'>{released}</span>
              </p>

              <div className='film-card__buttons'>
                <button
                  className='btn btn--play film-card__button'
                  type='button'
                  onClick={handleClickPlay}
                >
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className='btn btn--list film-card__button'
                  type='button'
                  onClick={handleClickMyList}
                >
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

Promo.propTypes = {
  films: filmsProp,
};

export default Promo;
