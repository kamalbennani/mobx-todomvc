import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import store from './stores';
import App from './components/App';

// For Debugginf purposes
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);