import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Colors from '../constants/Colors';

export default function BookListItem({book, onPress}) {
  return (
    <TouchableHighlight
      style={styles.item}
      onPress={onPress}
      underlayColor={Colors.deutsch1}>
      <Text>{book.topic}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.deutsch3,
    padding: 13,
    marginTop: 3,
  },
});
