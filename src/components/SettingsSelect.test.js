import React from 'react';
import { shallow } from 'enzyme';
import { SettingsSelect } from './SettingsSelect';

it('renders SettingsSelect', () => {
    const wrapper = <SettingsSelect settings={{}} options={[]}/>;
  expect( shallow( wrapper )).toMatchSnapshot();
});