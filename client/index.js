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
// Import other pages:
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
    // console.warn()
    // AsyncStorage.clear();
    AsyncStorage.getItem('user').then((user) => { 
      if (user == null) {
        this.props.navigation.navigate('SignIn');
      }
      else {
        this.setState({user: JSON.parse(user)});
        // console.warn(this.state.user);
      }
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
         <Text style={styles.welcome}>
          Welcome to PatriotChat!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text> 

        {
          (this.state.user != null) > 0 &&
          Object.keys(this.state.user.chats).map((key, index) => {
            let chat = this.state.user.chats[key]
            return (
              <Button
              title={chat.name}
              onPress={() => {
                navigate('Chat', {user:this.state.user, chat: chat})
              }}
              style={styles.chat}
              />
            );
          })
        }

        {/* <Button
          title='To Chat>'
          onPress={() => {
            navigate('Chat', {user:this.state.user, chatId: this.state.user.chats['zoz-eyad'].id})
          }}
        /> */}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  chat: {
    color: '#FFCC33'
  },
});

AppRegistry.registerComponent('PatriotChat', () => App);
