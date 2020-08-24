import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    height: '100%',
  },
  container: {
    flex: 1,
  },

  contLogo: {
    flex: 6,

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mgb: {
    width: '100%',
  },
  txtstit: {
    color: '#1DAFF1',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'RobotoSlab-Medium',
    marginBottom: 35,
  },
  txtTitulo: {
    color: '#1DAFF1',
    fontSize: 25,
    fontFamily: 'RobotoSlab-Bold',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 10,
  },
  contForm: {
    flex: 5.8,
    justifyContent: 'space-around',
  },
  btnIngresar: {
    alignItems: 'center',
  },
  tamsep: {
    width: '90%',
    alignSelf: 'center',
    height: 22,
  },
  contEnlaces: {
    flex: 6,
    // backgroundColor: 'blue',
  },
  subContLogo: {
    width: '80%',
  },
  footer: {
    width: '40%',
    height: 5,
    borderRadius: 20,
    backgroundColor: '#1DAFF1',
  },
  contfooter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
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

  txtTitulo1: {
    color: '#4BBCF2',
    fontSize: 20,
    fontFamily: 'RobotoSlab-Bold',
    alignItems: 'center',
    textAlign: 'center',
  },

  txtstit3: {
    color: '#1DAFF1',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'RobotoSlab-Bold',
    marginTop: 10,
    marginBottom: 20,
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
    marginVertical: 15,
    fontFamily: 'RobotoSlab-Medium',
  },
  txtstit2: {
    color: '#4BBCF2',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'RobotoSlab-Bold',
  },

  btnSeguir: {
    backgroundColor: '#1DB0F1',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    width: 350,
    marginTop: 5,
    elevation: 10,
  },
  textbutton: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignItems: 'center',
    fontSize: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  rowIn: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  mgb1: {
    width: 50,
    height: 50,
  },
  passwordContainer1: {
    flexDirection: 'row',

    backgroundColor: 'transparent',
    height: 56,
  },
});

export default styles;
