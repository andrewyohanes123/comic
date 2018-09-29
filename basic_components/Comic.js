import React, { Component } from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';
import styles from '../modules/styles';

export default class Comic extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={() => console.log('a')} background={TouchableNativeFeedback.Ripple('grey', false)} >
        <View style={[styles.comicWrapper]} >
          <View style={[styles.comicImage]}>
            <Image source={this.props.source} style={{height: 100, width : 200 }} />
          </View>
          <View style={[styles.comicDetail]}>
            <Text style={[styles.text20]} >{this.props.comic_title}</Text>
            <Text style={[styles.textMuted]}>{this.props.comic_eps}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}
