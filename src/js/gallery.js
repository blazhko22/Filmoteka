import ref from './Refs';
import movieCardTpl from '../templates/fetchMovieTemplate.hbs';
import ApiService from './FetchMovie';
const API_KEY = new ApiService();
const BASE_URL = 'https://api.themoviedb.org/3';

fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=b59f17e26fe0bb62f0ad4e21eca227b9')
  .then(response => {
    return response.json();
  })
  .then(films => {
    const murkup = movieCardTpl(films.results);
    ref.galleryRef.innerHTML = murkup;
  });
const genre = fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });
