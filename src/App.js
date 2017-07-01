import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCVeLEfJg2BzxLAME7SyDWiT0pSMhaHYE0',
      authDomain: 'react-native-ex-auth.firebaseapp.com',
      databaseURL: 'https://react-native-ex-auth.firebaseio.com',
      projectId: 'react-native-ex-auth',
      storageBucket: 'react-native-ex-auth.appspot.com',
      messagingSenderId: '1035249633227'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentiation' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
