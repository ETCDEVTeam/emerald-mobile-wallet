/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { EmeraldBridge } from 'NativeModules';

async function talkToRust (self) {
  try {
    let text = await EmeraldBridge.talkToRust("Android")
    self.setState({
      hello: text
    })
  } catch (e) {
      console.log(e)
  }
}

export default class emerald_mobile_wallet extends Component {

  state = {}

  componentDidMount () {
    talkToRust(this)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.hello}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('emerald_mobile_wallet', () => emerald_mobile_wallet);
