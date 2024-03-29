This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## About

Use the search box to query the TV Maze API for a show. The results will be displayed in a list.
Select "View details", to see the details of the show.

The application has thre three screens: Home, Search and Details. There is a Profile screen, but I did not have time to implement it.

## If I had more time

I have focused more on styling and accessibility. Now, with the constraints of time I just wanted to get something up and running.
I would also have focused a bit more on the testing of the code. I hade some issues with testing the hook functions.
Also, I would like to have implemented the profile functionality in the app. So that user could have a favourite list of shows.

### Continuation...

Look at the branch feature/continuation, where I spent more time.
