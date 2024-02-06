import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {useTvShowSearch} from '../hooks/useTvShowSearch';
import {SearchResultListItem} from '../components/search-result-list-item/SearchResultListItem';

type SearchScreenProps = {
  navigation: any;
};

export const SearchScreen = ({navigation}: SearchScreenProps) => {
  const {colors} = useTheme();
  const {width} = useWindowDimensions();

  const {query, setQuery, tvShowData, hits} = useTvShowSearch();

  const [queryInput, setQueryInput] = useState('');

  const handleClear = () => {
    setQueryInput('');
    setQuery('');
  };

  const handleSearch = () => {
    if (queryInput) {
      setQuery(queryInput);
    } else {
      setQuery('');
    }
  };

  const localstyles = StyleSheet.create({
    searchContainer: {
      padding: 24,
      width: width,
    },
    query: {
      fontSize: 14,
      fontWeight: '300',
      fontStyle: 'italic',
    },
    input: {
      marginTop: 24,
      height: 40,
      borderWidth: 1,
      padding: 10,
      borderColor: colors.text,
    },
    buttonRow: {
      marginTop: 24,
      marginBottom: 24,
      flexDirection: 'row',
      gap: 16,
    },
  });

  return (
    <SafeAreaView
      style={{backgroundColor: colors.background, ...styles.container}}
    >
      <FlatList
        style={localstyles.searchContainer}
        ListHeaderComponent={
          <>
            <View>
              <Text style={{color: colors.text, ...styles.headingText}}>
                Search
              </Text>
              <Text style={{color: colors.text, ...styles.screenText}}>
                Search for your favourite TV shows using the TV Maze API
              </Text>
            </View>

            <TextInput
              testID="tid-search-input"
              style={localstyles.input}
              placeholder="TV Show Name"
              placeholderTextColor={colors.text}
              value={queryInput}
              onChangeText={setQueryInput}
              onSubmitEditing={() => handleSearch()}
            />
            <View style={localstyles.buttonRow}>
              <Button
                testID="tid-search-button"
                title="Search"
                onPress={handleSearch}
                disabled={!queryInput}
              />
              <Button
                testID="tid-search-clear-button"
                title="Clear"
                onPress={handleClear}
                disabled={!queryInput}
              />
            </View>
            <View>
              {query ? (
                <Text style={localstyles.query}>
                  {hits} search results for "{query}"
                </Text>
              ) : (
                ''
              )}
            </View>
          </>
        }
        data={tvShowData}
        renderItem={({item}) => (
          <SearchResultListItem show={item.show} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};
