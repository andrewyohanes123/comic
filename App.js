/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './modules/styles';
import Home from './components/Home';


export default class App extends Component {
  render() {
    return (
      <View style={[styles.container, {backgroundColor: 'white',}]}>
        <Home />
      </View>
    );
  }
}