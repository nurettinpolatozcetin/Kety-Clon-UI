import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons, Images} from '../../../assets';

const Login = ({navigation}) => {
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
        <Image source={Icons.cycle} style={Style.bicycleicon} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Style.productarea}>
          <View style={{marginTop: 20, marginLeft: 20, marginBottom: 10}}>
            <Text style={Style.categoriestxt}>Featured Products</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={Style.productback}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 10,
                }}>
                <Image source={Images.abuzer} style={Style.ppstyle} />
                <View>
                  <Text style={Style.nametxt}>Abuzer Kömürcü</Text>
                  <Text style={Style.roletxt}>Influencer</Text>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image source={Images.cream} style={Style.productimg} />
              </View>
            </View>
            <View style={Style.productback}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 10,
                }}>
                <Image source={Images.abuzer} style={Style.ppstyle} />
                <View>
                  <Text style={Style.nametxt}>Abuzer Kömürcü</Text>
                  <Text style={Style.roletxt}>Influencer</Text>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image source={Images.cream} style={Style.productimg} />
              </View>
            </View>
            <View style={Style.productback}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 10,
                }}>
                <Image source={Images.abuzer} style={Style.ppstyle} />
                <View>
                  <Text style={Style.nametxt}>Abuzer Kömürcü</Text>
                  <Text style={Style.roletxt}>Influencer</Text>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image source={Images.cream} style={Style.productimg} />
              </View>
            </View>
            <View style={Style.productback}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 10,
                }}>
                <Image source={Images.abuzer} style={Style.ppstyle} />
                <View>
                  <Text style={Style.nametxt}>Abuzer Kömürcü</Text>
                  <Text style={Style.roletxt}>Influencer</Text>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image source={Images.cream} style={Style.productimg} />
              </View>
            </View>
          </ScrollView>

          <View style={{marginTop: 20, marginLeft: 20, marginBottom: 10}}>
            <Text style={Style.categoriestxt}>Popular Products</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={Style.productback}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 10,
                }}>
                <Image source={Images.abuzer} style={Style.ppstyle} />
                <View>
                  <Text style={Style.nametxt}>Abuzer Kömürcü</Text>
                  <Text style={Style.roletxt}>Influencer</Text>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image source={Images.cream} style={Style.productimg} />
              </View>
            </View>
            <View style={Style.productback}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 10,
                }}>
                <Image source={Images.abuzer} style={Style.ppstyle} />
                <View>
                  <Text style={Style.nametxt}>Abuzer Kömürcü</Text>
                  <Text style={Style.roletxt}>Influencer</Text>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image source={Images.cream} style={Style.productimg} />
              </View>
            </View>
            <View style={Style.productback}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 10,
                }}>
                <Image source={Images.abuzer} style={Style.ppstyle} />
                <View>
                  <Text style={Style.nametxt}>Abuzer Kömürcü</Text>
                  <Text style={Style.roletxt}>Influencer</Text>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image source={Images.cream} style={Style.productimg} />
              </View>
            </View>
            <View style={Style.productback}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 10,
                }}>
                <Image source={Images.abuzer} style={Style.ppstyle} />
                <View>
                  <Text style={Style.nametxt}>Abuzer Kömürcü</Text>
                  <Text style={Style.roletxt}>Influencer</Text>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image source={Images.cream} style={Style.productimg} />
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
