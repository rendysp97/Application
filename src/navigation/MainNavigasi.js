/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import HistoryScreen from '../screen/History';
import PaymentScreen from '../screen/Payment';
import PocketScreen from '../screen/Pocket';
import ProfileScreen from '../screen/Profile';

import Icon from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, View} from 'react-native';
import HomeStack from './Stack/HomeStack';

const Tab = createBottomTabNavigator();

const CustomTab = ({children, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: -15,
      }}>
      <View
        style={{
          backgroundColor: 'blue',
          width: 70,
          height: 72,
          borderRadius: 50,
          opacity: 0.7,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'History') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'Pocket') {
            iconName = focused ? 'basket' : 'basket-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveBackgroundColor: 'lightgray',
        tabBarLabelStyle: {
          fontSize: 13,
          color: 'gray',
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen
        name="Pay"
        component={PaymentScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="qr-code-outline" size={40} color="white" />
          ),
          tabBarButton: props => <CustomTab {...props} />,
          tabBarLabelStyle: {
            color: '#fff',
            fontSize: 15,
            textAlign: 'center',
            display: 'none',
          },
        }}
      />
      <Tab.Screen name="Pocket" component={PocketScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Main;
