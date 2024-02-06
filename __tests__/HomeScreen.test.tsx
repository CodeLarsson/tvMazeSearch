import 'react-native';
import React from 'react';
import {HomeScreen} from '../src/screens/HomeScreen';

import {it, describe, expect, jest} from '@jest/globals';

import {render, act, screen, fireEvent} from '@testing-library/react-native';

describe('Test HomeScreen', () => {
  const props: any = {
    navigation: {
      navigate: jest.fn(),
    },
  };

  it('renders correctly', () => {
    const tree = render(<HomeScreen {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('click the button navigates to the search screen', () => {
    render(<HomeScreen {...props} />);

    act(() => {
      const button = screen.getByTestId('tid-to-search-button');

      fireEvent.press(button);
      expect(props.navigation.navigate).toBeCalledWith('Search');
    });
  });
});
