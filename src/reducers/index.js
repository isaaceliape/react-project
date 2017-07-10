import { combineReducers } from 'redux';
import products from '../data/product/ProductReducer';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  products,
});

export default rootReducer;
