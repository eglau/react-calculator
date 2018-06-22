import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Calculator from './components/Calculator';
import rootReducer from './reducers';

import './index.css';


const store = createStore(rootReducer);
const app = (
  <Provider store={store}>
    <Calculator />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));