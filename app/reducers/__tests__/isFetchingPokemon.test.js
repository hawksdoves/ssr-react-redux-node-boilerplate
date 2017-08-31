import isFetchingPokemon from '../isFetchingPokemon';
import { GET_POKEMON_SUCCESS, GET_POKEMON_REQUEST, GET_POKEMON_ERROR } from '../../constant/actionTypes';

describe('isFetchingPokemon', () => {
    it('returns the given state if action type is not valid', () => {
        expect(isFetchingPokemon(true, { type: 'bob' })).toEqual(true);
    })

    it('returns false if action type is GET_POKEMON_ERROR', () => {
        expect(isFetchingPokemon('state', { type: 'GET_POKEMON_ERROR' })).toEqual(false);
    })

    it('returns true if action type is GET_POKEMON_ERROR', () => {
        expect(isFetchingPokemon('state', { type: 'GET_POKEMON_SUCCESS' })).toEqual(false);
    })

    it('returns true if action type is GET_POKEMON_REQUEST', () => {
        expect(isFetchingPokemon('state', { type: 'GET_POKEMON_REQUEST' })).toEqual(true);
    })

    it('returns default state if no state is passed and action type is not GET_POKEMON_ERROR', () => {
        expect(isFetchingPokemon(undefined, { type: 'GET_POKEMON' })).toEqual(false);
    })
})
