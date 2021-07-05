import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import films from './mocks/films.js';



ReactDOM.render(
  <React.StrictMode>
    <App films={films} />
  </React.StrictMode>,
  document.getElementById('root'));
