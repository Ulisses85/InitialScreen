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

const background = require("./pineappple.png");


export class InitialScreen extends Component {
  render () {
  return(

    <View style={styles.container}>
        <Image
          source={background}
          style={[styles.container, styles.bg]}
          resizeMode="cover"
        />
        <Text> BAND</Text>
      ]        <Text> Musician</Text>

        </View>
  )
  }
}


const styles = StyleSheet.create ({
    container: {
      flex: 1,
    },
    bg: {
      paddingTop: 30,
      width: null,
      height: null
    },
    band: {
    flex: 1,
    justifyContent:'center',
    padding: 40
    }
  });
