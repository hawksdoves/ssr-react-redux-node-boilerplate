import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import getPokemonWithAbility, { getPokemonRequest, getPokemonError, getPokemonSuccess } from '../getPokemonWithAbility';
import getPokemon from '../../services/getPokemon';
import { GET_POKEMON_SUCCESS, GET_POKEMON_REQUEST, GET_POKEMON_ERROR } from '../../constant/actionTypes';

const mockData = {
    data: {
        pokemon: ['test']
    }
};

jest.mock('../../services/getPokemon');

getPokemon.withAbility
    .mockReturnValueOnce(Promise.resolve(mockData))
    .mockReturnValueOnce(Promise.reject('error'));


describe('getPokemonWithAbility', () => {
    it('will dispatch action GET_POKEMON_REQUEST and GET_POKEMON_SUCCESS', () => {

        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);

        const expectedActions = [
            { type: GET_POKEMON_REQUEST },
            { type: GET_POKEMON_SUCCESS, pokemon: mockData.data.pokemon }
        ]
        const store = mockStore({ pokemon: [] });

        return store.dispatch(getPokemonWithAbility('anything'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
                expect(getPokemon.withAbility).toHaveBeenCalled();
            });
    })

    it('will dispatch action GET_POKEMON_REQUEST and GET_POKEMON_FAILURE', () => {

        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);

        const expectedActions = [
            { type: GET_POKEMON_REQUEST },
            { type: GET_POKEMON_ERROR, error: 'error' }
        ]
        const store = mockStore({ pokemon: [] });

        return store.dispatch(getPokemonWithAbility('anything'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
                expect(getPokemon.withAbility).toHaveBeenCalled();
            });
    })

    describe('getPokemonError', () => {
        it('returns the correct action object', () => {
            expect(getPokemonError('error')).toEqual({ type: GET_POKEMON_ERROR, error: 'error' })
        })
    })

    describe('getPokemonSuccess', () => {
        it('returns the correct action object', () => {
            expect(getPokemonSuccess('pokemon')).toEqual({ type: GET_POKEMON_SUCCESS, pokemon: 'pokemon' })
        })
    })

    describe('getPokemonRequest', () => {
        it('returns the correct action object', () => {
            expect(getPokemonRequest()).toEqual({ type: GET_POKEMON_REQUEST })
        })
    })
})
