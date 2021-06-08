import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const promoFilm = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

const films = [
  {
    'title': 'Fantastic Beasts: The Crimes of Grindelwald',
    'preview': 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  },
  {
    'title': 'Bohemian Rhapsody',
    'preview': 'img/bohemian-rhapsody.jpg',
  },
  {
    'title': 'Macbeth',
    'preview': 'img/macbeth.jpg',
  },
  {
    'title': 'Aviator',
    'preview': 'img/aviator.jpg',
  },
  {
    'title': 'We need to talk about Kevin',
    'preview': 'img/we-need-to-talk-about-kevin.jpg',
  },
  {
    'title': 'What We Do in the Shadows',
    'preview': 'img/what-we-do-in-the-shadows.jpg',
  },
  {
    'title': 'Revenant',
    'preview': 'img/revenant.jpg',
  },
  {
    'title': 'Johnny English',
    'preview': 'img/johnny-english.jpg',
  },
  {
    'title': 'Shutter Island',
    'preview': 'img/shutter-island.jpg',
  },
  {
    'title': 'Pulp Fiction',
    'preview': 'img/pulp-fiction.jpg',
  },
  {
    'title': 'No Country for Old Men',
    'preview': 'img/no-country-for-old-men.jpg',
  },
  {
    'title': 'Snatch',
    'preview': 'img/snatch.jpg',
  },
  {
    'title': 'Moonrise Kingdom',
    'preview': 'img/moonrise-kingdom.jpg',
  },
  {
    'title': 'Seven Years in Tibet',
    'preview': 'img/seven-years-in-tibet.jpg',
  },
  {
    'title': 'Midnight Special',
    'preview': 'img/midnight-special.jpg',
  },
  {
    'title': 'War of the Worlds',
    'preview': 'img/war-of-the-worlds.jpg',
  },
  {
    'title': 'Dardjeeling Limited',
    'preview': 'img/dardjeeling-limited.jpg',
  },
  {
    'title': 'Orlando',
    'preview': 'img/orlando.jpg',
  },
  {
    'title': 'Mindhunter',
    'preview': 'img/mindhunter.jpg',
  },
  {
    'title': 'Midnight Special',
    'preview': 'img/midnight-special.jpg',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App films={films} promoFilm={promoFilm} />
  </React.StrictMode>,
  document.getElementById('root'));
