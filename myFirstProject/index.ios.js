import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS
} from 'react-native';


var component = require('./component.js') 


var mainNav = React.createClass({
    render: function(){
        return <NavigatorIOS initialRoute={{component: component, title: 'My First Project'}} style={{flex: 1}}/>  
    }
})


//EcmaScript 6
AppRegistry.registerComponent('myFirstProject', () => mainNav);







