import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  TextInput,
  NavigatorIOS
} from 'react-native';

var nextScreen = React.createClass({
    render: function(){
        return(
            <View style = {{ backgroundColor: 'green', flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Text style = {{ color: '#fff', fontSize: 22 }} >
                    You entered: {this.props.inputText}
                </Text>
            </View>
        );    
    }
})

module.exports = nextScreen;