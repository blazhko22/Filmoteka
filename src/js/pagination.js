import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import refs from './Refs';
import DataFetch from './filmServiceApi.js';
const dataFetch = new DataFetch();
import { renderFilmCard } from './renderTrandingMovies';

function tuiPagination() {
  const options = {
    totalItems: 100,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
  };

  const pagination = new Pagination(refs.paginationRef, options);

  pagination.on('beforeMove', function (eventData) {
    dataFetch.page = eventData.page;
    dataFetch.fetchTopFilms().then(films => {
      refs.galleryRef.innerHTML = '';
      renderFilmCard(films.results);
    });
  });
}
export { tuiPagination };
