import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Redux store with initial state
const store = createStore(reducers, preloadedState, composeEnhancers(applyMiddleware(thunk)))

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
