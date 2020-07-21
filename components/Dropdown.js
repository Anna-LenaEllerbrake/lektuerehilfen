import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Dropdown({status, onPress, selectText, selectedText}) {
  console.log(status);
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.dropdown}
      underlayColor={Colors.deutsch1}>
      <View style={styles.flexbox}>
        <Text>{status === 'ACTIVE' ? selectText : selectedText}</Text>
        <Icon
          name={
            status === 'ACTIVE' ? 'keyboard-arrow-down' : 'keyboard-arrow-right'
          }
          size={22}
          color={Colors.black}
        />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    paddingHorizontal: 25,
    backgroundColor: Colors.deutsch2,
    borderRadius: 25,
    height: 50,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  flexbox: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
