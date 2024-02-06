import {enableFetchMocks} from 'jest-fetch-mock';
enableFetchMocks();

import 'react-native';

import {it, expect, describe, beforeEach} from '@jest/globals';
import {renderHook, waitFor} from '@testing-library/react-native';
import {useGetTvShow} from '../src/hooks/useGetTvShow';
import fetchMock from 'jest-fetch-mock';

describe('Test useGetTvShow', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('API Returns OK', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        id: 230,
        name: 'Breaking Bad',
      }),
    );

    const {result} = renderHook(() => useGetTvShow(230));
    expect(result.current).toBeUndefined();

    // Ensure to assert the value within the hook's result
    await waitFor(() => {
      expect(result.current).toEqual({
        id: 230,
        name: 'Breaking Bad',
      });
    });
  });
});
