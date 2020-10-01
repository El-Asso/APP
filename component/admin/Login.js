import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Input, CheckBox, Button } from "react-native-elements";

class Login extends React.Component {
  constructor(state) {
    super(state)
    this.state = {
      username: "",
      password: "",
    }
    // bulding funtions
    this.handlerUsername = this.handlerUsername.bind(this)
    this.handlerPassword = this.handlerPassword.bind(this)
  }

  handlerUsername(text) {
    console.log("USERNAME : ", text)
    // set state username
    this.setState({
      username: text
    })
  }

  handlerPassword(text) {
    console.log("PASSWORD : ", text)

    // set state password
    this.setState({
      password: text
    })
  }

  handlerSabmit() {
    console.log("SUBMIT : ", this.state)

    // initialize call API
    fetch('localhost:3001/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then(data => { }).catch(err => { });

  }

  render() {
    return (
      <View>
        <Input label="Username" placeholder="admin" onChangeText={text => this.handlerUsername(text)} />
        <Input label="Password" placeholder="password" onChangeText={text => this.handlerPassword(text)} />
        <Button
          title="Login" onPress={() => this.handlerSabmit()}
        />
      </View>
    );
  }
}

export default Login;
