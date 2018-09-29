import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../modules/styles';

export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.topBar} >
        <Text style={[styles.textCenter, styles.textWhite, styles.text20]} >Comic</Text>
        <TextInput underlineColorAndroid="transparent" placeholder="Cari apa?" style={[styles.input]} />
      </View>
    );
  }
}
