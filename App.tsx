import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useColorScheme} from 'react-native';
import {HomeScreen} from './src/screens/HomeScreen';
import {ProfileScreen} from './src/screens/ProfileScreen';
import {SearchScreen} from './src/screens/SearchScreen';
import {DetailsScreen} from './src/screens/DetailsScreen';
import {IconButton} from './src/components/buttons/IconButton';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {User} from 'iconoir-react-native';

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Details: {showId: number};
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation}) => ({
              headerRight: () =>
                IconButton({
                  Icon: User,
                  onPress: () => navigation.navigate('Profile'),
                }),
            })}
          />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
