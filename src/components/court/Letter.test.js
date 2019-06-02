import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Letter from './Letter';

it('renders Letter', () => {
  const fn = jest.fn();
  const wrapper = mount( <Letter number={1} playAudio={fn} /> );

  expect( wrapper ).toMatchSnapshot();
  
  wrapper.setProps({ audioShouldPlay: false });
  expect(fn).not.toBeCalled();
  
  wrapper.setProps({ audioShouldPlay: true });
  expect(fn).toBeCalled();
})