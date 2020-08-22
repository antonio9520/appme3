import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  passwordContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    backgroundColor: 'transparent',
    height: 56,
    width: '100%',
    alignSelf: 'center',
    borderColor: '#CBCCD1',
  },
  passwordContainerTop: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
    height: 56,
    width: '100%',
    alignSelf: 'center',
    borderColor: '#CBCCD1',
  },
  container1: {
    borderWidth: 0,
    width: '100%',
    height: 110,

    marginLeft: 0,

    display: 'flex',
    justifyContent: 'center',
  },
  container2: {
    top: 10,
    alignItems: 'center',
  },
  txtTitulo: {
    color: '#1DAFF1',
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 10,
  },
  txtTitulo1: {
    color: '#4BBCF2',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 10,
    top: -130,
  },
  txtstit: {
    color: '#1DAFF1',
    textAlign: 'center',
    fontSize: 16,
    width: 230,
    marginBottom: 35,
  },
  txtstit3: {
    color: '#1DAFF1',
    textAlign: 'center',
    fontSize: 16,
    width: 230,
    marginBottom: 35,
    top: -70,
    marginVertical: 10,
  },
  tamicon1: {
    width: 28,
    height: 28,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 14,
  },
  tamicon: {
    width: 28,
    height: 28,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  borde: {
    flex: 1,
  },
  txtstit1: {
    color: '#4BBCF2',
    textAlign: 'center',
    top: -47,
    marginBottom: 15,
  },
  txtstit2: {
    top: -14,
    color: '#4BBCF2',
    textAlign: 'center',
    fontSize: 16,
    width: 235,
  },
  mgb: {
    marginTop: 320,
    marginBottom: 10,
    alignSelf: 'center',
  },
  btnSeguir: {
    backgroundColor: '#1DB0F1',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    width: 350,
    marginTop: 5,
  },
  textbutton: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignItems: 'center',
    fontSize: 20,
  },
  tamsep: {
    marginVertical: 15,
    width: 350,
    alignSelf: 'center',
    height: 20,
  },
  row: {
    top: -33,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 125,
    justifyContent: 'space-between',
    marginVertical: 25,
  },
  box: {
    flex: 1,
    width: 10,
    backgroundColor: 'transparent',
    marginLeft: -52,
  },
  mgb1: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  passwordContainer1: {
    flexDirection: 'row',

    backgroundColor: 'transparent',
    height: 56,
  },
});

export default styles;
