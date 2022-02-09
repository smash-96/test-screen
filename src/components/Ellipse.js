import {StyleSheet, useColorScheme, View} from 'react-native';
import React from 'react';

const Ellipse = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={[
        styles.ellipse,
        {
          backgroundColor: isDarkMode ? 'blue' : 'red',
        },
      ]}
    />
  );
};

export default Ellipse;

const styles = StyleSheet.create({
  ellipse: {
    height: 50,
    width: 50,
    borderRadius: 1000,
  },
});
