import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Linking, SafeAreaView, FlatList} from 'react-native';
import { Button, Divider } from 'react-native-elements';
import camila from "./assets/camila.jpeg";
import ruoxi from "./assets/ruoxi.jpg";
import denilson from "./assets/denilson.png";
import sofia from "./assets/sofia.png";
import victoria from "./assets/victoria.jpeg";
import logo from "./assets/logo.png";
//import List from './List.js';
import Desc from './Desc.js';
//import OppDesc from './OppDesc.js';

export default class SecondPage extends Component {
  static navigationOptions = {
    title: 'Third Page',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <ScrollView contentContainerStyle={{ flexGrow: 1}}>
        <Image source={logo} style = {{height: 225, width:525, alignSelf: 'center'}} />
        <Text style = {styles.header}>Finance Department</Text>
        <Text style={styles.DepDesc}>
        The purpose of this department is to provide an overall picture of the society’s current financial health. A healthy organization is always evolving, and its finance department is in charge of preparing and evaluating budgets that pay for new projects to help this organization.
        </Text>

        <Text style = {styles.memberNames}>Sarang</Text>
        <View style={styles.memberDescipritons}>
            <Desc 
              position='Chief Financial Officer' 
              major='' 
              year = ''
            />
            <Button title = "LinkedIn" style={{paddingTop: 5}} onPress={()=> alert("LinkedIn Unavaliable")}>LinkedIn</Button>
        </View>

        <Text style = {styles.memberNames}>Camila Huizar</Text>
        <Divider style={{backgroundColor: 'black', height:1.5, marginBottom:10, maxWidth:150, marginLeft: 138}}/>
        <Image source = {camila} style = {{width:201, height: 320, alignSelf: 'center', marginBottom:5, borderColor: 'black', borderWidth: 2}}/>
        <View style={styles.memberDescipritons}>
            <Desc 
              position='Vice President' 
              major='Management Business and Economics' 
              year = '3rd Year, Junior'
            />
            <Button title = "LinkedIn" style={{paddingTop: 5}} onPress={()=> alert("LinkedIn Unavaliable")}>LinkedIn</Button>
        </View>

        <Text style = {styles.memberNames}>Ruoxi Zhao</Text>
        <Divider style={{backgroundColor: 'black', height:1.5, marginBottom:10, maxWidth:150, marginLeft: 138}}/>
        <Image source = {ruoxi} style = {{width:324, height: 432, alignSelf: 'center', marginBottom:5, borderColor: 'black', borderWidth: 2}}/>
        <View style={styles.memberDescipritons}>
            <Desc 
              position='Financial Analyst' 
              major='Applied Mathematical Science' 
              year = '3rd Year, Junior'
            />
            <Button title = "LinkedIn" style={{paddingTop: 5}} onPress={()=> Linking.openURL('https://www.linkedin.com/in/ruoxi-zhao-6267531a2/')}/>
        </View>

        <Text style = {styles.memberNames}>Denilson Huinac</Text>
        <Divider style={{backgroundColor: 'black', height:1.5, marginBottom:10, maxWidth:150, marginLeft: 138}}/>
        <Image source = {denilson} style = {{width:310, height: 672, alignSelf: 'center', marginBottom:5, borderColor: 'black', borderWidth: 2}}/>
        <View style={styles.memberDescipritons}>
            <Desc 
              position='Accounting Manager' 
              major='Management Business and Economics' 
              year = '3rd Year, Junior'
            />
            <Button title = "LinkedIn" style={{paddingTop: 5}} onPress={()=> Linking.openURL('https://www.linkedin.com/in/denilson-huinac')}/>
        </View>

        <Text style = {styles.memberNames}>Sofia Lawal</Text>
        <Divider style={{backgroundColor: 'black', height:1.5, marginBottom:10, maxWidth:150, marginLeft: 138}}/>
        <Image source = {sofia} style = {{width:327, height: 510, alignSelf: 'center', marginBottom:5, borderColor: 'black', borderWidth: 2}}/>
        <View style={styles.memberDescipritons}>
            <Desc 
              position='Chief Financial Officer' 
              major='Computer Science and Engineering' 
              minor='Psychology' 
              year = '3rd Year, Junior'
            />
            <Button title = "LinkedIn" style={{paddingTop: 5}} onPress={()=> Linking.openURL('https://www.linkedin.com/in/sofiah-lawal-0a26ab195/')}/>
        </View>

        <Text style = {styles.memberNames}>Victoria Gonzalez</Text>
        <Divider style={{backgroundColor: 'black', height:1.5, marginBottom:10, maxWidth:150, marginLeft: 138}}/>
        <Image source = {victoria} style = {{width:342, height: 426, alignSelf: 'center', marginBottom:5, borderColor: 'black', borderWidth: 2}}/>
        <View style={styles.memberDescipritons}>
            <Desc 
              position='Member' 
              major='Management and Business Economics' 
              year = '2nd Year, Sophomore'
            />
            <Button title = "LinkedIn" style={{paddingTop: 5}} onPress={()=> Linking.openURL('http://linkedin.com/in/victoriagonzalez-70')}/>
        </View>

        <Text style = {styles.memberNames}>Jason</Text>
        <View style={styles.memberDescipritons}>
            <Desc 
              position='Member' 
              major='' 
              year = ''
            />
            <Button title = "LinkedIn" style={{paddingTop: 5}} onPress={()=> alert("LinkedIn Unavaliable")}>LinkedIn</Button>
        </View>
        
        <Text style={{textAlign:'center', color:'#b0aea9', paddingBottom:5, paddingTop:5}}>Business Society @ UCM</Text>
        <StatusBar style="auto" />
      </ScrollView>
    );
  }
}
const Bold = ({ children }) => <Text style={{ fontWeight: 'bold' }}>{children}</Text>

const styles = StyleSheet.create({
  test:{
    flexDirection: 'row',
    padding: 10,
    textAlign: 'center',
  },
  subheader:{
    color: '#800000',
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
  },
  subBox:{
    textAlign: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1.5,
    marginTop: 15,
    marginBottom:10,
  },
  header: {
    color: '#800000',
    fontSize: 25,
    textAlign: 'center',
    padding: 20,
  },
  DepDesc: {
    color: 'white', 
    fontSize:15, 
    paddingBottom:20, 
    paddingTop:10,
    textAlign: 'center',
    backgroundColor: '#ad0707',
    borderColor: 'black',
    borderRadius: 0,
    borderWidth: 3
  },
  memberNames: {
    fontSize:20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30,
    borderBottomWidth:2,
    borderBottomColor: 'black',
  },
  memberDescipritons: {
    padding: 10,
    backgroundColor: '#ebeced',
    textAlign: 'center',
    borderBottomColor: 'black',
    borderTopColor: 'black',
    borderBottomWidth: 3,
    borderTopWidth: 3,
  },
  descText: {
    padding: 5,
  },
  descLink: {
    padding: 5,
    textDecorationLine: 'underline',
    textDecorationColor: 'lightblue',
    textDecorationStyle: 'double',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //margin:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});