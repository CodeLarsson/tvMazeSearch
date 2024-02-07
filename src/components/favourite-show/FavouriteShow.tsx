import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {TvMazeShow} from '../../types/tv-maze-show';
import {Button, View} from 'react-native';

type FavouriteShowProps = {
  show: TvMazeShow;
};
export const FavouriteShow = ({show}: FavouriteShowProps) => {
  const IDS_STORAGE_KEY = 'favouritesIds';

  const [favourite, setFavourite] = useState<TvMazeShow | null>(null);

  const handlePress = () => {
    setFavourite(show);
  };

  useEffect(() => {
    if (!favourite) {
      return;
    }

    const getIdsFromAsyncStore = async (): Promise<string[]> => {
      const ids = await AsyncStorage.getItem(IDS_STORAGE_KEY);
      return ids ? JSON.parse(ids) : [];
    };
    const updateAsyncStorage = async () => {
      const ids = await getIdsFromAsyncStore();

      if (ids && ids.length > 0) {
        ids.push(String(favourite.id));
        console.log(1, ids);
        await AsyncStorage.setItem(IDS_STORAGE_KEY, JSON.stringify(ids));
        await AsyncStorage.setItem(
          String(favourite.id),
          JSON.stringify(favourite),
        );
      }
    };

    updateAsyncStorage().catch(err => console.log(err));
  }, [favourite]);

  return (
    <View>
      <Button onPress={handlePress} title="Add to favourites" />
    </View>
  );
};
