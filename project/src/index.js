import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import films from './mocks/films.js';

const promoFilm = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};


ReactDOM.render(
  <React.StrictMode>
    <App films={films} promoFilm={promoFilm} />
  </React.StrictMode>,
  document.getElementById('root'));
