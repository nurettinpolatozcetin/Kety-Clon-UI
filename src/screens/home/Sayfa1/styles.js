import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  background: {
    backgroundColor: '#FE8A00',
    flex: 1,
  },
  brandtxt: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 35,
  },
  iconstyle: {
    tintColor: '#ffff',
    height: width * 0.1,
    width: width * 0.1,
    marginHorizontal: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
  },
  secheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bicycle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  bicycleicon: {
    width: width * 0.5,
    height: width * 0.5,
  },
  productarea: {
    backgroundColor: '#ffff',
    width: width * 1,
    height: width * 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  categoriestxt: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  nametxt: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  roletxt: {
    fontWeight: 500,
    color: 'rgba(128,128,128,1)',
  },
  ppstyle: {
    borderRadius: 50,
    width: width * 0.2,
    height: width * 0.2,
  },
  productback: {
    backgroundColor: 'rgba(128,128,128,0.5)',
    width: width * 0.6,
    height: width * 0.8,
    borderRadius: 30,
    margin: 10,
  },
  productimg: {
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: 30,
  },
  bottombar: {
    backgroundColor: '#ffff',
    width: width * 1,
    height: width * 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomicons: {
    width: width * 0.1,
    height: width * 0.1,
    margin: 15,
  },
});
