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


export class Matches extends Component {
  render () {
  return(
    <View style={styles.container}>
        <Text> Matches </Text>
        <Text>I LIKE</Text>
        <Text>:LIKES ME</Text>
        </View>
  )
  }
}


const styles = StyleSheet.create ({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'pink',
      padding:40
  }
}
)
