import React from 'react';
import {Image, StyleSheet,Dimensions} from 'react-native';

const UnderConstruction = () => {
  return <Image source={require('../asset/404.jpg')} style={styles.data} />;
};

const styles = StyleSheet.create({
  data: {
    flex: 1,
    width: Dimensions.get('window').width,
    resizeMode: 'center',
    backgroundColor: '#e7fcff',
  },
});

export default UnderConstruction;
