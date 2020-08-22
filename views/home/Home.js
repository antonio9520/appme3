import React from 'react';
import {Text, Button} from 'react-native';

const Home = (props) => {
  const {navigation} = props;
  return (
    <>
      <Text>App</Text>
      <Button title="Menu Derecho" onPress={() => navigation.openDrawer()} />
      <Button
        title="Menu Izquierdo"
        onPress={() =>
          navigation.dangerouslyGetParent().dangerouslyGetParent().openDrawer()
        }
      />
    </>
  );
};

export default Home;
