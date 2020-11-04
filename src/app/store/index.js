import reducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';

import data from '../data';

import thunk from 'redux-thunk';

const store = createStore(reducer, data, applyMiddleware(thunk));

export default store;
