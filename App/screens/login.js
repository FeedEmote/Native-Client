import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Image, TouchableOpacity, Text, StatusBar } from 'react-native'

import firebase from '../modules/firebase'

import styles from './styles'

export default class Login extends Component {

  render() {
    return (
      <View style={[styles.container, styles.center]}>

        <TouchableOpacity onPress={() => {
          this.props.navigator.immediatelyResetRouteStack([this.props.routes[1]])}
          
        }>
          <Image style={styles.googleSignIn} source={require('../images/googleSignIn.png')} />
        </TouchableOpacity>
      
        <TouchableOpacity>
          <Image style={styles.facebookSignIn} source={require('../images/facebookSignIn.png')} />
        </TouchableOpacity>
      
      </View>
    )
  }
}