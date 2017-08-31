import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ListContainer from '../List';
import List from '../../components/List';
import getPokemonWithAbility from '../../actions/getPokemonWithAbility';

jest.mock('../../actions/getPokemonWithAbility');
getPokemonWithAbility.mockImplementation(() => () => { return "boo" });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockState = { pokemon: [ { pokemon: { name: 'testing'} } ] };
const store = mockStore(mockState);

const connectedComponent = mount(
    <Provider store={store}>
        <ListContainer />
    </Provider>
);

describe('ListContainer', () => {

    it('renders a list component', () => {
        expect(connectedComponent.find(List).length).toEqual(1);
    })

    it('maps pokemon state to props', () => {    
        expect(connectedComponent.find(List).props().pokemon).toEqual(mockState.pokemon);
    })

    it('maps dispatch \(getPokemonWithAbility\) to props', () => {    
        expect(connectedComponent.find(List).props().getPokemonWithAbility()).toEqual('boo');
    })
})
