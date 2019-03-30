import React from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

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

        <TextInput
          autoCorrect={false}
          placeholder="Search any city"
          placeholderTextColor="white"
          style={styles.textInput}
          clearButtonMode="always"
        />
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
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
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
