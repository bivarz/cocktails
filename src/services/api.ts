import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s= ',
});

export default api;
