import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './source/components/Main/Home/home'
import ListCourses from './source/components/Courses/ListCourses/list-courses'

export default function App() {
  return (

    <View style={styles.container}>
      
      {/* <Home/> */}
      
      <ListCourses />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
});
