import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Step1, Step2, Step3, Login, SplashStart} from '../views/start';

const Stack = createStackNavigator();

const StartNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashStart"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashStart" component={SplashStart} />
        <Stack.Screen name="Step1" component={Step1} />
        <Stack.Screen name="Step2" component={Step2} />
        <Stack.Screen name="Step3" component={Step3} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StartNavigator;
