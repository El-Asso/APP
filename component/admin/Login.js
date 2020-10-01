import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { Input, CheckBox, Button } from "react-native-elements";

class Login extends React.Component {
  constructor() {
    this.send_form = this.send_form.bind(this);
  }

  send_form(values, actions) {
    
  }

  render() {
    return (
      <View>
        <Input label="Username" placeholder="..." />
        <Input label="Password" placeholder="..." />
        <Button 
                    title="Login" onPress={() => this.send_form() }
                />
      </View>
    );
  }
}

export default Login;
