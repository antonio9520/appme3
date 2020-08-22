import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import Navigator from './routes/MainNavigator';
import StartNavigator from './routes/StartNavigator';
import {decode, encode} from 'base-64';
import firebase from './firebase/Firebase';
import 'firebase/auth';
// if (!global.btoa) global.btoa = encode;
// if (!global.atob) global.atob = decode;
// import {YellowBox} from 'react-native';
// YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);2

const App = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response);
    });
  }, []);

  if (user === undefined) return null;
  return <>{user ? <Navigator /> : <StartNavigator />}</>;
};

const styles = StyleSheet.create({});

export default App;
