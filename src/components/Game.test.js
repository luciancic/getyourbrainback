import React from 'react';
import { shallow } from 'enzyme';
import { Game } from './Game';

it('renders Game', () => {
  const wrapper = <Game settings={{}} game={{}} feedback={{}} answer={ jest.fn() }/>;
  expect( shallow( wrapper )).toMatchSnapshot();
});