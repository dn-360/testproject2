import React, { Component } from 'react';
import {StyleSheet, View, Button, Text, ScrollView} from 'react-native';

export default class SecondPage extends Component {
  static navigationOptions = {
    title: 'Eighth Page',
    //Sets Header text of Status Bar
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>You are on EighthPage</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //margin:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});