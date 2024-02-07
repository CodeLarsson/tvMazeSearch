import React from 'react';
import {TvMazeShow} from '../../types/tv-maze-show';
import {View, Text} from 'react-native';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {FavouriteShow} from '../favourite-show/FavouriteShow';
import {IconButton} from '../buttons/IconButton';
import {Tv} from 'iconoir-react-native';

type SearchResultListItemProps = {
  show: TvMazeShow;
  navigation: any;
};

export const SearchResultListItem = ({
  show,
  navigation,
}: SearchResultListItemProps) => {
  const {colors} = useTheme();

  const handleOnPress = () => {
    navigation.navigate('Details', {showId: show.id});
  };

  return (
    <View style={styles.listItemWrapper}>
      <Text style={styles.listItemHeader}>{show.name}</Text>
      <View style={styles.listItemBody}>
        {show.genres.length > 0 && (
          <View style={styles.listItemGenresView}>
            <Text>Genres:</Text>
            {show.genres.map((genre, i) => (
              <Text
                style={{borderColor: colors.text, ...styles.listItemGenres}}
                key={show.id + i}
              >
                {genre}
              </Text>
            ))}
          </View>
        )}
        <Text>Rating: {show.rating.average ?? 'N/A'}</Text>
      </View>
      <View style={styles.listItemFooter}>
        <IconButton
          Icon={Tv}
          onPress={handleOnPress}
          iconSize={14}
          title="View detials"
        />
        <FavouriteShow show={show} />
      </View>
    </View>
  );
};
