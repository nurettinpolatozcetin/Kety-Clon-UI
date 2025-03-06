import {Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Style from './styles';
import PropTypes from 'prop-types';
import {Icons, Images} from '../../assets';

const Buttons = ({source, name}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={Style.cateback1}>
          <View style={{alignItems: 'center'}}>
            <Image source={source} style={Style.categoriesiconstyle} />
          </View>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{name}</Text>
        </View>
      </View>
    </View>
  );
};
Buttons.propTypes = {
  source: PropTypes.oneOfType([PropTypes.number]),
  name: PropTypes.string,
};

export default Buttons;
