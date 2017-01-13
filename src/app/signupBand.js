import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Navigator,
  TouchableHighlight
} from 'react-native';


export class SignupBand extends Component {
  render () {
  return(
    <View style={styles.container}>
        <Text> Signup Band view </Text>
        </View>
  )
  }
}


const styles = StyleSheet.create ({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'orange',
      padding:40
  }
}
)
