import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const DisplayError = () => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text>Something went wrong</Text>
    </View>
  );
};
