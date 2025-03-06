import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Sayfa1, Sayfa2} from '../screens';
import BottomTabRoutes from './BottomTabRoutes';

const Stack = createNativeStackNavigator();
const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Sayfa3" component={BottomTabRoutes} />
      <Stack.Screen name="Sayfa4" component={Sayfa1} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
