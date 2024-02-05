import {enableFetchMocks} from 'jest-fetch-mock';
enableFetchMocks();
import fetchMock from 'jest-fetch-mock';

import 'react-native';

// Note: import explicitly to use the types shipped with jest.
import {it, expect, beforeEach} from '@jest/globals';
import {TvMazeShow} from '../src/types/tv-maze-show';
import {renderHook, act} from '@testing-library/react-native';
import {useGetTvShow} from '../src/hooks/useGetTvShow';


beforeEach(() => {
  fetchMock.resetMocks();
});

it('API Returns OK', () => {
  const show: Partial<TvMazeShow> = {
    id: 1,
    name: 'test',
    genres: ['test'],
    rating: {average: 1},
  };

  const {result} = renderHook((showId: number) => useGetTvShow(showId), {
    initialProps: show.id,
  });

  act(() => {
    fetchMock.mockResponseOnce(JSON.stringify(show));

    expect(result.current).toEqual(show);
  });
});
