import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {IconButton} from '../components/buttons/IconButton';
import {Search} from 'iconoir-react-native';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  const {colors} = useTheme();

  const localstyles = StyleSheet.create({
    buttonRow: {
      marginTop: 24,
      flexDirection: 'row',
      gap: 16,
    },
  });

  return (
    <SafeAreaView
      style={{backgroundColor: colors.background, ...styles.container}}
    >
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={{color: colors.text, ...styles.headingText}}>
            TV Shows
          </Text>
          <Text style={{color: colors.text, ...styles.screenText}}>
            Search for your favourite TV shows using the TV Maze API
          </Text>
          <View style={localstyles.buttonRow}>
            <IconButton
              Icon={Search}
              titleTextSize={16}
              testID="tid-to-search-button"
              title="Go to Search"
              onPress={() => {
                navigation.navigate('Search');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
