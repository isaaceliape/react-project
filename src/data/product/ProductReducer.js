import * as types from './ProductTypes';

const initialState = {
  productsName: "abajur",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case types.UPDATE_PRODUCTS:
    const newState = {
      ...state,
      productsName: action.entries,
    };
    console.log('STORE', newState);
    return newState;
  default:
    return state;
  }
}
