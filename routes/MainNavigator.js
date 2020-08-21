import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Perfil, Pedidos, Carrito, Promo} from '../views';
const Tab = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Promo" component={Promo} />
        <Tab.Screen name="Carrito" component={Carrito} />
        <Tab.Screen name="Pedidos" component={Pedidos} />
        <Tab.Screen name="Perfil" component={Perfil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
