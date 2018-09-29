import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import TopBar from '../basic_components/TopBar';
import RecentComics from '../basic_components/RecentComics';
import Comic from '../basic_components/Comic';
import styles from '../modules/styles';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <TopBar />
        <ScrollView contentContainerStyle={{ padding : 12}}>
          <RecentComics />
          <Text style={[styles.text25, {marginTop:8}]} >New!</Text>
          <View style={[styles.hr]} />
          <Comic source={require('../dummy.png')} comic_title="Comic 1" comic_eps="Eps 1" />
          <Comic source={require('../dummy.png')} comic_title="Comic 1" comic_eps="Eps 2" />
          <Comic source={require('../dummy.png')} comic_title="Comic 1" comic_eps="Eps 3" />
          <Text style={[styles.text25, {marginTop:8}]} >Most viewed</Text>
          <View style={[styles.hr]} />
          <Comic source={require('../dummy.png')} comic_title="Comic 1" comic_eps="Eps 1" />
          <Comic source={require('../dummy.png')} comic_title="Comic 1" comic_eps="Eps 2" />
          <Comic source={require('../dummy.png')} comic_title="Comic 1" comic_eps="Eps 3" />
          <View style={{height : 100, marginVertical : 4}} />
        </ScrollView>
      </View>
    );
  }
}
