import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View, useColorScheme} from 'react-native';
import {HomeScreen} from './src/screens/HomeScreen';
import {ProfileScreen} from './src/screens/ProfileScreen';
import {SearchScreen} from './src/screens/SearchScreen';
import {DetailsScreen} from './src/screens/DetailsScreen';
import {IconButton} from './src/components/buttons/IconButton';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {User} from 'iconoir-react-native';
import ErrorBoundary from './src/components/error-boundary/ErrorBoundary';
import {DisplayError} from './src/components/display-error/DisplayError';

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
      <ErrorBoundary fallback={<DisplayError />}>
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
      </ErrorBoundary>
    </SafeAreaProvider>
  );
};

export default App;
