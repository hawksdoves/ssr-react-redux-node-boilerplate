import pokemon from '../pokemon';
import { GET_POKEMON_SUCCESS } from '../../constant/actionTypes';

describe('pokemon', () => {
    it('returns the given state if action type is not GET_POKEMON_SUCCESS', () => {
        expect(pokemon('state', { type: 'bob' })).toEqual('state');
    })

    it('returns pokemon if action type is GET_POKEMON_SUCCESS', () => {
        expect(pokemon('state', { type: 'GET_POKEMON_SUCCESS', pokemon: 'pokemon' })).toEqual('pokemon');
    })

    it('returns default state if no state is passed and action type is not GET_POKEMON_SUCCESS', () => {
        expect(pokemon(undefined, { type: 'GET_POKEMON' })).toEqual([]);
    })
})
