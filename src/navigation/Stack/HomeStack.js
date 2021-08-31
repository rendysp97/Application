import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screen/Homescreen';
import Icon from 'react-native-vector-icons/Ionicons';
const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerLeft: () => {
          <Icon
            name="menu-outline"
            size={30}
            onPress={() => navigation.openDrawer()}
          />;
        },
        headerShown: false,
      }}>
      <Stack.Screen name="HomeStack" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
