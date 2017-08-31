import React, { Component } from 'react';
import { Text, View, Button, AsyncStorage, WebView } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class SignIn extends Component {
  // static navigationOptions = {
  //     title: 'SignIn',
  // }
  render() {
    let user = {
      username: 'zoz',
      firstName: 'John',
      lastName: 'Doe',
      email: 'jdoe5@gmu.edu',
      netid: 'zoz',
      Gnumber: '00000000',
      chats: {
        'zoz-eyad': {
          id: 1, //Represents the ChatId
          name: 'Patriot Chat Development',
          participants: ['zoz', 'eyad']
        },
        'zoz-dhaynes': {
          id: 2,
          name: 'some other thing',
          participants: ['zoz', 'dhaynes']
        },
        'eyad-dhaynes': {
          id: 3,
          name: 'some third thing',
          participants: ['eyad', 'dhaynes']
        },
        'zoz-eyad2': {
          id: 4,
          name: 'Patriot Chat Development2',
          participants: ['zoz', 'eyad2']
        },
        'zoz-dhaynes2': {
          id: 5,
          name: 'some other thing2',
          participants: ['zoz', 'dhaynes2']
        },
        'eyad-dhaynes2': {
          id: 6,
          name: 'some third thing2',
          participants: ['eyad', 'dhaynes2']
        }
      }
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