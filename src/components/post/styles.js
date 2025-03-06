import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  ppstyle: {
    borderRadius: 50,
    width: width * 0.15,
    height: width * 0.15,
  },
  productimgstyle: {
    width: width * 0.85,
    height: width * 0.38,
    borderRadius: 20,
  },
  posts: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'flex-start',
  },
  post: {
    backgroundColor: 'rgba(128,128,128,0.3)',
    width: width * 0.9,
    height: width * 0.6,
    borderRadius: 20,
    marginTop: 20,
  },
});
