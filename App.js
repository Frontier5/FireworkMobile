import React, { Component } from 'react';
// import { 
//   StyleSheet,
// } from 'react-native';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login'
import Forgot from './pages/Forgot';

export default class App extends Component {
  render() {
    return (
    <AppContainer />
    );
  }
}

const AppStackNavigator = createStackNavigator(
  { 
    Loginuser: Login,
    Forgotpass: Forgot,
  },
  {
    initialRouteName: 'Loginuser',
  }
);

const AppContainer = createAppContainer(AppStackNavigator);

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 20,
//     flex: 1,
//     backgroundColor: '#525f7f',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
