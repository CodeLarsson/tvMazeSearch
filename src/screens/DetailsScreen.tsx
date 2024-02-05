import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
  Image,
} from 'react-native';
import {useGetTvShow} from '../hooks/useGetTvShow';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

import styles from './styles';
import {useTheme} from '@react-navigation/native';
import RenderHTML from 'react-native-render-html';

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export const DetailsScreen = ({route}: DetailsScreenProps) => {
  const showId = route.params.showId;
  const tvShow = useGetTvShow(showId);
  const {width} = useWindowDimensions();
  const {colors} = useTheme();

  const localStyle = StyleSheet.create({
    textStyle: {
      marginTop: 24,
    },
    showImage: {
      marginTop: 16,
      width: '100%',
      height: 500,
      resizeMode: 'cover',
    },
  });

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={{color: colors.text, ...styles.headingText}}>
            {tvShow?.name}
          </Text>
          {tvShow?.image.medium && (
            <Image
              style={localStyle.showImage}
              source={{
                uri: tvShow?.image.medium,
              }}
            />
          )}
          <RenderHTML
            contentWidth={width}
            source={{html: tvShow?.summary ?? ''}}
          />

          <Text
            style={{
              color: colors.text,
              ...styles.screenText,
              ...localStyle.textStyle,
            }}
          >
            Genres: {tvShow?.genres?.join(', ')}
          </Text>
          <Text
            style={{
              color: colors.text,
              ...styles.screenText,
              ...localStyle.textStyle,
            }}
          >
            Rating: {tvShow?.rating?.average ?? 'N/A'}
          </Text>
          <Text
            style={{
              color: colors.text,
              ...styles.screenText,
              ...localStyle.textStyle,
            }}
          >
            Runtime: {tvShow?.runtime ?? 'N/A'}
          </Text>
          <Text
            style={{
              color: colors.text,
              ...styles.screenText,
              ...localStyle.textStyle,
            }}
          >
            Language: {tvShow?.language ?? 'N/A'}
          </Text>
          <Text
            style={{
              color: colors.text,
              ...styles.screenText,
              ...localStyle.textStyle,
            }}
          >
            Status: {tvShow?.status ?? 'N/A'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
