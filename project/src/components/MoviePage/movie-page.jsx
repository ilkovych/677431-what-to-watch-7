import React from 'react';
import Logo from '../Logo/logo';
import { Link, useParams, useHistory } from 'react-router-dom';
import filmsProp from './movie-page.prop'
import MovieList from '../MovieList/movie-list';
function MoviePage({ films }) {
  let { id } = useParams();
  let history = useHistory();
  const { name, poster_image, background_image, genre, released, rating, scores_count, director, starring, description } = films[id - 1];

  function handleClickPlay() {
    history.push('/player/' + id);
  }
  function handleClickMyList() {
    history.push('/mylist');
  }
  return (
    <>
      <section className='film-card film-card--full'>
        <div className='film-card__hero'>
          <div className='film-card__bg'>
            <img src={background_image} alt={name} />
          </div>

          <h1 className='visually-hidden'>WTW</h1>

          <header className='page-header film-card__head'>
            <div className='logo'>
              <Logo />
            </div>

            <ul className='user-block'>
              <li className='user-block__item'>
                <div className='user-block__avatar'>
                  <img src='img/avatar.jpg' alt='User avatar' width='63' height='63' />
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
                <Link
                  className='btn film-card__button'
                  to={`/films/${id}/review`}
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='film-card__wrap film-card__translate-top'>
          <div className='film-card__info'>
            <div className='film-card__poster film-card__poster--big'>
              <img src={poster_image} alt={name} width='218' height='327' />
            </div>

            <div className='film-card__desc'>
              <nav className='film-nav film-card__nav'>
                <ul className='film-nav__list'>
                  <li className='film-nav__item film-nav__item--active'>
                    <a href='#' className='film-nav__link'>Overview</a>
                  </li>
                  <li className='film-nav__item'>
                    <a href='#' className='film-nav__link'>Details</a>
                  </li>
                  <li className='film-nav__item'>
                    <a href='#' className='film-nav__link'>Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className='film-rating'>
                <div className='film-rating__score'>{rating}</div>
                <p className='film-rating__meta'>
                  <span className='film-rating__level'>Very good</span>
                  <span className='film-rating__count'>{scores_count} ratings</span>
                </p>
              </div>

              <div className='film-card__text'>
                <p>{description}</p>

                <p className='film-card__director'><strong>Director: {director}</strong></p>

                <p className='film-card__starring'><strong>Starring: {starring.map((star) => star + ', ')} and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>

          <MovieList films={films} />
        </section>

        <footer className='page-footer'>
          <div className='logo'>
            <a href='main.html' className='logo__link logo__link--light'>
              <span className='logo__letter logo__letter--1'>W</span>
              <span className='logo__letter logo__letter--2'>T</span>
              <span className='logo__letter logo__letter--3'>W</span>
            </a>
          </div>

          <div className='copyright'>
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

MoviePage.propTypes = {
  films: filmsProp,
}

export default MoviePage;
