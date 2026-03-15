import axios from 'axios';

const ApiKey = '55031673-78c5d9f5db54785dbd85479b8';
const url = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(url, {
      params: {
        q: query,
        key: ApiKey,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
