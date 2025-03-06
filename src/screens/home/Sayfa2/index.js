import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons, Images} from '../../../assets';
import {Post, TextPost} from '../../../components';

const Sayfa2 = ({navigation}) => {
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={Style.notifications}>
        <Post
          source1={Images.ayca}
          source2={Images.rimel}
          name="Ayça"
          min="22 min ago"
          page="Sayfa4"
          navigation={navigation}
        />
        <TextPost
          source1={Images.abuzer}
          name="Abuzer Kömürcü"
          min="1 hour ago"
          page="Sayfa4"
          navigation={navigation}
          text="Bugün oğluma hediye aldım. Çok mutlu oldu."
        />
        <Post
          source1={Images.ayca}
          source2={Images.rimel}
          name="Ayca"
          min="22 min ago"
          page="Sayfa4"
          navigation={navigation}
        />
        <TextPost
          source1={Images.abuzer}
          name="Abuzer Kömürcü"
          min="1 hour ago"
          page="Sayfa4"
          navigation={navigation}
          text="Bugün oğluma hediye aldım. Çok mutlu oldu."
        />
        <Post
          source1={Images.ayca}
          source2={Images.rimel}
          name="Ayca"
          min="22 min ago"
          page="Sayfa4"
          navigation={navigation}
        />
        <TextPost
          source1={Images.abuzer}
          name="Abuzer Kömürcü"
          min="1 hour ago"
          page="Sayfa4"
          navigation={navigation}
          text="Bugün oğluma hediye aldım. Çok mutlu oldu."
        />
        <Post
          source1={Images.ayca}
          source2={Images.rimel}
          name="Ayca"
          min="22 min ago"
          page="Sayfa4"
          navigation={navigation}
        />
        <TextPost
          source1={Images.abuzer}
          name="Abuzer Kömürcü"
          min="1 hour ago"
          page="Sayfa4"
          navigation={navigation}
          text="Bugün oğluma hediye aldım. Çok mutlu oldu."
        />
        <Post
          source1={Images.ayca}
          source2={Images.rimel}
          name="Ayca"
          min="22 min ago"
          page="Sayfa4"
          navigation={navigation}
        />
        <TextPost
          source1={Images.abuzer}
          name="Abuzer Kömürcü"
          min="1 hour ago"
          page="Sayfa4"
          navigation={navigation}
          text="Bugün oğluma hediye aldım. Çok mutlu oldu."
        />
      </ScrollView>
    </View>
  );
};

export default Sayfa2;
