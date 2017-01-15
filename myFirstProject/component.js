import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  TextInput,
  NavigatorIOS
} from 'react-native';

//styles
var styles = require('./style')

//next screen
var nextScreen = require('./nextscreen')

var component = React.createClass({
    getInitialState: function(){
        return {myText: 'Hello'};
    },
    textInputDidChange: function(event){
        this.setState({myText:event.nativeEvent.text});  
    },
    callNextScreen: function(inputText){
        this.props.navigator.push({
          title: 'the next screen',
          component: nextScreen,
          passProps:{'inputText': inputText}
        })  
    },
    render: function(){
        return (
                <View style={styles.container}>
                    <TextInput style={{ height: 50, padding: 6, fontSize: 16, borderColor: 'lightblue', borderWidth: 1, 
                    margin: 10, borderRadius: 4}} placeholder='Try something' onChange={this.textInputDidChange}
                    onEndEditing={event => this.callNextScreen(event.nativeEvent.text)}/>

                    <Text style={styles.text}>
                        {this.state.myText}
                    </Text>
                    
                    <TouchableHighlight onPress={() => AlertIOS.alert('Title', 'Message')} >
                        <View style={styles.button}>
                            <Text style={{ color: '#fff'}}>Alertmessage</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                );

        //return React.createElement("p", null, "Test app");
    }
})

module.exports = component;
