import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Style from './styles';
import Icons from '../../../assets/icon';
import {Post, TextPost, Buttons} from '../../../components';
import {Images} from '../../../assets';

const Sayfa3 = ({navigation}) => {
  return (
    <View style={Style.background}>
      <View style={Style.header}>
        <Text style={Style.brandtxt}>KETY</Text>
        <View style={Style.secheader}>
          <TouchableOpacity>
            <Image source={Icons.search} style={Style.iconstyle} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Icons.cart} style={Style.iconstyle} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={Style.bicycle}>
        <Image source={Icons.tuhaf} style={Style.bicycleicon} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={Style.middle}>
        <View style={{marginTop: 20, marginLeft: 20}}>
          <Text style={{fontWeight: '800', fontSize: 22}}>Categories</Text>
        </View>
        <View>
          <View style={Style.categoriesbar}>
            <Buttons source={Icons.rank} name="Rank" />
            <Buttons source={Icons.hot} name="Hot" />
            <Buttons source={Icons.heartp} name="Loved" />
            <Buttons source={Icons.parfum} name="Secrets" />
          </View>
        </View>
        <View style={{marginTop: 20, marginLeft: 20}}>
          <Text style={{fontWeight: '800', fontSize: 22}}>Skin Type</Text>
        </View>
        <View>
          <View style={Style.categoriesbar}>
            <Buttons source={Icons.normal} name="Normal" />
            <Buttons source={Icons.dry} name="Dry" />
            <Buttons source={Icons.oily} name="Oily" />
            <Buttons source={Icons.combine} name="Combine" />
          </View>
        </View>
        <View style={{}}>
          <Post
            source1={Images.abuzer}
            name="Abuzer K."
            min="20 min ago"
            source2={Images.rimel}
            page="Sayfa4"
            navigation={navigation}
          />
          <TextPost
            source1={Images.me}
            name="Polat"
            min="10 min ago"
            navigation={navigation}
            page="Sayfa4"
            text="Bugün güzel bir gün geçirdim. Umarım en kötü günüm böyle olur."
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Sayfa3;
