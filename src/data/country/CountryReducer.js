import * as types from './CountryTypes';

const initialState = {
  countries: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case types.UPDATE_ALL_COUNTRIES:
    const newState = {
      ...state,
      countries: action.entries,
    };
    // console.log('STORE', newState);
    return newState;
  default:
    return state;
  }
}
