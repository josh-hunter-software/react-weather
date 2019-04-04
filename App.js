import React from 'react';
import {
         ActivityIndicator,
         ImageBackground,
         KeyboardAvoidingView,
         Platform,
         StatusBar,
         StyleSheet,
         Text,
         View,
       } from 'react-native';

import { fetchLocationId, fetchWeather } from './utils/api';
import getImageForWeather from './utils/getImageForWeather';
import SearchInput from './components/SearchInput';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      location: '',
      temperature: 0,
      weather: '',
    };
  }

  componentDidMount() {
    //used to make async calls after component exists
    this.handleUpdateLocation('Dallas');
  }

  handleUpdateLocation = async city => {
    if (!city) return;
    this.setState({ loading: true }, async () => {
      try {
        const locationId = await fetchLocationId(city);
        const { location, weather, temperature } = await fetchWeather(
          locationId,
        );
        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature,
        });
      } catch (e) {
        this.setState({
          loading: false,
          error: true,
        });
      }
    });
  };

  render() {
    const {
      error,
      loading,
      location,
      temperature,
      weather,
    } = this.state;
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      >
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={getImageForWeather(weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}
          >
          <View style={styles.detailsContainer}>
            <ActivityIndicator animating={loading} color="white" size="large" />
            {!loading && (
              <View>
              {error && (
                <Text style={[text.small, text.style]}>
                  Could not load wather, please try a different city.
                </Text>
              )}

              {!error && (
                <View>
                  <Text style={[text.large, text.style]}>{location}</Text>
                  <Text style={[text.small, text.style]}>{weather}</Text>
                  <Text style={[text.large, text.style]}>{`${Math.round(temperature)}`} ℉</Text>
                </View>
              )}

                <SearchInput placeholder="Search any city" onSubmit={this.handleUpdateLocation} />
              </View>
            )}

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
    color: 'white',
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
