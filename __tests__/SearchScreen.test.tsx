import {enableFetchMocks} from 'jest-fetch-mock';
enableFetchMocks();

import 'react-native';
import React from 'react';
import {it, describe, expect, jest, beforeEach} from '@jest/globals';

import {SearchScreen} from '../src/screens/SearchScreen';
import {
  act,
  renderHook,
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import {useTvShowSearch} from '../src/hooks/useTvShowSearch';

describe('Test Component SearchScreen', () => {
  const props: any = {
    navigation: {
      navigate: jest.fn(),
    },
  };

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('types a query', async () => {
    render(<SearchScreen {...props} />);

    await act(async () => {
      const input = await screen.findByTestId('tid-search-input');

      fireEvent.changeText(input, 'Breaking Bad');

      // Ensure the input value is updated
      expect(input.props.value).toBe('Breaking Bad');
    });
  });

  it('performs a search', async () => {
    render(<SearchScreen {...props} />);

    fetchMock.mockResponseOnce(
      JSON.stringify([
        {
          show: {
            id: 230,
            name: 'Breaking Bad',
          },
          score: 40,
        },
      ]),
    );

    await act(async () => {
      const input = await screen.findByTestId('tid-search-input');
      const searchButton = await screen.findByTestId('tid-search-button');
      const {result} = renderHook(() => useTvShowSearch());

      fireEvent.changeText(input, 'Breaking Bad');

      // Ensure the input value is updated
      expect(input.props.value).toBe('Breaking Bad');

      fireEvent.press(searchButton); // Update query

      await waitFor(async () => {
        expect(result.current.query).toBe('Breaking Bad');
        expect(result.current.hits).toBe(1);
        expect(result.current.tvShowData).toEqual([
          {
            show: {
              id: 230,
              name: 'Breaking Bad',
            },
            score: 40,
          },
        ]);
      });
    });
  });
});
