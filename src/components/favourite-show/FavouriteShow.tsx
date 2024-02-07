import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {TvMazeShow} from '../../types/tv-maze-show';
import {View} from 'react-native';
import {AppSettings} from '../../utils/AppSettings';
import {IconButton} from '../buttons/IconButton';
import {Heart} from 'iconoir-react-native';

type FavouriteShowProps = {
  show: TvMazeShow;
};
export const FavouriteShow = ({show}: FavouriteShowProps) => {
  const [favourite, setFavourite] = useState<TvMazeShow | null>(null);

  const handlePress = () => {
    setFavourite(show);
  };

  useEffect(() => {
    if (!favourite) {
      return;
    }

    const getIdsFromAsyncStore = async (): Promise<string[]> => {
      const ids = await AsyncStorage.getItem(AppSettings.asyncStorageIdsKey);
      return ids ? JSON.parse(ids) : [];
    };
    const updateAsyncStorage = async () => {
      const ids = await getIdsFromAsyncStore();

      if (ids && Array.isArray(ids)) {
        ids.push(String(favourite.id));
        await AsyncStorage.setItem(
          AppSettings.asyncStorageIdsKey,
          JSON.stringify(ids),
        );
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
      <IconButton
        Icon={Heart}
        onPress={handlePress}
        title="Add to favourites"
        iconSize={14}
      />
    </View>
  );
};
