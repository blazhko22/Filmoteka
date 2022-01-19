import Pagination from 'tui-pagination';
import refs from './Refs';
import DataFetch from './filmServiceApi.js';
import { renderMovieCardFilms } from './normaliseRenderFilm';
const dataFetch = new DataFetch();

// function tuiPaginationSerch() {
//   dataFetch.page = 0;
//   const pagination2 = new Pagination(refs.paginationRef, {
//     totalItems: DataFetch.totalPages,
//     itemsPerPage: 20,
//     visiblePages: 5,
//     centerAlign: true,
//   });
//   pagination2.on('beforeMove', event => {
//     dataFetch.page = event.page;
//     dataFetch.fetchFilms().then(films => {
//       refs.galleryRef.innerHTML = '';
//       renderMovieCardFilms(films);
//     });
//   });
//   console.log(pagination2);
// }

// export { tuiPaginationSerch };

function tuiPaginationSerch() {
  dataFetch.page = 0;

  const pagination = new Pagination(refs.paginationRef, {
    totalItems: DataFetch.totalPages,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
  });

  pagination.on('beforeMove', function (eventData) {
    const params = new URLSearchParams(window.location.search);
    params.set('page', eventData.page);
    history.pushState(null, null, '?' + params.toString());
  });

  pagination.on('afterMove', function (eventData) {
    if (pagination._options.totalItems <= 20) {
      refs.galleryRef.innerHTML = '';
    }
  });
  console.log(pagination);
  return pagination;
}

export { tuiPaginationSerch };
