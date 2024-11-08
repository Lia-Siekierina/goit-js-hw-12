import fetchImages from './js/pixabay-api';
import renderGallery from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.js-search');
export const gallery = document.querySelector('.gallery')



form.addEventListener('submit', e => {
    e.preventDefault();
    gallery.innerHTML = '';
    
    const inputValue = e.target.elements.search.value;
    if (inputValue.trim() === '') return;
    fetchImages(inputValue, renderGallery);
});