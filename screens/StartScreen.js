import React from 'react';

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
import BookMenu from '../components/BookMenu';

export default function StartScreen({books}) {
  return (
    <>
      <View style={styles.homeScreenStyle}>
        <Image
          style={styles.tinyLogo}
          resizeMode={'contain'}
          source={require('../schullv_logo.png')}
        />
        <BookMenu
          // currentBookTitle={currentBookTitle}
          // apiUrl={apiUrl}
          books={books}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  homeScreenStyle: {
    backgroundColor: Colors.white,
    height: '100%',
    paddingBottom: Platform.OS === 'ios' ? 16 : 32,
  },
  tinyLogo: {
    height: '10%',
    marginVertical: 40, //marginTop:  Platform.OS === 'ios' ? 16 : 40
    width: '100%',
  },
});
