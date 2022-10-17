import { Notify } from 'notiflix';
import marckupTpl from '../templates/markupCountries.hbs';
import markupPreviewTpl from '../templates/markupCountriesPreview.hbs';
import getRefs from './getRefs';

const refs = getRefs();

function renderCountreisInfo(data) {
  const markup = marckupTpl(data);
  Notify.success(`Found ${data.length} country`);
  refs.conteinerInfo.innerHTML = markup;
}

function renderCountreisPreview(data) {
  const markupPreview = markupPreviewTpl(data);
  Notify.info(`Found ${data.length} country`);
  refs.listInfo.innerHTML = markupPreview;
}

function findManyCountries(data) {
  return Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}

function onError(error) {
  return Notify.failure('Oops, there is no country with that name');
}

export {
  renderCountreisInfo,
  renderCountreisPreview,
  findManyCountries,
  onError,
};
