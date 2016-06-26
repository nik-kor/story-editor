import React from 'react';
import logger from 'redux-logger'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { App } from './components/app/app';
import { reducer } from './reducers';

import { initialState } from './state';
import { STORAGE_NAME } from './state';

const middleware = [ logger() ];
const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);

let currentState = store.getState().comments;
store.subscribe(() => {
    let newState = store.getState().comments;

    if (newState.length !== currentState.length) {
        window.localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));
        currentState = newState;
    }
});

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));
