import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './MainNavigasi';
import {SettingStack} from './Stack/settingStack';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator
     
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Homes" component={Main} />
      <Drawer.Screen name="MySetting" component={SettingStack} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
