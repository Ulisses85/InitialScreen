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


export class Profile extends Component {
  render () {
  return(
    <View style={styles.container}>
        <Text> PROFILE </Text>
        <Text>BAND?</Text>
        <Text>Musician?</Text>
        </View>
  )
  }
}


const styles = StyleSheet.create ({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'blue',
      padding:40
  }
}
)
