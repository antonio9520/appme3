import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Perfil} from '../../views';
import {EditarPerfil} from '../../views/perfil/views';

const Stack = createStackNavigator();

const PerfilStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
    </Stack.Navigator>
  );
};

export default PerfilStack;
