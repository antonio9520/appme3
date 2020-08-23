import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Promo} from '../../views';
import {VerMas} from '../../views/promo/views';

const Stack = createStackNavigator();

const PromoStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Promo" component={Promo} />
      <Stack.Screen name="VerMas" component={VerMas} />
    </Stack.Navigator>
  );
};

export default PromoStack;
