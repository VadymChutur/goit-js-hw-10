import './css/styles.css';
import debounce from 'lodash.debounce';
import getRefs from './js/getRefs';
import { fetchCountries } from './js/fetchCountries';
import {
  renderCountreisInfo,
  renderCountreisPreview,
  findManyCountries,
  onError,
} from './js/API-metods';

const DEBOUNCE_DELAY = 300;

const refs = getRefs();

refs.inputFindDield.addEventListener(
  'input',
  debounce(findCountry, DEBOUNCE_DELAY)
);

function findCountry(e) {
  let search = e.target.value;
  let refSearch = search.trim().toLowerCase();
  clearSearchField(e.target.value);
  if (!refSearch) {
    return;
  }
  fetchCountries(refSearch)
    .then(data => {
      if (data.length === 1) {
        renderCountreisInfo(data);
      } else if (data.length >= 2 && data.length <= 10) {
        renderCountreisPreview(data);
      } else {
        findManyCountries(data);
      }
    })
    .catch(onError);
}

function clearSearchField() {
  refs.conteinerInfo.innerHTML = '';
  refs.listInfo.innerHTML = '';
}
