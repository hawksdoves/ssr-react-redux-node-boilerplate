import { renderToString } from 'react-dom/server'
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import App from '../components/App';
import getPokemon from '../services/getPokemon';
import renderFullPage from './renderFullPage';

export default function handleRender(req, res) {

    return getPokemon.withAbility('telepathy')
        .then(resp => {
            const initialState = { pokemon: resp.data.pokemon };
            const store = createStore(reducers, initialState, applyMiddleware(thunk));

            const html = renderToString(
                <Provider store={store} >
                    <App />
                </Provider>
            )

            const preloadedState = store.getState();

            res.send(renderFullPage(html, preloadedState));

        })
        .catch(error => console.log(error))
    
}
