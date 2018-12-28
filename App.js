/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { Movies } from './src/modules/Movie';
import store from './src/modules/App/store';
import EStyleSheet from 'react-native-extended-stylesheet';
type Props = {};

EStyleSheet.build({'$darkGrey':'#A9A9A9','$black':'#000'});

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Movies/>
     </Provider>
    );
  }
}
