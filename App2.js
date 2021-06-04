import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';

import tasks from 'tasks.js';

export default class App extends React.Component{
  navigateToNew = () => { //goes to other page
    this.props.navigation.navigate('tasks.js');
  }
  render() {
	  const{navigate} = this.props.navigation;
  return (
    <View style={styles.container}>

      <Text style={styles.boldT}>Business Society Departments</Text>

        <View style={styles.quote}>
        <Text>“We are a non-profit organization, we are looking forward to a peaceful world by helping each other to join hands together to bring a better future for all children”</Text>
        </View>   

        <View style={styles.links}>
          <View style={styles.buttonContainer}>
            <Button title = 'Research and Development' onPress = {navigateToNew}/>
            <Button title = 'Marketings' onPress = {clickHandler}/>
            <Button title = 'Finance'onPress = {clickHandler}/>
            <Button title = 'External Relations' onPress = {clickHandler}/>
            <Button title = 'Recruitment' onPress = {clickHandler}/>
            <Button title = 'Human Resources' onPress = {clickHandler}/>
            <Button title = 'CEO' onPress = {clickHandler}/>
          </View>  
        </View>

    </View>   
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
  boldT: {
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'red',
  },
  quote: {
    backgroundColor: 'pink',
    padding: 20,
  },
  links: {
    marginTop: 24,
    backgroundColor: 'yellow',
    alignItems: 'center',
    padding: 30,
  },
});
