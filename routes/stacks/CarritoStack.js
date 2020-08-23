import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Carrito} from '../../views';
import {Resumen, Agendar, Confirmar} from '../../views/carrito/views';

const Stack = createStackNavigator();

const CarritoStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Carrito" component={Carrito} />
      <Stack.Screen name="Agendar" component={Agendar} />
      <Stack.Screen name="Resumen" component={Resumen} />
      <Stack.Screen name="Confirmar" component={Confirmar} />
    </Stack.Navigator>
  );
};

export default CarritoStack;
