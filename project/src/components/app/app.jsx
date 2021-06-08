import React from 'react';
import PropTypes from 'prop-types';
import Main from '../Main';

function App({ films, promoFilm }) {
  return (
    <Main films={films} promoFilm={promoFilm} />
  );
}

export default App;

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })),
  promoFilm: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  })),
};
