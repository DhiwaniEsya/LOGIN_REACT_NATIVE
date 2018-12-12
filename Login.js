import React, { Component } from 'react';
import { OnPress, AppRegistry, Button, View, TextInput, StyleSheet, Image, Style, Text } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View>
        <Image
        style={{width: 160, height: 150, marginLeft: 130, marginLeft: 100, marginTop:200}}
        source={require('./1.png')}
        />

        <TextInput
        style={{height: 50}}
        placeholder='Username'
        onChangeText={(text) => this.setState({text})}
        />

        <TextInput
        style={{height: 50}}
        placeholder='Password'
        onChangeText={(text) => this.setState({text})}
        />

        <Button 
        style ={{margin: 20, flexDirection: 'row', justifyContent:'space-between'}}
        title="LOGIN"
        color="blue"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  instructions: {
    fontSize: 15,
    marginTop: 0,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold'
  },
});
