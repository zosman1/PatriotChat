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
      netid: 'jdoe',
      Gnumber: '00000000',
      chats: {
        'zoz-eyad': {
          id: 1,
          name: 'Patriot Chat Development',
          destination: 'eyad'
        },
        'zoz-dhaynes': {
          id: 2,
          name: 'some other thing'
        },
        'eyad-dhaynes': {
          id: 3,
          name: 'some third thing'
        },
        'zoz-eyad2': {
          id: 4,
          name: 'Patriot Chat Development2'
        },
        'zoz-dhaynes2': {
          id: 5,
          name: 'some other thing2'
        },
        'eyad-dhaynes2': {
          id: 6,
          name: 'some third thing2'
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