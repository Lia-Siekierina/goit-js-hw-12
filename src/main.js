import fetchImages from './js/pixabay-api';
import renderGallery from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.js-search');
export const gallery = document.querySelector('.gallery')
const loadMore = document.querySelector(".js-load-more");

// loadMore.addEventListener("click", onLoadMore);

let query = '';
let page = 1;
let per_page = 15;

form.addEventListener('submit', e => {
    e.preventDefault();
    gallery.innerHTML = '';
    
    const inputValue = e.target.elements.search.value;
    if (inputValue.trim() === '') return;
    fetchImages(inputValue, renderGallery);
    fetchRenderImages()
});

const fetchRenderImages = async () => {
    try {
        loader.style.display = 'block';
const data = await fetchImages(query,page,per_page);
loader.style.display = 'none';

if (data.hits.length === 0) {
    iziToast.info({
        message: 'sorry,try again'
    });
    loadMore.style.display = 'none';
    return;
}
renderGallery(data.hits);
page +=1;

if(data.hits.length < per_page || page > Math.ceil(data.totalHits / per_page)) {
    loadMore.style.display = 'none';
    iziToast.info({
        message: 'We are sorry, but you have reached the end of search results.'
    })
}else{
    loadMore.style.display ='block';
}
    }catch (error) {
        loadMore.style.display = 'none';
        iziToast.error({title: 'Error'});
    }
};


// const smoothScroll = () => {
//     const galleryItem = document.querySelector('.gallery-item');

//     if (galleryItem) {
//         const itemHeight = galleryItem.getBoundingClientRect().height;

//         window.scrollBy({
//             top: itemHeight * 2,
//             behavior: 'smooth',
//         });
//     }
// };