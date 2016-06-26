import React from 'react';
import logger from 'redux-logger'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { App } from './components/app/app';
import { reducer } from './reducers';

import { initialState } from './state';

const middleware = [ logger() ];
const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));
