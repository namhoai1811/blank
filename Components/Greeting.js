import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greetingg extends Component {
    render() {
        return  ( 
        <Text> Hello {this.props.name} Hello</Text>
        );
    }
}

export default class Greeting extends Component {
    render() {
        return (
            <View style = {{alignItems: 'center'}}>
                <Text> textInComponent </Text>
                <Greetingg name="Nguyen Hoai Nam"></Greetingg>
            </View>
        );
    }
}

