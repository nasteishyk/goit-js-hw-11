import axios from 'axios';

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

  return axios
  .get(BASE_URL, { params })
  .then(res => {
    if(!res.data.hits || res.data.hits.length === 0) {
      throw new Error()
    }
    return res
  })
}
