import request from 'supertest';
import express from 'express';
import cors from 'cors';
import handleRender from '../handleRender';
import app from '../app';

jest.mock('cors', () => jest.fn(() => (req, res, next) => next()));

jest.mock('../handleRender', () => {
        return jest.fn((req, res, next) => res.send());
});

describe('app', () => {
    it('uses cors', () => {
        return request(app)
            .get('/')
            .then((resp) => {
                expect(cors).toHaveBeenCalled();
                expect(handleRender).toHaveBeenCalled();
            })
    })
})