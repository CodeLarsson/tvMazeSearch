import {useEffect, useState} from 'react';
import {TvMazeShow} from '../types/tv-maze-show';

export const useGetTvShow = (showId: number): TvMazeShow | undefined => {
  const [tvShowData, setTvShowData] = useState<TvMazeShow>();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${showId}`, {
        method: 'GET',
        signal: abortController.signal,
      });
      const data = await response.json();
      setTvShowData(data);

      return () => abortController.abort();
    };
    fetchData().catch(error => console.log(error));
  }, [showId]);

  return tvShowData;
};
