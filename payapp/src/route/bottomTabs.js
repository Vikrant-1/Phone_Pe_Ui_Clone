import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import StoreScreen from '../screens/StoreScreen';
import InsuranceScreen from '../screens/InsuranceScreen';
import WealthScreen from '../screens/WealthScreen';
import HistoryScreen from '../screens/HistoryScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={({navigation, route}) => {}}>
      <Tab.Screen component={HomeScreen} name="home" />
      <Tab.Screen component={StoreScreen} name="store" />
      <Tab.Screen component={InsuranceScreen} name="insurance" />
      <Tab.Screen component={WealthScreen} name="wealth" />
      <Tab.Screen component={HistoryScreen} name="history" />
    </Tab.Navigator>
  );
};

export default BottomTabs;
