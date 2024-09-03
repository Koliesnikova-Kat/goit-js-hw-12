import { root } from 'postcss';
import { fetchedData } from './js/pixabay-api';
import { createGalleryMarkup } from './js/render-functions';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

const form = document.querySelector('form');
const input = document.querySelector('input');
const loaderFirst = document.querySelector('.first');
const loaderSecond = document.querySelector('.second');
const gallery = document.querySelector('.gallery');
const observeredElement = document.querySelector('.observered-element');

let currentPage = 1;
const perPage = 15;
let searchedValue = '';

const observerOptions = {
  root: null,
  rootMargin: '0px 0px 300px 0px',
  threshold: 1,
};

const observerCallBack = async entries => {
  if (entries[0].isIntersecting) {
    try {
      currentPage++;
      loaderSecond.classList.remove('is-hidden');
  
      const response = await fetchedData(searchedValue, currentPage);
  
      const galleryMarkup = response.data.hits.map(createGalleryMarkup).join('');
      gallery.insertAdjacentHTML('beforeend', galleryMarkup);
    
      galleryLibrary.refresh();
  
      const totalResults = response.data.total;
      const totalPages = Math.ceil(totalResults / perPage);
  
      if (currentPage > totalPages) {
        observer.unobserve(observeredElement);

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
  }
};

const observer = new IntersectionObserver(observerCallBack, observerOptions);

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

    galleryLibrary.refresh();

    observer.observe(observeredElement);
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

let galleryLibrary = new SimpleLightbox('.gallery li a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
  captionsPosition: 'bottom',
});

form.addEventListener('submit', onFormSubmit);