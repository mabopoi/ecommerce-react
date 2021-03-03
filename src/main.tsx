import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './App';
import { State } from './types';
import './index.scss';

const initialState: State = { cart: [] };

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  // eslint-disable-next-line @typescript-eslint/comma-dangle
  document.getElementById('root')
);
