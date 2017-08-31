import React from 'react';
import { shallow } from 'enzyme';

import List from '../List';

describe('List', () => {
    it('should render correctly', () => {
        const mockPokemon = [
            {
                pokemon: {
                    name: 'friendly'
                }
            }
        ];
        const component = shallow(<List pokemon={mockPokemon} />);
        expect(component).toMatchSnapshot();
    })
})
