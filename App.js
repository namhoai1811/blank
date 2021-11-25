import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { AppRegistry, Image,StyleSheet, Text, View } from 'react-native';


import Greeting from './Components/Greeting';

export default class App  extends  Component {
  render(){
    return (
      <View style={styles.container}>
      <Greeting/>
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



