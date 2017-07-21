import React, { Component } from 'react';
import { Text, View, Button, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class SignIn extends Component {
  static navigationOptions = {
      title: 'SignIn',
  }
  render() {
    let user = {
      username: 'zoz',
      firstName: 'John',
      lastName: 'Doe',
      email: 'jdoe5@gmu.edu',
      netid: 'jdoe',
      Gnumber: '00000000'
    }
    return(
      <View>
        <Text>Signin</Text>
        <Button
        title='Set Placeholder Values for user'
        onPress={() => {
          AsyncStorage.setItem('user', JSON.stringify(user));
        }}
        />
      </View>
    )
  }
}