import React from 'react';
import {Text, Button} from 'react-native';

const Resumen = (props) => {
  const {navigation} = props;
  return (
    <>
      <Text>Resumen</Text>
      <Button title="tarjeta1" />
      <Button title="tarjeta2" />
      <Button
        title="confirmar"
        onPress={() => navigation.navigate('Resumen')}
      />
    </>
  );
};

export default Resumen;
