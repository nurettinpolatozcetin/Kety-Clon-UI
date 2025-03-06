import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  ppstyle: {
    borderRadius: 50,
    width: width * 0.15,
    height: width * 0.15,
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
    height: width * 0.3,
    borderRadius: 20,
    marginTop: 20,
  },
});
