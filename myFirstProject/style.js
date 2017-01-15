import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container:{
      flex: 1, // 100%
      flexDirection: 'column', // ou row 
      justifyContent: 'center', // alinhamento vertical - ou flex-start ou flex-end
      alignItems: 'center', // alinhamento horizontal - ou flex-start ou flex-end
      borderWidth: 2,
      borderColor: '#ff0000'
  }, 
  text:{
      borderWidth: 2,
      borderColor: '#ff0000',
      borderRadius: 4,
      textAlign: 'center',
      padding: 10, 
      color: 'green'
  }, 
  button:{
      backgroundColor: 'lightblue',
      padding: 20,
      margin: 20,
      borderRadius: 5
  }
})

//viabilizar a exportacao do modulo
module.exports = styles;