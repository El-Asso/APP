import { StatusBar } from 'expo-status-bar';

import React, { useState, useEffect } from 'react';
import { AsyncStorage, Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import { NativeRouter, Switch, Link, Route } from "react-router-native"
import { Header, BottomSheet, ListItem, Icon, Card, Button, } from 'react-native-elements'

import Associations from "./containers/Associations"
import Registration from "./containers/Registration"

class App extends React.Component {
  constructor(state) {
    super(state)
    this.state = {
      isFooter: false,
      inLonding: false
    }
    this.hendledFooter = this.hendledFooter.bind(this)
  }

  hendledFooter(val) {
    console.log("hendledFooter", val)
  }

  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={Associations}></Route>
          <Route exact path="/associations" component={Associations}></Route>
        </Switch>
      </NativeRouter>
    );
  }
}

export default App;