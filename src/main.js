import fetchImages from './js/pixabay-api';
import renderGallery from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.js-search');
export const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector(".js-load-more");
const loader = document.querySelector('.loader');


let query = '';
let page = 1;
let per_page = 15;

form.addEventListener('submit', e => {
    e.preventDefault();
    gallery.innerHTML = '';
    query = e.target.elements.search.value.trim();
    if (query === '') {
        iziToast.error({ title: 'Error', message: 'Please enter a search query' });
        return;
    }
    page = 1; 
    loadMore.classList.add('load-more-hidden'); 
    fetchRenderImages();
});


const fetchRenderImages = async () => {
    try {
        loader.style.display = 'block';
const data = await fetchImages(query,page,per_page);


if (data.hits.length === 0) {
    iziToast.info({ message: 'Sorry, no results found. Try again.' });
    loadMore.classList.add('load-more-hidden');
    return;
}

renderGallery(data.hits);
page +=1;

smoothScroll();


if (data.hits.length < per_page || page > Math.ceil(data.totalHits / per_page)) {
    loadMore.classList.add('load-more-hidden');
    iziToast.info({ message: 'We are sorry, but you have reached the end of search results.' });
} else {
    loadMore.classList.remove('load-more-hidden');
}
} catch (error) {
    loader.style.display = 'none';
    loadMore.classList.add('load-more-hidden');
    iziToast.error({ title: 'Error', message: 'Failed to load images' });
}finally {
    loader.style.display = 'none'; 
}
};

loadMore.addEventListener('click', fetchRenderImages);

const smoothScroll = () => {
    const galleryItem = document.querySelector('.gallery-item');
    if (galleryItem) {
        const itemHeight = galleryItem.getBoundingClientRect().height;

        window.scrollBy({
            top: itemHeight * 2,
            behavior: 'smooth',
        });
}
};
