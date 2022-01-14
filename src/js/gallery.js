// import ref from './Refs';
// import movieCardTpl from '../templates/fetchMovieTemplate.hbs';
// import ApiService from './FetchMovie';
// const apiService = new ApiService();
// const BASE_URL = 'https://api.themoviedb.org/3';

// fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiService}`)
//   .then(response => {
//     return response.json();
//   })
//   .then(films => {
//     const murkup = movieCardTpl(films.results);
//     ref.galleryRef.innerHTML = murkup;
//   });
// const genre = fetch(`${BASE_URL}/genre/movie/list?api_key=${apiService}&language=en-US`)
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   });
import FetchMovieHeader from './FetchMovie';
import movieTpl from '../templates/fetchMovieTemplate.hbs';
const fetchMovieHeader = new FetchMovieHeader();
import ref from './Refs';

ref.mainFilmSerch.addEventListener('gallery', onSearch);

function onSearch(e) {
  e.preventDefault();
  fetchMovieHeader.query = e.currentTarget.elements.query.value.trim();
  clearFetchResault();
  if (fetchMovieHeader.query === '') {
    clearFetchResault();
  } else {
    fetchMovieHeader.searchfetchMovieGenres().then(renderMovieList);
  }
}

function renderMovieList(data) {
  ref.galleryRef.insertAdjacentHTML('afterbegin', `<ul>${movieTpl(data)}</ul>`);
}

function clearFetchResault() {
  ref.galleryRef.innerHTML = '';
}
