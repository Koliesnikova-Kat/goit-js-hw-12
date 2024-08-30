import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com';

export const fetchedData = async (searchedQuery, page) => {
  const axiosParams = {
    params: {
      q: searchedQuery,
      key: '45695885-da8e33dec9e780ad4c69fe11f',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 15,
      page: page,
    },
  };

  return axios.get('/api/', axiosParams);
};