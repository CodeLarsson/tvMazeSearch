import React, {useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TvMazeShow} from '../types/tv-maze-show';
import {useTheme} from '@react-navigation/native';
import styles from './styles';

export const ProfileScreen = () => {
  const IDS_STORAGE_KEY = 'favouritesIds';

  const [favourites, setFavourites] = useState<TvMazeShow[]>([]);

  const readFavouriteShowsFromStorage = async (ids: string[]) => {
    if (ids.length === 0) {
      return [];
    }
    const items = await AsyncStorage.multiGet(ids);
    return items;
  };
  const getFavouriteIdsFromStorage = async (): Promise<string[] | null> => {
    const ids = await AsyncStorage.getItem(IDS_STORAGE_KEY);
    return ids ? JSON.parse(ids) : null;
  };

  const loadFavourites = async () => {
    // Stringified array of favourite ids
    const favouriteIdsFromStorage = await getFavouriteIdsFromStorage();

    if (favouriteIdsFromStorage && favouriteIdsFromStorage.length > 0) {
      const showsFromStorage = await readFavouriteShowsFromStorage(
        favouriteIdsFromStorage,
      );

      if (showsFromStorage && showsFromStorage.length > 0) {
        const parsedShows: TvMazeShow[] = showsFromStorage.map(show => {
          if (show[1]) {
            return JSON.parse(show[1]);
          }
        });
        return parsedShows;
      }
    }
  };

  loadFavourites()
    .then(favouritesToLoad => setFavourites(favouritesToLoad ?? []))
    .catch(error => console.log(error));

  const colors = useTheme().colors;

  return (
    <SafeAreaView
      style={{backgroundColor: colors.background, ...styles.container}}
    >
      <FlatList
        ListHeaderComponent={
          <>
            <View>
              <Text style={{color: colors.text, ...styles.headingText}}>
                Profile
              </Text>
              <Text style={{color: colors.text, ...styles.screenText}}>
                Here is a list of your favourite TV shows
              </Text>
            </View>
          </>
        }
        data={favourites}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
