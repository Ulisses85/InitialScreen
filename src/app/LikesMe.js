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


export class Ilike extends Component {
  render () {
  return(
    <View style={styles.container}>
        <Text> LIKES ME list</Text>
        </View>
  )
  }
}


const styles = StyleSheet.create ({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'aquamarine',
      padding:40
  }
}
)
