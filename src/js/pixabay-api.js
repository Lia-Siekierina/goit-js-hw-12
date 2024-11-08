import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '46816597-00495df87fc70f19aecba95fd';
const loader = document.querySelector('.loader');

function fetchImages(query, renderFn) {
    
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    const url = `https://pixabay.com/api/?${searchParams}`;

    loader.style.display = 'block';

    // _______________??????????????????????????????????????
    fetch(url)
        .then(res => {
            if (!res.ok) {
            throw new Error(res.status);
        }
            return res.json();
})
    .then(data => {
        const pictures = data.hits;
        if (pictures.length === 0) {
            iziToast.error({
                title: 'No pictures found',
                message: 'Sorry, there are no images matching your search query. Please try again',
                messageColor: 'black',
                messageSize: '14px',
                position: 'topCenter',
                timeout: 2500,
                closeOnClick: true,
        
            });
        }
        loader.style.display = 'none';
        renderFn(pictures);
    })
    .catch(e => console.log(e));
}

export default fetchImages;