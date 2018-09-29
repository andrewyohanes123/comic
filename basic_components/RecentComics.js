import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableNativeFeedback } from 'react-native';
import styles from '../modules/styles';

export default class RecentComics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics : []
    };
  }

  componentDidMount = () => {
    const {comics} = this.state;
    for (let i = 0; i < 3; i++) {
      comics.push({
        title : `Comic ${i+1}`,
        eps : `Eps ${i+1}`
      })
    }
    this.setState({comics});
  }

  render() {
    const {comics} = this.state;
    return (
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      {
        comics.map((comic, index) => {
          return (<Comic {...comic} key={index} />)
        })
      }
      </ScrollView>
    );
  }
}

const Comic = (props) => {
  return (
    <View style={[styles.card]} >
      <View style={{ flex: 3, overflow: 'hidden', }} >
        <Image style={{ height: 200, width: '100%', resizeMode: 'cover' }} source={require('../dummy.png')} />
      </View>
      <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#1dd1a1')} onPress={() => console.log('ss')} >
      <View style={{ flex: 1, height: 50, padding: 10 }} >
        <Text style={[styles.text30]} >{props.title}</Text>
        <Text>{props.eps}</Text>
      </View>
      </TouchableNativeFeedback>
    </View>
  )
}