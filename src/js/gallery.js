import FetchMovieHeader from './FetchMovie';
import movieTpl from '../templates/fetchMovieTemplate.hbs';
import ref from './Refs';

const fetchMovieHeader = new FetchMovieHeader();

ref.galleryRef.addEventListener('gallery', function addList(movieTpl) {
  const countriesLayout = movieTpl
    .map(data => {
      return `<ul>${movieTpl(data)}</ul>`;
    })
    .join('');
});
