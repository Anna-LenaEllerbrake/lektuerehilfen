import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

export default function ChapterItem({item, bookTopic, level}) {
  if (level === 4) {
    return (
      <TouchableHighlight style={styles.itemlevel4}>
        <Text numberOfLines={1} style={styles.oneline}>
          {item.topic}
        </Text>
      </TouchableHighlight>
    );
  } else if (level === 3) {
    return (
      <TouchableHighlight style={styles.itemlevel3}>
        <Text numberOfLines={1}>{item.topic}</Text>
      </TouchableHighlight>
    );
  } else {
    return (
      <TouchableHighlight style={styles.itemlevel2}>
        <Text numberOfLines={1}>{item.topic}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  itemlevel2: {
    backgroundColor: Colors.deutsch2,
    padding: 14,
    marginTop: 3,
  },
  itemlevel3: {
    backgroundColor: Colors.deutsch3,
    padding: 14,
    paddingLeft: 35,
    marginTop: 3,
  },
  itemlevel4: {
    backgroundColor: Colors.deutsch4,
    padding: 14,
    paddingLeft: 57,
    marginTop: 3,
  },
  oneline: {
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    // whiteSpace: 'nowrap',
  },
});
