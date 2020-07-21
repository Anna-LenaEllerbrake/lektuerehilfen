import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Colors from '../constants/Colors';
import Dropdown from '../components/Dropdown';
import BookList from '../components/BookList';
import TableOfContent from '../components/TableOfContent';

export default function BookMenu({books}) {
  const [status, setStatus] = useState('INACTIVE');
  const [currentBook, setCurrentBook] = useState();

  console.log(status);

  return (
    <View>
      <Dropdown
        status={status}
        onPress={changeStatusOnClick}
        selectText={'Wähle eine Lektürehilfe'}
        selectedText={currentBook && currentBook.topic}
      />
      {status === 'ACTIVE' ? (
        <BookList books={books} onPress={handleSelect} />
      ) : status === 'SELECTED' ? (
        <TableOfContent book={currentBook} />
      ) : (
        <></>
      )}
    </View>
  );

  function changeStatusOnClick() {
    if (status === 'INACTIVE') {
      setStatus('ACTIVE');
    } else if (status === 'ACTIVE' && currentBook && currentBook !== {}) {
      setStatus('SELECTED');
    } else if (status === 'ACTIVE') {
      setStatus('INACTIVE');
    } else {
      setStatus('ACTIVE');
    }
  }

  function handleSelect() {
    console.log(this.children.props.children);
    const currentBookTitle = this.children.props.children;
    setCurrentBook(books.find((item) => item.topic === currentBookTitle));

    changeStatusOnClick();
  }
}

//onClick={changeStatusOnClick}
