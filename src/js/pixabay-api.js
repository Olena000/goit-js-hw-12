import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '44079698-e6186d09374e2a24bdfa7da89';

export async function searchImage(currentQuery, page = 1) {
  const { data } = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      page: page,
      per_page: 15,
      q: currentQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  });
  return data;
}
