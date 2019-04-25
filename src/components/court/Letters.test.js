import React from 'react';
import { shallow } from 'enzyme';
import Letters from './Letters';
import Letter from './Letter';

it('renders Letters', () => {
  const wrapper = shallow( <Letters currentLetter={4} roundActive={false} audioPlayed={true} />);
  const letters = wrapper.find( Letter );

  expect( wrapper ).toMatchSnapshot();
  expect( letters ).toHaveLength(9);
  expect( wrapper.find( { audioShouldPlay: false } )).toHaveLength(9);

  wrapper.setProps( { roundActive: true, audioPlayed: false } );
  expect( wrapper.find( { audioShouldPlay: false } )).toHaveLength(8);
  expect( wrapper.find( { audioShouldPlay: true } ).key() ).toEqual('4');
});