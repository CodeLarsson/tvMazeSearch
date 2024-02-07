import {useEffect, useState} from 'react';
import {TvMazeShow} from '../types/tv-maze-show';
import {AppSettings} from '../utils/AppSettings';

export const useGetTvShow = (showId: number): TvMazeShow | undefined => {
  const [tvShowData, setTvShowData] = useState<TvMazeShow>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${AppSettings.apiUrl}shows/${showId}`, {
          method: 'GET',
        });
        const data = await response.json();
        setTvShowData(() => data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData().catch(error => console.log(error));
  }, [showId]);

  return tvShowData;
};
