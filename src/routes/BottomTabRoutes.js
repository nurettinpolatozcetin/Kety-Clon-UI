import * as React from 'react';
import {Sayfa1, Sayfa2, Sayfa3} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, TouchableOpacity} from 'react-native';
import {Icons} from '../assets';

const Tab = createBottomTabNavigator();
function BottomTabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: 'red'}}>
      <Tab.Screen
        name="Main"
        component={Sayfa1}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={Icons.home}
              style={{tintColor: color, width: size, height: size}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Sayfa3}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={Icons.categories}
              style={{tintColor: color, width: size, height: size}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Sayfa2}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={Icons.notifi}
              style={{tintColor: color, width: size, height: size}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabRoutes;
