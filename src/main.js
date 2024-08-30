import {fetchedData} from './js/pixabay-api';
import {createGalleryMarkup} from './js/render-functions';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

const form = document.querySelector('form');
const input = document.querySelector('input');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

const onFormSubmit = event => {
  event.preventDefault();

  const searchedValue = input.value.trim();

  if (!searchedValue) {
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  loader.classList.remove('is-hidden');

  fetchedData(searchedValue)
    .then(data => {
      gallery.innerHTML = '';

      if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        form.reset();
        return;
      }

      const galleryMarkup = data.hits.map(createGalleryMarkup).join('');
      gallery.innerHTML = galleryMarkup;

      let galleryLibrary = new SimpleLightbox('.gallery li a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
        overlayOpacity: 0.8,
        captionsPosition: 'bottom'
      });

      galleryLibrary.refresh();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      loader.classList.add('is-hidden');
      form.reset();
    });;
}

form.addEventListener('submit', onFormSubmit);