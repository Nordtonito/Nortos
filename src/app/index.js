import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App.jsx';

import store from './store';

render(
  <BrowserRouter>
    <App store={store} />
  </BrowserRouter>,
  document.getElementById('root'),
);
