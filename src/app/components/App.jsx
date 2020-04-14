import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Main from './Main';
import About from './About';
import NotFound from './NotFound';

import Header from './elements/Header';

const App = (props) => (
  <Provider store={props.store}>
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route children={Header}/>
      <Route path='/about' component={About}/>
      <Route path='/not-found' component={NotFound}/>
    </Switch>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
