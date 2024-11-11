import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { gallery } from '../main'

const lightbox = new SimpleLightbox('.gallery a', {
    captionData: "alt",
});



function renderGallery(pics) {
    const markup = pics
        .map(
            ({
                webformatURL,
                largeImageURL,
                tags,
                likes,
                views,
                comments,
                downloads,
            }) => {
                return `
                <li class='gallery-item'>
                <a href='${largeImageURL}'>
                <img src='${webformatURL}' alt='${tags}'>
                </a>
         <div class='info'>
         
<div class='info-item'>
  <p class='main'>Likes</p>
  <p>${likes}</p>
</div>

<div class='info-item'>
  <p class='main'>Views</p>
  <p>${views}</p>
</div>

<div class='info-item'>
  <p class='main'>Comments</p>
  <p>${comments}</p>
</div>

<div class='info-item'>
  <p class='main'>Downloads</p>
  <p>${downloads}</p>
</div>
        </div>

                </li> 
                `;
            }
        )
        .join('');
    
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}

export default renderGallery;