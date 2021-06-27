import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Main from '../Main/main';
import SignIn from '../SignIn/sign-in';
import MyList from '../MyList/my-list';
import MoviePage from '../MoviePage/movie-page';
import AddReview from '../AddReview/add-review';
import Player from '../Player/player';
import NotFoundPage from '../NotFoundPage/not-found-page';

function App({ films, promoFilm }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main films={films} promoFilm={promoFilm} />
        </Route>
        <Route exact path='/login'>
          <SignIn />
        </Route>
        <Route exact path='/mylist'>
          <MyList />
        </Route>
        <Route exact path='/films/:id'>
          <MoviePage />
        </Route>
        <Route exact path='/films/:id/review'>
          <AddReview />
        </Route>
        <Route exact path='/player/:id'>
          <Player />
        </Route>
        <Route path='/'>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })),
  promoFilm: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  })),
};
