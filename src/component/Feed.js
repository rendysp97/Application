import React from 'react';

import {Text, View, Dimensions, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FeedImage = ({title}) => {
  return (
    <View style={styles.feedWrap}>
      <Icon
        name="person-circle-outline"
        size={Dimensions.get('window').width >= 200 ? 40 : 25}
      />
      <Text style={styles.feedText}>{title}</Text>
    </View>
  );
};

export default FeedImage;

const styles = StyleSheet.create({
  feedWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  feedText: {
    flex: 1,
    marginLeft: Dimensions.get('window').width * 0.02,
  },
});
