import request from 'supertest';
import express from 'express';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import handleRender from '../handleRender';
import renderFullPage from '../renderFullPage';
import getPokemon from '../../services/getPokemon';

const mockData = {
    data: {
        pokemon: [ { pokemon: { name: 'testing'} } ]
    }
};

jest.mock('../../services/getPokemon');

getPokemon.withAbility
    .mockReturnValue(Promise.resolve(mockData));

jest.mock('../renderFullPage', () => jest.fn(() => 'renderFullPage'));

jest.mock('react-dom/server', () => {
    return {
        renderToString: jest.fn(() => 'hello')
    };
})

const mockSend = jest.fn(renderFullPageFn => renderFullPageFn);

const mockRes = {
    send: mockSend
};

const req = jest.fn();

describe('handleRender', () => {
    it('testing', () => {
        handleRender(req, mockRes)
            .then(resp => {
                expect(getPokemon.withAbility).toHaveBeenCalled();
                expect(mockRes.send).toHaveBeenCalledWith('renderFullPage');
                expect(renderFullPage).toHaveBeenCalled();
            })
    })
})