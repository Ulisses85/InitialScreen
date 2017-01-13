/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { InitialScreen } from './src/app/InitialScreen';
import {SignupBand} from './src/app/signupBand';
import {SignupMusician} from './src/app/signupMusician';
import {Profile} from './src/app/Profile'
import{Matches} from './src/app/Matches'
import{Ilike} from './src/app/Ilike'
import{LikesMe} from './src/app/LikesMe'

const Main = () => (

  <LikesMe/>

);

AppRegistry.registerComponent('InitialScreen', () => Main);
