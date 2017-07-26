import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  ScrollView,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Button from 'react-native-button';

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

  // before first dom render check if user is set; if not: navigate to login page
  componentWillMount() {
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
      <ScrollView style={styles.container}>
        {
          (this.state.user != null) > 0 &&
          Object.keys(this.state.user.chats).map((key, index) => {
            let chat = this.state.user.chats[key]
            return (
                <Button
                  onPress={() => {
                    navigate('Chat', {user:this.state.user, chat: chat})
                  }}
                  style={{color: 'white'}}
                  containerStyle={{margin: 1, padding:10, height:70, overflow:'hidden', backgroundColor: '#006633'}}
                >

                <Text style={styles.chatTag}> {chat.name} ❯ </Text>
                
                </Button>
            );
          })
        }
      </ScrollView>
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
  chat: {
    backgroundColor: '#006633',
    // margin: 10,
    height: 70,
    margin: 0.5,
    // justifyContent: 'flex-end',
  },
  chatTag: {
    color: 'white',
  }
});

AppRegistry.registerComponent('PatriotChat', () => App);
