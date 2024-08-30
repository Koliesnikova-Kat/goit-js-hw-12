const url = 'https://pixabay.com';

export const fetchedData = (searchedQuery) => {
  const urlParams = new URLSearchParams({
    q: searchedQuery,
    key: '45695885-da8e33dec9e780ad4c69fe11f',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 30,
  });

  return fetch(`${url}/api/?${urlParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
};