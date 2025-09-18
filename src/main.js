import { getImagesByQuery } from './js/pixabay-api';

const form = document.querySelector('.form');

import { showLoader } from '/js/render-functions';

form.addEventListener('submit', searchImg);
function searchImg(event) {
  event.preventDefault();
  showLoader()

  const searchElem = form.elements['search-text'].value.trim();

  getImagesByQuery(searchElem)
}


