import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Card = ({name, title}) => {
  return (
    <TouchableOpacity style={styles.icons}>
      <Icon name={name} size={30} />
      <Text style={styles.textIcon}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icons: {
    alignItems: 'center',
  },

  textIcon: {
    textAlign: 'center',
    marginTop: 5,
  },
});

export default Card;
