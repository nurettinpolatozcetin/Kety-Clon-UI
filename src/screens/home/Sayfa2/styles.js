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
  notifications: {
    backgroundColor: '#ffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: width * 1,
  },
  ppstyle: {
    borderRadius: 50,
    width: width * 0.15,
    height: width * 0.15,
  },
  productimgstyle: {
    width: width * 0.7,
    height: width * 0.3,
  },
  posts: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'flex-start',
  },
  post: {
    backgroundColor: 'rgba(128,128,128,0.3)',
    width: width * 0.8,
    height: width * 0.6,
    borderRadius: 20,
    marginTop: 20,
  },
});
