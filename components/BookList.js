import React from 'react';
import BookListItem from './BookListItem';
import {ScrollView, StyleSheet} from 'react-native';

export default function BookList({books, onPress}) {
  return (
    <ScrollView style={styles.list}>
      {books &&
        books.length > 0 &&
        books.map((book) => (
          <BookListItem key={book.containerId} book={book} onPress={onPress} />
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    width: '75%',
    alignSelf: 'center',
    height: 300,
    marginTop: 3,
  },
});
