const BASE_URL = 'https://restcountries.com';

export function fetchCountries(name) {
  const options = '?fields=name,capital,population,flags,languages';
  const url = `${BASE_URL}/v2/name/${name}${options}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
