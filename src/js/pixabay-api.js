import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  createGallery,
  clearGallery,
  hideLoader
} from '/js/render-functions';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52318112-aedb8ccc797c66be623deef69';

export function getImagesByQuery(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  // return fetch(`${BASE_URL}?${params}`)
  // .then((res) => {
  //     if(!res.ok) {
  //         throw new Error(res.status);
  //     }

  //     return res.json();
  // })

  axios
    .get(BASE_URL, { params })
    .then(res => {
      clearGallery();
      createGallery(res.data.hits);
    })
    .catch(error => {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        color: 'red',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
}
