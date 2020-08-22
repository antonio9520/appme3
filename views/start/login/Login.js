import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
  Image,
} from 'react-native';
import styles from './Styles';
import backappme from '../../../resources/AppMe-bg-blue2.png';
import separador from '../../../resources/imgiconform/Icono-Separador.png';
import logomini from '../../../resources/Logotipoblancomini.png';
import imgfb from '../../../resources/imgrss/Social-Network-Icon-Facebook.png';
import imgins from '../../../resources/imgrss/Social-Network-Icon-Instagram.png';
import imgGoo from '../../../resources/imgrss/Social-Network-Icon-Google.png';
import firebase from '../../../firebase/Firebase';
import Form from './form/Form';

const Login = (props) => {
  const {navigation} = props;
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const LoginF = () => {
    if (!Email || !Password) {
      console.log('Los campos no deben estar Vacios');
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(Email, Password)
        .then(() => {
          navigation.navigate('homepru');
        })
        .catch(() => {
          console.log('Error al ingresar intente nuevemente');
        });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backappme} style={styles.image}>
        <Image source={logomini} style={styles.mgb} />
        <Text style={styles.txtTitulo}>Bienvenido</Text>
        <Text style={styles.txtstit}>
          Llena con tus datos y comienza a comprar
        </Text>

        <Form setEmail={setEmail} setPassword={setPassword} />

        <View style={styles.container2}>
          <TouchableHighlight
            style={styles.btnSeguir}
            underlayColor="#1580F7"
            onPress={LoginF}>
            <Text style={styles.textbutton}>Ingresar</Text>
          </TouchableHighlight>
          <Image source={separador} style={styles.tamsep} />
          <Text style={styles.txtstit2}>Accede con tus redes:</Text>
          <View style={styles.row}>
            <TouchableHighlight
              style={styles.box}
              underlayColor="transparent"
              onPress={() => navigation.navigate('Facelog')}>
              <Image source={imgfb} style={styles.mgb1} />
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.box}
              underlayColor="transparent"
              onPress={() => navigation.navigate('GooLog')}>
              <Image source={imgGoo} style={styles.mgb1} />
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.box}
              underlayColor="transparent"
              onPress={() => navigation.navigate('InstaLog')}>
              <Image source={imgins} style={styles.mgb1} />
            </TouchableHighlight>
          </View>
          <View style={styles.container}>
            <Text style={styles.txtstit3}>¿Olvidaste la contraseña?</Text>

            <Text style={styles.txtstit1}>¿Aun no tienes cuenta?</Text>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => navigation.navigate('Register1')}>
              <Text style={styles.txtTitulo1}> Registrate</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
