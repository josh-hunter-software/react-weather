import React from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

import SearchInput from './components/SearchInput';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      >
        <Text style={[text.large, text.style]}>San Francisco</Text>
        <Text style={[text.small, text.style]}>Lightly Cloudy</Text>
        <Text style={[text.large, text.style]}>24 degrees</Text>

        <SearchInput placeholder="Search any city" />

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const text = StyleSheet.create({
  style: {
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  large: {
    fontSize: 44,
  },
  small: {
    fontSize: 18,
  },
});

const colors = StyleSheet.create({
  red: {
    color: 'red',
  },
  blue: {
    color: 'blue',
  },
  green: {
    color: 'green',
  },
});
