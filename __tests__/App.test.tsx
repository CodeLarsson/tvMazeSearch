import 'react-native';
import React from 'react';
import App from '../App';

import {it, expect, describe} from '@jest/globals';
import renderer from 'react-test-renderer';

describe('App component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
