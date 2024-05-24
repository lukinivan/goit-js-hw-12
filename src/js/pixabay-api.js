import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const requestParams = {
  query: '',
  page: 1,
  per_page: 15,
  total_hits: 0,
};

export function getPhotos() {
  const API_KEY = '44003480-04272ce3fae5ad0292fb853b7';
  const params = {
    params: {
      key: API_KEY,
      q: requestParams.query,
      page: requestParams.page,
      per_page: requestParams.per_page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  };

  return axios.get('', params);
}
