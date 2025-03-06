import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
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
  middle: {
    backgroundColor: '#ffff',
    width: width * 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: width * 0.5,
  },
  categoriesbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
