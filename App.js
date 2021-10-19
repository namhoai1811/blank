import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

// import Login from './Components/Login';
import Hello from './Components/Hello';


export default class App  extends  Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working 12 on your app! ddffffd</Text>
        <StatusBar style="auto" />
        <Text>dddddddddddddddd</Text>
         <Hello></Hello>
         {/* <Login></Login> */}
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



