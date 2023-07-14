import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '31107721-7ee60bad5b686af5fdf0a833c';

export const fetchImages = async (query, page) => {
  const images = await axios.get(
    `${URL}?&q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return images.data;
};
