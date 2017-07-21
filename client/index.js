import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Chat from './chat'
import SignIn from './signIn'


export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null,
    }
  }
  static navigationOptions = {
    title: 'Groups',
  };

  // on first dom render check if user is set; if not: navigate to login page
  componentDidMount() {
    AsyncStorage.getItem('user').then((user) => { 
      if (user == null) {
        this.props.navigation.navigate('SignIn');
      }
      else {
        this.setState({user: JSON.parse(user)})
      }
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>
          Welcome to PatriotChat!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text> */}

        <Button
          title='To Chat>'
          onPress={() => {
            navigate('Chat', {username:'user', chatId: 1 })
          }}
        />
      </View>
    );
  }
}

const App = StackNavigator({
  Home: { screen: Main },
  Chat: { screen: Chat },
  SignIn: { screen: SignIn }
})

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#006633'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PatriotChat', () => App);
