import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';

import Navigator from './routes/MainNavigator';

const App = () => {
  return (
    <>
      <Navigator />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
