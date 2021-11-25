import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Login from './Components/Login';
import Hello from './Components/Hello';

import Cate from './Components/Cate';
import Demo from './Components/demo';

export default class App  extends  Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>999</Text>
        <Hello></Hello>
        <Cate></Cate>
        <Demo></Demo>
      </View>
    );
  }
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

AppRegistry.registerComponent('App', () =>App);



