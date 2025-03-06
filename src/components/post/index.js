import {Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import Style from './styles';
import PropTypes from 'prop-types';
import {Icons, Images} from '../../assets';

const Post = ({source1, name, min, navigation, source2, page}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(page)}>
      <View style={{alignItems: 'center'}}>
        <View style={Style.post}>
          <View style={Style.posts}>
            <Image source={source1} style={Style.ppstyle} />
            <View style={{margin: 10}}>
              <Text>{name}</Text>
              <Text style={{color: 'rgba(128,128,128,1)', fontWeight: '500'}}>
                {min}
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 3}}>
            <Image source={source2} style={Style.productimgstyle} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

Post.propTypes = {
  source1: PropTypes.oneOfType([PropTypes.number]),
  name: PropTypes.string,
  min: PropTypes.string,
  navigation: PropTypes.object,
  page: PropTypes.string,
  source2: PropTypes.oneOfType([PropTypes.number]),
};

export default Post;
