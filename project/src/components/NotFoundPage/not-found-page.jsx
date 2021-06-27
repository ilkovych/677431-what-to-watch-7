import React from 'react';
import Logo from '../Logo/logo'
import {Link} from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Logo/>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </li>
            <li className="user-block__item">
              <Link className='user-block__link' to='/login'>
                Sign out
              </Link>
            </li>
          </ul>
        </header>

      </section>

      <div className="page-content">
        <section className="catalog">
          <h1>
            404.
            <br />
            <small>Page not found</small>
          </h1>
          <Link to="/">Go to main page</Link>
          <footer className="page-footer">
            <div className="logo">
              <a className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </section>
      </div>
    </>
  );
}

export default NotFoundPage;
