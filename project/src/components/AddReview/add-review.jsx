import React, { useState } from 'react';
import Logo from '../Logo/logo';
import { Link, useParams } from 'react-router-dom';

function AddReview({ films }) {
  let { id } = useParams();
  const { name, poster_image, background_image } = films[id - 1];

  const [ratingValue, setRatingValue] = useState(null);
  const [reviewText, setReviewText] = useState(null);
  return (
    <section className='film-card film-card--full'>
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img src={background_image} alt={name} />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header'>
          <div className='logo'>
            <Logo />
          </div>

          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <Link
                  className='breadcrumbs__link'
                  to={`/films/${id}`}
                >
                  {name}
                </Link>
              </li>
              <li className='breadcrumbs__item'>
                <a className='breadcrumbs__link'>Add review</a>
              </li>
            </ul>
          </nav>

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

        <div className='film-card__poster film-card__poster--small'>
          <img src={poster_image} alt={name} width='218' height='327' />
        </div>
      </div>

      <div className='add-review'>
        <form
          action='#'
          className='add-review__form'
        >
          <div className='rating'>
            <div
              className='rating__stars'
              onChange={(evt) => setRatingValue(evt.target.value)}
            >
              <input className='rating__input' id='star-10' type='radio' name='rating' value='10' />
              <label className='rating__label' htmlFor='star-10'>Rating 10</label>

              <input className='rating__input' id='star-9' type='radio' name='rating' value='9' />
              <label className='rating__label' htmlFor='star-9'>Rating 9</label>

              <input className='rating__input' id='star-8' type='radio' name='rating' value='8' />
              <label className='rating__label' htmlFor='star-8'>Rating 8</label>

              <input className='rating__input' id='star-7' type='radio' name='rating' value='7' />
              <label className='rating__label' htmlFor='star-7'>Rating 7</label>

              <input className='rating__input' id='star-6' type='radio' name='rating' value='6' />
              <label className='rating__label' htmlFor='star-6'>Rating 6</label>

              <input className='rating__input' id='star-5' type='radio' name='rating' value='5' />
              <label className='rating__label' htmlFor='star-5'>Rating 5</label>

              <input className='rating__input' id='star-4' type='radio' name='rating' value='4' />
              <label className='rating__label' htmlFor='star-4'>Rating 4</label>

              <input className='rating__input' id='star-3' type='radio' name='rating' value='3' />
              <label className='rating__label' htmlFor='star-3'>Rating 3</label>

              <input className='rating__input' id='star-2' type='radio' name='rating' value='2' />
              <label className='rating__label' htmlFor='star-2'>Rating 2</label>

              <input className='rating__input' id='star-1' type='radio' name='rating' value='1' />
              <label className='rating__label' htmlFor='star-1'>Rating 1</label>
            </div>
          </div>

          <div className='add-review__text'>
            <textarea
              className='add-review__textarea'
              name='review-text'
              id='review-text'
              placeholder='Review text'
              onChange={(evt) => setReviewText(evt.target.value)}
            >
            </textarea>
            <div className='add-review__submit'>
              <button
                className='add-review__btn'
                type='submit'
              >
                Post
              </button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}

export default AddReview;
