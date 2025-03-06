import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  categoriesiconstyle: {
    width: width * 0.1,
    height: width * 0.1,
  },
  cateback1: {
    backgroundColor: 'rgba(255, 169, 40, 0.3)',
    width: width * 0.15,
    height: width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 10,
    marginTop: 20,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
