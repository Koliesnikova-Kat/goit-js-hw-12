import { fetchedData } from './js/pixabay-api';
import { createGalleryMarkup } from './js/render-functions';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

const form = document.querySelector('form');
const input = document.querySelector('input');
const loaderFirst = document.querySelector('.first');
const loaderSecond = document.querySelector('.second');
const gallery = document.querySelector('.gallery');
const loadButton = document.querySelector('.load-button');

let currentPage = 1;
const perPage = 15;
let searchedValue = '';


const onFormSubmit = async event => {
  try {
    event.preventDefault();

    searchedValue = input.value.trim();

    currentPage = 1;

    if (!searchedValue) {
      iziToast.error({
        message: 'Please enter a search query!',
        position: 'topRight',
      });
      return;
    }

    loaderFirst.classList.remove('is-hidden');

    const response = await fetchedData(searchedValue, currentPage);

    gallery.innerHTML = '';

    if (response.data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      form.reset();
      return;
    }

    const galleryMarkup = response.data.hits.map(createGalleryMarkup).join('');
    gallery.innerHTML = galleryMarkup;

    if (response.data.hits.length < perPage) {
      loadButton.classList.add('is-hidden');
      iziToast.error({
        message:
          'We are sorry, but you have reached the end of search results!',
        position: 'center',
      });
    } else {
      loadButton.classList.remove('is-hidden');
    }

    galleryLibrary.refresh();
  } catch (err) {
    iziToast.error({
      message: `${err}`,
      position: 'center',
    });
  } finally {
    loaderFirst.classList.add('is-hidden');
    form.reset();
  }
};

const onLoadButtonClick = async event => {
  try {
    event.preventDefault();

    currentPage++;
    loaderSecond.classList.remove('is-hidden');

    const response = await fetchedData(searchedValue, currentPage);

    const galleryMarkup = response.data.hits.map(createGalleryMarkup).join('');
    gallery.insertAdjacentHTML('beforeend', galleryMarkup);

    let elem = document.querySelector('.gallery-item');
    let rect = elem.getBoundingClientRect();
    window.scrollBy({
      top: 2 * rect.height,
      behavior: 'smooth',
    });

    galleryLibrary.refresh();

    const totalResults = response.data.total;
    const totalPages = Math.ceil(totalResults / perPage);

    if (currentPage >= totalPages || response.data.hits.length < perPage) {
      loadButton.classList.add('is-hidden');
      return iziToast.error({
        message:
          'We are sorry, but you have reached the end of search results!',
        position: 'center',
      });
    }
  } catch (err) {
    iziToast.error({
      message: `${err}`,
      position: 'center',
    });
  } finally {
    loaderSecond.classList.add('is-hidden');
  }
};

let galleryLibrary = new SimpleLightbox('.gallery li a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
  captionsPosition: 'bottom',
});

form.addEventListener('submit', onFormSubmit);
loadButton.addEventListener('click', onLoadButtonClick);