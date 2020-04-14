import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Main from './Main';
import About from './About';
import NotFound from './NotFound';

import Header from './elements/Header';

const App = (props) => {
  const history = useHistory();

  return (
    <Provider store={props.store}>
      <Router history={history}>
        <Route component={Header} />
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/not-found" component={NotFound} />
      </Router>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
