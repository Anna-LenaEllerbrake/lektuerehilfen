import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

export default function ChapterItemWithSubchapters({item, renderItem, level}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      {level === 4 ? (
        <TouchableHighlight style={styles.itemlevel4} onPress={toggle}>
          <View style={styles.flexbox}>
            <Text>{item.topic}</Text>
            <Icon
              name={isOpen ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
              size={22}
              color={Colors.black}
            />
          </View>
        </TouchableHighlight>
      ) : level === 3 ? (
        <TouchableHighlight style={styles.itemlevel3} onPress={toggle}>
          <View style={styles.flexbox}>
            <Text>{item.topic}</Text>
            <Icon
              name={isOpen ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
              size={22}
              color={Colors.black}
            />
          </View>
        </TouchableHighlight>
      ) : (
        <TouchableHighlight style={styles.itemlevel2} onPress={toggle}>
          <View style={styles.flexbox}>
            <Text>{item.topic}</Text>
            <Icon
              name={isOpen ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
              size={22}
              color={Colors.black}
            />
          </View>
        </TouchableHighlight>
      )}

      {isOpen ? (
        <View>
          {item.children &&
            item.children.length > 0 &&
            item.children.map((chapter) => renderItem(chapter, level + 1))}
        </View>
      ) : (
        <></>
      )}
    </View>
  );

  function toggle() {
    setIsOpen(!isOpen);
  }
}

const styles = StyleSheet.create({
  itemlevel2: {
    backgroundColor: Colors.deutsch2,
    padding: 13,
    marginTop: 3,
  },
  itemlevel3: {
    backgroundColor: Colors.deutsch3,
    padding: 13,
    paddingLeft: 35,
    marginTop: 3,
  },
  itemlevel4: {
    backgroundColor: Colors.deutsch4,
    padding: 13,
    paddingLeft: 57,
    marginTop: 3,
  },
  flexbox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
