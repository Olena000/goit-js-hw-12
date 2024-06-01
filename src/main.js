import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchImage } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions';

const formElem = document.querySelector('.form');
const imageList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

formElem.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  imageList.innerHTML = '';
  const query = event.target.elements['search-input'].value
    .trim()
    .toLowerCase();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  formElem.reset();
  loader.classList.add('is-open');
  searchImage(query)
    .then(data => {
      loader.classList.remove('is-open');
      if (!data.hits.length) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        const markup = createMarkup(data.hits);
        imageList.insertAdjacentHTML('beforeend', markup);
        const lightbox = new SimpleLightbox('.gallery-item a', {
          captionsData: 'alt',
          captionDelay: 250,
        });
        lightbox.refresh();
      }
    })
    .catch(error => {
      loader.classList.remove('is-open');
      iziToast.error({
        title: 'Error',
        message: `An error occurred: ${error.message}`,
        position: 'topRight',
      });
    });
}
