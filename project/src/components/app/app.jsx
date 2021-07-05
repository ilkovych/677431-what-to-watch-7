import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import filmsProp from '../MoviePage/movie-page.prop'
import { NUMBER_POSTER_FOR_FILM } from '../../const'
import Main from '../Main/main';
import SignIn from '../SignIn/sign-in';
import MyList from '../MyList/my-list';
import MoviePage from '../MoviePage/movie-page';
import AddReview from '../AddReview/add-review';
import Player from '../Player/player';
import NotFoundPage from '../NotFoundPage/not-found-page';

function App({ films }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main films={films} numberPosterFilm={NUMBER_POSTER_FOR_FILM}/>
        </Route>
        <Route exact path='/login'>
          <SignIn />
        </Route>
        <Route exact path='/mylist'>
          <MyList films={films} />
        </Route>
        <Route exact path='/films/:id'>
          <MoviePage films={films} />
        </Route>
        <Route exact path='/films/:id/review'>
          <AddReview films={films} />
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

App.propTypes = {
  films: filmsProp,
};

export default App;
