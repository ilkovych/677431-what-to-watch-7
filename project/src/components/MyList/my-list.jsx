import React from 'react';
import Logo from '../Logo/logo';
import MovieList from '../MovieList/movie-list';
import {Link} from 'react-router-dom';

function MyList({ films }) {
  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <div className='logo'>
          <Logo />
        </div>

        <h1 className='page-title user-page__title'>My list</h1>

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

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

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
  );
}

export default MyList;
