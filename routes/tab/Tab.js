import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Perfil, Pedidos, Carrito, Promo} from '../../views';
import IconHome from '../../resources/tabsicon/Menu-Home.png';
import IconPromo from '../../resources/tabsicon/Menu-Promos.png';
import IconCarrito from '../../resources/tabsicon/Menu-Carrito.png';
import IconPedidos from '../../resources/tabsicon/Menu-Pedidos.png';
import IconPerfil from '../../resources/tabsicon/Menu-Usuarios.png';
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Inicio',
          tabBarIcon: () => (
            <Image
              source={IconHome}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Promo"
        component={Promo}
        options={{
          title: 'Promociones',
          tabBarIcon: () => (
            <Image
              source={IconPromo}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Carrito"
        component={Carrito}
        options={{
          title: 'Carrito',
          tabBarIcon: () => (
            <Image
              source={IconCarrito}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          title: 'Pedidos',
          tabBarIcon: () => (
            <Image
              source={IconPedidos}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: 'Perfil',
          tabBarIcon: () => (
            <Image
              source={IconPerfil}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
