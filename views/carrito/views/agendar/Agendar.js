import React from 'react';
import {Text, Button} from 'react-native';

const Agendar = (props) => {
  const {navigation} = props;
  return (
    <>
      <Text>Agendar</Text>
      <Button title="resumen" onPress={() => navigation.navigate('Resumen')} />
    </>
  );
};

export default Agendar;
