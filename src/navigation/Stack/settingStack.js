import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Setting Page</Text>
    </View>
  );
};

const Stack = createStackNavigator();

export const SettingStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Setting"
      screenOptions={{
        headerLeft: () => (
          <Icon
            name="menu-outline"
            size={30}
            onPress={() => navigation.openDrawer()}
            style={{margin: 5}}
          />
        ),
        headerStyle: {
          backgroundColor: 'skyblue',
        },
      }}>
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  },
});
