export const getAllProducs = param => {
  fetch('https://restcountries.eu/rest/v2/all')
    .then(function(response) {
      console.log('response', response);
      return response;
    })
    .catch(error => {
      console.log('ERROR', error);
    });
};