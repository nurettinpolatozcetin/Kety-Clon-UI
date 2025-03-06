import {Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import Style from './styles';
import PropTypes from 'prop-types';

const Post = ({source1, name, min, navigation, text, page}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(page)}
      style={{alignItems: 'center'}}>
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
          <Text style={{color: 'rgba(128,128,128,1)', fontWeight: '500'}}>
            {text}
          </Text>
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
  text: PropTypes.string,
};

export default Post;
