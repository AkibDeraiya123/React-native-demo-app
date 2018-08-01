import { createStackNavigator } from 'react-navigation';
import React from 'react';

// Signup component
import Signup from './app/components/signup';
// Login component
import Login from './app/components/login';

const RootStack = createStackNavigator(
  {
    Signup,
    Login,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}