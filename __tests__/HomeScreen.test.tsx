import 'react-native';
import React from 'react';
import {HomeScreen} from '../src/screens/HomeScreen';
import 'react-native-gesture-handler/jestSetup';

// Note: import explicitly to use the types shipped with jest.
import {it, describe, expect, jest} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('HomeScreen', () => {

  it('renders correctly', () => {
    const tree = renderer.create(<HomeScreen  />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
