import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

// Signup component
import Signup from './app/components/signup';
// Login component
import Login from './app/components/login';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Signup />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 60,
    backgroundColor: '#36485f'
  }
});
