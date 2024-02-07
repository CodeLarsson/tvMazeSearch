import {useEffect, useState} from 'react';
import {TvMazeShowResponse} from '../types/tv-maze-show';
import {AppSettings} from '../utils/AppSettings';

export const useTvShowSearch = () => {
  const [query, setQuery] = useState('');

  const [tvShowData, setTvShowData] = useState<TvMazeShowResponse[]>([]);

  const hits = tvShowData.length;

  useEffect(() => {
    const fetchData = async (q: string) => {
      try {
        const response = await fetch(
          `${AppSettings.apiUrl}search/shows?q=${q}`,
          {
            method: 'GET',
          },
        );

        if (!response.ok) {
          // Throw a custom error with the HTTP status code
          throw new Error(
            `Fetch error: ${response.status} ${response.statusText}`,
          );
        }

        const data = await response.json();

        // Check if the data is an array before updating the state
        if (Array.isArray(data)) {
          setTvShowData(data);
        } else {
          console.error('Invalid JSON response:', data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(query).catch(error => {
      console.error(error);
    });
  }, [query]);

  return {
    query,
    setQuery,
    tvShowData,
    hits,
  };
};
