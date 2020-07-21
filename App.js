/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import StartScreen from './screens/StartScreen';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

import {SafeAreaView, StyleSheet} from 'react-native';

//import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [books, setBooks] = useState([]);
  const apiUrl =
    'https://www.schullv.de/api/v2/categories/MSHSBWAI7Q7596198M/light_containers';

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        setBooks(responseJson);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Start"
    //       component={StartScreen}
    //       options={{title: 'Welcome'}}
    //     />
    //     <Stack.Screen name="Profile" component={ProfileScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <SafeAreaView>
      <StartScreen books={books} apiUrl={apiUrl} />
    </SafeAreaView>
  );
};

export default App;
