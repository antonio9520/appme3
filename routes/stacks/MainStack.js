import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashHome} from '../../views';
import TabNav from '../tab/Tab';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={SplashHome} />
      <Stack.Screen name="TabNav" component={TabNav} />
    </Stack.Navigator>
  );
};

export default HomeStack;
