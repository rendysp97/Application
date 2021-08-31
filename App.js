import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Drawer from './src/navigation/Drawer';

const App = () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};

export default App;
