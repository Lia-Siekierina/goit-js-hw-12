import axios from 'axios';


import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '46816597-00495df87fc70f19aecba95fd';
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

async function fetchImages(query, page = 1, per_page = 15) { 
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page,
    });
    const url = `https://pixabay.com/api/?${searchParams}`;

    loader.style.display = 'block';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        loader.style.display = 'none';
        
        if (data.hits.length === 0) {
            iziToast.error({
                title: 'No pictures found',
                message: 'Sorry, there are no images matching your search query. Please try again.',
                messageColor: 'black',
                messageSize: '14px',
                position: 'topCenter',
                timeout: 2500,
                closeOnClick: true,
        
            });
        }
        return data;
    } catch (e) {
        console.log(e);
        loader.style.display = 'none';
        iziToast.error({ title: 'Error', message: 'Failed to fetch images' });
    }
}

export default fetchImages;
