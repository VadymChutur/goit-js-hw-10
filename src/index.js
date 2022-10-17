import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import marckupTpl from '../src/templates/markupCountries.hbs';

const DEBOUNCE_DELAY = 300;
const BASE_URL = 'https://restcountries.com';
const name = 'ukraine';

const refs = {
  inputFindDield: document.querySelector('input#search-box'),
  conteinerInfo: document.querySelector('.country-info'),
};

refs.inputFindDield.addEventListener('input', findCountry, DEBOUNCE_DELAY);

function findCountry(e) {
  console.log(e.data);
  let search = e.data;
  fetchCountries(search.trim().toLowerCase());
}

function fetchCountries(nameCountry) {
  fetch(`${BASE_URL}/v2/name/${nameCountry}`)
    .then(response => {
      if (!response) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(renderCountreisInfo)
    .catch(error => console.log(error));
}

function renderCountreisInfo(data) {
  const markup = marckupTpl(data[0]);
  refs.conteinerInfo.innerHTML = markup;
}
