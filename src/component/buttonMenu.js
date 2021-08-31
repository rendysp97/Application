import React, {useState} from 'react';

import {Text, StyleSheet, TouchableHighlight} from 'react-native';

const ButtonList = ({title}) => {
  const [selected, setSelected] = useState(false);

  const isSelected = () => setSelected(!selected);

  1;
  return (
    <TouchableHighlight
      underlayColor="gray"
      style={styles.component}
      onPress={isSelected}>
      <Text style={{textAlign: 'center'}}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  component: {
    borderRadius: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 6,
    flex: 1,
    marginVertical: 15,
  },
});

export default ButtonList;
