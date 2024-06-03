import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchImage } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions';

const formElem = document.querySelector('.form');
const imageList = document.querySelector('.gallery');
const searchLoader = document.getElementById('search-loader');
const loadMoreLoader = document.getElementById('load-more-loader');
const loadMore = document.querySelector('.js-load-more');

function showLoader(loader) {
  loader.classList.add('is-open');
}

function hideLoader(loader) {
  loader.classList.remove('is-open');
}

let currentQuery = '';
let currentPage = 1;

formElem.addEventListener('submit', handleSubmit);
loadMore.addEventListener('click', onLoadMore);

function handleSubmit(event) {
  event.preventDefault();
  currentQuery = event.target.elements['search-input'].value
    .trim()
    .toLowerCase();

  if (!currentQuery) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  currentPage = 1;
  formElem.reset();
  imageList.innerHTML = '';
  loadMore.classList.add('js-more-hidden');
  fetchImages('search');
}

function onLoadMore() {
  currentPage += 1;
  loadMore.classList.add('js-more-hidden');
  fetchImages('loadMore');
}

function fetchImages(type) {
  if (type === 'search') {
    showLoader(searchLoader);
  } else if (type === 'loadMore') {
    showLoader(loadMoreLoader);
  }

  searchImage(currentQuery, currentPage)
    .then(data => {
      hideLoader(searchLoader);
      hideLoader(loadMoreLoader);

      if (!data.hits.length) {
        if (currentPage === 1) {
          iziToast.error({
            title: 'Error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
        }
        loadMore.classList.add('js-more-hidden');
      } else {
        const markup = createMarkup(data.hits);
        imageList.insertAdjacentHTML('beforeend', markup);
        const lightbox = new SimpleLightbox('.gallery-item a', {
          captionsData: 'alt',
          captionDelay: 250,
        });
        lightbox.refresh();

        if (currentPage > 1) {
          const galleryItems = document.querySelectorAll('.gallery-item');
          if (galleryItems.length > 0) {
            const { height: cardHeight } =
              galleryItems[0].getBoundingClientRect();
            window.scrollBy({
              top: cardHeight * 2,
              behavior: 'smooth',
            });
          }
        }

        if (data.totalHits > imageList.children.length) {
          loadMore.classList.remove('js-more-hidden');
        } else {
          loadMore.classList.add('js-more-hidden');
          iziToast.info({
            title: 'Info',
            message:
              "We're sorry, but you've reached the end of search results.",
            position: 'topRight',
          });
        }
      }
    })
    .catch(error => {
      hideLoader(searchLoader);
      hideLoader(loadMoreLoader);
      loadMore.classList.add('js-more-hidden');
      iziToast.error({
        title: 'Error',
        message: `An error occurred: ${error.message}`,
        position: 'topRight',
      });
    });
}
