import * as types from './CountryTypes';

const updateAllCountries = entries => ({
  type: types.UPDATE_ALL_COUNTRIES,
  entries,
});

const fetchAllCountries = () => (dispatch) => {
  fetch('https://restcountries.eu/rest/v2/all')
    .then((resp) => resp.json())
    .then((data) => {
      dispatch(updateAllCountries(data))
    })
    .catch(error => {
      console.log('ERROR', error);
    });
}

export default {
  fetchAllCountries,
}
