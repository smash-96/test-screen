import {SafeAreaView} from 'react-native';
import React from 'react';
import TestScreen from './src/screens/TestScreen';
const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TestScreen />
    </SafeAreaView>
  );
};

export default App;
