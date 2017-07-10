import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const state = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={state}>
    <App store={state}/>
  </Provider>
  , document.querySelector('.container'));
