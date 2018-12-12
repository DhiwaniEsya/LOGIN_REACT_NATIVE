import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Settings from './src/Settings';
import Home from './src/Home';

const AppNavigator = StackNavigator({
  SettingScreen: { screen: Settings },
  HomeScreen: { screen: Home }
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}