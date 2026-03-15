import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const ulGallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

// iziToast.success({
//   title: 'Success',
//   message: `✅ Fulfilled promise in ${res}ms`,
//   position: 'topRight',
// });

// iziToast.error({
//   title: 'Error',
//   message: `❌ Rejected promise in ${err}ms`,
//   position: 'topRight',
// });

// getImagesByQuery('cat').then(data => {
//   console.log(data.hits);
//   createGallery(data.hits);
//   gallery.refresh();
// });

form.addEventListener('submit', event => {
  event.preventDefault();
  showLoader();

  const formData = new FormData(form);
  const searchQuery = formData.get('search-text').trim();
  if (searchQuery === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
    });
    hideLoader();
    return;
  }

  clearGallery();
  console.log(searchQuery);
  getImagesByQuery(searchQuery).then(data => {
    console.log(data.hits);
    hideLoader();
    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
    createGallery(data.hits);
  });
});
showLoader();
hideLoader();
