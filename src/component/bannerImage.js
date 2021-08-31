import React from 'react';
import {View, Image} from 'react-native';
const Banner = () => {
  return (
    <View style={{marginRight: 10}}>
      <Image
        source={require('../asset/3.jpg')}
        width={300}
        height={100}
        resizeMode="cover"
      />
    </View>
  );
};

export default Banner;
