import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const BASE_URL = 'https://restcountries.com';
const name = 'ukraine';

fetch(`${BASE_URL}/v2/name/${name}`)
  .then(response => {
    if (!response) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(name => {
    fetchCountries(name);
  })
  .catch(error => console.log(error));

function fetchCountries(data) {
  const {
    name,
    capital,
    population,
    flags: { svg },
    languages,
  } = data[0];
  console.log(data[0]);
  console.log(data[0].name.official);
  console.log(data[0].capital[0]);
  console.log(data[0].population);
  console.log(data[0].flags.svg);
  console.log(data[0].languages);
  console.log(name);
  console.log(capital);
  console.log(population);
  console.log(svg);
  console.log(languages[0]);
}
