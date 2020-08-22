import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 55,
    justifyContent: 'space-between',
    marginTop: -150,
    marginBottom: -60,
  },
  box: {
    flex: 1,
    height: 20,
    marginLeft: 40,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSeguir: {
    backgroundColor: '#4CB86A',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    width: 350,
    marginTop: -630,
  },
  textbutton: {
    fontWeight: 'bold',
    color: '#FFF',
    alignItems: 'center',
    fontSize: 20,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 25,
    marginRight: 156,
    color: '#FFFFFF',
    marginTop: 1000,
  },
  titulo1: {
    fontWeight: 'bold',
    marginRight: 60,
    fontSize: 25,
    color: '#FFFFFF',
  },
  titulo2: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 0,
  },
  titulo3: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 80,
  },
  mgb: {
    width: 100,
    height: 100,
    marginBottom: 55,
  },
  txtinfti: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: '300',
    color: '#FFFFFF',
  },
  center: {
    alignItems: 'center',
    marginTop: 350,
    marginBottom: 300,
  },
  tam1: {
    flex: 1,
    resizeMode: 'contain',
    marginLeft: 15,
    marginTop: -670,
    marginBottom: 350,
  },
  margintitulos: {
    marginTop: -1030,
    marginBottom: 350,
    marginRight: 60,
  },
});

export default styles;
