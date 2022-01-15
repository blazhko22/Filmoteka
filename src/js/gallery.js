import ref from './Refs';
import movieCardTpl from '../templates/fetchMovieTemplate.hbs';
const BASE_URL = 'https://api.themoviedb.org/3';

fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=d63b12eb825bf781172e230d745f91db`)
  .then(response => {
    return response.json();
  })
  .then(films => {
    const murkup = movieCardTpl(films.results);
    ref.galleryRef.innerHTML = murkup;
  });
const genre = fetch(
  `${BASE_URL}/genre/movie/list?api_key=d63b12eb825bf781172e230d745f91db&language=en-US`,
)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });
