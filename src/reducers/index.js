import { combineReducers } from 'redux';
import country from '../data/country/CountryReducer';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  country,
});

export default rootReducer;
