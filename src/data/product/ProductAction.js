
import services from './ProductServices';
import * as types from './ProductTypes';

export const updateAllProducts = entries => ({
  type: types.UPDATE_PRODUCTS,
  entries,
});

// export const fetchProject = param =>
//   (dispatch) => {
//     //DO SOME FETCH
//     return Services.getAllProducs({ param })
//     .then(response => {
//       dispatch(updateAllProducts(response.data.products))
//     })
//     .catch(error => {
//       console.error('ERROR', error);
//     });
//   };
