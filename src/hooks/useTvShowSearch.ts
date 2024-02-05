import {useEffect, useState} from 'react';
import {TvMazeShowResponse} from '../types/tv-maze-show';

export const useTvShowSearch = () => {
  const [query, setQuery] = useState('');

  const [tvShowData, setTvShowData] = useState<TvMazeShowResponse[]>([]);

  const hits = tvShowData.length;

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async (q: string, controller: AbortController) => {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${q}`,
        {
          method: 'GET',
          signal: controller.signal,
        },
      );

      if (response.ok) {
        const data = await response.json();
        setTvShowData(data);
      } else {
        setTvShowData([]);
        throw new Error(`An error occured: ${response.status}`);
      }
    };

    fetchData(query, abortController).catch(error => console.log(error));

    return () => abortController.abort();
  }, [query]);

  return {
    query,
    setQuery,
    tvShowData,
    hits,
  };
};
