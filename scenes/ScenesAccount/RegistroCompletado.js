import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import backappme from '../../resources/AppMe-bg-blue2.png';
import imgGoo from '../../resources/Registro-Exitoso.png';
import styles from '../ScenesAccount/StylesAcc/estilosRegCom';

export default function registerScene(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <ImageBackground source={backappme} style={styles.image}>
        <View style={styles.margintitulos}>
          <Text style={styles.titulo}>Listo!</Text>
          <Text style={styles.titulo1}>¿Qué se siente ser</Text>
          <Text style={styles.titulo1}>parte y obtener</Text>
          <Text style={styles.titulo1}>más beneficios?</Text>
          <Text style={styles.txtinfti}>Haz tu primera compra!</Text>
        </View>
        <View style={styles.center}>
          <Image source={imgGoo} style={styles.tam1} />
        </View>

        <TouchableHighlight
          style={styles.btnSeguir}
          underlayColor="#F3F306"
          onPress={() => navigation.navigate('homepru')}>
          <Text style={styles.textbutton}>Comenzar</Text>
        </TouchableHighlight>
      </ImageBackground>
    </View>
  );
}
