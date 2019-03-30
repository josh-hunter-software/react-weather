import React from 'react';
import {
         ImageBackground,
         KeyboardAvoidingView,
         Platform,
         StyleSheet,
         Text,
         View,
       } from 'react-native';

import getImageForWeather from './utils/getImageForWeather';
import SearchInput from './components/SearchInput';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      >
        <ImageBackground
          source={getImageForWeather('Clear')}
          style={styles.imageContainer}
          imageStyle={styles.image}
          >
          <View style={styles.detailsContainer}>
            <Text style={[text.large, text.style]}>San Francisco</Text>
            <Text style={[text.small, text.style]}>Lightly Cloudy</Text>
            <Text style={[text.large, text.style]}>24 degrees</Text>
            <SearchInput placeholder="Search any city" />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
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
