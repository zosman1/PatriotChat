import React, { Component } from 'react';
import { Text, View, Button, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class SignIn extends Component {
    static navigationOptions = {
        title: 'SignIn',
    }
    render() {
        return(
            <View>
                <Text>Signin</Text>
            </View>
        )
    }
}