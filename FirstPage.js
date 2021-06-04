import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, ScrollView} from 'react-native';

export default class FirstPage extends Component {
  static navigationOptions = {
    title: 'Departments Page',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>  
        <View style={styles.quote}>
        <Text>“We are a non-profit organization, we are looking forward to a peaceful world by helping each other to join hands together to bring a better future for all children”</Text>
        </View>
        <Button title='Research and Development'
        onPress={() =>navigate('SecondPage')}
        />
        <View style = {styles.buttonSpace}/>
        <Button title='Marketing'
        onPress={() =>navigate('ThirdPage')}
        />
        <View style = {styles.buttonSpace}/>
        <Button title='Finance'
        onPress={() =>navigate('FourthPage')}
        />
        <View style = {styles.buttonSpace}/>
        <Button title='External Relations'
        onPress={() =>navigate('FifthPage')}
        />
        <View style = {styles.buttonSpace}/>
        <Button title='Recruitment'
        onPress={() =>navigate('SixthPage')}
        />
        <View style = {styles.buttonSpace}/>
        <Button title='Human Resources'
        onPress={() =>navigate('SeventhPage')}
        />
        <View style = {styles.buttonSpace}/>
        <Button title='CEO'
        onPress={() =>navigate('EighthPage')}
        />
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
    backgroundColor: 'yellow',
    padding: 20,
    marginBottom: 20,
  },
  links: {
    marginTop: 24,
    backgroundColor: 'yellow',
    alignItems: 'center',
    padding: 30,
  },
  buttonSpace:{
    width:20,
    height: 10,
  }
});
