import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ChapterItem from './ChapterItem';
import ChapterItemWithSubchapters from './ChapterItemWithSubchapters';

export default function TableOfContent({book}) {
  return (
    <ScrollView style={styles.list}>
      {book.children &&
        book.children.length > 0 &&
        book.children.map((chapter) => renderItem(chapter, 2))}
    </ScrollView>
  );

  function renderItem(item, level) {
    if (item.children && item.children.length > 0) {
      return (
        <ChapterItemWithSubchapters
          level={level}
          key={item.containerId}
          renderItem={renderItem}
          item={item}
        />
      );
    } else {
      return (
        <ChapterItem
          level={level}
          key={item.containerId}
          item={item}
          bookTopic={book.topic}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  list: {
    width: '75%',
    alignSelf: 'center',
    height: 400,
  },
});
